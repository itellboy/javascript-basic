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

类的声明不存在变量提升，必须在声明之后才能调用

```javascript
new Point()
class Point {}
```

类的`name`属性值为写在`class`关键字后面的变量名

```javascript
class Point {}
Point.name // "Point"
```

类和模块内部，默认使用严格模式

## 构造函数

Class 中默认会有一个空的`constructor`方法，用来实例化对象调用，可以在`constructor`方法中做一些初始化的操作

Class 必须使用`new`关键字实例化，不能当做普通函数调用，这一点和构造函数是有区别的

```javascript
class Point {}
// 等同于
class Point {
  constructor() {}
}

Point() // 报错
```

## 实例属性

可以在 Class 内部的 constructor 方法里面定义实例属性

```javascript
class Point {
  constructor(x) {
    this.x = x
  }
}
```

## 实例方法

Class 所有的方法都会定义在类的`prototype`对象上面，方法与方法之后不能用逗号隔开，所有实例对象可以使用

Class 定义的方法都是不可枚举的，ES5 构造函数的`prototype`属性上面定义方法是可枚举的

```javascript
class Point {
  constructor() {}
  print() {
    console.log('print')
  }
  to() {
    console.log('to')
  }
}
Object.keys(Point) // []
// 构造函数
var Obj = function() {}
Obj.prototype.to = function() { console.log('to') }
Object.keys(Obj) // ["to"]
```

可以利用`Object.assign()`方法来增加类的实例方法

```javascript
Object.assign(Point.prototype, {
  a() {},
  b() {},
})
```

## 静态方法

可以通过在定义方法的时候在方法名前面加上`static`关键字，来定义类的静态方法，可以通过`className.staticFun()`的形式调用

ES6 规定类的内部只有静态方法，没有静态属性

```javascript
class Point {
  static to() {
    console.log('hello world')
  }
}
var p = new Point()
p.to() // 报错
```

## 类属性的存值函数和取值函数

可以在类的内部使用`get`和`set`关键字来对某个属性设置存值函数和取值函数，来拦截该属性的读写操作

```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

## new.target 属性

在构造函数内部使用，表示`new`命令作用于哪个构造函数，如果没有使用`new`命令，`new.target`返回`undefined`

```javascript
class Point {
  constructor() {
    if (new.target === undefined){
      throw new Error ("必须使用 new 命令实例化")
    }
  }
}
```


