# Generator 函数的语法 (2.5)

* `es6`提供的一种异步编程解决方案
* 可以理解成为一种状态机，它封装了多个内部状态，返回一个可遍历的对象，可以依次遍历`Generator`函数内部的状态

## 如何定义
* `function`关键字后面加一个`* `号
* 内部使用`yield`关键字定义每个状态

```javascript
function* generatorFunction(){
  yield 'hello';
  yield 'world';
  return 'ending'
}
```

* 上面的`Generator`函数定义了三个状态

## 如何执行

```javascript
let gf = generatorFunction();
```

* 和普通函数一样，用`()`括号就能直接执行`Generator`函数，返回一个包含之前`generatorFunction`函数内部定义状态的遍历器对象
* 通过`.next()`方法遍历返回的对象

```javascript
gf.next()
// { done: false, value: "hello"}
gf.next()
// { done: false, value: "world"}
gf.next()
// { done: true, value: "ending"}
```

* 遍历器对象通过`next()`方法遍历，返回一个带`done`和`value`属性的对象，如果遍历完了，`done` 为`true`，否则为`false`，`value`表示当前状态的值

## yield 表达式

* `Generator`函数实际上提供了一种可暂停执行函数的方案，`yield`则作为函数的暂停点

遍历器对象的`next()`执行如下

1. 遇到`yield`表达式暂停执行，并将`yield`后面的值作为返回对象的`value`值返回
2. 下一次调用`next()`方法，函数继续往下执行，直到遇到下一个`yield`表达式
3. 如果没有遇到`yield`表达式，则一直执行到`return`语句，把`return`后面的指作为对象的`value`返回
4. 如果没有`return`则返回的`value`为`undefined`

* `yield`只有在声明`Generator`函数内部出现，其他地方都会报错
* `yield`表达式在另一个表达式中时，要加上括号

## 与 Iterator 关系

参照 《Iterator与for...of》，再来补充

## next 方法的参数

* `yield`表达式本身没有返回值，可以通过`next()`方法的参数来指定上一个`yield`表达式的返回值，这意味着可以在函数执行的过程中向函数里面注入外部的值，从而调整函数的运行方式

## for...of 循环

* for...of 循环可以直接遍历`Generator`函数生成的对象，不需要`next`函数
* 一旦`next`方法返回对象的`done`属性为`true`，终止遍历

## Generator.prototype.throw

* `Generator`函数执行返回的遍历器对象都有一个`throw`方法，可以在函数体外抛出错误，在函数体内部捕获

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

* 在`Generator`函数内部捕获之后，会自动执行一次`next()`方法

## Generator.prototype.return

* 直接调用`Generator`函数的`return`方法可以终止便利该函数，并且可以给定返回值
* 如果`Generator`函数内部有`try...finally`块，那么`return`会推迟到`finally`块执行完之后再执行

## next(), throw(), return() 的共同点

> 理解

三个方法都是恢复`Generator`函数的执行，只是把`yield`表达式替换成不同的语句

* `next()`将`yield`表达式换成一个值
* `throw()`将`yield`表达式换成一个 `throw`语句
* `return()`将`yield`表达式换成一个`return`语句

## yield* 表达式

如果要在一个`Generator`函数里面执行另外一个`Generator`函数，需要在`Generator`函数里面用`yield* `表达式来定义另外一个`Generator`函数

* `yield`后面的`Generator`函数，如果没有`return`语句，等同于在`Generator`函数内部部署一个`for...of`循环
* 如果被代理的`Generator`函数有`return`语句，则可以向代理它的`Generator`函数返回数据

## 作为对象属性的 Generator 函数

如果一个对象的属性是`Generator`函数，可以写成下面的形式


```javascript
let a = {
  * generatorMethod() {
    
  }
}
```

## Generator 函数的 this 对象

* `Generator`函数生成的遍历器对象也是`Generator`函数的实例，同时也继承了`Generator`函数的`prototype`对象
* 在`Generator`函数内部使用`this`关键字添加属性，调用函数生成的遍历器对象不会继承该属性
* 对于`Generator`函数不能使用`new`关键字

## Generator 与状态机

可以利用更少的变量来实现一个状态机，因为它本身就是一个状态机，即目前是否处于暂停状态

## Generator 与协程

> 协程是程序运行的一种方式，可以用单线程实现，也可以用多线程实现。前者可以看作特殊的“子例程”，后者可以看作特殊的线程

### 协程与子例程的差异

* 传统的子例程`subroutine`采用 “先进后出” 的执行方式，协程与其不同，可以同时存在多个线程（或函数）并行执行，但只有一个线程（或函数）处于运行状态，其他的处于暂停态`suspended`, 多个线程（或函数）可以交换执行权，这种可以并行执行，可以交换执行权的线程（或函数），叫做协程

* 从实现上看，子例程只占用一个栈，而协程可以占用多个栈，但只有一个栈是运行状态，通过牺牲内存的方式来达到任务并行的目的

### 协程与普通线程的差异

* 协程与普通线程最大的差异是，协程多个任务只能有一个任务处于运行态，而线程允许多个任务同时处于运行态。这是有`JavaScript`是单线程语言所决定的。而且线程多个任务之间的运行状态由环境决定，谁先得到资源谁先执行，于是就出现了死锁的问题，协程的运行顺序由自己决定

* 使用`Generator`函数实现协程，利用`yield`来交换控制权

## Generator 与上下文

> 上下文：全局的上下文环境（`context`，可称为运行环境）

* `JavaScript`在执行函数的时候，会产生一个函数运行时的上下文，这样就出现了上下文环境的堆栈，遵循`后进先出`的原则。

* `Generator`函数不一样，当执行到`yield`关键字时候，函数的上下文环境的堆栈冻结当前状态，当调用`next`方法时，函数的上下文环境堆栈又重新加入调用栈，冻结的变量和对象恢复执行

## 应用

`Generator` 函数可以暂停执行，可以返回任意值，这使得其有多种应用场景

* 异步操作的同步化表达
* 控制流管理
* 为任意对象部署`Iterator`接口
* 作为数据结构