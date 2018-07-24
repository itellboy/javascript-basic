# async 函数

## 含义

> ES2017 标准引入 async 函数，使得异步操作更加的简单，实际上就是 Generator 函数的语法糖

```javascript
const asyncReadFile = async function(){
  const result1 = await fs.readFile('file1');
  const result2 = await fs.readFile('file2');
}

```

上面就是 async 函数，和 Generator 函数相比就是把 `*` 换成了 `async`，把 `yield` 换成了 `await`，直接执行 `asyncReadFile` 函数，会达到和 Generator 函数一样的效果。

## 对比 Generator

1. 内置的执行器，Generator 函数需要自己写执行器，而 `async` 函数不需要
2. 更好的语义，`async` 表示函数里面有异步操作，`await` 表示后面的表达式是异步操作
3. 更广的适用性，`yield` 后面只能跟 `Thunk` 函数或者 Promise 对象，而 `await` 后面可以跟任何对象和值，当后面的值为数值，字符串和布尔值时，操作等同于同步操作
4. 返回值是 Promise 对象，可以用 `then` 指定下一步操作

## 基本用法

* async 函数的错误可以在返回的 Promise 对象通过 `catch` 捕捉
* async 函数内部 `return` 的值，可以在返回的 Promise 对象回调函数里面接收
* async 函数返回的 Promise 对象，需要等到函数内部所有异步操作完成后，状态才会改变

## 语法

* 只要有一个 `await` 后面 Promise 对象的状态变为 `rejected` 状态，async 会终止执行，可以在 `await` 后面的Promise 对象直接捕获错误，可以避免终止整个 async 函数的执行

## 使用注意点

1. 建议把 `await` 命令放在 `try...catch` 块中
2. 多个 `await` 命令后面的异步操作如果没有继发关系，最好让他们同时触发，缩短程序的执行时间，使用 `Promise.all()` 可以实现
3. `await` 命令只能用在 async 函数里面，用在普通函数会报错，常见的 `forEach()` 函数里面不能使用`await`关键字，可以使用`for...of`代替