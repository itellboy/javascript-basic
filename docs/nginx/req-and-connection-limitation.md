# Nginx 请求和连接限制


* 连接频率限制 - limit\_conn\_module
* 请求频率限制 - limit\_req\_module

http 协议的连接与请求

| http 协议版本 | 连接关系| 
| -- | -- |
| http 1.0 | TCP 不能复用 |
| http 1.1 | 顺序行 TCP 复用 |
| http 2.0 | 多路复用 TCP 复用 |

* http 请求建立在一次 TCP 连接基础上
* 一次 TCP 请求至少产生一次 http 请求

连接限制语法

* Syntax: limit\_conn\_zone key zone=name:size;
* Default: --
* Context: http

* Syntax: limit\_conn\_zone number;
* Default: --
* Context: http, server, location

请求限制语法

* Syntax: limit\_req\_zone key zone=name:size rate=rate;
* Default: --
* Context: http

* Syntax: limit\_req zone=name [burst=number] [nodelay];
* Default: --
* Context: http, server, location