# Class 的基本语法

## 简介

ES6 的类可以看作是写构造函数的语法糖，让 JavaScript 写构造函数跟传统语言差不多，下面是一个例子

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

// 等同于
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return `x: ${this.x}, y: ${this.y}`;
}
```

ES6 的类具有以下特性

**所有的方法定义在`prototype`对象上面，方法之间不能用逗号隔开**

上述`Point`里面的`toString()`方法相当于定义在`Point`构造函数的`prototype`属性上面，所有实例对象可以使用

**可以直接用`new`命令进行实例化**

和构造函数一样可以使用`new`，命令进行实例化，也可以使用`Reflect.construct(Point, 1, 2)`来实例化

```javascript
var point = new Point(0, 0)
point.toString() // "x: 0, y: 0"
```

**所有类内部定义的方法，都是不可枚举的 (no-enumerable)**

这一点和 ES5 不一样，直接在构造函数的`prototype`属性上面定义方法是可以枚举的

```javascript
Object.keys(Point.prototype) // []

var Func = function() {} 
Func.prototype.toString = function() {console.log('hello')}
Object.keys(Func.prototype) // ['toString']
```

**类和模块的内部，默认使用严格模式**

在未来，JavaScript 在这方便的要求会逐步提升

**默认会带有一个空的`constructor`方法，表示类的实例化方法**

```javascript
class Point {}
// 等同于
class Point {
  constructor () {}
}
```

**类必须使用`new`关键字实例化使用**

构造函数可以直接当做普通函数调用，类不行，直接调用会报错

**不存在变量提升**

类必须在声明之后才能调用

**类的`name`属性为`class`关键字后的变量名**

```javascript
Point.name // "Point"
```

**类的属性的存值函数 (setter) 和取值函数 (getter)**

可以通过定义这两个函数来拦截属性的操作

**类的静态方法**

可以通过在方法前面加上`static`关键字来定义类的静态方法，可以直接通过类名 + 方法名的形式调用，且可以被子类继承

ES6 规定类的内部只有静态方法，没有静态属性

ES6 建议尽量用`Object.getPrototypeOf()`方法去获取实例对象的原型，而不是通过`__proto__`

```javascript
class Point {
  static toString () {
    console.log('hello word')
  }
}
```

上述`toString()`方法为`Point`类的静态方法

**私有属性和私有方法**

* 一般约定私有属性和私有方法前面加上`_`表示内部属性，但这是不安全的
* 使用 Symbol 值，在类内部使用 Symbol 值作为变量的名字，利用 Symbol 值的唯一性，可以保证该属性不可在第三方访问

```javascript
var foo = Symbol('foo')

class Foo {
  // 私有方法
  [foo] () {
    return 'hello'
  }
}
```

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


