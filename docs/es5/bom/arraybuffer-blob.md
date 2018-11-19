# ArrayBuffer、Blob 对象

## ArrayBuffer 对象

JavaScript 可以借助 ArrayBuffer 对象模拟内存的数据，从而实现对内存的操作，ES6 引入，浏览器原生提供`ArrayBuffer()`构造函数，接受一个整数作为参数，表示实例对象占用多个个字节

### 实例属性

* `byteLength`：当前实例占用的内存长度（单位：字节）

```javascript
var buffer = new ArrayBuffer(10)
buffer.byteLength // 10
```

### 实例方法

* `slice()`：复制一部分内存，接受两个参数，一个表示开始位置吗，一个表示结束为止

```javascript
var buffer = new ArrayBuffer(10)
buffer.slice(0) // 复制整段内存
```

## Blob 对象

用于保存二进制对象的数据内容，Blob（Binary Large Object）二进制大型对象的缩写，可以利用 Blob 对象进行文件的读写

### 构造函数

可以直接通过`new`命令，生成 Blob 对象的实例，接受一个数组和一个配置对象作为参数，数组成员是字符串或者二进制对象，配置对象只有一个`type`属性，表示二进制数据的类型，属性值为字符串

```javascript
var str = 'hello world'
var blob = new Blob([str], {type: 'text/plain'})

var json = {hello : 'world'}
var blob = new Blob([json], {type: 'application/json'})
```

### 实例属性和方法

* `type`：Blob 实例的类型
* `size`：Blob 实例的大小
* `slice`：拷贝实例的数据，返回新的 Blob 实例

### 获取文件信息

使用`<input type="file" />`可以让用户选择文件，选择完文件之后，DOM 的`files`属性会返回一个 FileList 实例对象，它是一个类数组对象，成员是 File 实例，File 实例对象是一个特殊的 Blob 实例对象，只是增加了`lastModifiedDate`和`name`属性，通常我们可以遍历这个类数组对象来读取文件信息

```html
<input type="file" onchange="fileChange(this.files)" />
```

```javascript
function fileChange(files) {
  files.forEach(file => {
    console.log(file.name)
    console.log(file.type)
    console.log(file.size)
  })
}
```

### 生成 URL

可以通过`window.URL.createObjectURL()`为 Blob 实例对象生成一个`blob://`协议开头的链接，通过此链接可以访问 Blob 数据

```javascript
function fileChange(files) {
  var files = e.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    var type = files[i].type;
    if (type.substring(0,6) !== 'image/')
      continue;
    var img = document.createElement('img');
    img.src = URL.createObjectURL(files[i]);
    img.onload = function () {
      this.width = 100;
      document.body.appendChild(this);
      URL.revokeObjectURL(this.src);
    }
  }
}
```

