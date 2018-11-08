# 数据类型

* Boolean
* String
* Number
* null, undefined
* Object
* Function
* Array
* Symbol
* BigInt

## Boolean

`true`表示“真”，`false`表示假

下列运算符会返回布尔值

* 前置逻辑运算符`!`
* 相等运算符`==`,`!=`,`===`,`!===`
* 比较运算符`>`,`<`,`>=`,`<=`

下列值在 JavaScript 中做真假运算时会自动转换为`false`

* `undefined`
* `null`
* `''`或者`""`
* `0`
* `NaN`
* `false`

## String

* 可以使用单引号`''`或者双引号`""`表示一个字符串，建议使用单引号
* 字符串本身是一个字符数组，可以通过下标访问字符串的里的每一个字符
* 有一个`length`属性表示字符串的长度
* `btoa()`任意值转为 Base64 编码
* `atob()`还原 Base64 编码

## Number

* JavaScript 所有数值都是利用 64 位浮点数形式存储，第 0 位为符号位，第 1 位到第 11 位为指数位，第 12 位到第 63 位为小数部分，`(2^-1023 ~ 2^1024)`

```
// 可以用下面方式表示 JavaScript 的数值
(-1)^符号位 * 1.xx...xx * 2^指数部分
```

**特殊数值**

* `NaN`表示一个非数值的值
* `Infinity`表示无穷大，超出 JavaScript 所表示的范围

**相关全局方法**

* `isNaN()`判断一个变量是不是`NaN`
* `parseInt()`将字符串转化为整数类型，删掉前导空格和前导 0 ，遇到第一个不是数字的字符结束
* `parseFloat()`将字符串转化为浮点类型
* `isFinite()`判断便是是否为正常的数值

## null, undefined

`null`表示一个空对象，转化为数值的时候为 0；`undefined`表示未定义，转化为数值的时候为`NaN`；两者转化为布尔值的时候都是`false`

因为 C 语言的`null`可以自动转化为 0，所以在设计 JavaScript，可以`null`也可以转化为 0

```javascript
Number(null) // 0
Number(undefined) // NaN
```

## Object

* “键值对”的集合，所有键名都是字符串，值可以是任意的 JavaScript 数据类型
* 可以使用点运算符或者方括号运算符进行取值，数值类型键名必须以方括号运算符取值

**属性的删除**

可以通过`delete`命令删除对象的属性，删除成功后返回`true`

**for...in**

可以通过`for...in`来遍历对象，下面是一个判断一个对象是否为空对象的例子

```javascript
function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}
```

## Array

* 特殊类型的对象，键名是自增长的数值
* `length`属性表示数组的长度

## Function

* 特殊类型的对象
* 是一个可以执行的方法，同时可以是一个数据类型

## typeof 运算符

在 JavaScript 中，可以使用`typeof`运算符输出变量的数据类型

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof true // "boolean"
typeof [] // "object"
typeof {} // "object"
typeof function () {} // "function"
typeof undefined // "undefined"
```

**最佳实践**

判断语句

```javascript
// bad
if (a) {
  // do something
}
// good
if (typeof a === 'undefined') {
  // do something
}
```