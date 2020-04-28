# Object

`Object()`可以创建一个对象，同`new Object()`。

::: tip 提示
建议直接使用字面量形式创建对象，即`const obj = { }`。
:::

## 构造函数属性

### Object.length

值为`1`

### Object.prototype

所有 Object 类型对象继承的对象

## 静态方法

### Object.assign(target, ...sources)

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

### Object.create(proto[, ...propertiesObject])

使用指定对象作为原型创建新对象。

```javascript
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

### Object.defineProperty(obj, propName, descriptor)

### Object.defineProperties()

### Object.entries()

### Object.freeze()

### Object.getOwnPropertyDescriptor()

### Object.getOwnPropertyNames()

### Object.getOwnPropertySymbols()

### Object.getPropertyOf()

### Object.is()

### Object.isExtensible()

### Object.isFrozen()

### Object.isSealed()

### Object.keys()

### Object.perventExtensions()

### Object.seal()

### Object.setPropertyOf()

### Object.values()
````
