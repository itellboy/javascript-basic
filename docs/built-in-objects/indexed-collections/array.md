# Array

Array 用来表示和操作 JavaScript 里面的数组。

## 构造函数

直接调用`Array()`和调用`new Array()`构造数组，效果是等同的。

::: tip 提示
建议直接使用字面量`var arr = []`的形式创建数组，因为通过构造函数创建数组，会因构造函数的参数类型不同而产生不同的结果。
:::

```javascript
new Array(2); // [empty, empty]
new Array(2.3); // RangeError: Invalid array length
new Array(1, 2); // [1, 2]
```

## 静态方法

- `Array.from()`：从类数组对象或者可迭代对象中创建一个新的数组实例
- `Array.isArray()`：判断一个对象是否为数组
- `Array.of(...args)`：创建一个由参数组成的数组

## 实例属性

- `length`：数组长度

## 实例方法

- `concat()`：合并数组，不会改变原数组
- `copyWithin(index[, start[, end]])`：将数组一部分元素覆盖另一部分元素，改变原数组
- `entries()`：返回数组的迭代器对象
- `every(callback)`：数组成员是否都满足条件
- `fill(ele)`：填充数组，改变原数组
- `filter(callback)`：过滤不满足条件的成员，不改变原数组
- `find(callback)`：返回满足条件的成员，没有则返回`undefined`
- `findIndex(callback)`：返回满足条件成员的下标，没有返回`-1`
- `forEach(callback)`：遍历数组
- `indexOf(ele)`：从左向右搜索符合与参数相等成员，返回被找到成员的下标，没有返回`-1`
- `join(sep)`：成员用 sep 连接，返回连接后的字符串
- `keys()`：返回由下标组成的迭代器对象
- `lastIndexOf()`：从右向左搜索符合与参数相等成员，返回被找到成员的下标，没有返回`-1`
- `map(callback)`：遍历数组，返回由 callback 结果组成的数组
- `pop()`：弹出数组尾部成员，改变原数组，返回被弹出元素
- `push(ele)`：向数组尾部插入成员，改变原数组，返回数组长度
- `reduce(callback)`：从左至右执行回调函数，并把回调函数结果传递给下一个回调函数，返回最后一个回调函数返回的结果
- `reduceRight(callback)`：从右至左执行回调函数，并把回调函数结果传递给下一个回调函数，返回最后一个回调函数返回的结果
- `shift(callback)`：删除数组头部成员，改变原数组，返回被删除元素
- `slice()`：返回一个子数组
- `some(callback)`：如果数组中至少有一个元素满足测试函数，则返回`true`，否则返回`false`
- `sort(callback)`：数组排序，改变原数组
- `splice(index, length, ele)`：删除指定下标开始 length 个成员，并插入 ele，返回被删除的成员组成的数组，改变原数组
- `toLocalString()`：重写`Object.toLocalString()`
- `unshift(ele)`：在数组头部插入成员，改变原数组，返回数组的长度
- `values()`：返回由数组成员组成的迭代器对象
