# this 关键字

JavaScript 里面的`this`指向当前函数运行环境所处的对象

```javascript
var obj = {
  name: 'jack',
  getName: function () {
    return this.name
  }
}
obj.getName() // "jack"

var f = obj.getName
var name = 'rose'
f() // "rose"
```

`obj.getName()`方法运行环境在`obj`对象里面，`f()`方法的运行环境在全局对象里面，所以返回不同的结果

## 使用场合

### 全局环境

全局环境下使用`this`，`this`指向的是`window`，下面两种情况下的`this`都指向`window`

```javascript
this === window
// true

function foo () {
  this === window
}
f()
// true
```

### 构造函数

构造函数里的`this`指向实例对象

### 对象的方法

对象方法里面的`this`指向该方法运行时所处的环境，参考本文开始的例子

## 注意事项

### 避免多层使用 this

```javascript
var bar = '1'
var obj = {
  bar: '2',
  f1: function () {
    console.log(this.bar)
    var f2 = function() {
      console.log(this.bar)
    }()
  }
}

obj.f1()
// 2
// 1
```

f1 的`this`指向`obj`，f2 的`this`指向`window`

### 避免在回调函数中使用 this

回调函数中的`this`的指向往往已经改变，请不要使用

### 避免在数组的处理方法中使用 this

数组中例如`forEach()`、`map()`、`filter()`等等这些方法处理方法里面的`this`普遍情况下是指向全局对象，可以使用第二个参数来指定处理方法里面的`this`的指向

```javascript
var obj = {
  flag: true,
  arr: [1, 2],
  f: function () {
    this.arr.forEach(function(item) {
      console.log(this.flag)
    }, this)
  }
}
obj.f()
// true
// true
```

## 绑定 this 的方法

可以通过`call()`、`apply()`、`bind()`三个方法来改变`this`的指向

### Function.prototype.call()

`Function.prototype.call()`方法第一个参数是函数执行内部`this`的指向，也就是函数执行的作用域，后面可以传一个可变参数，作为函数的参数

不传参数，内部`this`默认指向全局对象

```javascript
var n = 1
var obj = {
  n: 2
}
var f = function () {
  console.log(this.n)
}

f.call(window)
// 1
f.call()
// 1
f.call(obj)
// 2
```

### Function.prototype.apply()

与`Function.prototype.call()`一致，只是传递给函数调用的参数用数组传递

```javascript
var f = function (x, y) {
  return x + y
}
f.call(null, [1 ,2])
// 3
```

### Function.prototype.bind()

`Function.prototype.bind()`方法用于将一个方法内部`this`的指向绑定到某个对象，返回一个新的函数，这样就可以安全的将一个方法赋值给其他变量

```javascript
var obj = {
  name: 'jack',
  getName: function () {
    return this.name
  }
}
obj.getName() // "jack"

var f = obj.getName.bind(obj)
f()
// "jack"
```

这个例子与第一个例子形成对比，将`obj`的`getName`方法赋值给`f`变量的时候，将该方法执行时内部`this`的指向固定为`obj`对象，调用`f`方法的时候能正确的返回想要的结果