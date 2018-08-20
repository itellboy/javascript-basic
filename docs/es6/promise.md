# `Promise` 对象

[http://es6.ruanyifeng.com/#docs/promise](http://es6.ruanyifeng.com/#docs/promise)

异步解决方案，避免回调地狱，最早有社区提出和实现，`es6` 将其编入其标准

简而言之 `Promise` 对象通过引入一个回调而避免更多的回调

`Promise` 对象有以下两个特点

* 对象的状态不受外界影响
* 一旦状态改变，就不会再变，任何时候得到的都是改变之后的结果

三个状态

* `pending` 进行中
* `fullfilled` 已成功
* `reject` 已失败

## 构造函数

可以直接通过 `new Promise()` 构造一个 `Promise` 对象，接受一个回调函数作为参数，回调函数的参数由 `JavaScript` 引擎提供，`resolve` 和 `reject`，用来控制 `Promise` 进入下一个状态。在回调函数中调用 `resolve()` 将 `Promise` 对象置为 `fullfiled` 状态，调用 `reject()` 将对象置为 `rejected` 状态

## `Promise.prototype.then()`

* 第一个参数为 `resolved` 状态的回调函数，第二个参数为 `rejected` 状态的回调函数
* 返回一个全新的 `Promise` 实例

## `Promise.prototype.catch()`

用来捕获在构造函数或者 `then()` 回调处理里面出现的错误

## `Promise.prototype,finally`

`finally` 方法用于不管最后状态如何都会执行的操作，在 `es2018` 中引入标准

## `Promise.all()`

用于将多个 `Promise` 对象包装成一个新的 `Promise` 实例

所有的 `Promise` 对象状态都变为 `resolved` 状态后，新的实例的状态才会变为`resolved`，只要有一个 `rejected` ，新的实例的状态都会变为 `rejected`

## `Promise.race()`

和 `Promise.all()` 一样，将多个 `Promise` 对象包装成一个新的 `Promise` 对象

`race` 时比赛的意思，所以这个方法的意思是多个 `Promise` 对象中谁的状态先改变，新的 `Promise` 对象的状态就会跟着改变

## `Promise.resolve()`

* 将现有的对象转化为 `Promise` 对象，返回一个状态为 `resolved` 状态的 `Promise` 对象

```javascript
//相当于
new Promise((resolve, reject) => {
  resolve();
})
```

## `Promise.reject()`

* 将现有的对象转化为 `Promise` 对象，返回一个状态为 `rejected` 状态的 `Promise` 对象

```javascript
//相当于
new Promise((resolve, reject) => {
  reject();
})
```

## `Promise.try()`