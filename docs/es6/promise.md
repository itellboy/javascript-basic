# Promise 对象

异步解决方案，避免回调地狱，最早有社区提出和实现，ES6 将其编入其标准

简而言之Promise对象通过引入一个回调而避免更多的回调

Promise 对象有以下两个特点

* 对象的状态不受外界影响
* 一旦状态改变，就不会再变，任何时候得到的都是改变之后的结果

三个状态

* `pending`进行中
* `fullfilled`已成功
* `reject`已失败

## 构造函数

可以直接通过`new Promise()`构造一个 Promise 对象，接受一个回调函数作为参数，回调函数的参数由 JavaScript 引擎提供，`resolve`和`reject`，用来控制 Promise 进入下一个状态。在回调函数中调用`resolve()`将 Promise 对象置为`fullfiled`状态，调用`reject()`将对象置为`rejected`状态

## 静态方法

**Promise.all(arr)**

将多个 Promise 实例包装成一个 Promise 实例，参数为成员是 Promise 实例的数组

```javascript
// p1, p2, p3 为 Promise 实例
var p = Promise.all([p1, p2, p3]).then(([v1, v2, v3]) => {
  console.log(v1)
  console.log(v2)
  console.log(v3)
}).catch(err => {})
```

当所有实例的状态变为`resolve`，新实例`p`的状态才会变为`resolve`，中途只要有一个实例的状态变为`rejected`，新实例`p`的状态也会变成`rejected`

**Promise.race(arr)**

将多个 Promise 实例包装成一个 Promise 实例，参数为成员是 Promise 实例的数组

当成员 Promise 实例里面有一个状态变化的时候，返回的新实例`p`的状态就会跟着变化

**Promise.resolve()**

直接返回一个状态为`resolve`的 Promise 实例

可以用与普通对象转化为 Promise 对象

**Promise.reject()**

直接返回一个状态为`rejected`的 Promise 实例

## 实例方法

**Promise.prototype.then()**

每个 Promise 实例都有一个`then()`方法，接受两个参数，第一个参数为`resolve`状态的回调函数，第二个参数为`rejected`状态的回调函数

在使用的过程中一般省略第二个参数，使用`Promise.prototype.catch()`代替

返回一个新的 Promise 实例

**Promise.prototype.catch()**

`Promise.prototype.then(null, rejection)` 的别名，用于捕获 Promise 实例在执行的过程中抛出的错误

建议总在 Promise 实例后面跟上`catch()`方法，防止 Promise 实例发生错误继续向外抛出

返回一个新的 Promise 实例

**Promise.prototype.finally()**

ES2018 引入，Promise 实例最后的状态不管为何，都会执行`finally()`方法
