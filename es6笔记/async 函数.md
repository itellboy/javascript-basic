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

1. 内置的执行器，Generator 函数需要自己写执行器，而 async 函数不需要
2. 更好的语义，async 表示函数里面有异步操作，await 表示后面的表达式是异步操作
3. 更广的适用性，`yield` 后面只能跟 `Thunk` 函数或者 Promise 对象，而 `await` 后面可以跟任何对象和值，当后面的值为数值，字符串和布尔值时，操作等同于同步操作
4. 返回值是 Promise 对象，可以用 `then` 指定下一步操作

## 基本用法

