# mongodb 数据迁移

一次性迁移，`mongodump`,`mongorestore`

**mongodump**

```bash
mongodump -h dbhost -d dbname -o dbdir
```

* -h mongodb 所有服务器地址，可指定端口，例如 127.0.0.1:27017
* -d 数据库名称
* -o 需要别分数据库存放位置，如 /home/bak
* -u 用户名称，使用权限认证的 mongodb 服务，需要明确指定账号和密码
* -p 用户密码

**mongorestore**

```bash
mongorestore -h dbhost -d dbname dbdir
```

* -h 服务器地址
* -d 恢复数据库的名称，可以和原数据库不一样
* -drop 加上这个参数会在恢复之前删除数据