# 常用命令

## Linux 常用命令

### 软件操作命令

* 软件包管理器 yum
* 安装软件 yum install xxx
* 卸载软件 yum remove xxx
* 搜索软件 yum search xxx
* 清理缓存 yum clean packages
* 列出已经安装 yum list
* 软件包信息 yum info xxx

### 服务器硬件资源信息

* 内存 free -m
* 硬盘 df -h
* 负载 w/top
* 格式化磁盘 fdisk
* 查询cpu信息 cat /proc/cupinfo

### 文件操作命令

#### 文件目录

* 根目录 /
* 家目录 /home
* 配置文件 /etc
* 临时目录 /tmp
* 用户程序目录 /usr

#### 基本命令

* 查看目录文件 ls
* 创建文件 touch
* 创建文件夹 mkdir
* 进入目录 cd
* 删除文件/文件夹 rm
* 复制 cp
* 剪切 mv
* 显示当前目录 pwd

## vim 使用

* gg 移到行首
* G 移到行尾
* dd 删除一行
* u 撤回
* yy 复制一行
* p 粘贴一行
* i 插入模式
* esc 退出，进入只读模式
* :wq 保存退出
* :set number 显示行数

## 文件搜索

* tail 从文件尾部开始读
* head 从文件头部开始读
* cat 读取整个文件
* more 分页读取
* less 可控分页
* grep 搜索文件
* find 查找文件
* wc 统计个数