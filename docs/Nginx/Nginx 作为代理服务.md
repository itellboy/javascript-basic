# Nginx 作为代理服务

## 代理配置语法

* Syntax: proxy_pass URL;
* Default: --
* Context: location, if in location, limit_except

## 缓冲区配置语法

* Syntax: proxy_buffering on|off;
* Default: proxy_buffering on;
* Context: http, server, location

## 跳转重定向配置语法

* Syntax: proxy_redirect default;proxy\_redirect off;proxy\_redirect redirect replacement;
* proxy_redirect default;
* Context: http, server, location;

## 头信息配置语法

* Syntax: proxy\_set\_header field value;
* Default: proxy\_set\_header Host $proxy_host;proxy\_set\_header Connection close;
* Context: http, server, location

扩展: proxy\_hide\_header, proxy\_set\_body

## 超时配置语法

* Syntax: proxy\_connect\_timeout time;
* Default: proxy\_connect\_timeout 60s;
* Context: http, server, location

扩展: proxy\_read\_timeout, proxy\_send\_timeout