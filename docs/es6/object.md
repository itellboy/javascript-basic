# 对象的扩展(2)

## 对象的简介表示法
* ES6 允许直接写入变量和函数作为函数的属性和方法,属性名为变量名，属性值为变量的值

```javascript
const foo = 'bar';
const baz = {foo}
//等同于
const baz = {foo: foo}
```

* 如果某个方法的值是一个 `Generator` 函数，前面需要加 `*` 号

```javascript
const obj = {
  * m () {
    yield 'hello';
  }
}
```

## 属性名表达式

ES6 允许字面量定义对象时，把表达式放在方括号内作为属性名

```javascript
const foo = 'bar';
const baz = {
  abc: 'hello',
  [foo]: 'world'
}
```

* 同样也适用于定义属性方法名

## 方法的 name 属性
返回函数名

## Object.is(a, b)
比较两个值是否相等

与 `===` 的区别

```javascript
+0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

## Object.assign()
用于对象的合并

* 对对象只实行浅拷贝
* 同名属性进行替换
* 数组会当作对象进行处理
* 只能进行值的复制，如果要复制的是一个取值函数，那么将求值后再复制

## 常见用途

* 为对象添加属性
* 为对象添加方法
* 克隆对象
* 合并多个对象
* 为属性指定默认值

## 属性的可枚举性和遍历
### 可枚举性
对象的每个属性有一个描述对象 `Descriptor` ，来控制属性的行为，可以通过 `Object.getOwnPropertyDescriptor()` 来获取某对象的某属性的描述对象

通常有四个值+两个方法


* `value`	//值
* `writable`	//可写
* `enumerable`	//可枚举
* `configuragle`	//可配置
* `getter`	//getter函数
* `setter`	//setter函数

如果一个属性的 `enumberable` 为 `false` ，那么这个属性是不可枚举的，下面四个方法会忽略

* `for...in`
* `Object.keys()`
* `JSON.stringify()`
* `Object.assign()`

`es6` 规定，所有 `Class` 的原型的方法都是不可枚举的

### 属性的遍历
`es6`共有5种方法可以遍历对象的属性

* `for...in`	//遍历对象自身的和继承的可枚举属性（不包括 `Symbol属性` ）
* `Object.keys()`	//返回一个数组，包含对象自身（不含继承）所有可枚举属性（不包含`Symbol`属性）的键名
* `Objet.getOwnPropertyNames(obj)`	//返回一个数组，包含对象自身的所有属性，（不含`Symbol`属性但是包括不可枚举属性）的键名
* `Object.getOwnPropertySymbols()`	//返回一个数组，包含对象自身的所有`Symbole`属性的键名
* `Reflect.ownKeys(obj)`	//返回一个数组，包含对象自身的所有键名，包括 `Symbol` 属性和不可枚举属性

### 遍历遵循以下规则

* 首先遍历所有的数值键，按照数值升序排序
* 其次遍历所有的字符串键，按照加入时间升序排序
* 最后遍历所有的`Symbol`键，按照加入时间排序

## Object.getOwnPropertyDescpriptors()
ES2017 引入该方法返回指定对象所有自身属性(非继承)的描述对象

## ____proto____ 属性,Object.setPrototypeOf(),Object.getPrototypeOf

### ____proto____ 属性
指向原型对象的 `prototype` 属性，ES6 建议只在浏览器部署该属性，而且建议不直接使用该属性

### Object.setPrototypeOf()

作用与 `__proto__` 相同，可以用来设置一个对象的原型，为 ES6 推荐设置对象原型的方法

### Object.getPrototypeOf()
读取一个对象的原型对象

## super 关键字


* ES6 规定 `super` 指向当前对象的原型对象
* `super` 只能用在对象的方法当中，用在其他地方都会报错，目前只有对象方法的简写方法才能够让 `JavaScript` 引擎确认定义的是对象的方法
* `super.foo()` 相当于 `Object.getPrototypeOf(this).foo`

## Object.keys(), Object.values(), Object.entries()
