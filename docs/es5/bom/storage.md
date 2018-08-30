# Storage 接口

`Storage`接口脚本在浏览器保存数据，`LocalStorage`和`SessionStorage`实现了这个接口，`LocalStorage`的数据会长期存在，`SessionStorage`的数据在窗口关闭之后被清除

## 属性和方法

**Storage.length**

返回保存数据的个数

**Storage.setItem(key, value)** 

保存一对数据

**Storage.getItem(key)**

获取保存的数据

**Storage.clear()**

清除所有数据

**Storage.removeItem(key)**

移除一项数据

**Storage.key(index)**

返回位于`index`位置的数据

## storage 事件

当 Storage 发生变化时，会触发`Storage`事件，回调函数接受一个`Event`对象作为参数，该对象有以下几个参数

* `key`：发生变动的键名
* `newValue`：新的键值
* `oldValue`：旧的键值
* `storageArea`：键值所在的对象
* `url`：触发`Storage`的事件网页的网址

该事件有一个特别的地方，当前页面发生的变动不会触发该事件，只有当打开同源的另一个窗口的 Storage 发生变化的时候，当前窗口的`storage`事件才会被触发