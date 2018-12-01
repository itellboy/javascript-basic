# Array 对象

生成一个 Array 对象

```javascript
// 生成一个空数组
var arr = new Array(); // []

// 生成一个 3 个成员的数组
var arr = new Array(3); // [ empty x 3]

// 可变参数传入直接生成一个可变参数成员的数组
var arr = new Array(1,2); // [1, 2]

// good
var arr = [1,2];
```

## 静态方法

**Array.isArray()**

静态方法，用于判断一个对象是否为数组，返回布尔值

## 实例方法

**valueOf, toString()**

`valueOf()`方法返回数组本身
`toString()`方法返回数组的字符串表示,成员默认以逗号隔开

```javascript
[1, 2, 3].valueOf(); // [1, 2, 3]

[1, 2, 3].toString(); // "1,2,3"
```

**push(), pop()**

`push()`用于向数组尾部添加一个成员，返回添加的成员，改变原数组
`pop()`用于删除数组尾部的成员，返回删除的成员，改变原数组

```javascript
var arr = [1, 2, 3];

arr.push(4); // 6
arr // [1, 2, 3, 4]

arr.pop(); // 4
arr // [1, 2, 3]
```

使用`push()`和`pop()`可以构成“先进后出”的“栈”数据结构

**shift(), unshift()**

`shift()`用于删除数组的第一个成员，返回该成员，改变原数组
`unshift()`在数组的第一个成员位置插入数据，返回改编后的数组长度，改变原数组

```javascript
var arr = [1, 2, 3];

arr.shift(); // 1
arr // [2, 3]

arr.unshift(4); // 3
arr // [3, 2, 3]
```

可以利用`push()`和`shift()`构成“先进先出”的“队列”数据结构

**join()**

传入一个字符串作为参数，将数组成员以参数字符串作为分隔符进行连接，返回拼接后的字符串，默认为逗号

```javascript
var arr = [1, 2, 3];

arr.join(); // "1,2,3"
arr.join('|'); // "1|2|3"
```

**concat()**

用于数组的拼接，返回拼接好的新数组，不改变原数组

```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

arr1.concat(arr2); // [1, 2, 3, 4, 5, 6];
arr1 // [1, 2, 3]
```

**reverse()**

用于倒置一个数组，返回倒置后的数组，会改变原数组

```javascript
var arr = [1, 2, 3];

arr.reverse(); // [3, 2, 1]
```

**slice()**

用于截取数组的一部分，返回新数组，不改变原数组

第一个参数为起始位置，第二个位置为终止位置（不包括该位置成员），如果省略第二个参数，则一直截取到数组末尾

```javascript
var arr = [1, 2, 3, 4, 5, 6];

arr.slice(2, 5); // [3, 4, 5]
arr // [1, 2, 3, 4, 5, 6]

arr.slice(3); // [4, 5, 6]
```

**splice()**

删除数组成员，返回被删除的成员，会改变原数组

第一个成员为起始删除成员的位置，第二个参数为删除元素的个数

```javascript
var arr = [1, 2, 3, 4, 5, 6];

arr.splice(3, 2); // [4, 5];
arr // [1, 2, 3, 6]
```

**sort()**

对数组成员进行排序，默认排序规则为字典序排序，返回排序后的数组，改变原数组

可以接受一个策略回调函数来设置排序规则，如果策略回调函数返回大于 0 ，表示第一个元素排在第二个元素后面，其他情况表示第一个元素排在第二个元素前面

```javascript
var arr = [1, 3, 2, 6, 5, 4]

arr.sort((a, b) => {
  return a - b
}); // [1, 2, 3, 4, 5, 6]

arr.sort(function (a, b) {
  return b - a
}); // [6, 5, 4, 3, 2, 1]
```
**map()**

接受一个回调函数作为参数，数组成员依次执行函数，返回一个由回调函数返回成员组成的新数组，不改变原数组

```javascript
var arr = [1, 2, 3];

arr.map(function (item) {
  return item + 1;
}); // [2, 3, 4]
```

**forEach()**

常用的数组遍历方法，不可终止循环，需终止循环，改用`for`循环

**filter()**

接受一个回调函数作为参数，数组成员依次执行此函数，返回符合条件的成员组成的数组，不改变原数组

```javascript
var arr = [1, 2, 3];

arr.filter(function (item) {
  return item > 2;
}) // [3]
```

**some(), every()**

接受一个回调函数作为参数，返回布尔值，表示数组是否符合某个条件

`some()`方法是只要有一个成员符合条件，则返回`true`，否则返回`false`

`every()`方法是所有成员都符合条件，才返回`true`,否则返回`false`

```javascript
var arr = [1, 2, 3];

arr.some(function (item) {
  return item == 2;
}); // true

arr.every(function (item) {
  return item == 2;
}); // false
```

**reduce(), reduceRight**

从左到右依次处理数组的每个成员，`reduceRight()`是从右到左

```javascript
var arr = [1, 2, 3];

arr.reduce(function (a, b) {
  return a + b;
})
```

**indexOf(), lastIndexOf()**

返回给定成员在数组中首次出现的位置和最后一次出现的位置