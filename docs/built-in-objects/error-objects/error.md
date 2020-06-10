# Error

通过 Error 可以创建一个错误对象，JavaScript 内置了许多标准的错误对象，用户也可以根据自己的情况定义自己的错误对象。

当 JavaScript 发生错误的时候，系统会构建 Error 对象将其抛出

## 构造函数

- `new Error(message)`
- `Error(message)`

上面两种生成 Error 对象的方式是等同的

## 其他 Error 构造器和 Error 类型

- `AggregateError`：当多个 Error 需要包装在一个 Error 的时候，抛出该错误
- `EvalError`：调用`eval()`发生的错误
- `RangeError`：数值变量或者参数超出其有效范围
- `ReferenceError`：无效的引用
- `SyntaxError`：发生语法错误
- `TypeError`：变量或者参数类型无效
- `URIError`：全局 uri 处理函数传入了不合法的 uri
