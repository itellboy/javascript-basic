# Map

Map 对象存储键值对，并且可以记录原始的键值对的插入顺序，任何值都可以作为 Map 对象的键。

## 构造函数

通过`new Map()`创建一个 Map 对象。

## 实例属性

- `size`：键值对数量

## 实例方法

- `clear()`：清除所有键值对
- `delete(key)`：删除 key 对应的键值对，如果 key 不存在返回`false`，删除成功返回`true`
- `entries()`：迭代器对象
- `forEach(callback)`：每一对键值对按照插入顺序执行一遍回调函数
- `get(key)`：获取 key 对应的值，没有返回`undefined`
- `has(key)`：是否由 key 键
- `keys()`：返回由所有 key 组成的迭代器对象
- `set(key, value)`：放入一组键值对，返回最新的 map
- `values()`：返回由所有 value 组成的迭代器对象