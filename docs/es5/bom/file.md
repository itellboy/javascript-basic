# File 对象，FileList 对象，FileReader 对象

文件操作

## File 对象

`File`对象代表一个文件，用来读写文件信息，继承了 Blob 对象

最常见的是`<input type="file">`标签，用户选择文件以后，浏览器会生成一个由`File`对象组成的数组

### 构造函数

浏览器原生提供`File()`生成`File`对象的实例，接受三个参数

* `array`：一个数组，成员可以是二进制对象，也可以是字符串，表示文件的内容
* `name`：字符串，表示文件名或者路径
* `options`：配置对象，该实例的属性
	* `type`：字符串，表示实例对象的 MIME 类型，默认值为空字符串
	* `lastMotified`：上一次修改的事件，默认为`Date.now()`

### 实例属性

* `lastMotified`: 最后一次修改的事件
* `type`: MIME 类型
* `name`: 文件名或者文件路径
* `size`: 文件大小

## FileList 对象

`FileList`对象是一个类似数组的对象，成员时`File`对象，实例具有`length`属性和`item()`方法

## FileReader 对象

`FileReader`对象用户读取`File`对象或者`Blob`对象所包含的文件内容

浏览器提供一个原生的`FileReader()`构造函数来生成`FileReader`实例

```javascript
var fileReader = new FileReader()
```

### 实例属性

* `FileReader.error`：读取文件时产生的错误对象
* `FileReader.readyState`：文件的读取状态，`0`表示未开始，`1`表示正在读取，`2`表示读取完成
* `FileReader.result`：读取完成后的文件内容，有可能是一个字符串，有可能是一个`ArrayBuffer`实例
* `FileReader.onload`：`load`事件（读取完成）监听函数，通常获取`result`对象获取文件内容
* `FileReader.onabort`：`abort`事件（用户终止读取）监听函数
* `FileReader.onerror`：`error`事件（读取发生错误）监听函数
* `FileReader.onloadstart`：读取开始的监听函数
* `FileReader.onloadend`：读取结束的监听函数
* `FileReader.onprogress`：读取过程中的监听函数

一个读取文件的例子

```javascript
// HTML 代码
// <input type="file" onchange="onChange(e)">

function onChange(e) {
  var file = e.target.files[0]

  var fileReader = new FileReader()
  fileReader.onload = function (event) {
    console.log(event.target.result)
  }
  
  fileReader.readAsText(file)
}
```

### 实例方法

* `FileReader.abort()`：终止读取，`FileReader.readyState`变为`2`
* `FileReader.readAsArrayBuffer()`：以`ArrayBuffer`格式读取文件，最后文件返回`ArrayBuffer`实例
* `FileReader.readAsBinaryString()`：返回原始的二进制字符串
* `FileReader.readAsDataUrl()`：返回一个 Base64 编码的字符串，可以直接放在`<img>`标签的`src`属性里面
* `FileReader.readAsText()`：返回文件内容的文本字符串，第一个参数代表文件的 Blob 实例，第二个是可选的，为编码方式，默认 UTF-8