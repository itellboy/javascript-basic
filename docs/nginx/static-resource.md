# Nginx 作为静态资源服务器

## 服务场景

* CDN

## Nginx 静态资源相关模块

### sendfile

* Syntax: sendfile on | off;
* Default: sendfile on;
* Context: http, server, location, if in location

### tcp\_nopush

* Syntax: tcp\_nopush on | off;
* Default: tcp\_nopush off;
* Context: http, server, location

作用：在 sendfile 开启的情况下，提高网络包的传输效率

### tcp\_nodelay

* Syntax: tcp\_nodelay on | off;
* Default: tcp\_nodelay on;
* Context: http, server, location;

作用：在 keepalive 连接下，提高网络包传输的实时性

### gzip

* Syntax: gzip on | off;
* Default: gzip off;
* Context: http, server, location, if in location

作用：传输压缩

### gzip\_comp\_level

* Syntax: gzip\_comp\_level level;
* Default: gzip\_comp\_level 1;
* Context: http, server, location

作用：压缩比

### gzip\_http\_version

* Syntax: gzip\_http\_version 1.0 1.1;
* Default: gzip\_http\_version 1.1;
* Context: http, server, location

### 扩展 Nginx 压缩模块

* http\_gzip\_static\_module - 预读 gzip 功能
* http\_gunzip\_module - 应用支持 gunzip 压缩方式

## 浏览器缓存

http 定义的缓存机制（如：Expires, Cache-Control 等）

* 浏览器请求-->无缓存-->从服务器获取数据-->呈现
* 浏览器请求-->有缓存-->校验是否过期-->呈现

| -- | -- |
| --- | --- |
| 校验是否过期 | Expires, Cache-Control(max-age) |
| 协议中 Etag 头信息校验 | Etag |
| Last-Modified 头信息校验 | Last-Modified |

### 配置语法 expires

添加 Cache-Controller, Expires 头

* Syntax: expires [modified] time;  expries epoch |max|off;
* Default expires off;
* Context: http, server, location, if in location

## 跨站访问支持

* Syntax: add_header name value [always];
* Default: --;
* Context: http, server, location, if in location

## 防盗链

> 防止网站资源被盗用

### 基于 http_refer 防盗链配置模块

* Syntax: valid_referers none|blocked|servernames|string...;
* Default: --
* Context: server, location