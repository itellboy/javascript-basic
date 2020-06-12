# Promise

Promise 用于表示一个异步操作的过程和结果。

## 构造函数

创建一个 Promise

```javascript
new Promise((resolve, reject) => {}, []);
```

## 静态方法

- `Promise.all(iterable)`：iterable 为一个可迭代对象，返回一个 Promise。

当 iterable 中所有的状态都是 resolved 或者有一个状态为 rejected，`Promise.all()`的状态才会变更。

- `Promise.race(iterable)`

当 iterable 中又一个状态变更时，`Promise.race()`状态会随之变更。

- `Promise.reject(reason)`：返回一个 rejected 状态的 Promise
- `Promise.resolve(value)`：返回一个 resolve 状态的 Promise