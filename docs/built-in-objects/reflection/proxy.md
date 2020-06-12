# Proxy

Proxy 对象能够为对象创建一个代理，从而拦截和重新定义对象的基础操作。

## 构造函数

通过`new Proxy(target, handler)`可以创建一个代理

- target：需要代理的目标对象
- handler：封装了一系列代理操作函数的对象

## 静态方法

### `Proxy.revocable(target, handler)`

创建一个可撤销的 Proxy 对象，参数与构造函数相同，返回一个对象，结构为`{"proxy": proxy, "revoke": revoke}`

proxy 为生成的代理对象，revoke 为撤销函数

一旦执行了 revoke 撤销函数，代理对象不可操作

## handler 对象

通过定义 handler 对象的方法可以实现一些具体的代理操作

### `handler.apply(target, thisArg, argumentList)`

函数的调用拦截，target 须为函数对象，否则报错

拦截会发生在：

- `proxy(...args)`
- `Object.prototype.call(proxy)`、`Object.prototype.apply(proxy)`
- `Reflect.apply(target)`

### `handler.construct(target, argumentsList[, newTarget])`

构造函数调用拦截，拦截发生在

- `new proxy(...args)`
- `Reflect.construct(target, argumentsList[, newTarget])`

### `handler.defineProperty(target, key, propDescriptor)`

拦截对象的`Object.defineProperty()`操作

拦截发生在：

- `Object.defineProperty()`
- `Reflect.defindProperty()`

### `handler.deleteProperty(target, key)`

拦截 delete 操作

拦截发生在：

- `delete proxy.bar`、`delete proxy['bar']`
- `Reflect.deleteProperty(target, key)`

### `handler.get(target, key[, receiver])`

拦截读取操作

拦截发生在：

- 属性访问：`proxy.bar`
- 原型链属性访问：`Object.create(proxy)[foo]`
- `Reflect.get()`

### `handler.getOwnPropertyDescriptor(target, key)`

拦截获取对象属性描述符操作

拦截发生在：

- `Object.getOwnPropertyDescriptor(target, key)`
- `Reflect.getOwnPropertyDescriptor(target, key)`

### `handler.getPrototypeOf(target)`

拦截获取对象原型对象操作

拦截发生在：

- `Object.getPrototypeOf(target)`
- `Reflect.getPrototypeOf(target)`
- `__proto__`
- `instanceof`

### `handler.has(target, key)`

拦截`in`操作符

拦截发生在：

- `foo in proxy`
- `foo in Object.create(proxy)`
- `with(proxy) { (foo); }`
- `Reflect.has(target, key)`

### `handler.isExtensible(target)`

拦截发生在：

- `Object.isExtensible(target)`
- `Reflect.isExtensible(target)`

### `handler.ownKeys(target)`

拦截发生在：

- `Object.getOwnPropertyNames(target)`
- `Object.getOwnPropertySymbols(target)`
- `Object.keys(target)`
- `Object.ownKeys(target)`

### `handler.preventExtensions(target)`

拦截发生在：

- `Object.preventExtensions(target)`
- `Reflect.preventExtensions(target)`

### `handler.set(target, key, value, receiver)`

拦截发生在：

- `proxy.bar = ''`
- `Object.create(proxy)[foo] = ''`
- `Reflect.set()`

### `handler.setPropertyOf(target, prototype)`

拦截发生在：

- `Object.setPropertyOf(target, prototype)`
- `Reflect.setPropertyOf(target, prototype)`