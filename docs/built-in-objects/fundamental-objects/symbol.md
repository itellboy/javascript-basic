# Symbol

Symbol 在 JavaScript 里面是一种原始基本数据类型，每一个 Symbol 值都是唯一的。

通过`Symbol()`获取一个 Symbol 值，不支持`new Symbol()`调用。

## 获取对象的 Symbol 属性集合

`Object.getOwnPropertySymbols(obj)`

## 静态方法

### Symbol.for([str])

使用一个字符串生成一个全局共享的 Symbol 值

```javascript
var symbol = Symbol.key("foo");
```

### Symbol.keyFor(symbol: Symbol)

获取生成 Symbol 值的字符串

```javascript
var foo = Symbol.keyForm(symbol);
console.log(foo); // 'foo'
```

## 静态属性

### Symbol.length

Symbol 的长度，返回 0

### Symbol.prototype

Symbol 的原型对象

## 内建的 Symbol

### 迭代 Symbol

- `Symbol.iterator`

作为可迭代对象的 Symbol 属性，指定了该属性的对象可以使用`for...of`迭代访问

### 正则表达式 Symbol

- `Symbole.match`

`RegExp.prototype`的 Symbol 属性，被`String.prototype.match`调用

- `Symbole.search`

`RegExp.prototype`的 Symbol 属性，被`String.prototype.search`调用

- `Symbole.replace`

`RegExp.prototype`的 Symbol 属性，被`String.prototype.replace`调用

- `Symbole.split`

`RegExp.prototype`的 Symbol 属性，被`String.prototype.split`调用

### 其他 Symbol

- `Symbol.hasInstance`

被`instanceof`调用

```javascript
obj instanceof Obj;
// 等同于调用
Obj[Symbol.hasInstance](obj);
```

- `Symbol.isConcatSpreadable`

定义`Array.prototype.concat()`调用时是否展开对象或者数组。

- `Symbol.unscopables`
- `Symbol.species`
- `Symbol.toPrimitive`
- `Symbol.toStringTag`

## 面试

- 为什么不支持`new Symbol()`的调用？

围绕原始数据类型的包装对象从 ECMAScript 2015 不再受支持。因为保持向前兼容，保留以前的`new String()`、`new Boolean()`、`new Number()`方法

- 怎样阻止使用`new`创建实例？

在函数内部使用`new.target`，如果使用`new`调用函数，则`new.target`等于函数，否则等于`undefined`
