# 面试常见问题

## 1. CSS

### 1.1 如何实现左边固定宽度，右边自适应的布局

**方法1：使用 table 布局**

把`wrap`容器的`display`属性设置为`table`，然后把子节点的`display`设置为`table-cell`，子节点就会自适应宽度，把要固定宽度节点的宽度设置固定，不支持 IE7

**方法2：使用 float + 外边距**

**方法3：使用 flex 布局**

### 1.2 如何实现垂直居中

**方法1（使用 flex 布局）：**

父容器的`display`属性设置为`flex`，`align-item`属性设置为`center`

## 2. JavaScript

### 2.1 如何让一个构造函数继承另一个构造函数

```javascript
var Parent = function (name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}
// 第一步，继承父类的属性
var Child = function (name) {
  Parent.call(this, name)
}
// 第二步，继承父类的方法
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// 调用
var child = new Child('hello')
child.getName() // "hello"
```

### 2.2 为什么要使用`Object.prototype.hasOwnProperty.call(obj, key)`替代`obj.hasOwnProperty(key)`

* 节省原型链回溯时间：`hasOwnProperty()`方法是定义在`Object.prototype`对象上面，如果直接使用`obj.hasOwnProperty(key)`会向上查找原型链去寻找`hasOwnPerperty()`方法，直接使用`Object.prototype.hasProperty.call(obj, key)`能节省查找原型链的时间
* 避免`TypeError`错误，由`Object.create(null)`创建的对象没有`hasOwnProperty`方法

参考链接：

[https://github.com/eslint/eslint/issues/7071](https://github.com/eslint/eslint/issues/7071)

[https://eslint.org/docs/rules/guard-for-in](https://eslint.org/docs/rules/guard-for-in)

[https://github.com/eslint/eslint/commit/551335eedf62261299af7aafdfc896b3aef8de67](https://github.com/eslint/eslint/commit/551335eedf62261299af7aafdfc896b3aef8de67)
### 2.3 数组如何去重

* 使用 ES6 的`Set`数据结构
* 新建一个数组，将原数组的成员`push`进入新数组之前用`indexOf()`或者 ES6 的`includes()`检查

### 2.4 数组的指定位置插入成员

```javascript
// 在下标为 1 的位置插入 3
[1, 2, 3, 4].splice(1, 0, 3)
// [1, 3, 2, 3, 4]
```

### 2.5 什么是函数节流？什么是函数防抖？

## 3. 网络

### 3.1 get 请求和 post 请求的区别

**从 restful 规范角度回答**

* get 请求用于获取数据，符合幂等性
* post 请求用于提交数据，不符合幂等性

**从参数角度回答**

* get 请求明文传输，长度受限于 url 长度（2048 字符），不安全，只能进行 url 编码
* post 请求通过数据包的方式传输，无限制，相对安全，可以支持多种编码方法

**从传输过程角度回答**

* get 请求浏览器会把 header 和 data 一起发送过去，服务器响应 200（返回数据）
* post 请求浏览器先发送 header，服务器响应 100（continue），浏览器在发送 data，服务器响应 200（返回数据）



[很有意思的解释](https://www.cnblogs.com/logsharing/p/8448446.html)

### 3.2 http 和 https 的区别

**HTTP 三次握手**

* 客户端发送请求连接报文，将`SYN`位置为`1`，`Sequence Number`位置为`x`，客户端进入`SYN_SEND`状态，等待确认
* 服务端分析`SYN`请求报文，并且将`ACK`位置为`x+1`，同时发送一个请求报文，`SYN`位置为`1`，`Sequence Number`位置为`y`，服务端进入`SYN_RECV`状态
* 客户端收到`ACK`+`SYN`报文，并且发送响应报文，`ACK`位置为`y+1`，客户端和服务端进入`ESTABLISHED`状态，连接建立

```
"Hello, can you hear me?"
"Yes, I can hear you. Can you hear me?"
"Yes."
"balabala...."
```

**HTTPS 连接过程：HTTP 连接 + SSL 连接**

* 客户端发起 SSL 连接请求
* 服务端返回一个 CA 证书
* 客户端进行 CA 证书校验，通过则生成对称加密的密钥，并利用 CA 证书携带的公钥加密对密钥进行加密，发送给服务端
* 服务器端利用私钥解密出对称加密的密钥，对数据进行加密，发送给客户端
* 客户端解密数据，连接简历

### 3.3 常见的响应状态码

* 100：继续请求
* 200：请求成功
* 301：永久重定向
* 302：临时重定向
* 304：资源未修改
* 403：服务器拒绝请求
* 404：无法找到资源
* 408：超时
* 500：服务器内部错误
* 502：充当网关或代理的服务器，接受到了一个无效的请求

## 4. 加密

### 4.1 非对称加密

数据的加密传输：公钥加密，私钥解密，

证书的签名及认证（程序补丁）：私钥加密，公钥解密