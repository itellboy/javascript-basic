# 编程风格

良好的编程风格有助于团队的协同开发，这里是针对 [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) **语言特性章节**的翻译，持续修正中，仅供参考。

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

局部变量通常不会在其包含的块或类似块的构造的开始处声明，为了缩小变量的作用域，应当在该变量第一次使用的时候再声明。

### 1.4 根据需要声明变量类型

在声明语句的上方添加  JSDoc 注释或者使用行内注释都是可行的，但是两者不能同时使用。

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

当最后一个元素和右括号之间有换行符的时候，在最后一个元素后面加上逗号。

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

`Array`构造函数会因为传递参数的不同会产生不同的结果，使用字面量的形式来创建数组。

```javascript
// bad
const a1 = new Array(x, y, z);
const a2 = new Array(x, y);
const a3 = new Array(x);
const a4 = new Array();
```

在上面代码中，会出现一些歧义。当`x`为一个整数的时候，`a3`会是一个包含`x`个`undefined`成员的数组；如果`x`为其他数字，则会抛出异常。

```javascript
// good
const a1 = [x, y, z];
const a2 = [x, y];
const a3 = [x];
const a4 = [];
```

在定义一个定长度的数组的时候可以使用`new Array(length)`来定义

### 2.3 非数值属性

不要在一个数组里面定义和使用非数值的属性，除开`length`属性。如果要使用，请使用`Map`或者`Object`代替。

### 2.4 解构

可以使用数组字面量来对数组进行解构，吧 rest 参数放在最后的位置，不需要使用的变量可以省略。

```javascript
const [x, y, z, ...rest] = getArray();
const [a,, b,, c] = getArray();
```
。
可以在函数参数使用数组解构，如果参数是可选的，可以提供一个`[]`作为参数的默认值，成员的默认值放在左边。

```javascript
function func([a = 2, b = 3] = []) { }
```

### 2.5 扩展运算符

使用扩展运算符`...`展开一个数组，并且可以代替一些数组原型的方法，`...`后面没有空格。

```javascript
[...arr]; // instead of Array.prototype.slice.call(arr)
[...bar, ...foo]; // instead of bar.concat(foo)
```

## 3. 对象字面量

### 3.1 使用尾部逗号

当最后一个属性和右括号之间有换行符的时候，在最后一个属性后面加上逗号。

### 3.2 不要使用`Object`构造器来创建对象

虽然`Object`没有`Array`那样混淆的问题，但还是不要使用`Object`来创建对象，直接使用`{}`来创建。

### 3.3 不要混合使用带引号和不带引号的键值

```javascript
// bad
{
  width: 30,
  'maxWidth': 100,
}
```

### 3.4 计算属性名

计算属性名（e.g.,`['foo' + bar()]: '10'`）是被允许使用的，但要把它作为带引号的属性名（不能和不带引号的属性名混合使用），除非这个属性名是一个 symbol 值（e.g.,`[Symbol.iterator]`）。

枚举值也能被用作属性名，但是也不能和其他非枚举的属性名混合使用。

### 3.5 方法简写

对象里面的方法可以使用`{method() { ... }}`简写，取代冒号后面跟`function`或者箭头函数的写法。

```javascript
return {
  stuff: 'candy',
  method() {
    return this.stuff;  // Returns 'candy'
  },
};
```

简写方法里面的`this`指向当前对象自己，箭头函数里面的`this`指向对象外面的作用域。

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

在对象里面，属性可以被简写。

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

对象的解构赋值可用于赋值语句的左侧，用来在一个对象里面解构出多个值。

对象解构赋值能用在函数参数里面，但应该尽可能保持简洁：只有一层的简写属性。如果有更深层次的嵌套或者计算属性，则不可以使用参数解构。

左边解构参数的默认值可以写成`{str = 'some default'} = {}`而不是`{str} = {str: 'some default'}`，如果待解构的参数对象是可选的，必须使用`{}`对参数设置默认值。

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

枚举必须被序列化，并且所有的枚举值不能改变。

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

## 4. 类

### 4.1  构造器

类构造器是可选的，但是子类的构造器是必须的，因为要在子类的构造器里面调用`super()`，接口应该在构造器中声明非方法属性。

### 4.2 字段

在构造方法里面设置一个类对象的所有字段（除开方法的属性）。

* 为不会再被赋值的字段添加`@const`注解。
* 添加正确的可见注解`@private`、`@protected`、`@package`，并且添加了`@private`注解的字段名称以`_`结尾。
* 字段不会被设置在类对象的原型上面。

```javascript
class Foo {
  constructor() {
    /** @private @const {!Bar} */
    this.bar_ = computeBar();

    /** @protected @const {!Baz} */
    this.baz = computeBaz();
  }
}
```

> 再构造器调用完成之后属性不能再被添加或者删除，这样有利于 JavaScript 引擎对于代码的优化。

### 4.3 计算属性

在一个类里面，当属性是一个 symbol 值的时候，才能使用计算属性。

定义在类里面的`Symbol.iterator`方法用来处理迭代的逻辑。

symbol 应该尽量少的使用

> 小心使用一些在编译的时候没有 polyfill 的 symbol 值(e.g.,`Symbol.isConcatSpreadable`)，它们在老版本的浏览器不会正常运行。

### 4.4 静态方法

在不影响可读性的情况下，宁可使用模块本地函数，也不要使用私有静态方法。

静态方法只能够在类内部自己调用。

静态方法不能在包含动态实例的变量上面调用，这些变量可能是构造函数，也可能是子类（如果已经调用了，必须加上`@nocollapse`注解）,并且不能直接在没有定义它自己方法的子类里面调用。

Disallowed:

```javascript
// bad
class Base { /** @nocollapse */ static foo() {} }
class Sub extends Base {}
function callFoo(cls) { cls.foo(); }  // discouraged: 不能动态的调用静态方法
Sub.foo();  // Disallowed: don't call static methods on subclasses that don't define it themselves
```

### 4.5 不要直接操作`prototype`

`class`关键字允许比定义原型属性更清晰、更可读的类定义。

普通的实现代码没有处理这些对象的业务，尽管它们对于定义类仍然很有用，混合和修改对象的原型是被明确禁止的。

**注意**：一些框架的代码（比如 Angular）可能需要使用`prototype`，不应该使用更糟糕的变通方法来避免这样做。

### 4.6 Getter and Setter

不要使用 JavaScript 的 getter 和 setter 属性。它们会让人感觉很惊讶，难以推理，并且在编译器中的支持是有限的。使用普通的方法去替代它。

**注意**：有一些无法避免使用 getter 和 setter 的情况（比如，Angular 的数据绑定）。仅仅在这些情况下，getter 和 setter 才可以被小心的使用。并且要使用带上`get`和`set`关键字的简写方法来定义。或者也使用Object.defineProperties()`（不是`Object.defineProperty()`，会影响到属性的重命名）来定义 getter 和 setter 方法。getter 方法不能改变观察中的状态。

```javascript
// bad
class Foo {
  get next() { return this.nextId++; }
}
```

### 4.7 重写 toString

在保证总是成功执行并且没有副作用的情况下，`toString()`方法可以被重写。

> 特别要注意，在 toString 里面调用其他方法，可能由于异常条件导致无限循环。

### 4.8 接口

接口通过添加`@interface`或者`@record`注解来声明。

使用`@record`注解的接口声明能够被一个对象或者一个类显式地（即`@implements`）和隐式地实现。

接口里面所有非静态方法的方法体必须是空的。字段必须在构造函数里面声明为未初始化的成员。

```javascript
/**
 * Something that can frobnicate.
 * @record
 */
class Frobnicator {
  constructor() {
    /** @type {number} The number of attempts before giving up. */
    this.attempts;
  }

  /**
   * Performs the frobnication according to the given strategy.
   * @param {!FrobnicationStrategy} strategy
   */
  frobnicate(strategy) {}
}
```

### 4.9 抽象类

合适的时候使用抽象类。抽象类或者抽象方法必须添加`@abstrct`的注解。

## 5. 函数

### 5.1 顶层函数

顶层函数可以直接被定义在`exports`对象上面，或者定义为局部函数，然后选择性的导出。

```javascript
/** @param {string} str */
exports.processString = (str) => {
  // Process the string.
};
```

```javascript
/** @param {string} str */
const processString = (str) => {
  // Process the string.
};

exports = {processString};
```

### 5.2 嵌套函数和闭包

函数里面能够嵌套定义函数，函数的名称使用`const`定义。

### 5.3 箭头函数

箭头函数为嵌套函数提供了一个简洁的语法声明和容易理解的`this`作用域。尽可能使用箭头函数而不是`funciton`关键字，特别是在嵌套函数里面。

使用箭头函数，避免`f.bind(this)`、`const self = this`这种写法来修改`this`的指向。箭头函数作为回调函数的时候非常有用，因为它可以显示的指定需要传递的参数，而绑定的回调函数直接传递所有的参数。

箭头函数的左侧可以包含零个或者多个参数。如果只有一个不可分解的参数，则包裹参数的括号则是可省略的。使用括号时，可以指定内联参数类型。

> 尽管只有一个参数也保持使用括号，这样可以避免出现增加参数但忘记增加括号的情况，在这种情况下，可能会出现一些预期之外的结果。

箭头函数的右边是函数体。默认情况下，函数体是一个块语句（用花括号扩起来的零个或者多个语句）。如果程序在逻辑上需要返回一个值，或者在函数和方法调用之前使用`void`（使用`void`确保返回一个`undefined`，防止值泄漏，并传达意图）函数体也可以隐式的返回一个单行语句。返回一个单行语句可以提高程序的可读性。

例子：

```javascript
/**
 * Arrow functions can be documented just like normal functions.
 * 箭头函数的文档格式和普通函数的文档是一样的。
 * @param {number} numParam A number to add.
 * @param {string} strParam Another number to add that happens to be a string.
 * @return {number} The sum of the two parameters.
 */
const moduleLocalFunc = (numParam, strParam) => numParam + Number(strParam);

// Uses the single expression syntax with `void` because the program logic does
// not require returning a value.
// 使用带`void`的单行语句写法，因为程序逻辑上不要求返回一个值
getValue((result) => void alert(`Got ${result}`));

class CallbackExample {
  constructor() {
    /** @private {number} */
    this.cachedValue_ = 0;

    // For inline callbacks, you can use inline typing for parameters.
    // Uses a block statement because the value of the single expression should
    // not be returned and the expression is not a single function call.
    // 对于内联回调的参数可以使用内联类型
    getNullableValue((/** ?number */ result) => {
      this.cachedValue_ = result == null ? 0 : result;
    });
  }
}
```

### 5.4 Generators

Generator 可以支持很多有用的抽象，可以根据需要使用。

在`function`关键字后面附加一个`*`，并且与函数名之间用一个空格隔开，来定一个 Generator 函数。当使用委托 yield 时，在`yield`关键字前面附加一个`*`

```javascript
/** @return {!Iterator<number>} */
function* gen1() {
  yield 42;
}

/** @return {!Iterator<number>} */
const gen2 = function*() {
  yield* gen1();
}

class SomeClass {
  /** @return {!Iterator<number>} */
  * gen() {
    yield 42;
  }
}
```

### 5.5 参数及返回值类型

函数的参数及返回值类型通常应该使用  JSDoc 注释记录。

#### 5.5.1 默认参数

在参数列表中，使用等于操作符的可选参数是被允许的。可选参数的等于号的两边都必须有空格，并且命名和必填参数一样（即不要使用`opt_`的前缀）。可选参数的  JSDoc 跟在必选参数后面，并且在类型标注上面使用`=`后缀。可选参数不要使用产生可见副作用的初始值。具象函数的所有可选参数必须要有默认值，尽管这个值是`undefined`。与之相反的是，抽象或者接口方法必须省略默认的参数值。

```javascript
/**
 * @param {string} required This parameter is always needed.
 * @param {string=} optional This parameter can be omitted.
 * @param {!Node=} node Another optional parameter.
 */
function maybeDoSomething(required, optional = '', node = undefined) {}

/** @interface */
class MyInterface {
  /**
   * Interface and abstract methods must omit default parameter values.
   * 接口和抽象方法必须省略默认值
   * @param {string=} optional
   */
  someMethod(optional) {}
}
```

尽可能少的使用默认参数。当有需要一些没有自然顺序的可选参数的时候，可以使用函数参数解构取代。

> 与 python 默认参数不同，JavaScript 的默认参数允许使用一个新的可变对象作为初始值（比如`{}`或者`[]`）。因为初始值只有在使用默认值的时候才会被计算。

> 提示：虽然可以使用任意包括函数表达式作为函数参数的默认值，但是这些初始值应该尽可能保持简单。避免暴露共享可变状态的初始化器，因为它们很容易在函数调用之间引入意外的耦合。

#### 5.5.2 Rest 参数

使用 Rest 参数避免访问`arguments`，在 JSDoc 中，Rest 参数使用一个`...`前缀来标注类型。Rest 参数必须在参数列表的最后面。在`...`和参数名之间没有空格。不要使用`var_args`命名 Rest 参数。不要使用局部变量或者`arguments`参数命名参数，这些命名会混淆内建名称。

```javascript
/**
 * @param {!Array<string>} array This is an ordinary parameter.
 * @param {...number} numbers The remainder of arguments are all numbers.
 */
function variadic(array, ...numbers) {}
```

### 5.6 泛型

必要时，在函数或者方法定义之上的 JSDoc 中使用`@template TYPE`声明泛型函数和方法。

### 5.7 延展操作符

函数可以使用延展操作符（`...`）调用。当一个数组或迭代被拆分成一个可变参数函数的多个参数时，使用延展操作符代替`Function.prototype.apply`。在`...`后面没有空格。

```javascript
function myFunction(...elements) {}
myFunction(...array, ...iterable, ...generator());
```