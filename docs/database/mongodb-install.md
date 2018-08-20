# mongodb 安装 (Centos 7)

[官方链接](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

由于官方库没有包含 mongodb ，需要手动创建`repo`

```bash
vim /etc/yum.repo.d/mongodb-org-4.0.repo
```

填写以下内容

```
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

**执行安装命令**

```bash
yum install -y mongodb-org
```

**相关目录**

[配置文件参考](https://docs.mongodb.com/manual/reference/configuration-options/)

```bash
/etc/mongo.conf # 配置文件 
/var/log/mongodb/mongod.log # 日志
/var/lib/mongo # 数据库文件
```

**连接mongodb**

```bash
mongo --host 127.0.0.0 27017
```