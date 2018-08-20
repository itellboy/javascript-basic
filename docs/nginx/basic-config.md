# Nginx 基本配置

## nginx 默认配置语法

| 配置项 | 作用  | |
| -- | -- | -- |
| user | 设置 ngxin 服务的系统使用用户 |
| worker_processes | 工作进程数 |
| error_log | nginx 错误日志 |
| pid | nginx 服务启动的pid |

||||
|--|--| --|
| events | worker_connections </br> use | 每个进程允许的最大连接数 </br> 工作进程数 |

## http 请求

* request 包含请求行，请求头，请求数据
* response 包含状态行，消息报头，响应正文

## Nginx 日志类型

error.log access.log ，通过 log_format 配置

* http 请求变量 - arg_PARAMETER, http_HEADER, sent_http_HEADER
* 内置变量 - Nginx 内置的
* 自定义变量