# events 事件

大多数 Node 核心的 API 都采用异步事件驱动的架构，一般通过触发命名事件来调用函数对象

所有触发事件的对象都是`EventEmitter`对象的实例。这些对象开放了一个`emitEvent.on()`函数，允许将一个或者多个回调函数绑定在会被对象触发的命名事件上

当事件触发时，所有绑定在该事件的函数都被同步的调用，监听器的返回值会被丢弃

一个绑定了监听器的`eventEmitter`实例，通过`eventEmitter.on()`来注册事件，`eventEmitter.emit()`来触发事件

一个标准的事件注册和触发

```javascript
const events = require('events')

class eventEmitter extend events {}

const myEmitter = new eventEmiiter()
myEmitter.on('events', function(str){
  console.log(str)
})
myEmitter.emit('hello word')
// hello world
```

## 给监听器传入参数与 this

`EventEmitter.emit()`方法允许将任意参数传递给监听器，监听器的`this`指向`eventEmit`对象

## 异步与同步

当一个事件触发时，`EventEmitter`会按照监听器注册的时间顺序同步的被调用，如果想要被异步调用，可以将其放入`setImmediate()`或者`process.nextTick()`方法的回调函数中

```javascript
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('这个是异步发生的');
  });
});
myEmitter.emit('event', 'a', 'b');
```

## 事件只处理一次

使用`EventEmitter.once()`可以注册一个只能被调用一次的监听器，当被监听的事件触发的时候，监听器会被注销，然后再调用

## 错误处理

当`EventEmitter`中发生错误的时候，会触发一个`error`事件，所以始终为`EventEmitter`注册一个`error`监听器是一个最佳实践

## EventEmitter 类

当为`EventEmitter`添加一个新监听的时候，会触发一个`newListener`事件，当监听器被移除的时候，会触发`removeListener`事件

**newListener 事件**

`EventListener`实例在将一个监听器添加到内部监听器数组之前会触发自身的`newListener`事件，事件名和回调函数会作为参数传入监听`newListener`事件的监听器中

**removeListener 事件**

`removeListener`事件在监听器被移除后触发

### 静态属性

**EventEmitter.defaultMaxListeners**

每个事件默认可以注册 10 个监听器

* 单个`EventEmitter`实例可以通过`setMaxListener(n)`来改变
* 所有的`EventEmitter`实例每个事件最大监听器数量可以通过`EventEmitter.defaultMaxListeners`属性改变

### 实例方法

**emitter.addLisnter(evnetName, listener)**

`EventEmiter.on()`的别名

**emitter.emit(eventName)**

按照监听器的注册顺序，同步调用每个注册到`eventName`的监听器，如果有监听器返回`true`，没有放回`false`

**emitter.eventNames()**

返回触发器已经注册监听器的事件名称的名称

**emitter.getMaxListeners()**

返回`EventEmitter`实例一个事件最多可以注册的监听器数量

**emitter.listenerCount(eventName)**

返回正在监听名为`eventName`监听器的数量

**emitter.listeners(eventName)**

返回名为`eventName`的事件的监听器的数组副本

**emitter.off(eventName)**

`emitter.removeListener`的别名

**emitter.on(eventName, listener)**

注册一个名为`eventName`的事件

**emitter.once(eventName, listener)**

添加一个单次`listener`函数到名为`eventName`的事件的监听器，下次触发`eventName`之后，该监听器会被移除，再调用

**emitter.prependListener(eventName, listener)**

添加`listener`函数到名为`eventName`的事件监听器数组的开头，返回一个`EventEmitter`实例，可以链式调用

**emitter.prependOnceListener(eventName, listener)**

添加一个单次`listener`监听器到名为`eventName`的事件的监听器数组的开头，下次触发`eventName`之后，该监听器会被移除，再调用

**emitter.removeAllListeners(eventName)**

移除全部或指定名称的监听器

**emitter.removeListener(eventName, listener)**

从名为`eventName`的事件的监听器数组中移除`listener`

**emitter.setMaxListeners(n)**

设置一个事件的最大监听器数量