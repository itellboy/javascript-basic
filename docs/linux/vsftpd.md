# Vsftpd 使用

## Vsftpd 概述

* yum install vsftpd -y # 安装 vsftpd
* /etc/vsftpd/vsftpd.conf # vsftpd 配置文件
* /etc/vsftpd/ftpuses # vsftpd 用户黑名单，不受配置影响
* /etc/vsftpd/user_list # vsftpd 用户黑名单，当 vsftpd.conf 里面设置 `userlist_enable=YES` 有效

## 添加用户

* useradd -d /home/ftpuser1 -s /sbin/nologin ftpuser1 # 添加一个不能登陆并且家目录在 /home/ftpuser1 的ftpuser1 用户
* passwd ftpuser1 # 设置 ftpuser1 的密码

## chroot 设置

> 默认配置，用户可以通过访问上一级目录进入其他目录，通过 chroot 设置来防止用户可以进入其他目录

* chroot\_local\_user=YES # 所有用户执行 chroot 设置
* chroot\_list\_enable=YES # 打开指定用户执行 chroot 设置
* chroot\_list\_file=/etc/vsftpd.chroot\_list # 指定执行 chroot 设置的用户列表
* allow_writeable_chroot=YES # 允许根目录读写权限