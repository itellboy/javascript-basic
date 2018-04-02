## Symbol
* `JavaScript`第七种数据类型，表示独一无二的值
* `Symbol`值通过`Symbol函数`生成，对象的属性可以是字符串类型，也可以是`Symbol`类型
* 调用`Symbol函数`不能使用`new`命令，接受一个字符串作为函数的参数，主要是对`Symbol`值的描述，在控制台显示
* `Symbol`值不能参与运算
* `Symbol`可以转化为布尔值，但是不能转化为数值
* `Symbol`不是私有属性

#### 作为属性名的`Symbol`
* 每个`Symbol`值都是唯一的，意味着`Symbol`可以作为标识符


```javascript
let mySymbol = Symbol();
//第一种写法
let a = {};
a[mySymbol] = 'hello';
//第二种写法
let a = {
	[mySymbol]: 'hello'
}
//第三种写法
let a = {};
Object.defineProperty(a, mySymbol, {value: 'hello'});

```
* `Symbol`作为属性名时，不能用点运算符

#### 实例：消除魔术字符串
> 魔术字符串：在代码中多次出现，与代码形成强耦合的某一具体的字符串或值。

在代码编写过程中，尽量用`Symbol`值来代替魔术字符串

#### 属性名的遍历
* 通过`Object.getOwnPropertySymbols`和`Reflect.ownKeys()`可以获取对象的`Symbol`属性
* 可以利用`Symbol`属性的特性可以定义一些非私有，但又只希望用于内部的方法

#### `Symbol.for()`,`Symbol.keyFor()`
* 可以通过`Symbol.for()`方法定义相同的`Symbol`值，以相同`key`生成的`Symbol`值为同一个 `Symbol`值
* `Symbol.keyFor()`，参数为一个 `Symbol`值，返回一个已经登记`Symbol`值的`key`，简单来说，利用`Symbol()`生成的值，`key`都不相同