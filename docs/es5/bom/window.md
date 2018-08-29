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
