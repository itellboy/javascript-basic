# process 进程

是一个全局变量，提供当前 Node 进程的有关信息，以及控制当前 Node 的进程

## proccess 事件

process 对象是一个`EventEmit`实例

**beforeExit 事件**

当 Node 事件循环数组已经为空，并且没有额外的工作添加进来，事件`beforeExit`就会被触发，正常情况，如果时间循环数组为空，Node 进程就会结束，如果绑定`beforeExit`事件的监听函数是一个异步回调函数，则 Node 进程则会继续运行

`process.exitCode`作为唯一的值传递给`beforeExit`事件的监听回调函数

如果直接调用`process.exit()`终止 Node 进程，`beforeExit`事件不会被触发

**disconnect 事件**

如果 Node 进程由 IPC 通道方式创建，当 IPC 通道关闭时，会触发该事件

**exit 事件**

以下两个操作会触发`exit`事件

* 显示调用`process.exit()`
* Node 事件循环数组没有额外的工作，Node 进程即将结束

一旦`exit`的回调函数执行完成，将没有任何操作能终止 Node 的结束，并且`exit`事件的监听函数里面不能包含异步操作，任何在事件循环数组中排队的工作都将被丢弃

**message 事件**

如果 Node 进程由 IPC 通道方式创建，当子进程收到父进程发送的消息时，会触发`message`事件

**uncaughtException 事件**

* 当 JavaScript 发生未捕获的异常，沿着代码调用路径反向传递回事件循环，会触发`uncaughtException`事件
* Node 默认情况下，将异常打印到`stderr`，然后结束进程退出
* 为`uncaughtException`事件添加监听函数可以覆盖上述默认行为，回调函数接受一个`Error`对象作为参数

**unhandledRejection 事件**

如果在一次事件的轮询中，一个`Promise`被 rejected，并且此`Promise`没有绑定错误处理器，`unhandledRejection`事件就会被触发

事件的回调函数包含两个参数，一个是 rejected 的相关信息`reason`，第二个是被 rejected 的`promise`对象

**rejectionHandled 事件**

如果一个`Promise`被 rejected，并且此`Promise`在事件的下次轮询及之后期间，被绑定了一个错误的处理器，会触发`rejectionHandled`事件，回调函数接受被 rejected 的`Promise`对象

可以使用下面代码来监控被异步处理后的 rejected 的`Promise`对象

```javascript
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, p) => {
  unhandledRejections.set(p, reason);
});
process.on('rejectionHandled', (p) => {
  unhandledRejections.delete(p);
});
```

* 在同步代码的情况下，当未处理的异常队列增长时，会触发`uncaughtException`事件
* 在异步代码的情况下，当未处理的异常队列增长时，会触发`unhandledRejection`事件，当未处理的异常队列缩短时，会触发`rejectionHandled`事件

**warning 事件**

任何时间向 Node 进程发出警告，都会触发`warning`事件，将警告相关信息打印到`stderr`

可以通过`process.emitWarning()`来触发一个警告

**process.abort()**

立即结束 Node 进程，并生成一个 core 文件

**process.arch**

返回一个表示 CPU 架构的字符串，例如`arm`、`arm64`、`ia32`、`mips`、`mipsel`、`ppc`、`ppc64`、`s390`、`s390x`、`x32`、`x64`

**process.argv**

返回一个数组，包含启动 Node 的命令行参数

**process.argv0**

保存 Node 启动传入`argv[0]`参数的只读副本

**process.channel**

如果 Node 是以 IPC 方式创建，`process.channel`保存 IPC channel 的引用

**process.chdir(directory)**

变更当前 Node 的工作目录，如果变更失败回抛出异常

**process.config**

返回一个对象，包含用于当前编译当前 Node 执行程序涉及的配置信息

**process.connected**

* 如果 Node 是以 IPC 方式创建，只要 IPC channel 保持连接，则`process.connected`返回`true`

* 调用`process.disconnect()`，`process.connected`返回`false`

* 如果`process.connected`返回`false`，则不能通过 IPC channel 使用`process.send()`发送信息

**process.cpuUsage([previousValue])**

返回包含当前用户的 cpu 时间和系统的 cpu时间的对象，包含`user`和`system`属性，单位是微秒

**process.cwd()**

返回 Node 进程的工作目录

**process.env**

返回一个包含用户环境信息的对象

**process.execArgv**

返回 Node 进程被启动时，Node 的特定命令选项

**process.execPath**

返回启动 Node 的可执行文件的绝对路径

**process.exit([code])**

以结束状态码结束 Node 进程

**process.geteuid()、process.getegid()、process.getgid()、process.getuid()、process.getgroups()**

* 有效数字标识的用户身份
* 有效数字标识的组身份
* 数字标记的组身份
* 数字标识的用户身份
* 补充的组 ID 数组

**process.memoryUsage**

返回 Node 进程的内存使用情况，单位是字节

**process.nextTick(callback[, args])**

将 callback 放到当前事件轮询队尾开始执行，`args`为传入 callback 的参数

**process.pid**

返回 Node 进程运行的 pid

**process.plagform**

返回运行 Node 的操作系统平台，比如`aix`、`darwin`、`freebsd`、`linux`、`openbsd`、`sunos`、`win32`

**process.ppid**

Node 进程父进程的进程 ID

**process.stdin、process.stdout、process.stderr**

* `process.stdin`连接到`stdin`的流
* `process.stdout`连接到`stdout`的流，内部使用`console.log()`
* `process.stderr`连接到`stderr`的流，内部使用`console.err()`

**process.title**

获取或者设置当前 Node 进程在`ps`命令中显示的进程名字

**process.uptime**

Node 运行的时间秒长

**process.version**

返回 Node 的版本信息

**process.versions**

返回一个对象，包含 Node 及其依赖的版本信息

## Exit Codes

正常情况心爱，如果没有异步操作正在等待，Node 会以状态码`0`退出，其他情况的状态码如下

* `1`未捕获异常
* `2`暂未被使用
* `3`内部 JavaScript 分析错误
* `4`内部 JavaScript 执行失败
* `5`致命错误
* `6`非函数的内部异常处理
* `7`内部异常处理运行时失败
* `8`暂未被使用
* `9`不可用参数
* `10`内部 JavaScript 运行时失败
* `12`不可用的调试参数
* `128`退出信号
