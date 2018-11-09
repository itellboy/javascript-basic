# Cookie

保存在浏览器端的一段文本信息，每个 Cookie 的大小不能超过 4kb，每次浏览器发送请求，就会带上这段信息，主要包含以下信息，`window.navigator.cookieEabled`返回一个布尔值，表示当前浏览器是否打开 Cookie 功能

* Cookie 的名字
* Cookie 的值
* 过期时间
* 所属域名
* 生效的路径

同源政策规定，同域名同端口可以共享 Cookie，也就是说`http://abc.com`、`https://abc.com`可以共享一个 Cookie

`document.cookie`：获取当前网页的 Cookie

## Cookie 与 HTTP 协议

Cookie 由 HTTP 协议组成，也供 HTTP 协议使用

### HTTP 响应：Cookie 的生成

服务端在响应 Response 头部信息里面放置一个`Set-Cookie`字段，浏览器就会自动保存该 Cookie，Response 里面可以包含多个`Set-Cookie`字段

### HTTP 请求：Cookie 的发送

浏览器在向服务端请求的时候，会将事先服务端在浏览器设置的 Cookie 放在头部信息的`Cookie`字段，一同发送给服务端

## Cookie 的属性

### Expires、Max-Age

`Expores`表示 Cookie 的过期时间

`Max-Age`表示从当前时间开始 Cookie 还可以存在时间的秒数

如果两个属性都存在，`Max-Age`优先

### Domain、Path

`Domain`属性指定浏览器发出 HTTP 请求的时候，哪些域名带上 Cookie，如果未设置，则只在请求主域名的时候带上`Cookie`，比如`example.com`会带上 Cookie，`a.example.com`不会带上 Cookie

`Path`属性置顶浏览器发出 HTTP 请求的时候，哪些路径带上 Cookie，`/`请求下的 Cookie 在`/path`请求也会被带上

### Secure、HttpOnly

`Secure`属性置顶浏览器只有在加密协议HTTPS下，才能将 Cookie 发送到服务端

`HttpOnly`属性指定该 Cookie 不能通过 JavaScript 脚本拿到，可以防止跨站脚本攻击

## document.cookie

可以使用`document.cookie`来读写当前网页的 Cookie
