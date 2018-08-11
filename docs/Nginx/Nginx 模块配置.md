# Nginx 模块配置

## Nginx 官方模块

| 编译选项 | 作用|
|--|--|
|--with-http-stub-status-module| Nginx 的客户端状态

* Syntax: stub_status;
* Default: --
* Context: server, location

| 编译选项 | 作用|
|--|--|
|--with-http-random-index-module| 目录中选择一个随机主页

* Syntax: random_index on | off;
* Default: random_index off;
* Context: location

| 编译选项 | 作用|
|--|--|
|--with-http_sub_module| http 内容替换

* Syntax: sub_filter string replacement;
* Default: --;
* Context:http, server, location

返回内容是否有更新，主要用于缓存

* Syntax: sub_filter_last_modified on | off;
* Default: sub_filter_last_modified off;
* Context:http, server, location

是否只替换一次

* Syntax: sub_filter_once on | off;
* Default: sub_filter_once on;
* Context:http, server, location

