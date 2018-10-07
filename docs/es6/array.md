# 数组的扩展

## 扩展运算符 ...

`rest`参数的逆运算

可以用扩展运算符`...`讲数组转化为逗号隔开的参数序列

```javascript
console.log(...[1,2,3,4]) // 1 2 3 4
```

作为`apply`函数的替代

```javascript
function add (a, b, c) {
  return a + b + c
}
var args = [1, 2, 3]

// ES5 的写法
add.apply(null, args)

// ES6 的写法
add(...args)
```

### 应用

深拷贝数组

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
```

合并数组与解构赋值结合

```javascript
let [arr, ...arr1] = [1, 2, 3, 4, 5]
arr // [1]
arr1 // [2, 3, 4, 5]

let arr2 = [...[1, 2], ...[3, 4]]
arr2 // [1, 2, 3, 4]
```

将字符串转化为真正的字符数组

```javascript
console.log([...'abcd']) // ["a", "b", "c", "d"]
```

实现了`Iterator`接口的对象，可以将类数组对象转化为真正的数组`arguments`,`nodeList`字符串都为类数组对象

```javascript
var doms = document.querySelectorAll('.element')
var domsArr = [...doms]
```

`Map`和`Set`结构，`Generator`函数返回的对象都可以用扩展运算符遍历，只要使用对象部署了 Iterator 接口，都可以被`...`遍历，否则报错

## Array.from()

* `Array.from`可以将两类对象转化为真正的数组：类似数组的对象 (`array-like-object`) 、可遍历对象 (`iterable`) ，包括 ES6 新增的`Set`,`Map`数据结构
* 也可以对真实数组对象实现完全复制
* 接受第二个参数，类似于数组的`map()`方法，将每个元素处理后返回，并且能够正确处理 32 位的 UTF-16 字符，可以避免将码点大于`0xFFFF`的字符当作两个字符的 bug


## Array.of()

* 将一组值转化为数组
* `Array()`的替代方案，`Array.of()`总是返回参数值组成的数组，而`Array()`再无参数，一个参数，多个参数返回的值是不一样的

```javascript
Array.of(1,2,3)	// [1,2,3]
```

## Array.prototype.copyWithin()

* 将数组内部的数据复制到其他位置，覆盖原有成员，会改变原数组
* 接受三个参数`target`、`start`、`end`，写入开始位置、开始读取位置、结束读取位置

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.copyWithin(3, 1, 5) // [1, 2, 3, 2, 3, 4, 5, 8]
```

## Array.prototype.find(),Array.prototype.findIndex()

* `find()`参数为一个回调函数，所有数组成员依次执行该函数，返回第一个符合该条件的成员，没有则返回`undefined`
* `findIndex()`返回第一个符合条件的成员的位置，如果都不符合，则返回`-1`

## Array.prototype.fill()

使用给定值填充数组，默认抹掉以前的数组成员

```javascript
[1, 2, 3].fill(7);
// [7, 7, 7]
```

可以用于数组的初始化，接受第二个参数和第三个参数，表示起始位置和结束位置

## Array.prototype.entries(),Array.prototype.keys(),Array.prototype.values()

返回一个遍历器对象，可以利用`for...of`遍历

## Array.prototype.includes()

返回一个布尔值，数组是否包含该成员，与字符串的`includes()`类似，ES2016 引入

## 数组的空位处理

* ES5 对于空位的处理
	* `forEach()`,`filter()`,`reduce()`,`every()`,`some()`都会跳过空位
	* `map()`会跳过空位，但会保留这个值
	* `join()`,`toString()`,都会讲空位视为`undefined`,而`undefined`和`null`都会被处理成空字符串

* ES6 明确将空位转为`undefined`
	* `Array.from()`会将数组的空位转化为`undefined`，扩展运算符`...`也是一样
	* `copyWithin()`会连着空位一起拷贝
	* `fill()`会将空位视为正常的数组位置
	* `for...in`遍历也会循环空位
	* `keys`,`values()`,`entries()`,`find()`,`findIndex`会将空位当作`undefined`处理