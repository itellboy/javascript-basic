# 编程风格

良好的编程风格有助于团队的协同开发，这里主要参考 [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)。

## 1. 变量声明

### 1.1 使用`const`和`let`

所有的局部变量使用`const`或者`let`声明，默认使用`const`，当明确该变量在以后会被重新赋值的时候使用`let`，不再使用`var`。

### 1.2 一次只声明一个变量

```javascript
// good
let a = 1;
let b = 2;

// bad
let a = 1, b = 2;
```

### 1.3 需要的时候再声明，并尽可能初始化该变量

局部变量通常不会在其包含的块或类似块的构造的开始处声明，为了缩小变量的作用域，应当在该变量第一次使用的时候再声明

### 1.4 根据需要声明变量类型

在声明语句的上方添加 JavaScript 文档注释或者使用行内注释都是可行的，但是两者不能同时使用

```javascript
const /** number **/ data = 1;

/**
 * description.
 * @type {number}
 **/
const data = 1;
```

## 2. 数组字面量

### 2.1 使用尾部逗号

当最后一个元素和右括号之间有换行符的时候，在最后一个元素后面加上逗号

```javascript
// good
const list = [
  'cat',
  'dog',
];

// bad
const list = [
  'cat',
  'dog'
];
```

### 2.2 不要使用`Array`构造器创建数组

`Array`构造函数会因为传递参数的不同会产生不同的结果，使用字面量的形式来创建数组

```javascript
// bad
const a1 = new Array(x, y, z);
const a2 = new Array(x, y);
const a3 = new Array(x);
const a4 = new Array();
```

在上面代码中，会出现一些歧义。当`x`为一个整数的时候，`a3`会是一个包含`x`个`undefined`成员的数组；如果`x`为其他数字，则会抛出异常

```javascript
// good
const a1 = [x, y, z];
const a2 = [x, y];
const a3 = [x];
const a4 = [];
```

在定义一个定长度的数组的时候可以使用`new Array(length)`来定义

### 2.3 非数值属性

不要在一个数组里面定义和使用非数值的属性，除开`length`属性。如果要使用，请使用`Map`或者`Object`代替

### 2.4 解构

可以使用数组字面量来对数组进行解构，吧 rest 参数放在最后的位置，不需要使用的变量可以省略

```javascript
const [x, y, z, ...rest] = getArray();
const [a,, b,, c] = getArray();
```

可以在函数参数使用数组解构，如果参数是可选的，可以提供一个`[]`作为参数的默认值，成员的默认值放在左边

```javascript
function func([a = 2, b = 3] = []) { }
```

### 2.5 扩展运算符

使用扩展运算符`...`展开一个数组，并且可以代替一些数组原型的方法，`...`后面没有空格

```javascript
[...arr]; // instead of Array.prototype.slice.call(arr)
[...bar, ...foo]; // instead of bar.concat(foo)
```

## 3. 对象字面量

### 3.1 使用尾部逗号

当最后一个属性和右括号之间有换行符的时候，在最后一个属性后面加上逗号

### 3.2 不要使用`Object`构造器来创建对象

虽然`Object`没有`Array`那样混淆的问题，但还是不要使用`Object`来创建对象，直接使用`{}`来创建

### 3.3 不要混合使用带引号和不带引号的键值

```javascript
// bad
{
  width: 30,
  'maxWidth': 100,
}
```

### 3.4 计算属性名

计算属性名（e.g.,`['foo' + bar()]: '10'`）是被允许使用的，但要把它作为带引号的属性名（不能和不带引号的属性名混合使用），除非这个属性名是一个 symbol 值（e.g.,`[Symbol.Iterator]`）

枚举值也能被用作属性名，但是也不能和其他非枚举的属性名混合使用

### 3.5 方法简写

对象里面的方法可以使用`{method() { ... }}`简写，取代冒号后面跟`function`或者箭头函数的写法

```javascript
return {
  stuff: 'candy',
  method() {
    return this.stuff;  // Returns 'candy'
  },
};
```

简写方法里面的`this`指向当前对象自己，箭头函数里面的`this`指向对象外面的作用域

```javascript
class {
  getObjectLiteral() {
    this.stuff = 'fruit';
    return {
      stuff: 'candy',
      method: () => this.stuff,  // Returns 'fruit'
    };
  }
}
```

### 3.6 属性简写

在对象里面，属性可以被简写

```javascript
const foo = 1;
const bar = 2;
const obj = {
  foo,
  bar,
  method() { return this.foo + this.bar; },
};
assertEquals(3, obj.method());
```

### 3.7 解构赋值

对象的解构赋值可用于赋值语句的左侧，用来在一个对象里面解构出多个值

对象解构赋值能用在函数参数里面，但应该尽可能保持简洁：只有一层的简写属性。如果有更深层次的嵌套或者计算属性，则不可以使用参数解构。

左边解构参数的默认值可以写成`{str = 'some default'} = {}`而不是`{str} = {str: 'some default'}`，如果待解构的参数对象是可选的，必须使用`{}`对参数设置默认值

```javascript
/**
 * @param {string} ordinary
 * @param {{num: (number|undefined), str: (string|undefined)}=} param1
 *     num: The number of times to do something.
 *     str: A string to do stuff to.
 */
function destructured(ordinary, {num, str = 'some default'} = {})
```

### 3.8 枚举

在对象里面，枚举可以通过`@enum`注解来定义。在枚举对象被定义之后，它不能添加其他额外的属性。

枚举必须被序列化，并且所有的枚举值不能改变

```javascript
/**
 * Supported temperature scales.
 * @enum {string}
 */
const TemperatureScale = {
  CELSIUS: 'celsius',
  FAHRENHEIT: 'fahrenheit',
};

/**
 * An enum with two options.
 * @enum {number}
 */
const Option = {
  /** The option used shall have been the first. */
  FIRST_OPTION: 1,
  /** The second among two options. */
  SECOND_OPTION: 2,
};
```