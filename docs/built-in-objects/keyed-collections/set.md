# Set

Set 对象存储一组任意值，值不可重复

## 构造函数

可以通过`new Set()`创建一个 Set 对象

## 实例属性

- `size`：值的个数

## 实例方法

- `add(value)`：增加一个值
- `clear()`：清除所有键值对
- `delete(key)`：删除 key 对应的键值对，如果 key 不存在返回`false`，删除成功返回`true`
- `entries()`：迭代器对象
- `forEach(callback)`：每一对值按照插入顺序执行一遍回调函数
- `has(key)`：是否由 key 键
- `keys()`：返回由所有值成的迭代器对象
- `values()`：返回由所有值组成的迭代器对象