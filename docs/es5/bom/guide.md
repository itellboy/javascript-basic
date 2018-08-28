# 浏览器概述

JavaScript 是浏览器内置的脚本语言，所以说浏览器也内置了 JavaScript 引擎，并且提供了许多接口供 JavaScript 来控制浏览器

## 如何在网页中嵌入代码？

**`<script>`标签直接写 JavaScript 代码**

`<script>`标签有一个`type`属性，可省略，也可以设置为下面两个值

* `text/javascript`：默认值，适用于老浏览器
* `application/javascript`：适用于新浏览器


**`<script>`标签加载外部脚本**

* `src`属性指定脚本的路径
* `charset`属性指定脚本的编码方式

**事件属性**

网页的事件属性，比如`onclick`、`onmouseover`，属性值可以直接写入 JavaScript 代码

```html
<button onclick="console.log('hello world')">点击</button>
```

**URL 协议**

URL 支持`javascript:`协议，后面可以可写 JavaScript 脚本

```html
<a href="javascript:console.log('hello world')">点击</a>
```

## script 元素

**浏览器加载网页流程**

* 一边加载一边解析
* 遇到`<script>`标签，停止加载，将控制权交给 JavaScript 引擎
* JavaScript 引擎完毕，将控制权交还给浏览器

有多个`<script>`标签，同时下载，按顺序执行

**最佳实践**

* 将`<script>`标签放在尾部，防止页面假死

**defer 属性**

延迟脚本的执行，不影响脚本的下载，页面加载完之后按顺序执行脚本

在`DOMContentLoaded`事件触发前执行（即刚刚读取完`</html>`标签），执行的顺序不变，即在页面出现的顺序

**async 属性**

延迟脚本执行，不影响脚本下载，先下载完的脚本先执行

**脚本的动态加载**

通过创建`<script>`标签可以动态加载脚本文件

```javascript
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
```
将`<script>`标签的`async`属性设置为`false`可以保证脚本的执行顺序

## 浏览器的组成

* 渲染引擎
* JavaScript 引擎（JavaScript 解释器）

### 渲染引擎

将网页代码渲染成用户可感知的平面文档

不同的浏览器拥有不同的渲染引擎

* Firefox：Gecko 引擎
* Safari：Webkit 引擎
* Chrome：Blink 引擎
* IE：Trident 引擎
* Edge：EdgeHTML 引擎

渲染引擎处理页面，分为四个阶段

1. 解析代码：将 HTML 代码解析成 DOM，CSS 解析成 CSSOM（CSS Object Model）
2. 对象合成：将 DOM 和 CSSOM 合成为一颗渲染树
3. 布局：计算渲染树的布局
4. 渲染：将渲染树绘制到屏幕

上面几步不严格按照顺序执行

### 重流和重绘

渲染树转换为网页布局，成为“布局流”（flow），布局显示到页面的这个过程，成为“绘制”（paint），他们都具有阻塞效应，会消耗很多时间和计算资源

页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发，比如鼠标悬停，输入框输入文本，改变窗口大小等

重回和重流并不会一起发生，重流必然导致重绘，重绘不一定导致重流，改变元素的布局，会导致重流和重绘，如果只改变元素的颜色，只会导致重绘

一些开发和网页的优化技巧

* 读取和写入 DOM，尽量写在一起，减少读写 DOM 次数
* 缓存 DOM 信息
* 使用 CSS class 一次性改变样式，不要一项一项修改
* 使用`documentFragment`操作 DOM
* 动画使用`fixed`和`absolute`定位，减少对其他元素的影响
* 使用虚拟 DOM（virtual DOm）库