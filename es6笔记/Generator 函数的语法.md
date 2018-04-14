# Generator 函数的语法

* `es6` 提供的一种异步编程解决方案
* 可以理解成为一种状态机，它封装了多个内部状态，返回一个可遍历的对象，可以依次遍历 `Generator` 函数内部的状态

## 如何定义
* `function` 关键字后面加一个 `*` 号
* 内部使用 `yield` 关键字定义每个状态

```javascript
function* generatorFunction(){
  yield 'hello';
  yield 'world';
  return 'ending'
}
```

* 上面的 `Generator` 函数定义了三个状态

## 如何执行

```javascript
let gf = generatorFunction();
```

* 和普通函数一样，用 `()` 括号就能直接执行 `Generator` 函数，返回一个包含之前 `generatorFunction` 函数内部定义状态的遍历器对象
* 通过 `.next()` 方法遍历返回的对象

```javascript
gf.next()
// { done: false, value: "hello"}
gf.next()
// { done: false, value: "world"}
gf.next()
// { done: true, value: "ending"}
```

* 遍历器对象通过 `next()` 方法遍历，返回一个带 `done` 和 `value` 属性的对象，如果遍历完了，`done` 为 `true`，否则为 `false`，`value` 表示当前状态的值

## yield 表达式

* `Generator` 函数实际上提供了一种可暂停执行函数的方案，`yield` 则作为函数的暂停点

遍历器对象的 `next()` 执行如下

1. 遇到 `yield` 表达式暂停执行，并将 `yield` 后面的值作为返回对象的 `value` 值返回
2. 下一次调用 `next()` 方法，函数继续往下执行，直到遇到下一个 `yield` 表达式
3. 如果没有遇到 `yield` 表达式，则一直执行到 `return` 语句，把 `return` 后面的指作为对象的 `value` 返回
4. 如果没有 `return` 则返回的 `value` 为 `undefined`

* `yield` 只有在声明 `Generator` 函数内部出现，其他地方都会报错
* `yield` 表达式在另一个表达式中时，要加上括号

## 与 Iterator 关系

参照 《Iterator与for...of》，再来补充

## next 方法的参数

* `yield` 表达式本身没有返回值，可以通过 `next()` 方法的参数来指定上一个 `yield` 表达式的返回值，这意味着可以在函数执行的过程中向函数里面注入外部的值，从而调整函数的运行方式

## for...of 循环

* for...of 循环可以直接遍历 `Generator` 函数生成的对象，不需要 `next` 函数
* 一旦 `next` 方法返回对象的 `done` 属性为 `true` ，终止遍历

## Generator.prototype.throw

* `Generator` 函数执行返回的遍历器对象都有一个 `throw` 方法，可以在函数体外抛出错误，在函数体内部捕获

```javascript
function* g(){
  try{
    yield ;
  } catch (e){
    console.log('内部捕获' + e)
  }
}
var i = g();
g.next();
g.throw('1');
// 内部捕获 1 
```

* 在 `Generator` 函数内部捕获之后，会自动执行一次 `next()` 方法

## Generator.prototype.return

* 直接调用 `Generator` 函数的 `return` 方法可以终止便利该函数，并且可以给定返回值
* 如果 `Generator` 函数内部有 `try...finally` 块，那么 `return` 会推迟到 `finally` 块执行完之后再执行

## next(), throw(), return() 的共同点

> 理解

三个方法都是恢复 `Generator` 函数的执行，只是把 `yield` 表达式替换成不同的语句

* `next()` 将 `yield` 表达式换成一个值
* `throw()` 将 `yield` 表达式换成一个  `throw` 语句
* `return()` 将 `yield` 表达式换成一个 `return` 语句

