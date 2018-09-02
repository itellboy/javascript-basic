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

apple.getName()
// "apple"
pear.getName()
// "pear"
```

## 原型链

在 JavaScript里面，每一个对象都有自己的原型`__proto__`，指向构造函数的原型对象（prototype），同时，构造函数也有自己的原型，这样就形成了一个原型链（prototype chain）：对象到原型，再到原型的原型

所有的对象的原型一层一层回溯都可以找到`Object.prototype`，也就是说，所有对象都继承了定义在`Object.prototype`上面的属性和方法，比如`valueOf()`、`toString()`，`Object.prototype`也是一个对象，它的原型是`null`，所以说，原型链的尽头为`null`

当访问一个对象的属性或者方法的时候，如果在对象上面没有找到，则在它的原型上面去找，找到为止

## 万物皆空之 JavaScript 原型

[万物皆空之 JavaScript 原型](https://juejin.im/post/5a944f485188257a804aba6d)