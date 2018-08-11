# Nginx 基本配置

## http 请求

* request 包含请求行，请求头，请求数据
* response 包含状态行，消息报头，响应正文

## Nginx 日志类型

error.log access.log ，通过 log_format 配置

* http 请求变量 - arg_PARAMETER, http_HEADER, sent_http_HEADER
* 内置变量 - Nginx 内置的
* 自定义变量