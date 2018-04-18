# Generator 函数的异步应用 (2.5)

由于 `JavaScript` 是一门单线程语言，所以异步调用是最基本的，如果没有异步，不敢想象会有多卡

## 传统的异步实现方法

* 回调函数
* 事件监听
* 发布/订阅
* Promise 对象

`Generator` 函数为 `JavaScript` 的异步实现带入了一个全新的阶段

## 回调函数

为什么 Node 约定，回调函数的第一个参数必须为错误对象 `err`？

原因是函数分为两段执行，第一段执行完毕之后，函数的上下文结束，如果出现错误，原来的上下文无法捕捉，只能够当作参数传入第二段执行函数

## Promise 函数

* Promise 的提出是为了解决回调地狱的出现，防止代码的纵向发展，让代码横向发展。
* 但是大量的 `then` 关键字的出现，使得代码看上去非常的冗余

## Generator 函数

### 协程

协程的大概执行思路

1. 执行 A 函数
2. 暂停，把执行权交给 B 函数
3. 执行 B 函数，一段时间后，执行权返还给 A 函数
4. 继续执行 A 函数

### 协程的 Generator 函数实现

Generator 函数是协程在 `es6` 的实现，最大的特点就是通过 `yield` 函数可以交出函数的执行权，而且执行 Generator 函数不会返回执行结果，而是返回一个指针对象。

### Generator 函数的数据交换和错误处理

* 函数内部可以通过在 `yield` 表达式后面设置值来向函数外部输出值，通过调用 `next()` 返回对象的 `value` 属性获取
* 通过 `next(params)` 可以向函数内部传递参数，
* 函数的遍历器对象的 `throw()` 方法抛出的错误可以在函数内部捕获，内部捕获不了，也可以在函数体外部捕获

### 异步任务的封装

```javascript
var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}
```

上面是对异步的一个简单封装

## Thunk 函数

Thunk 函数是自动执行 Generator 函数的一种方法

### 参数的求值策略

问题：函数的参数带参数应该在什么时候计算参数的值？

* 传名调用：在实际用到这个参数的时候去计算的到参数的值
* 传值调用：把参数的值求出来之后再作为参数传入，C 语言的参数传递方式

为了避免性能的损耗，很多人认为应该采用传名调用

### Thunk 函数的意义

实现参数的传名调用，用一个方法代替参数，在方法里面返回表达式的值，将这个方法作为参数传入，调用的时候直接调用这个方法即可。

简单来说既是利用方法替换表达式

```javascript
function g(m){
  return m + 2;
}
g(x + 6);
//Thunk函数实现传名调用
function thunk(){
	return x + 6;
}
function g(m){
	return m() + 2;
}
g(thunk)

```

### JavaScript 语言的 Thunk 函数

JavaScript 里面的 Thunk 函数的重要意义是将多参数函数改成单参数函数

```javascript
function g(a, callback);
//等同于
function thunk(a){
  return function(callback){
  	return g(a, callback);
  }
}
g(a)(callback);
```

### Thunkfy 模块

生产环境的转换器，建议采用 Thunkfy 模块

```javascript
var thunkify = require('Thunkify');
var gThunk = thunkify(g);
gThunk(a)(callback);
```

### Generator 函数的流程管理

Thunk 函数可以用于 Generator 函数的自动流程管理

* Generator 函数通过 `yield` 表达式将函数的执行控制权交出去，通过 `next()` 方法将执行权返回回来，如果是进行多项异步操作，则通常的方法是在回调方法里面调用 `next()` 方法来执行 Generator 函数接下来的流程

### Thunk 函数的自动流程管理

```javascript
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
}

run(g);
```

上述代码中，`run` 函数内部的 `next` 方法就是 Thunk 函数的回调方法，现调用 Generator 函数的 `next` 方法将指针移至下一步，判断 Generator 函数返回的 `done` 属性是否为 `true`， 表示 Generator 函数已经执行完成，如果没有，则将 `run` 函数内部的 `next` 方法作为回调函数传入 Thunk的回调之中（通过 Generator 函数的指针对象返回的 `value`，也就是 Thunk 函数传入），这样的流程就可以保证 Generator 函数里面的一步操作可以按步骤执行，调用方法如下

```javascript
function * generatorF(){
  var result1 = yield readFileThunk('fileAName');
  ...
  var result2 = yield readFileThunk('fileBName');
  var result3 = yield readFileThunk('fileBName');
}

run(g)
```

这样的写法就非常的清晰简洁，同时也达到异步按流程制动执行的目的，条件是必须保证 `yield` 函数后面跟着的是 Thunk 函数

## co 模块

> 用于 Generator 函数的自动执行，不用编写 Generator 函数执行器

```javascript
var co = require('co');
co(generatorF);
```

返回一个 Promise 对象，可以调用 `then` 方法添加回调函数

### co 模块的原理

其实，Generator 函数能够自动执行异步任务只需要达到两点要求，能够叫出函数的执行权，当异步操作有了结果，能够将控制权返还给 Generator 函数

两个方法可以做到这一点：

1. 回调函数：将异步操作包装成 Thunk 函数，在回调函数里面执行 Generator 函数的 `next` 方法，交回控制权
2. Promise 对象，将异步操作包装成 Promise 对象，在 `then` 方法里面调用 Generator 函数的 `next` 方法，交回控制权

### 基于 Promise 对象的自动执行

```javascript
function run(gen){
  var g = gen();
  function next(err, data){
    var result = g.next(data);
    if(result.done) return ;
    result.value.then(() => {
      next();
    });
  }
  next();
}

function* gen(){
	...
}

run(g)
```

在 `then` 回调参数里面调用 `next` 方法执行下一步操作

### 处理并发的一步操作

有时候我们需要进行一些并发的异步操作，等每一个异步操作都完成之后再进行下一步操作。

这是，只要把并发的异步操作方法封装到数组或者对象里面，放到 `yield` 后面就可以了

```javascript
// 数组的写法
co(function* () {
  var res = yield [
    Promise.resolve(1),
    Promise.resolve(2)
  ];
  console.log(res);
}).catch(onerror);

// 对象的写法
co(function* () {
  var res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };
  console.log(res);
}).catch(onerror);
```

### 实例： 处理 Stream

* Node 提供 Stream 流的方式读写数据，这在处理大文件的时候是非常有利的，将数据分成一块一块去读写，Stream 流使用 EventEmitter API，会释放三个事件

1. `data` 事件：下一块数据已经准备好
2. `end` 事件：整个读写已经完成
3. `error` 事件：读写发生错误

使用 `Promise.race()` 可以判断那一个先发生，只有当 `data` 事件先进入的时候，才进行下一块数据的读写，从而我们通过 `while` 循环可以完成整个数据的读写