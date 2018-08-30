# History 对象

`History`对象保存了当前浏览器窗口的浏览历史

浏览器的前进与后退就是对`History`对象的操作

## 属性

**history.length**

当前窗口访问的网址数量

**history.state**

`History`对象堆栈最上层的状态值

## 方法

**history.back(), history.forward(), history.go()**

* `history.back()`：访问上一次访问的网址
* `history.forward()`：移动到下一个网址
* `history.go()`：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址

`history.go(0)`相当于刷新当前网页

**history.pushState()**

用于在`History`对象里面添加一条历史记录，可传入三个参数

* `state`：一个与添加记录相关联的状态对象
* `title`：新页面的标题
* `url`：新页面的地址

**history.replaceState()**

用于修改`History`对象的当前历史记录

## popstate 事件

每当同一个文档的浏览历史发生变化时，会触发`popstate`事件

第一次加载页面的事件不会触发该事件