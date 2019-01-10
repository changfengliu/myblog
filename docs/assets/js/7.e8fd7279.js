(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"如何全局处理image-onerror-显示默认图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何全局处理image-onerror-显示默认图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何全局处理image onerror, 显示默认图片")]),t._v(" "),s("p",[t._v("一般地:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("imgEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onerror")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./assets/pic404.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//或批量地：")]),t._v("\nimgEls"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forEach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\timgEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./assets/pic404.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",[s("li",[t._v("不能处理后期追加的图片，如通过ajax获取数据的表格行内图片.")]),t._v(" "),s("li",[t._v("要在每个图片上监听onerror事件\n上面2点本质上是写着太麻烦，性能应该不是问题，有没有可能写一个全局的处理图片404的功能呢？")])]),t._v(" "),s("p",[t._v("首先想到window.onerror,顾名思义，它用于监听页面内的错误事件，监听JS运行时错误很好用，可不可以监听图片资源的加载错误呢？")]),t._v(" "),s("p",[t._v("先看定义：")]),t._v(" "),s("ol",[s("li",[t._v("When a JavaScript runtime error occurs, an error event using interface ErrorEvent is fired at window and window.onerror() is invoked (as well as handlers attached by window.addEventListener (not only capturing)).")]),t._v(" "),s("li",[t._v("When a resource (such as an <img> or <script>) fails to load, an error event using interface Event is fired at the element, that initiated the load, and the onerror() handler on the element is invoked. "),s("b",[t._v("These error events do not bubble up to window, but (at least in Firefox) can be handled with a single capturing window.addEventListener")]),t._v(".")])]),t._v(" "),s("p",[t._v("发现：image或script等相关资源加载失败时，确实会触发onerror事件，但仅在image或script本身上触发，且不支持冒泡.")]),t._v(" "),s("p",[t._v("但可以支持捕获阶段的window.addEventListener('error'),所以想到如下代码:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" nonImagePath "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./assets/pic404.png'")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'error'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'error'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTMLImageElement"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\te"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nonImagePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("//注意加true,使用事件的捕获阶段")]),t._v("\n")])])]),s("p",[t._v("可行 😃")])])}],!1,null,null,null);e.options.__file="global-image-onerror.md";a.default=e.exports}}]);