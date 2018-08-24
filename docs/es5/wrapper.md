# wrapper 包装对象

## 概述

JavaScript 三种基本数据类型，布尔值、字符串、数值，在一定情况下会自动转化为对象，也就是包装对象

所谓包装对象，也就是分别与布尔值、字符串、数值对应的`Boolean`、`String`、`Number`对象，这三个原生对象可以把原始数据类型的值包装成对象使用

JavaScript 这么做的目的是为了践行一切事物可以当作对象处理的思想，可以用处理对象的思维处理任何变量

```javascript
// 也可以去掉 new 生成包装对象
var v1 = new Boolean(true)
var v2 = new String('hello world')
var v3 = new Number(123)

v1 === true // false
v2 === 'hello word' // false
v3 === 123 // false
```

## 实例方法

从 `Object` 对象继承而来

**valueOf()**

返回包装对象原始的值

**toString()**

返回包装对象的字符串表达形式

## 原始类型与实例对象的自动转换

对于原始类型的值，JavaScript 会自动将其转换为包装对象，可直接使用包装对象的属性和方法

举个🌰

```javascript
var a = '123'
a.length // 3
```

`a`变量是一个字符串，它本身是没有任何属性和方法，在执行的过程中，JavaScript 引擎会将`a`变量转化成一个`String`类型的包装对象，`String`对象包含很多可以操作字符串的方法和属性，所以可以直接使用`a.length`

* 可以通过在包装对象的`prototype`属性上面添加自定义方法和属性，与之对应的基本数据类型的变量就可以使用自定义的方法和属性