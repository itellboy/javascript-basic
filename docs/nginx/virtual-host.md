# Nginx 虚拟主机配置

## 基于主机多 ip 配置方式

```
server{
  listen 192.168.1.110:80;
}
server{
  listen 192.168.1.111:80;
}
```

## 基于端口配置方式

```
server{
  listen 80;
}
server{
  listen 81;
}
```

## 基于多个 host 配置(多域名配置)

```
server{
  listen 80;
  server_name a.com;
}
server{
  listen 80;
  server_name b.com;
}
```