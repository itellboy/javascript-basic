# EventTarget 接口

DOM 事件的操作（监听和触发），都定义在了 `EventTarget` 接口，所有的节点对象都部署了这个接口，其他一些需要事件通信的接口，例如 `XMLHttpRequest`, `AudioNode`, `AudioContext` 也都部署了这个接口，该接口实例主要有以下三个方法：

* `addEventListener()`: 绑定事件的监听函数
* `removeEventListener()`: 移除时间的监听函数
* `dispatchEvent()`: 触发事件

## EventTarget.addEventListener()

作用在当前节点或者对象上面，定义一个特定事件的监听函数，一旦事件触发，就会执行监听函数，该方法接受三个参数：

* `name`:  事件名称
* `listener`: 监听函数
* `useCapture`: 布尔值，表示事件是否在捕获阶段触发

第二个参数除了是监听函数为，还可以是一个具有 `handleEvent` 方法的对象

```javascript
element.addEventListener('click', {
  handleEvent (event) {
    console.log('click');
  }
})
```

第三个参数除了是布尔值之外，还可以是一个属性配置对象，该对象有以下属性

* `capture`: 布尔值，表示该事件是否在捕获阶段触发监听函数
* `once`: 布尔值，表示监听函数是否只触发一次，然后自动移除
* `passive`: 布尔值，表示监听函数不会调用事件的 `preventDefault()` 方法，如果监听函数调用了，浏览器将忽略，并输出警告

可以为同一个事件添加多个不同的监听函数，按照添加的顺序触发。如果为同一个事件多次添加同一个监听函数，则只会执行一次

## EventTarget.removeEventListener()

参数和 `EventTarget.addEventListener()` 一样，移除事件的监听

## EventTarget.dispatchEvent()

* 在当前节点触发指定事件，从而触发回调函数，该方法返回一个布尔值，只要有一个监听函数调用了 `Event.preventDefault()` 方法，返回 `false` ，否则返回 `true` 。
* `dispatchEvent()` 方法的参数是一个  `Event` 实例。
* 如果 `dispatchEvent()` 方法的参数为空，或者不是一个有效的事件对象，则报错

## 参考

[网道（WangDoc.com）是一个文档网站，提供互联网开发文档](https://wangdoc.com/javascript/events/eventtarget.html)


