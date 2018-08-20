# 初探 mongodb

**启动 mongodb**

```bash
mongod -f /usr/local/etc/mongo.con # 普通方式启动 mongodb
mongod -f /usr/local/etc/mongo.conf --auth # 授权方式启动 mongodb
```

**创建管理员/用户**

```javascript
// 管理员
db.createUser({name: 'admin', pwd: 'admin', roles: ['root']});
// 用户
db.createUser(name: 'test', pwd: '123456', roles: [ { role: 'dbOwner', db: 'test' } ] );
```

**认证**

```javascript
db.auth('admin', 'admin');
```

**查看所有数据库**

```javascript
show dbs;
```

**创建/切换数据库**

```javascript
use database
```

**删除数据库**

```javascript
db.dropDatabase('users');
```

**查看数据库所有集合**

```javascript
show collections;
```

**数据库集合操作**

```javascript
// 创建集合
db.createCollection('users');
// 删除集合
db.users.drop();
```

**集合文档操作**

```bash
# 文件导入数据
mongoimport -d database -c users --file /tmp/data.json
```

```javascript
// 数据插入，如果`users`集合不存在，将会创建`users`集合
db.users.insert( {id: 1, name: 'tom', age: 12} );

// 数据删除
db.users.remove({id: 1})

// 数据查询
db.users.find();
db.users.find().pretty();
db.users.findOne();
db.users.find().count();
// 条件符
db.users.find({'info.age': {$gt: 12}})
db.users.find({'info.age': {$lt: 12}})
db.users.find({'info.age': {$eq: 12}})
db.users.find({'info.age': {$gte: 12}})

// 数据更新
db.users.update( {id: 1}, {$set: {name: 'tony'}} );
db.users.update( {id: 1}, {$set: {'info.age': 12}});
```


**查看当前连接数**

```javascript
db.serviceStatus().connections
```