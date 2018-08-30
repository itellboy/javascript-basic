# 文件查找

## locate

* 在后台数据库中按文件名搜索，速度快  
* /var/db/locate.database 数据库，一天一更新  
* /etc/locate.rc 配置文件   
* updatedb 更新数据库  

## whereis 命令名

搜索命令的命令  

```bash
whereis
  -b # 只看可执行文件
  -m #  只看帮助文档
whatis
whoami
which # 类似于whereis,查看命令的别名
```

## find [搜索范围] [搜索范围]

* 速度慢，完全匹配  
* `*`匹配任意字符  
* `?`匹配一个字符  
* `[]`任意一个中括号里面的一个字符

```bash
find
  / -name '*.log'
    -iname # 忽略大小写
    -user root
    -nouser # 查找没有所有者的文件
    -mtime
      + 10 # 查找十天前的文件
      - 10  #查找时间内的时间
      10 # 十天当天
    -atime # 文件访问时间
    -ctime # 改变文件属性
    -size
      [+-] 25k # 文件大小
      [+-] 2M
    -inum # 根据i节点搜索
    -a 与
    -o 或
    -exec ls -ls {} \  # 给find执行的结果执行命令
```

## grep [选项] 字符串 文件名

在文件当中匹配符合条件的字符串，包含匹配

```bash
grep
  -i # 忽略大小写
  -v # 排除指定的字符串	
```
   		