# Class 的基本语法

## 简介

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
   return `x: ${this.x}, y: ${this.y}`;
  }
}
```

* 所有的方法定义在`prototype`对象上面，方法之间不能用多好隔开
* 可以直接用`new`命令进行实例化，
* 所有类内部定义的方法，都是不可枚举的 (no-enumerable)
* 类和模块的内部，默认使用严格模式
* 默认会带有一个空的`constructor`方法，表示类的实例化方法
* 不存在变量提升
* 类的`name`属性为`class`关键字后的变量名
* 可以为类定义属性的存值函数 (setter) 和取值函数 (getter)
* 可以通过在方法前面加上`static`关键字来定义类的静态方法，可以直接通过类名 + 方法名的形式掉用，且可以被子类继承
* `ES6`规定类的内部只有静态方法，没有静态属性

`ES6`建议尽量用`Object.getPrototypeOf()`方法去获取实例对象的原型，而不是通过`__proto__`。

## 私有属性和私有方法

* 一般约定私有属性和私有方法前面加上`_`表示内部属性，但这是不安全的
* 使用 Symbol 值，在类内部使用 Symbol 值作为变量的名字，利用 Symbol 值的唯一性，可以保证该属性不可在第三方访问

## 静态属性和实例属性

```javascript
class Foo {
  //...
}
Foo.prop = 1;
```

`ES6`只能通过上面代码的方式定义静态属性。

目前有一个新的提案来定义类的静态属性和实例属性，可以了解下。

### 类的实例属性

* 在定义类的内部通过等号的方式来定义实例属性

```javascript
class Foo {
  myProp = 1;
  constructor() {
    
  }
}
```

### 类的静态属性

只要在实例属性前面加上`static`关键字就可以定义静态属性，大大方便了静态属性的定义和表达

## new.target 属性

在构造函数内部使用，表示`new`命令作用于哪个构造函数，如果没有使用`new`命令，`new.target`返回`undefined`


