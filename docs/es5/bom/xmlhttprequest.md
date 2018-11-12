# XMLHttpRequest 对象

## AJAX

Asynchronous Javascript and XML 是 AJAX 的缩写，主要用于浏览器向服务端请求 XML 文档，而不用刷新整个页面，经发展，AJAX 成为了 HTTP 通信的代名词，不仅仅用于请求 XML 文档

AJAX 主要由以下几个步骤组成

* 创建 XMLHttpRequest 对象
* 发出 HTTP 请求
* 收到服务端的数据
* 对网页进行更新

一个完整的利用 XMLHttpRequest 对象发送 AJAX 请求的例子

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);
```

## XMLHttpRequest 实例属性

### XMLHttpRequest.readyState

返回一个整数，表示 XMLHttpRequest 对象的状态，只读

* 0：XMLHttpRequest 对象已经创建，但是还没有调用`open()`方法
* 1：已经调用`open()`方法，还没有掉`send()`方法，可以使用`setRequestHeader()`方法设置请求的头部信息
* 2：已经调用`send()`方法，并且服务器返回的头信息和状态码已经收到
* 3：正在接收服务器返回的信息
* 4：完成服务器信息的接收，请求完成

每次`readyState`状态改变都会触发`readyStateChange`事件

### XMLHttpRequest.onreadystatechange

`readyState`属性改变回调函数，每次`readyState`改变都会执行该函数

### XMLHttpRequest.response

表示服务端返回的数据体，可以是文本字符串、二进制数据等等，由`responseType`属性决定，如果请求失败，或者数据返回不完整，该属性返回`null`

### XMLHttpRequest.responseType

表示服务器返回的数据类型，可以在`open()`方法之后，`send()`方法之前设置

可以为以下几个值

* `''`：空字符串，等同于`text`，表示返回为文本
* `text`：字符串文本
* `json`：JSON 对象
* `blob`：二进制数据
* `arraybuffer`：ArrayBuffer 对象
* `document`：Document 对象，文档对象

### XMLHttpRequest.responseText

返回从服务端返回的字符串

### XMLHttpRequest.responseXML

返回服务端返回的 HTML 或者 XML 文档对象，要求服务端响应头部的`Content-Type`值为`text/html`或者`application/xml`，并且`send()`方法之前将请求头部的`responseType`设置为`document`，才能正确接收

### XMLHttpRequest.responseURL

返回发送数据服务端的网址

### XMLHttpRequest.status,XMLHttpRequest.statusText

`XMLHttpRequest.status`：服务器响应的 HTTP 状态码

`XMLHttpRequest.statusText`：服务器响应的提示，`ok`或者`Not Found`

### XMLHttpRequest.timeout,XMLHttpRequest.ontimeout

`XMLHttpRequest.timeout`：设置请求的超时时间，超过设置时间则取消请求，如果设置为`0`，表示无限制，在`open()`方法之后，`send()`方法之前设置

`XMLHttpRequest.ontimeout`：请求超时之后的回调函数

### XMLHttpRequest 事件监听函数

* `XMLHttpRequest.onloadstart`：HTTP 请求发出的监听函数
* `XMLHttpRequest.onprocess`：发送和接收数据的监听函数
* `XMLHttpRequest.onabort`：请求被中止的监听函数
* `XMLHttpRequest.onerror`：请求失败的监听函数
* `XMLHttpRequest.onload`：请求成功的监听函数
* `XMLHttpRequest.ontimeout`：请求超时的监听函数
* `XMLHttpRequest.onloadend`：请求完成（不管成功或者失败）的监听函数

`process`事件的监听函数有一个对象，表示加载的进度，该对象有三个属性

* `loaded`：已经返回的数据量
* `total`：返回数据的总数据量
* `lengthComputable`：加载的进度是否可以计算，返回布尔值

**注意：所有的 XMLHttpRequest 事件监听函数必须在`send()`方法之前设置**

### XMLHttpRequest.withCredentials

可写，布尔值，表示在发送跨域请求的时候，是否将当前网址的 Cookie 发送到服务端，服务端响应头部必须包含`Access-Control-Allow-Credentials: true`

### XMLHttpRequest.upload

通过 XMLHttpRequest 对象发送文件的时候，通过`XMLHttpRequest.upload`可以得到一个对象，可以通过监听这个对象的各种事件得到当前上传的信息，包括`error`、`process`、`load`、`loadend`、`timeout`、`abort`事件

## XMLHttpRequest 实例方法

### XMLHttpRequest.open()

初始化 XMLHttpRequest 对象，接收五个参数

* method：字符串，请求类型
* url：字符串，请求地址
* async：布尔值，是否为异步请求
* user：字符串，请求地址认证用户名
* password：字符串，请求地址认证密码

```javascript
var xhr = new XMLHttpRequest()

xhr.open('post', 'foo.com')
```

### XMLHttpRequest.send()

发送 AJAX 请求，参数为请求要发送给服务端的数据

```javascript
// post 请求
var data = 'user="tom"&password="123456"'
xhr.send(data)
// 构造表单
var formData = new FormData()
formData.append('user', tom)
formData.append('password', '123456')
xhr.send(formData)
```

### XMLHttpRequest.setRequestHeader()

设置请求的头部信息

```javascript
xhr.setRequestHeader('Content-Type': 'application/json;charset=utf-8')
xhr.setRequestHeader('Content-Length': JSON.stringify(data).length)
```

### XMLHttpRequest.overrideMimeType()

用来制定返回数据的 MIME 类型，覆盖响应的 MIME，比如，浏览器返回数据类型是`text/html`，但是浏览器解析失败了，可以通过`overrideMimeType()`方法将 MIME 类型设置为`text/plain`拿到原始数据

### XMLHttpRequest.getResponseHeader()

获取响应的头部信息，传入参数为头部信息的键名

### XMLHttpRequest.getAllResponseHeaders()

获取响应所有的头部信息，返回格式为字符串，每个头信息使用回车+换行字符隔开

可以使用下面方法进行解析

```javascript
var arr = headers.trim().split(/[\r\n]+/);
var headerMap = {};

arr.forEach(function (line) {
  var parts = line.split(': ');
  var header = parts.shift();
  var value = parts.join(': ');
  headerMap[header] = value;
});
```

### XMLHttpRequest.abort()

主动终止当前 AJAX 请求

## Navigator.sendBeacon()

用于在页面被卸载的时候发送请求，多用于统计，接收请求地址和请求数据两个参数