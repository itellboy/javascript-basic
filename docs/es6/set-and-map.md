# Set 和 Map 数据结构

## Set

* 类似于数组，成员唯一
* 可以接受一个数组作为构造函数的参数，可以实现数组的去重

### Set 实例的属性和方法

Set 具有以下属性


* `Set.prototype.constructor`：构造函数，默认就是`Set`函数
* `Set.prototype.size`：返回`Set`实例的成员总数

Set 具有以下四个方法

* `add(value)`：添加值，返回`Set`结构本身
* `delete(value)`：删除值，返回布尔值，表示是否删除成功
* `has(value)`：返回布尔值，表示`Set`是否含有该成员
* `clear()`：清除所有成员，没有返回值

`Array.from()`可以将`Set`结构转化为数组

### 遍历操作

* `keys()`
* `values()`
* `entries()`
* `forEach()`

`keys()` 与`values()`两个方法的行为完全一致，因为`Set`结构没有键，只有值

### 利用 Set 是想数组的并集，交集和差集

```javascript
var a = new Set([1, 2, 3])
var b = new Set([2, 3, 4])
// 并集
new Set([...a, ...b]) // 1, 2, 3, 4
// 交集
new Set([...a].filter(i => b.has(i)))
// 差集
new Set([...a].filter(i => !b.has(i)))
```

## WeakSet

与 Set 类似，有两点不同

* WeakSet 只能存对象
* WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中

## Map

键值对的数据结构，传统的 Object 只能采用`字符串-值`的形式存储数据，Map 可以采用`值-值`的形式存储数据，是更完善的`hash`结构

### 实例的属性和方法

* `size`：返回成员的个数
* `set(key, value)`：添加键值对，如果键已经存在，则覆盖
* `get(key)`：获取`key`对应的值，如果不存在则返回 `undefined`
* `hasKey(key)`：返回布尔值，某个键是否在该`Map`结构中
* `delete(key)`：删除一个键，返回 `true`
* `clear()：`清除所有键值对

## WeakSet

参考 WeakSet