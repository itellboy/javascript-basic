# Function

JavaScript 的每一个函数都是一个 Function 对象。

```javascript
(() => {}).constructor === Function; // true
```

## 构造函数

可以通过`new Function()`创建一个函数。

**示例**

```javascript
const func = new Function("a", "b", "return a + b");
func(1, 2); // 3
```

::: tip 提示
一般使用字面量来直接创建函数，例如`const func = () => {}`
:::

## 属性和方法

Function 没有自己属性和方法。

## Function 原型对象

### Function.prototype.length

获取函数接受参数个数。

### Function.prototype.constructor

构造函数指向 Funciton 本身。

### Function.prototype.apply(thisArg[, argsArray])

指定`this`上下文调用函数。

**示例**

```javascript
const cat = {
  name: "cat",
};
const dog = {
  name: "dog",
};
const getName = function() {
  console.log(this.name);
};
getName.apply(cat); // cat
getName.apply(dog); // dog
```

### Function.prototype.call(thisArg[, arg1][, arg2])

方法功能和`Function.prototype.apply()`一样， 只是参数不同

### Function.prototype.bind(thisArg)

创建一个新的函数，并返回。新函数的执行上下文，也就是`this`会指向`bind()`的第一个参数。

**示例**

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

### Function.prototype.toString()

覆盖了`Object.prototype.toString()`方法，获取函数的实现源码的字符串。
