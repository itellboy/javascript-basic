# `Set`和`Map`数据结构

## `Set`

* 类似于数组，成员唯一
* 可以接受一个数组作为构造函数的参数，可以实现数组的去重

### `Set`实例的属性和方法

`Set`具有以下属性


* `Set.prototype.constructor`构造函数，默认就是`Set`函数
* `Set.prototype.size`返回`Set`实例的成员总数

`Set`具有以下四个方法

* `add(value)`添加值，返回`Set`结构本身
* `delete(value)`删除值，返回布尔值，表示是否删除成功
* `has(value)`返回布尔值，表示`Set`是否含有该成员
* `clear()`清除所有成员，没有返回值

`Array.from()`可以将`Set`结构转化为数组

### 遍历操作

* `keys()`
* `values()`
* `entries()`
* `forEach()`

`keys()`与`values()`两个方法的行为完全一致，因为`Set`结构没有键，只有值