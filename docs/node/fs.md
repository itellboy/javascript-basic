# fs 文件系统

> 提供了一些与系统文件交互的 api

所有的系统文件操作都提供同步和异步两种方式

## 文件路径

可以是以下三种

* 字符串(相对路径、绝对路径)
* Buffer
* `file:`协议的 url 对象

## 线程池的使用

除了`fs.FSWatcher()`和显示同步的方法外,都是用了线程池去操作

## 文件描述符

在 POSIX 系统中内核为所有进程维护者一张当前打开着的文件与资源的表格,每个打开的文件都会分配一个名为文件描述符的数值标识,可以根据这些数值标识来追踪每个文件,Windows 也适用了类似的机制来追踪资源,为了方便,Node 抽象了不同操作系统之间的差异,为所有打开的文件分配了数值的文件描述符

`fs.open()`方法用于分配一个新的文件描述符.一旦分配了,可以利用文件描述符读取数据,写入数据或者查看文件信息

大多数操作系统都会限制打开文件描述符的数量,所以当操作完成时须关闭文件描述符,否则造成内存泄漏,应用崩溃

## fs.FSWatcher 类

`fs.watch()`会返回一个`fs.FSWatcher`对象,每当监视的文件发生变化,都会出发`change`事件

**change 事件**

* `eventType`事件类型
* `filename`改变的文件名

当被监视的目录和文件发生改变时触发

**error 事件**

* `error`

当监视文件发生错误时触发

**watch.close()**

停止监视文件的变化

## fs.ReadStream 类

成功调起`fs.createReadStream()`会返回一个`fs.readStream`对象

**close 事件**

`fs.readStream`底层的文件描述符被关闭时触发

**open 事件**

`fs.readStream`文件描述符被打开时触发

**ready 事件**

`fs.readStream`准备好时触发

**readStream.bytesRead**

已读取的字节数

**readStream.path**

流正在读取文件的路径

## fs.stats 类

`fs.stats`类提供了文件的信息

获取

* `fs.stat()`
* `fs.lstat()`
* `fs.fstat()`

如果传入函数的`options`的`bigint`属性为`true`,则数值则会使`bitint`型,而不是`number`型

| method | desc |
| --- | --- |
| stats.isCharacterDevice() | 是否是一个字符设备 |
| stats.isDirectory() | 是否是一个目录 |
| stats.isFIFO() | 是否是一个先进先出的管道 |
| stats.isFile() | 是否是一个文件 |
| stats.isSocket | 是否是一个 socket |
| stats.isSymbolicLink() | 是否是一个符号链接,只有在使用`fs.lstat()`有用 |

| attribute | desc |
| --- | --- |
| stats.dev | 包含文件设备的数值标识 |
| stats.ino | 文件系统特定的文件索引节点数值 |
| stats.mode | 标识文件类型与模式的位域 |
| stats.nlink | 文件硬链接的数量 |
| stats.uid | 文件拥有者的数值型用户标识 |
| stats.gid | 文件拥有者所在群组数值型群组标识 |
| stats.size | 文件的字节大小 |
| stats.blksize | 文件用语 I/O 操作块的大小 |
| stats.block | 分配给文件块的数量 |
| stats.atimeMs | 文件最后一次被访问的时间戳 |
| stats.mtimeMs | 文件最后一次被修改的时间戳 |
| stats.ctimeMs | 文件状态最后一次被改变的时间戳 |
| stats.birthtimeMs | 文件创建时间的时间戳 |
| stats.atime | 文件最后一次被访问的时间 |
| stats.mtime | 文件最后一次被修改的时间 |
| stats.ctime | 文件状态最后一次被改变的时间 |
| stats.birthtime | 文件的创建时间 |

### stat 时间的值

时间戳均精确到毫秒,精度与平台相关

## fs.WriteStream 类

是一个可写流

**close 事件**

`WriteStream`底层的文件描述符被关闭时触发

**open 事件**

文件被打开时触发

**ready 事件**

`fs.WriteStream`准备好的时候触发

**writeStream.bytesWritten**

已经写入的字节数

**writeStream.path**

流正在写入的文件的路径,指定在`fs.createWriteStream()`的第一个参数

## fs.access(path[, mode], callback)

测试`path`指定目录或文件的用户权限

参数

* `path`
* `mode`默认`fs.constants.F_OK`
* `callback`
	* error

不建议在打开,写入,读取文件的时候调用此方法

**fs.accessSync()**

`fs.access()`方法的同步版本

## fs.appendFile(path, data[, options], callback)

异步追加数据到文件,如果文件不存在则创建文件

**fs.appendFileSync()**

`fs.appendFile()`方法的同步版本

## fs.chmod(path, mode, callback)

改变文件的权限

mode 常量

| mode | Octal | desc |
| --- | --- | --- |
| fs.constants.S_IRUSR | 0o400 | read by owner |
| fs.constants.S_IWUSR | 0o200 | write by owner |
| fs.constants.S_IXUSR | 0o100 | execute/search by owner |
| fs.constants.S_IRGRP | 0o40 | read by group |
| fs.constants.S_IWGRP | 0o20 | write by group |
| fs.constants.S_IXGRP | 0o10 | execute/search by group |
| fs.constants.S_IROTH | 0o4 | read by others |
| fs.constants.S_IWOTH | 0o2 | white by others |
| fs.constants.S_IXOTH | 0o1 | execute/search by others |

**fs.chmodSync()**

`fs.chmod()`的同步版本

## fs.chown(path, uid, gid, callback)

问遍文件所有者和群组

**fs.chownSync()**

`fs.chown()`的同步版本

## fs.constants

包含常用文件操作系统的常量

## fs.copyFile(src, dest[, flags], callback)

复制文件

**fs.copyFileSync()**

`fs.copyFile()`的同步版本

## fs.createReadStream(path[, options])

创建一个文件读入流

参数

* `path`文件路径
* `options`
	* `flags`支持的文件系统 flag,默认为`r`
	* `encoding`默认为`null`
	* `fd`默认为`null`
	* `mode`默认为`0o666`
	* `autoClose`默认为`true`
	* `start`
	* `end`默认`Infinity`
	* `highWaterMark`默认`64*1024`

## fs.createWriteStream(path[, options])

创建一个文件写入流

参数

* `path`文件路径
* `options`
	* `flags`
	* `encoding`
	* `fd`
	* `mode`
	* `autoClose`
	* `start`

## fs.existSync(path)

同步判断路径是否存在

## fs.readdir(path[, options], callback)

读取一个目录的内容

参数

* `path`
* `options`
	* `encoding`
* `callback`
	* `err`
	* `files`不包括`.`和`..`文件名的数组

**fs.readdir()**

`fs.readdir()`同步版本

## fs.readFile(path[, options], callback)

读取文件

参数

* `path`
* `options`
	* `encoding`编码格式,默认为`null`
	* `flags`
* `callback`
	* `err`
	* `data`文件数据

优先使用`fs.createReadStream()`

**fs.readFileSync()**

`fs.readFile()`同步版本

## fs.unlink(path, callback)

删除文件

提供同步的`fs.unlinkSync()`版本

## fs.rename(oldPath, newPath, callback)

重命名文件

提供同步的`fs.renameSync()`版本

## fs.mkdir(path[, mode], callback)

异步创建目录

提供同步的`fs.mkdirSync()`方法

## fs.rmdir(path, callback)

异步删除目录

提供同步的`fs.rmdir()`方法

## fs.writeFile(path, data[, options], callback)

将数据写入文件,若文件已经存在,则覆盖

参数

* `path`
* `data`
* `options`
	* `encoding`
	* `mode`
	* `flag`
* `callback`
	* `err`

**fs.writeFileSync()**

`fs.writeFile()`的同步版本

## fs.watch(filename[, options[, listener]])

监视`filename`的变化,对象可以是一个目录或者文件,返回一个`fs.FSWatcher`对象

参数

* `filename`
* `options`
	* `persistent`如果文件正在被监视,进程是否继续运行,默认为`true`
	* `recursive`是否全部子目录应该被监视,默认为`false`
	* `encoding`用于传给监听器的文件名的编码,默认`utf8`
* `listener`
	* `eventType`
	* `filename`

监听器的回调是绑定在`fs.FSWatcher`的`change`事件上面