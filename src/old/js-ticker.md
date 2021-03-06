# Web 前端埋点的总结

## 前端埋点的重要性
这个不说了，作为大数据平台的采集环节，上报数据的准确性、全面性，其重要性不言而喻。

## 几个问题
1. 埋点有那些方式？
2. 如何发送上报数据？
3. 通用埋点SDK如何写？
4. 手机App嵌入h5时，如何同步会话？
5. 如何确保上报数据准确？

## 埋点有那些方式
1. 可视化埋点.
	基于其固化的技术环境，最易实现，如可视化拖拽页面的cms平台中。
2. 声明式埋点.
	如基于dom自定义属性的绑定，或基于其它模板技术的节点属性绑定, 或基于配置文件的运行时解析。
3. ‘无侵入’埋点.
	在SDK中全局地绑定ui组件的事件，如全局绑定onclick, touchstart, touchend, onscroll等事件.
	但这种方式容易产生大量的埋点，给服务器带来压力，且其属于宽泛的埋点，统计上不具备针对性。
	另外由于前端运行环境天生的耦合性，这些全局事件很容易被重写，拦截，导致埋点失效。
 	实际中往往是有限地使用它.
4. 手动埋.
	最灵活，缺点是工作量大，且散落在业务代码中，不易维护。
	实际中由于需要携带业务埋点数据，且编程模式的不确定性(可能需要埋点在复杂的多个异步流程中)，当自动化埋点无法达到要求时，手动埋不可避免。
	优化的处理是：根据当前使用的技术，尝试做埋点切面或使用包装器模式，把埋点逻辑解耦出来.

总之：Web埋点很难使用单一技术解决方案来解决，埋点方法很多种，需要根据当前应用场景，技术栈环境，业务要求等综合因素决定。


## 如何发送上报数据
基本上惯例的做法是使用img标签单条发送一个http get请求。
数据长度限制基本不用担心，保守的8k，基本够用了。
具体参考：[What is the maximum length of a URL in different browsers?](http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers/417184#417184)
&nbsp;
考虑到一些场景埋点上报并发较大，可使用批量埋点，具体做法是：
在localstorage中维护一个埋点队列，调用者的单条发送先暂存在队列里，然后周期性地将队列中的几个点一并上报。

批量埋点带来几个问题:
1. http get地址长度限制。
	8k基本上发10个左右的点够用了，如果担心超长，发送策略上可采用‘周期性 + 埋点个数‘综合的方式，如：每10s或超过8个点时发送一次。
	实在不行也可模拟http post上报.
2. 埋点时间不对了。
	单个埋点上报时，即取用服务器的当前时间。但如果批量的话，服务器就不知道每个点所对应的真实时间了。
	此时在每个点中添加 time_offset 字段，在批量上报前，根据当前时间与埋点数据加入到队列的时间，算出该点在队列中的存在时长，然后服务器端可由此计算出每个点的真实上报时间.
3. 上报延迟了，如果此时浏览器退出，埋点数据可能会漏报.
	这个好像无解，本地埋点队列的数据不会丢，用户下次pv时也会上报，但埋点会话同步及数据平台的统计周期，都有问题.
	所以关键性埋点最好强制即时上报。SDK也应该普通埋点与即时埋点上报的api.


## 通用埋点SDK如何写？
1. 轻量小巧，不依赖其它库，方便引用。
2. 针对不同技术环境，提供多种埋点SDK，如:
	a. jQuery小型项目使用的SDK，基于dom自定义属性实现.
	b. vue框架下使用的SDK，基于vue自定义指令实现.
3. 最大限度地实现自动化埋点，且提供埋点流程各环节的切入方式。
	使即可最懒惰的一行代码埋点，也可后期修改发送的埋点数据的各个field。
4. SDK自己做好容错处理, 使埋点上报开销甚至埋点crash不会影响业务.
5. 简洁的api



## 手机App嵌入h5时，如何同步会话？
由于h5嵌入在app webview内，此时h5的埋点参数应该使用app的埋点参数，如: device_id, spm, os(操作系统), lat/lng(app定位更准确)等.
即需要app在调用h5时，将自身上下文参数传递过来，供后续h5上报埋点使用(不存在h5反向传参的需求).

### 有两种方式
#### 通过url传递
即在url中通过query params传递，以query name的特殊前缀指明该参数是app传过来的埋点数据，如下所示:

```javascript
string url = "https://meicai.com/cms?id=1&__app__device_id=DSFSDF&__app__os=android&__app__spm=2.2.3.1&...";
webView = (WebView) findViewById(R.id.webView);
webView.loadUrl(url);
```

然后在埋点SDK中统一处理, 如下:

```javascript
let appParam
window.addEventListener('load', function(){
	let appParams = getQuerysObject('__app__') || {};
	localStorate.set('__app_params__', JSON.stringify(appParams));	//缓存起来，后续埋点使用.
})
let mxticker = {
	tick(data){
		//...
		let appParams = localStorate.get('__app_params__');
		if(appParams){
			//优先使用app传过来的参数.
			data = Object.assign(data, JSON.parse(appParams));
		}
		this.send(data);
	}
}
```

#### h5调用app提供本地方法，主动获取。
```javascript
let mxticker = {
	tick(data){
		//...
		if(this.isInApp){
			let appParams = {};
			if(this.isInAndorid){
				appParams = androidBridge.getTickerParams();
			}
			if(this.isInIos){
				appParams = iosBridge.getTickerParams();
			}
			data = Object.assign(data, appParams);
		}
		this.send(data);
	}
}
```


## 如何确保上报数据的准确性
准确地获取用户交互轨迹的上下文信息，并成功上报Server。
对于前者只需编码正确，以及注意一下异步编程模式下的信息获取即可；
对于后者，本质上这是个如何把握数据上报时机的问题，由于浏览器环境所限制，无法100%保证在一些交互环节都能成功上报，如页面退出时。

如果感觉前端上报有一定漏报风险的话，部分关键点可放到上层接口内，如，php的services层.

埋点上报数据的发送应该是稀疏串行的，要避免并发大量的埋点请求，否则可能会阻塞浏览器其它的计算或资源下载任务，影响用户体验，并且也增加了服务器压力。
可批量异步上报, 埋点请求不阻塞正常业务；


## 更好的可维护性
主要是手动埋点，试想一下，如果埋点代码与其它逻辑耦合在一块的话，随着项目的功能迭代及代码重构，可能哪一天报表上的折线突然出现了一个深谷，然后排查了很长时间发现是不小心埋点上报逻辑误删了或未执行到 :(  

并且这些问题测试同学也很难覆盖到.

这时需要根据当前技术环境，把埋点逻辑‘关联’进业务代码 或 把埋点的特定逻辑写在同一个文件，在业务代码中仅使用固定的调用代码。
最后使埋点的添加 由配置文件驱动。


## 参考文章
[美团点评前端无痕埋点实践](https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&mid=2651746072&idx=1&sn=9d5d78ea4f9c0f2f6059591281dd0e3c&chksm=bd12b6558a653f437ae8304e534235d55c01aa2c9489e85d6193b52f5da00f66927f3ac77c2b&mpshare=1&scene=1&srcid=0302K0GvthEpOYZisYclAocJ&key=e82f935468864c7df086c2de55a4282c90551743a3a4c2040fd6fe81223e2ec8a2d2b23c3c4a137089cb50e0cf7518faa0dc4658c5d882471b33dd00ad8fc2347eba8ace3e9112d01775a3eaf59a6b20&ascene=0&uin=MTgzMjE5MDE4Mg%3D%3D&devicetype=iMac+MacBookPro11%2C2+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=XOm0ln8CGtJZiG6e0YJ9bju1rGikxYSGB0xxLAwZWsqvDuSuG7lXLHzeQ7aiD%2BDY)
