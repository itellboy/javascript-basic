# window 对象

浏览器里面，`window`对象代表当前窗口，是浏览器的最顶层对象，所有的全局变量都是`window`对象的属性

## 属性

**window.name**

当前浏览器窗口的名字

**window.closed, window.opener**

* `window.closed`返回当前窗口是否关闭
* `window.opener`返回当前窗口的父窗口，没有返回`null`

**window.self, window.window**

指向`window`本身，只读

**window.frames, window.length**

* `window.frames`返回类似数组的对象，成员为页面所有框架窗口
* `window.length`返回页面所有框架窗口数量

**window.frameElement**

用于当前窗口嵌入另一个网页的情况，如果当前页面是顶层窗口，或者所嵌入的网页时不同源的，返回`null`

**window.top, window.parent**

* `window.top`指向最顶层窗口，主要用于在子窗口获得顶层窗口
* `window.parent`返回当前窗口的父窗口，如果没有返回自己

**window.devicePixelRatio**

返回一个 CSS 像素由多少个物理像素组成

### 位置相关属性

**window.screenX, window.screenY**

返回浏览器窗口左上角相对于屏幕左上角的水平距离和垂直距离（单位像素），只读

**window.innerHeight, window.innerWidth**

返回当前窗口可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素），只读

**window.outerHeight, window.outerWidth**

返回浏览器的高度和宽度

**window.scrollX, window.scrollY**

页面水平和垂直滚动距离

**window.pageXOffset, window.pageYOffset**

`window.scrollX`和`window.scrollY`的别名

### 组件属性

浏览器的组件对象有以下几个

* `window.locationbar`：地址栏对象
* `window.menubar`：菜单栏对象
* `window.scrollbars`：窗口的滚动条对象
* `window.statusBar`：状态栏对象
* `window.toolBar`：工具栏对象
* `window.personalbar`：用户安装的个人工具栏对象

这些对象都具有一个`visible`属性，表示组建是否可见，只读

### 全局属性对象

全局属性对象指向一些浏览器原生的全局对象

* `window.document`：当前窗口的文档信息
* `window.location`：当前窗口 URL 信息
* `window.navigator`：环境信息
* `window.history`：浏览历史操作
* `window.localStorage`：localStorage 操作
* `window.sessionStorage`：sessionStorage 操作
* `window.console`：控制台操作
* `window.screen`：屏幕信息

**window.isSecureContext**

返回当前窗口是否在加密环境，如果是 HTTPS 协议，返回`true`，否则返回`false`

## 方法

**window.alert(), window.prompt(), window.confirm()**

弹出不同的对话框，页面暂停，等待用户给予回应

**window.open(), window.close(), window.stop()**

打开新窗口，关闭当前窗口，停止当前窗口的加载

**window.moveTo(), window.moveBy()**

* `window.moveTo(x, y)`：移动浏览器窗口到指定位置，`x`表示距离屏幕左上方横坐标的位置，`y`表示距离屏幕左上方纵坐标的位置
* `window.moveBy(x, y)`：将窗口移动到一个相对位置

**window.resizeTo(), window.resizeBy()**

* `window.resizeTo(w, h)`：缩放窗口，参数为缩放后窗口的大小
* `window.resizeBy(offsetW, offsetH)`：缩放窗口，参数为缩放的数量

**window.scrollTo(), window.scroll(), window.scrollBy()**

* `window.scrollTo(x, y)`：滚动窗口到相对于窗口左上角的相对距离的位置
* `window.scroll()`：为`window.scrollTo()`方法的别名
* `window.scrollBy(x, y)`：滚动窗口，参数为向下、向右滚动的距离

```javascript
window.scrollBy(0, window.innerHeight) // 滚动一屏
```

如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面的属性和方法

* `element.scrollTop`
* `element.scrollLeft`
* `element.scrollIntoView()`

**window.print()**

跳出打印框，与用户点击“打印”操作一样

**window.focus(), window.blur()**

* `window.focus()`：使当前窗口获得焦点
* `window.blur()`：使当前窗口失去焦点

**window.getSelection()**

返回一个`Selection`对象，表示当前用户选中的文本，使用该对象的`toString()`方法可以得到选中的文本

**window.getComputedStyle(), window.matchMedia()**

* `window.getComputedStyle()`：接受一个元素作为参数，返回该元素最终的样式信息
* `window.metchMedia()`：检查 CSS 的`mediaQuery`语句

## 事件

**load 事件和 onload 属性**

`load`事件发生在浏览器窗口加载完毕的时候，`window.onload`属性可以指定`load`事件的回调函数

**error 事件和 onerror 属性**

`error`事件发生在浏览器脚本发生错误的时候，`window.error`属性可以指定`error`事件的回调函数，回调函数接受下面五个参数

* 出错信息
* 出错脚本的网址
* 行号
* 列号
* 错误对象

**window 对象的事件监听属性**

除了具备元素节点具备的`GlobalEventHandlers`接口外，`window`对象还具有以下事件监听函数

* `window.onafterprint`：`afterprint`事件监听函数
* `window.onbeforeprint`：`beforeprint`事件监听函数
* `window.onbeforeunload`：`befroeunload`事件监听函数
* `window.onhashchange`：`hashchange`事件监听函数
* `window.onlanguagechange`：`languagechange`事件监听函数
* `window.onmessage`：`message`事件监听函数
* `window.onmessageerror`：`MessageError`事件监听函数
* `window.onoffline`：`offline`事件监听函数
* `window.ononline`：`online`事件监听函数
* `window.onpagehide`：`pagehide`事件监听函数
* `window.onpageshow`：`pageshow`事件监听函数
* `window.onpopstate`：`popstate`事件监听函数
* `window.onstorage`：`storage`事件监听函数
* `window.onunhandledrejection`：未处理的 Promise 对象 reject 事件的监听函数
* `window.onunload`：`unload`事件监听函数

## 多窗口操作

网页可以通过`iframe`打开子窗口

* `window.top`,`window.self`,`window.parent`：操作与之相邻的窗口
* `window.frames`：获取当前网页所有的`iframe`窗口集合