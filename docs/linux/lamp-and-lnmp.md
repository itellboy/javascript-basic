# LAMP 和 LNMP

## php 安装

1：默认版本太低（5.4） 升级php 到5.6

1.1 检查当前安装的PHP包

```bash
yum list installed | grep php
```

1.2如果有安装的PHP包，先删除他们

```bash
yum remove php.x86_64 php-cli.x86_64 php-common.x86_64 php-gd.x86_64 php-ldap.x86_64 php-mbstring.x86_64 php-mcrypt.x86_64 php-mysql.x86_64 php-pdo.x86_64
```
 	
2 ： 配置源

```bash
sudo rpm -Uvh http://mirror.webtatic.com/yum/el7/epel-release.rpm
sudo rpm -Uvh http://mirror.webtatic.com/yum/el7/webtatic-release.rpm

# 如果想删除上面安装的包，重新安装  
rpm -qa | grep webstatic
rpm -e  # 上面搜索到的包即可
```

3：fpm 安装 和 基本操作

```bash
# 也可以php55w-fpm  php70w-fpm
sudo yum install php56w-fpm 

# 启动/重启/停止服务
service php-fpm start/restart/stop
```
	
4：安装PHP扩展

```bash
sudo yum install php56w.x86_64 php56w-cli.x86_64 php56w-common.x86_64 php56w-gd.x86_64 php56w-mbstring.x86_64 php56w-mcrypt.x86_64 php56w-mysql.x86_64 php56w-pdo.x86_64
```

## Apache 基本操作

* yum install httpd 安装服务
* service httpd start 启动服务
* service httpd stop 停止服务

## Apache 虚拟主机和伪静态

* /etc/sysconfig/setlinux 将`SETLINUX=enforcing`改为`SETLINUX=disabled`
* 配置 Apache 虚拟主机示例，重启 Apache 服务

```
<VirtualHost *:80>
  ServerName test.com
  DocumentRoot /data/www
  <Directory "/data/www">
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteRule ^(.*)\.htm$ index.html
    </IfWrite>
  </Directory>
</VirtualHost>
```

## nginx 基本操作

* yum install nginx # 安装
* service nginx start # 启动
* service nginx stop # 停止
* service nginx reload # 重启

## nginx 安装

* sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
* sudo yum install nginx

## 伪静态

```
location / {
  rewrite ^(.*)\.htm$ /index.html;
}
```

## 日志格式化

```
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  '$status $body_bytes_sent "$http_referer" '
  '"$http_user_agent" "$http_x_forwarded_for"';

access_log  /var/log/nginx/access.log  main;
```

## 反向代理和负载均衡

```
upstream test_hosts {
  server 118.89.106.129:80;
  server 122.114.250.244:8082;
}

server {
    listen       80;
    server_name  www.imooc.test;

    location / {
      proxy_pass http://test_hosts;
    }
}

```

## nginx PHP 通用配置

```
server {
  listen       80;
  server_name  tp.com;
  
  root /data/www/tp/public;
  index index.php index.html;
  
  access_log /var/log/nginx/access_tp.log main;

  location / {
    try_files $uri $uri/ /index.php?$args;
  }

  location ~ \.php$ {
    include fastcgi_params;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    try_files $uri =404;
  }   
}

```

## 调试功能

```
add_header Content-Type "text/plain;charset=utf-8";
return 200 "$http_host"
```

## mysql 基本操作

* yum install mysql-community-server 安装
* yum mysqld start/restart 启动
* yum mysqld stop 停止 

## mysql 安装

* CentOS7 默认安装 mariadb 数据库
* yum remove mariadb-libs.x86_64
* https://dev.mysql.com.downloads/repo/yum/ 下载 mysql 源
* yum localinstall mysql57-community-release-el7-8.noarch.rpm
* yum install mysql-community-server 安装 mysql
* cat /var/log/mysqld/.log | grep "password" 查看默认密码
* mysql -uroot -pxxx 登陆 mysql 控制台

**初次登陆控制台，无论输入什么命令都会提示重置密码**

```sql
# 设置密码为 123456
set password = password('123456')

# 设置密码校验规则
set global validate_password_policy=0;
set global validate_password_length=1;
```

mysql 8.0.11  初始化密码使用，上面的方式不适用于 8.0.11 版本的 mysql

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';
```

## general_log 日志开启

```sql
# 设置 general_log 文件存放位置
set global general_log_file="/tmp/general.log";

# 开启 general_log
set global general_log=on;

# 关闭 general_log
set global general_log=off;
```

## 用户操作

```sql
# 创建用户
create user 'user'@'%' identified by 'password';

# 给 user 用户赋予所有数据库的所有表的增删改查权限
grant all privileges on *.* to 'user'@'%' identified by 'password' with grant option;

# 移除用户 user 的权限
revoke all privileges on *.* from user;
```

## 免密码登陆

* /etc/my.cnf 加入一行`skip-grant-tables`，重启 mysqld 服务
