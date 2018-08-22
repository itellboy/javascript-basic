# events 事件

大多数 Node 核心的 API 都采用异步事件驱动的架构，一般通过触发命名事件来调用函数对象

所有触发事件的对象都是`EventEmitter`对象的实例。这些对象开放了一个`emitEvent.on()`函数，允许将一个或者多个回调函数绑定在会被对象触发的命名事件上

当事件触发时，所有绑定在该事件的函数都被同步的调用，监听器的返回值会被丢弃

一个绑定了监听器的`eventEmitter`实例，通过`eventEmitter.on()`来注册事件，`eventEmitter.emit()`来触发事件

