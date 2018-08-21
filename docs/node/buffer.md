# Buffer 缓冲

> Buffer 用来处理二进制数据流

Buffer 实例类似于整数数组,但是大小是固定的,创建之后无法调整,Buffer 在 Node 中是一个全局变量,无须`require`即可使用，在 V8 堆外分配内存

## Buffer 类静态方法和属性

### Buffer.alloc(size[, fill[, encoding]])

* `size`新建 Buffer 期望的长度
* `fill`预填充新 Buffer 的值，默认`0`
* `encoding`如果`fille`是字符串，则该值为它的编码格式，默认`utf8`

分配一个大小为`size`长度的 Buffer，如果`size`大于`Buffer.contants.MAX_LENGTH`或者小于`0`，则抛出`RangeError`错误

### Buffer.allocUnSave(size)


* `size`新建 Buffer 期望的长度

以这种方式创建的 Buffer 实例底层内存是未被初始化的，所以可能存在一些历史敏感数据，可以通过`Buffer.fill(0)`填充，性能会比`Buffer.alloc()`要高

这种方式创建会使用 Buffer 实例预分配大小为`Buffer.poolSize`的内存池，当`size`的大小小于或等于`Buffer.poolSize >> 1`的时候，`Buffer.allocUnSave()`会直接使用内存池里面的内存

### Buffer.byteLength(string[, encoding])

返回字符串实际的字节长度，默认`utf8`编码

### Buffer.compare(buf1, buf2)

比较`buf1`和`buf2`，通常用于 Buffer 实例数组的排序，相当于`buf1.compare(buf2)`

### Buffer.concat(list[, totalLength])

合并 Buffer 实例组成的数组，形成一个新的 Buffer 实例

### Buffer.from(array)

通过一个八位字节的`array`创建一个新的 Buffer

### Buffer.from(string[, encoding])

新建一个包含所给的 JavaScript 字符串的 Buffer 实例，默认编码为`utf8`

### Buffer.from(buffer)

拷贝 Buffer 对象

### Buffer.isBuffer(obj)

返回一个对象是否是 Buffer 实例

### Buffer.isEncoding(encoding)

如果`encoding`是一个字符编码，返回`true`

### Buffer.poolSize

预分配、内部 Buffer 实例池的大小的字节数

## Buffer 实例方法和属性

### buf[index]

可以用来获取或者设置制定`index`位置的单个字节

### buf.buffer

指向该 Buffer 实例底层的 `ArrayBuffer` 对象

### buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

拷贝`buf`至`target`

### buf.entries()

返回`[index, byte]`迭代器

### buf.equals(otherBuf)

比较两个 Buffer 实例，如果完全相同返回`true`，否则返回`false`

### buf.fill(value[, offset[, end]][, coding])

使用`value`填充`buf`

### buf.includes(value[, byteOffset][, encoding])

* `value`搜索的值
* `byteOffset`开始搜索的位置
* `encoding`如果`value`是一个字符串，该值为字符编码，默认`utf8`

相当于`buf.indexOf() !== -1`

### buf.indexOf(value[, byteOffset][, encoding])

搜索`value`在`buf`所在的位置，如果没有返回`-1`

### buf.keys()

返回`buf`键名组成的迭代器

### buf.length

`buf`的内存量