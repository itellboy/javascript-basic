# Reflect

为 JavaScript 操作对象提供更加方便的 api

* 将一部分`Object`对象上面的方法转移到`Refelct`对象上面，并且使方法的返回结果更加合理，比如`Object.defineProperty()`如果创建不成功则抛出错误，而`Reflect.defineProperty()`创建不成功则返回`false`
* 统一编程风格，将`attr in obj`、`delete obj[attr]`这些操作全部变成函数形式的操作风格，比如`Reflect.has(obj, attr)`、`Reflect.deleteProperty(obj, attr)`
* `Reflect`对象的方法和`Proxy`对象的方法一一对应，方便在使用`Proxy`进行某个代理的时候，可以直接利用`Reflect`对象同名的方法直接完成默认行为

## 静态方法

* Reflect.apply(func, thisArg, args)
* Reflect.construct(target, args)
* Reflect.get(target, name, receiver)
* Reflect.set(target, name, value, receiver)
* Reflect.defineProperty(target, name, desc)
* Reflect.deleteProperty(target, name)
* Reflect.has(target, name)
* Reflect.ownKeys(target)
* Reflect.isExtensible(target)
* Reflect.preventExtensions(target)
* Reflect.getOwnPropertyDescriptor(target, name)
* Reflect.getPrototypeOf(target)
* Reflect.setPrototypeOf(target, prototype)

**Reflect.get(target, name, receiver)**

返回`target`对象的`name`属性，没有返回`undefined`

如果`name`属性设置了取值函数（getter），取值函数的`this`绑定`receiver`

```javascript
var foo = {
  a: 1,
  get b () {
    return this.a
  }
}

var obj = {
  a: 2
}

Reflect.get(foo, 'a') // 1
Reflect.get(foo, 'b', obj) // 2
```

**Reflect.set(target, name, value ,receiver)**

设置`target`对象的`name`属性值为`value`

**Reflect.has(target, name)**

判断`target`对象是否含有`name`属性，相当于`name in target`

```javascript
var foo = {
  a: 1,
}
Reflect.has(foo, 'a') // true
```

**Reflect.deleteProperty(target, name)**

删除`target`对象的`name`属性，如果属性删除成功或者属性不存在，返回`true`

**Reflect.constructor(target, args)**

等同于`new target(...args)`，提供了一种不使用`new`关键字生成实例的方法

**Reflect.getPropertyOf(target)**

读取`target`对象的`__proto__`属性，等同于`Object.getPropertyOf(target)`，区别是如果参数不是对象`Reflect.getPropertyOf(target)`会报错

```javascript
Object.getPropertyOf(1) // Number
Reflect.getPropertyOf(1) // 报错
```

**Reflect.setPropertyOf(target, newProto)**

设置对象的原型对象，等同于`Object.setPrototypeOf(obj, newProto)`，返回的布尔值表示是否设置成功

**Reflect.apply(func, thisArg, args)**

替代`Function.prototype.apply.call(func, thisArg, args)`

一般来说对于方法绑定`this`可以直接使用`fn.apply(obj, args)`，但是如果`obj`自己定义了`apply`方法，就要使用`Function.prototype.apply.call(func, thisArg, args)`，以后可以统一使用`Reflect.apply(func, thisArg, args)`替代

**Reflect.defineProperty(target, propertyKey, attributes)**

为对象定义属性，替代`Object.defineProperty()`

**Reflect.getOwnPropertyDescriptor(target, propertyKey)**

获取对象属性的描述对象，替代`Object.getOwnPropertyDescriptor()`

**Reflect.isExtensiable(target)**

返回`target`对象是否可扩展，代替`Object.isExtensiable(target)`


**Reflect.preventExtensions(target)**

禁止对象扩展，代替`Object.preventExtensions(target)`

**Reflect.ownKeys(target)**

返回对象的所有属性，等于`Object.getOwnPropertyNames()`和`Object.getOwnPropertySymbols()`之和