# Redis

##  Redis 基本操作

* 源码编译安装 
* redis-server start/restart # 启动
* redis-server stop # 停止
* redis-client # 客户端

## Redis 扩展知识

* 不仅仅支持简单的 k/v 类型的数据，同时还支持 list, set, map 等数据结构的存储
* redis 支持数据的存储，即 master-slave 模式的数据备份
* redis 支持数据的持久化，可将内存中的数据保存在磁盘中，重启的时候可以再次加载使用

## Redis 安装

* wget http://download.redis.io/releases/redis-4.0.9.tar.gz # 获取源码
* yum install gcc # 安装 gcc
* make MALLOC=libc
* make install


## Redis 使用

* redis-server # Redis 服务端启动程序
* redis-cli # Redis 客户端操作工具。也可以使用 telnet 使用纯文本协议操作
* redis-benchmark # Redis 性能测试工具
* redis-check-aof # 数据恢复工具
* redis-check-dump # 检查导出工具

* ./src/redis-server # 启动 redis

## Memcached 基本操作

```bash
yum install memcached # 安装
memcached -d -l -m -p # 启动 -d 后台方式运行 -m 内存分配 -l 监听的 ip ， -p 端口号
kill pid # 关闭
```

