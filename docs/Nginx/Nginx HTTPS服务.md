# Nginx HTTPS服务

## 准备工作

```bash
openssl version
nginx -V
rpm -qa | grep openssl
```

## 生成 key,csr,crt

```bash
openssl genrsa -idea -out hostname.key 1024
openssl req -new -key hostname.key -out docs.csr
openssl -req -days 3650 -in docs.csr -signkey docs.key -out docs.crt
```

## 去掉 key 的密码

```bash
openssl rsa -in ./hostname.key -out ./hostname_nopwd.key
```

## 直接通过 key 生成 crt

```bash
openssl req -days 36500 -x509 -sha256 -nodes -newkey rsa:2048 -keyout hostname.key -out hostname.crt
```

## Nginx 的 HTTPS 的语法配置

Syntax: ssl on | off;
Default: ssl off;
Context: http, server

Syntax: ssl\_centificate file;
Default: --;
Context: http, server

Syntax: ssl\_certificate_key file;
Default: --;
Context: http, server

## 苹果证书要求

* 服务器所有的连接使用 TLS1.2 以上的版本 (openssl 1.0.2)
* HTTPS 证书必须使用 SHA256 以上哈希算法签名
* HTTPS 证书必须使用 RSA 2048 位或 ECC 256 位以上的公钥算法
* 使用前向加密技术

## 查看 crt 证书信息

```bash
openssl x509 -noout -text -in ./hostname.crt
```

## 升级 openssl 脚本

```bash
#!/bin/sh
cd /opt/download
wget https://www.openssl.org/source/openssl-1.0.2k.tar.gz
tar -zxvf open-ssl-1.0.2k.tar.gz
cd openssl-1.0.2k
./confg --prefix=/usr/local/openssl
make && make install
mv /usr/bin/openssl  /usr/bin/openssl.OFF
ln -s /usr/local/openssl/bin/openssl  /usr/bin/openssl
ln -s /usr/local/openssl/include/openssl  /usr/include/openssl
echo "/usr/local/openssl/lib" >>/etc/ld.so.conf
ldconfg -v
openssl version -a
```

## HTTPS 优化

https 连接建立 = tcp 握手 + ssl 握手

* 激活 keepalive 长连接`keepalive_timeout 100;`
* 设置 ssl session 缓存
	* `ssl_session_cache shared:SSL:10m;`
	* `ssl_session_timeout 10m;`