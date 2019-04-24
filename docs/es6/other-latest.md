# 其他新特性

## 1. ES2016(ES7)

* `Array.prototype.includes()`
* 指数运算符`**`

### 1.1 Array.prototype.includes()

判断数组中是否含有某个成员，包含返回`true`，不包含返回`false`

```javascript
var arr = [1, 2, 3, 4];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
```

ES5 实现

```javascript
arr.includes(a)
// 等价于
arr.indexOf(a) !== -1
```

### 1.2 指数操作符`**`

快速进行指数的运算

```javascript
a ** b
// 等价于
Math.pow(a, b)

```

## 2. ES2017(ES8)

* async/await
* `Object.values()`
* `Object.entries()`
* `String.prototype.padStart()`、`String.prototype.padEnd()`
* 函数参数允许逗号结尾
* `Object.getOwnPropertyDescriptors()`
* 新增`ShareArrayBuffer`和`Atomics`对象

### 2.1 async/await

Generator 函数的语法糖，使得 JavaScript 异步操作更加简单，可以使用同步的编码的方式实现异步功能

```javascript
async function fetchUserList() {
  // do async operator
  return await ajax();
}

const result  = fetchUserList()
```

### 2.2 Object.values()

返回参数对象自身可枚举的属性值的集合

```javascript
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)) // [1, 2, 3]
// 等同于
Object.keys(obj).map(item => obj[item])
```

### 2.3 Object.entries()

返回参数对象自身可枚举键值对`[key, value]`对的集合，该集合可以使用`for...of`遍历

```javascript
var obj = { a: 1, b: 2, c: 3 };
for (let [key, value] of Object.entries(obj) ) {
  console.log(`key: ${key}, value: ${value}`)
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
```

### 2.4 String.prototype.padStart()、String.ptototypes.padEnd()

填充字符串的头部和尾部，不改变原字符串，接受两个参数

* `stringLength`：填充后的字符串长度
* `string`：填充的字符串

```javascript
var str = 'c';
str.padStart(5, 'ab') // "ababc"
str.padEnd(5, 'ab') // "cabab"
```

### 2.5 函数的参数允许以逗号结尾

在函数参数改变的时候，减少版本库代码行数的变更

```javascript
fun(
  a,
  b,
+ c,
) {
  ...
}
```

上述函数在增加 c 参数的时候，版本库只增加一行代码，没有减少代码

### 2.6 Object.getOwnPropertyDescriptors()

返回对象自身所有属性描述对象的集合对象，返回对象的属性为原来对象的属性

```javascript
var obj = { a: 1 }

console.log(Object.getOwnPropertyDescriptors(obj))
// {
//   a: {
//     configurable: true,
//     enumerable: true,
//     value: 1,
//     writable: true,
//   }
// }
```

### 2.7 SharedArrayBuffer 对象、Atomics 对象

用于对内存进行操作

## 3. ES2018(ES9)

* `for...of`支持 async/await
* `Promise.finally()`
* Rest/Spread 语法支持
* 正则表达式命名捕获组
* 正则表达式反向断言
* 正则表达式 dotAll 模式
* 正则表达式 unicode 转义
* 非转义序列的模版字符串


## 4. ES2019(ES10)

* 行分隔符（）和段分隔符（）允许出现在字符串中
* JSON.stringify()
* `Array.prototype.flat()`、`Array.prototype.flatMap()`
* `String.prototype.trimStart()`、`Array.prototype.trimEnd()`
* `Object.fromEntries()`
* `Symbol.prototype.description`
* `String.prototype.matchAll()`
* `Function.prototype.toString()`
* 省略`catch`变量
* 新的基本数据类型`BigInt`