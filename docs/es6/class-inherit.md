# Class 的继承

Class 可以通过`extend`关键字实现类的继承

```javascript
class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

class ChildPoint extends Point {
  constructor (x, y, color) {
    super(x, y)
    this.color = color
  }
}
```

子类可以省略构造函数，如果声明了构造函数，必须在构造函数里面调用`super()`方法，而且必须在使用`this`之前调用，否则新建子类实例对象会报错

## super 关键字

### 作为方法使用

当`super`作为方法被调用时，只能出现在子类的构造函数中，出现在其他地方会报错

### 作为对象使用

在子类的其他方法使用`super`关键字的时候可以当做对象使用，可以直接调用父类中声明的方法

**在普通方法中使用**

`super`关键字出现在类定义的普通方法的时候，指向父类的原型，也就是`Parent.prototype`

在子类实例中，通过普通方法中的`super`调用父类的方法的时候，方法里面`this`指向子类实例

```javascript
class Point {
  constructor () {}
  print () {
    console.log(this.x)
  }
}

class ChildPoint extends Point {
  constructor (x) {
    super()
    this.x = x
  }
  to () {
    super.print()
  }
}

var cp = new ChildPoint(2)
cp.to() // 2
```

**在静态方法中使用**

`super`关键字出现在类定义的静态方法的时候，指向父类本身，也就是`Parent`

## 类的 prototype 和`__proto__`属性

Class 作为构造函数的语法糖，同时具有`prototype`和`__proto__`属性

类的继承主要是继承静态方法和普通方法

* 子类的`__proto__`属性指向父类，继承静态方法
* 子类`prototype`的`__proto__`只想父类的`prototype`属性，继承普通方法

```javascript
class Parent {}
class Child extends Parent {}

Child.__proto__ === Parent // true
Child.prototype.__proto__ === Parent.prototype // true
```

可以通过`Object.setPrototypeOf()`来实现类的继承

```javascript
class Parent {}
class Child {}

Object.setPrototypeOf(Child, Parent)
// 等同于
Child.__proto__ = Parent
Object.setPrototyptOf(Child.prototype, Parent.prototype)
// 等同于
Child.prototype.__proto__ = Parent.prototype
```

## 原生构造函数的继承

JavaScript 提供了一些原生的构造函数

* Array
* Object
* Regexp
* Error
* Date
* Function
* String
* Number
* Boolean

在 ES5 中，不能通过普通继承的方法`Object.create()`来继承原生构造函数，因为在实例化对象的时候，JavaScript 先生成子构造函数的`this`对象，然后把父类的属性赋值给`this`，由于原生构造函数的内部属性无法获取，所以原生构造函数的一些行为无法继承下来

而 ES6 的类不同，类在实例化的过程中先生成父类的`this`对象，然后通过子类的构造函数修饰`this`，使得父类的行为可以完整的继承下来

通过类的继承，我们可以定义一些带特殊功能的数据结构，在原生构造函数扩展自己的方法

```javascript
class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]);
  }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
x // [1, 2]
x.history // [[]]

x.commit();
x.history // [[], [1, 2]]

x.push(3);
x // [1, 2, 3]
x.history // [[], [1, 2]]

x.revert();
x // [1, 2]
```