# Nginx 访问控制

* 基于 IP 的访问控制 - http_access_module
* 基于用户的信任登录 - http_auth_basic_module

## http_access_module

* Syntax: allow address | CIDR | unix: | all;
* Default: --
* Context: http, server, locaiont, limit_except

* Syntax: deny address | CIDR | unix: | all;
* Default: --
* Context: http, server, location, limit_except

http_access_module 局限性

1. 采用别的 http 头信息控制访问，如： http_x_forward_for
2. 结合 geo 模块
3. 通过 http 自定义变量传递

## http_x_forward_for

* http_x_forward_for = Client IP, Proxy(1) IP, Proxy(2) IP, ...

## http_auth_basic_module

* Syntax: auth_basic string | off;
* Default: auth_basic off;
* Context: http, server, locaiont, limit_except

* Syntax: auth_basic_user_file file;
* Default: --
* Context: http, server, location,limit_except


```bash
yum install -y httpd-tools # 安装 httpd-tools 包
htpasswd -c 密码文件路径 用户名 # 生成密码文件
```

局限性

1. 用户信息依赖文件方式
2. 操作管理机械，效率低下

解决方案

1. Nginx 结合 LUA 实现高效验证
2. Nginx 和 LDAP 打通，利用 nginx-auth-ldap 模块