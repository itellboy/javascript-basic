# 关机与重启

## 关机与重启

```bash
shutdown
  -c # 取消前一个关机命令
  -r # 时间 & //将关机命令放入后台执行，不阻塞当前shell环境
  -h # 关机
  -r # 重启

# 关机
halt
poweroff
init 0

# 重启
reboot
init 6
```

## 系统运行级别

* 0	关机  
* 1	单用户  
* 2	不完全多用户，不含nfs服务  
* 3	完全多用户（常用）  
* 4	未分配  
* 5	图形界面  
* 6	重启

```bash
runlevel # 查看当前系统运行级别和上一次级别
cat /etc/inittab # 查看系统启动级别配置文件
```

## logout

退出登陆
	