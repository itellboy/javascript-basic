# CORS 跨域资源共享

W3C 标准，克服浏览器同源限制，允许 AJAX 向跨域服务端发送请求

需要服务端支持

跨域请求可以分为简单请求和非简单请求两种形式

## 两种请求

### 简单请求

请求方法为 HEAD、GET、POST

头部信息

* Accept
* Accept-Lauguage
* Content-Lauguage
* Last-Event-Id
* Content-Type，只限于application/x-www-form-urlencoded、multipart/form-data、text/plain

以上类型的跨域请求为简单请求，浏览器在发出简单请求的时候，会在头部加上`Origin`字段，告诉服务器改请求来自哪个域（协议+域名+端口）

```
GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

服务端需要对请求做特殊处理，将响应头部的`Access-Control-Allow-Origin`值设置为可以访问的域，或者`*`表示接收任意域的请求

如果服务端不做任何处理，浏览器发现响应头部`Access-Control-Allow-Origin`不包含当前域，浏览器会拒绝响应，并抛出错误

### 非简单请求

在我们需要发送一些特殊方法，比如方法为`PUT`、`DELETE`请求，或者带了一些自定义的头部信息的时候，或者头部信息的`Content-Type`字段为`application/json`等等的跨域请求的时候，浏览器进行一次预请求

#### 预请求

浏览器在发送非简单的跨域请求的之前，会发送一次方法为`OPTION`的预请求，除了`Origin`头部信息外，还会包含`Access-Control-Request-Method`和`Access-Control-Request-Headers`两个头部信息，表示接下来需要发送的跨域请求是什么类型的方法，会包含什么特殊的头部信息

服务端需要对该`OPTION`请求进行正确的响应，响应头部需包含三个字端

* `Access-Control-Allow-Origin`：允许发送请求的域
* `Access-Control-Allow-Method`：允许请求的方法
* `Access—Control-Allow-Headers`：允许请求自定义的头部字段

如果正常请求满足服务端对于`OPTION`请求响应，则可以继续进行下一步，正常请求和接收响应，否则浏览器终止请求，并抛出错误

## 与 JSONP 比较

JSONP 只能适用于 GET 请求，不需要服务端进行修改，兼容所有浏览器

CORS 适用于所有类型的请求，服务端修改