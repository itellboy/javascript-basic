# Reflect

Reflect 对象提供了一系列拦截 JavaScript 的方法，与 proxy handlers 的方法相同。

## 方法

### `Reflect.apply(target, thisArgument, argumentsList)`

在指定调用方法，指定调用作用域，指定参数的前提下调用方法

```javascript
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// expected output: 1
```

 ### `Reflect.construct(target, argumentsList[, newTarget])`

以 argumentsList 为参数，调用 target 构造函数，创建一个 target 的实例。

如果指定了 newTarget，则新创建对象的原型对象为 newTarget.prototype

```javascript
function Foo() {}
function Bar() {}

var foo = Reflect.construct(Foo, [], Bar);
Object.getPrototypeOf(foo) === Bar.prototype; // true

// 等效于
var foo = Object.create(Bar.prototype)
Foo.apply(foo, args);
```

不同的是：

使用`Object.create()`创建对象，在构造函数内部`new.target`会指向`undefined`。

使用`Reflect.construct()`创建对象，在构造函数内部`new.target`会指向 target 或者 newTarget

### `Reflect.defineProperty(target, propertyKey, attributes)`

功能和`Object.defineProperty()`相似，如果属性被成功定义，返回`true`，否则返回`false`

### `Reflect.deleteProperty(target, propertyKey)`

删除对象属性，删除成功返回`true`，否则返回`false`

### `Reflect.get(target, key)`

相当于`target[key]`

### `Reflect.getOwnPropertyDescriptor(target, key)`

获取对象属性描述符

### `Reflect.getPrototypeOf(target)`

获取对象的原型对象

### `Reflect.has(target, key)`

和`in`运算符相同，判断对象是否含有 key 属性

### `Reflect.isExtensible(target)`

和`Object.isExtensible()`相同

### `Reflect.ownKeys(target)`

返回自身所有属性组成的数组

### `Reflect.preventExtensibles(target)`

阻止对象添加属性

### `Reflect.set(target, key, value)`

设置对象属性的值，成功返回`true`，否则返回`false`

### `Reflect.setPrototypeOf(target, newTarget)`

给对象设置新原型对象
