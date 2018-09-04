# 对象的继承

继承时面向对象的一个很重要的概念，子类通过继承父类的方法可以提高代码的复用率，JavaScript 通过原型对象（prototype）来实现继承

* 构造函数的原型对象（prototype）的作用是定义所有实例对象共享的属性和方法
* 实例对象的原型也就是构造函数的原型对象（prototype）

```javascript
var Fruit = function (name) {
  this.name = name
}

var apple = new Fruit('apple')
var pear = new Fruit('pear')

Fruit.prototype.getName = function () {
  return this.name
}

apple.getName() // "apple"
pear.getName() // "pear"
```

## 原型链

在 JavaScript里面，每一个对象都有自己的原型`__proto__`，指向构造函数的原型对象（prototype），同时，构造函数也有自己的原型，这样就形成了一个原型链（prototype chain）：对象到原型，再到原型的原型

所有的对象的原型一层一层回溯都可以找到`Object.prototype`，也就是说，所有对象都继承了定义在`Object.prototype`上面的属性和方法，比如`valueOf()`、`toString()`，`Object.prototype`也是一个对象，它的原型是`null`，所以说，原型链的尽头为`null`

当访问一个对象的属性或者方法的时候，如果在对象上面没有找到，则在它的原型上面去找，找到为止

## constructor 属性

`prototype`属性默认有一个`constructor`属性，指向`prototype`所在的构造函数，所以，`constructor`对象会被实例对象继承

```javascript
var Parent = function () { }
var p = new Parent()

p.constructor === Parent // true
```

`constructor`属性表示构造函数与`prototype`属性之间的关联关系，一般我们在修改原型的时候，要同事修改`constructor`属性，可以通过`constructor`的`name`属性检查构造函数

```javascript
var F = function () { }
F.prototype  = new Array()
var f = new F()
f.constructor === F // false
f.constructor === Array // true

F.prototype.constructor = F
f.constructor === F // true

f.constructor.name // "F"
```

## instanceof 运算符

`instanceof`运算符返回一个布尔值，表示后者对象是否在前者对象的原型链上面

* 原始类型的对象不能使用`instanceof`运算符，返回`false`
* `null`、`undefined`使用`instanceof`运算符返回`false`
* 一个对象可以对多个构造函数使用`instanceof`返回`true`

```javascript
var F = function () {]
var f = new F()
f instanceof F // true
f instanceof Object // true

123 instanceof Number // false
null instanceof Object // flase
```

**应用**

* 判断对象的数据类型
* 判断函数是否使用`new`命令调用

## 构造函数的继承

让子类构造函数完全继承父类构造函数的属性和方法分为下面两步

```javascript
var Parent = function (name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}
// 第一步，继承父类的属性
var Child = function (name) {
  Parent.call(this, name)
}
// 第二步，继承父类的方法
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// 调用
var child = new Child('hello')
child.getName() // "hello"
```

使用`Object.create()`的目的是对`prototype`对象进行深拷贝，防止在改变`Child`的原型对象的时候无意改变了`Parent`的原型对象

如果是只要继承某个方法，可以使用下面的方法

```javascript
Child.prototype.f = function () {
  Parent.prototype.f.call(this)
}
```

## 阅读

[万物皆空之 JavaScript 原型](https://juejin.im/post/5a944f485188257a804aba6d)