# Object 对象

## Object()

`Object`对象本身可以当作一个普通函数调用，也可以当成构造函数调用

**普通函数调用**

将任意值转换成对象

* 参数为对象，则直接将参数返回
* 参数为原始类型的值，返回原始类型的包装对象
* 参数为`null`或者`undefined`，返回空对象

```javascript
// 判断一个值是否为对象
function isObject (value) {
  return value === Object(value)
}
```

**构造函数调用**

生成新的对象，通常使用`var a = {}`

## 静态方法

### 属性相关

* `Object.keys(obj)`：返回对象自身的可枚举属性（不包括继承的属性）
* `Object.getOwnPropertyNames(obj)`：返回对象自身的所有属性（不包括继承的属性，包括不可枚举的属性）

### 对象属性模型相关

* `Object.getOwnPropertyDescriptor(obj, key)`：返回对象属性描述对象
* `Object.defineProperty(Obj, key, options)`：定义定义对象上的属性
* `Object.defineProperties(obj, props)`：定义对象上的多个属性

### 控制对象状态相关

* `Object.preventExtensions()`：禁止对象扩展
* `Object.isExtensiable()`：查询对象是否可扩展
* `Object.seal()`：禁止对象配置
* `Object.isSeal()`：查询对象是否可以配置
* `Object.freeze()`：冻结对象
* `Object.isFrozen()`：查询对象是否已经冻结

### 原型链相关

* `Object.create()`：指定原型对象和属性，返回一个新的对象
* `Object.getPropertyOf()`：获取对象的原型的标准方法
* `Object.setPropertyOf(obj, prototype)`：设置对象的原型，返回参数对象

**Object.create()**

接受一个对象作为第一个参数，以它为原型，返回一个实例对象，可以通过`Object.create()`方法从一个实例对象创造另一个实例对象，新对象完全继承参数对象的属性

```javascript
// 下面三种写法是等价的
var obj1 = Object.create({})
var obj2 = Object.create(Object.prototype)
var obj3 = new Object()
```

可以接受第二个参数，为属性描述对象，添加的属性作为生成实例对象自身的属性

## 实例方法

* `Object.prototype.valueOf()`：返回当前对象的值
* `Object.prototype.toString()`：返回当前对象字符串表现形式
* `Object.prototype.toLocalString()`：返回当前对象本地字符串表现形式
* `Object.prototype.hasOwnProperty(key)`：返回当前对象是含有有某个属性，包括自身的和继承的属性，包括不可枚举的属性，包括`Symbol`键名的属性
* `Object.prototype.isPrototypeOf(obj)`：判断当前对象是否为参数对象的原型
* `Object.prototype.PropertyIsEnumerable()`：判断对象某个属性是否可以枚举

## 实例属性

* `Object.prototype.__proto__`：指向当前对象的原型，也就是构造函数的`prototype`属性，可读写，前后下划线表示该属性为内部属性，建议使用`Object.getPrototypeOf()`和`Object.setPrototypeOf()`进行对象原型的操作

## in 运算符和 for...in 循环

可以使用`in`运算符检查对象是否含有某个属性（自身的，继承的，不可枚举的）

```javascript
'length' in [1, 2]
// true
```

`for...in`循环可以遍历对象的所有可枚举属性（自身的，继承的）

```javascript
var obj = Object.create({name: 'jack'})
obj.age = 12
for (var key in obj) {
  console.log(key)
}
// "age"
// "name"
```