# Object

Object 是 JavaScript 的一种基本数据类型。

## 构造函数

### `Object([value])`

```javascript
let o = new Object();
o.foo = 42;

console.log(o);
// Object { foo: 42 }
```

::: tip 提示
建议直接使用字面量形式创建对象，即`const obj = { }`。
:::

## 静态属性

### `Object.length`

值为`1`

### `Object.prototype`

所有 Object 类型对象的原型对象

## 静态方法

### `Object.assign(target, ...sources)`

将源对象可枚举的属性复制到目标对象，返回修改后的目标对象。

```javascript
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

原始类型会被包装为对象，null 和 undefined 会被忽略。

```javascript
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);

console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

::: warning 注意
只有字符串的包装对象才可能有自身可枚举属性。
:::

### `Object.create(proto[, ...propertiesObject])`

使用指定对象作为原型创建新对象。

```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

### `Object.defineProperty(obj, propName, descriptor)`

在一个对象上面定义新属性，并返回修改后的对象。

**属性描述符**

数据描述符

- configurable：当该描述符为`true`的时候，该属性的描述符可以被改变并且该属性也可以被删除，默认为`false`。
- enumerable：当该描述符为`true`的时候，该属性为对象的可枚举属性，默认为`false`。
- value：对应该属性的值，默认为`undefined`。
- writable：当该描述符为`true`时，属性的值，也就是上面的`value`属性才能被赋值运算符`=`改变，默认为`false`。

存储描述符

- get：属性的 getter 函数，默认为`undefined`。当访问该属性时，会调用 getter 函数，返回该属性的值。
- set：属性的 setter 函数，默认为`undefined`。当属性的值被修改时调用，传入的参数为新修改的值。

### Object.defineProperties(obj, ...propertyObject)

为对象同时定义多个属性，返回修改后的属性。

### Object.entries(obj)

返回对象自身可枚举属性的键值对数组。

::: tip 提示
与`for...in`的区别是`for...in`会遍历原型链上的可枚举属性。
:::

_\*\*示例_

```javascript
const object1 = {
  a: "somestring",
  b: 42,
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

### `Object.freeze(obj)`

冻结一个对象，冻结后的对象不能再被修改。

### `Object.fromEntries(interable)`

将一组键值对的集合解析成对象，与`Object.entries()`相反。

```javascript
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

### `Object.getOwnPropertyDescriptor(obj, propName)`

获取对象上指定属性的属性描述符，属性不存在则返回`undefined`。

### `Object.getOwnPropertyNames(obj)`

返回一个由对象自身所有属性属性名组成的数组（包括不可枚举属性，但不包括 Symbol 作为属性名的属性）。

### `Object.getOwnPropertySymbols(obj)`

回一个给定对象自身的所有 Symbol 属性的数组。

### `Object.getPropertyOf(obj)`

返回指定对象的原型对象。

### `Object.is(value1, value2)`

比较两个值是否相等。与`==`和`===`有一些区别。

**示例**

```javascript
NaN === NaN; // false
Object.is(NaN, NaN); // true

0 === -0; //true
Object.is(0, -0); // false
```

### `Object.isExtensible(obj)`

判断对象是否可扩展（是否可以添加新属性），返回布尔值。

### `Object.isFrozen(obj)`

判断对象是否被冻结（不可扩展，所有属性不可配置，数据不可修改）。

### `Object.isSealed(obj)`

判断对象是否密封。

密封对象是指那些不可扩展的，且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象。

### `Object.keys(obj)`

返回一个包含所有给定对象自身可枚举属性名称的数组。

### `Object.perventExtensions(obj)`

防止对象的任何扩展。

### `Object.seal(obj)`

防止其他代码删除对象的属性。

### `Object.setPropertyOf(obj, prototypeObject)`

设置对象的原型对象。

::: tip 提示
尽量避免直接改变对象的原型对象，而是通过`Object.create()`去创建一个新对象。
:::

### `Object.values()`

返回一个包含所有给定对象自身可枚举属性值的数组。

## 实例方法

### `hasOwnProperty(propName)`

返回一个布尔值，表示对象自身是否含有该属性。

### `isPropertyOf(obj)`

返回一个布尔值，表示参数对象是否在实例对象的原型链上面。

```javascript
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

### `propertyIsEnumerable(props)`

返回一个布尔值，表是指定的属性在实例对象上面是否可以枚举。

```javascript
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable("property1"));
// expected output: true

console.log(array1.propertyIsEnumerable(0));
// expected output: true

console.log(array1.propertyIsEnumerable("length"));
// expected output: false
```

### `toLocalString(obj)`

调用`Object.prototype.toString()`。

### `toString(obj)`

返回对象的字符串表示。

```javascript
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Gabby");

Dog.prototype.toString = function dogToString() {
  return "" + this.name;
};

console.log(dog1.toString());
// expected output: "Gabby"
```

### `valueOf()`

返回对象的原始值。一般情况下 JavaScript 会自动调用它。

不同类型对象调用`valueOf()`的返回值

| 对象    | 返回值                            |
| ------- | --------------------------------- |
| Array   | 返回数组对象本身                  |
| Boolean | 布尔值                            |
| Date    | 返回时间戳                        |
| Number  | 返回数值                          |
| String  | 返回字符串                        |
| Object  | 返回对象本身                      |
|         | Math 和 Error 没有`valueOf()`方法 |
