# services

## crontab 定时任务

minute hour day month week commond

* minute 表示分钟 0-59
* hour 表示小时 0-23
* day 表示天 1-31
* month 表示月份 1-12
* week 表示星期 0-7 # 0 和 7 都代表星期天
* commond 表示要执行的命令

以上字段中可以使用特殊符号表示特殊含义

* \* 代表所有值，如果 month 字段设置 为 \* 号，则表示每个月都执行
* , 可以用逗号隔开的值指定一个列表范围 ，例如 1,2,3
* \- 表示一个范围，例如 1-4 表示 1,2,3,4
* / 用来指定时间的间隔频率，例如 0-23/2 表示每两个小时执行一次

例子：

* \*/30 表示每三十分钟执行一次

## Ntpdate 日期同步

* yum install ntpdate; # 安装 ntpdate
* ntpdate cn.pool.ntp.org # 同步时间

## Logrotate 日志切割

* /etc/logrotate.d/* # 配置文件

练习：切割之后的日志文件以日期命令

## supervisor 进程管理

* pip install supervisor # 安装 supervisor