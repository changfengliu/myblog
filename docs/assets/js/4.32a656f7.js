(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(t,e,s){t.exports=s.p+"assets/img/table.cecedf61.png"},170:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"关于css伪元素及伪类的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于css伪元素及伪类的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于CSS伪元素及伪类的使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最近开发CMS平台时，遇到一个需求，如图所示：\n"),e("img",{attrs:{src:s(163),alt:""}}),this._v("\n要求：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("表格行根据数据来源分为三种：本地，继承，总部添加。")]),this._v(" "),e("li",[this._v("本地行可编辑，可删除，列内容自定义。")]),this._v(" "),e("li",[this._v("继承与总部添加的行，不允许编辑删除，为只读模式，且需要显示其来源。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/*‘总部添加’与‘继承’行的公共样式*/")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("tr.from-parent-node, tr.from-prev-node")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token property"}},[t._v("pointer-events")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("/*使不响应鼠标事件*/")]),t._v("\n\t"),s("span",{attrs:{class:"token selector"}},[t._v("td *")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("/*使行风格变灰*/")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#AAA!important"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v("text-decoration")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none!important"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token selector"}},[t._v("td:last-child")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("/*最后一列，隐藏原有内容，添加伪元素*/")]),t._v("\n\t\t"),s("span",{attrs:{class:"token selector"}},[t._v(".cell:after")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("font-size")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("14px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#AAA"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{attrs:{class:"token selector"}},[t._v(".cell *")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("/*隐藏单元格原有的删除按钮*/")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*'总部添加'行的特殊标识*/")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("tr.from-parent-node")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token selector"}},[t._v("td:last-child")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{attrs:{class:"token selector"}},[t._v(".cell:after")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'总部添加'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*'继承'行的特殊标识*/")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("tr.from-prev-node")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token selector"}},[t._v("td:last-child")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{attrs:{class:"token selector"}},[t._v(".cell:after")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token property"}},[t._v("content")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'继承'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("after伪元素的使用.")]),this._v(" "),e("li",[this._v("pointer-events的使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"关于伪类与伪元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于伪类与伪元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于伪类与伪元素")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("伪类：A CSS pseudo-class is a keyword preceded by a colon (😃 that is added on to the end of selectors to specify that you want to style the selected elements only "),e("b",[this._v("when they are in certain state")]),this._v(".\nFor example you might want to style an element only when it is being hovered over by the mouse pointer, or a checkbox when it is disabled or checked, or an element that is the first child of its parent in the DOM tree.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("伪元素：Pseudo-elements are very much like pseudo-classes, but they have differences. They are keywords — preceded by two colons (:😃 — that can be added to the end of selectors to "),e("b",[this._v("select a certain part of an element")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用伪类："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用伪类：","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用伪类：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":not(selector)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素不包含指定的选择器时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":checked")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素被选中时,如checkbox、radio.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素被禁用时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":empty")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素为空节点时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":enabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素可用时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":first-child")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素作为其父元素的第一个子节点时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":fullscreen")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素在页面全屏时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":focus")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素获得焦点时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":hover")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标悬浮该元素之上时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":last-child")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素作为其父元素的最后一个子节点时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":link")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素是一个有效的超链接时")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":visited")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被访问过的超链接")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v(":active")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被激活的超链接")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v(":target")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("元素被url中的hash指向时")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用伪元素："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用伪元素：","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用伪元素：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("语法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("::after")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("容器元素结尾所插入的内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("::before")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("容器元素开头所插入的内容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("::first-letter")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文本内容的第一个字母")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("::first-line")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文本内容的第一行")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("::selection")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("文本内容的选中部分")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"伪元素before与after的特殊说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪元素before与after的特殊说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 伪元素before与after的特殊说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"pointer-events是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pointer-events是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" pointer-events是什么？")])}],n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("本地行数据的row模板已开发完成，一般来讲，需要再开发简化版的‘继承’与‘总部添加’行的内容模板。\n一开始想得复杂了点，后来想到这个其实很简单，仅用几行CSS实现了以上需求，如下代码所示:")]),t._v(" "),t._m(3),s("p",[t._v("以上代码中可以看到,实现需求主要基于2点：")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("CSS本身是为了控制DOM的展示样式，但随着其功能不断丰富，现在不仅仅能够控制样式，也能有限地修改DOM内容，或影响用户交互。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("很明显：伪类匹配处于某种状态的元素；伪元素匹配元素的一部分(也称作虚拟节点)。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("::before与::after含义为‘内容的开头与结尾’，所以仅对容器元素有效。"),s("a",{attrs:{href:"http://stackoverflow.com/questions/21676996/what-is-the-difference-between-after-and-after/21677110#21677110",target:"_blank",rel:"noopener noreferrer"}},[t._v("由于历史兼容性原因也可以通过单引号使用:before与:after."),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://stackoverflow.com/questions/10181729/should-i-use-single-or-double-colon-notation-for-pseudo-elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("也可参考另外一个stackoverflow问答(Should I use single or double colon notation for pseudo-elements?)"),s("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("pointer-events:none;可以阻止元素响应鼠标事件，鼠标可‘穿透’该元素，就好像它不存在一样。\n具体用法参考：")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN pointer-events"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3-pointer-events 应用举例及扩展"),s("OutboundLink")],1)])])])},a,!1,null,null,null);r.options.__file="css-tricks.md";e.default=r.exports}}]);