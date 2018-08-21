# console

> 提供一个简单的控制台,类似于 Web 浏览器提供的 JavaScript 控制台

包含两个组件

* Console 类,包含`console.log()`、`console.error()`、`console.warn()`等方法,可以被写入任何的 Node 流
* 全局的`console`实例,可被用于写入到`process.stdout`和`process.stderr`

## Console 类

可通过 Console 类创建一个简单的可配置输出流的记录器,可通过`require('console').Console`或者`console.Console`使用

**new Console(stdout[,stderr[,ignoreErrors]])**

**new Console(options)**

* `options`
	* `stdout`正常输出流
	* `stderr`错误和警告输出流,不提供则使用`stdout`
	* `ignoreErrors`是否忽略错误输出流
	* `colorMode`输出的颜色模式

```javascript
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console({ stdout: output, stderr: errorOutput });
const count = 5;
logger.log('count: %d', count);
// count: 5
```

全局的`console`是一个特殊的`Console`实例,它的输出流会被送往`process.stdout`和`process.stderr`,等价于

```javascript
new Console({
  stdout: process.stdout,
  stderr: process.stderr,
})
```

**console.clear()**

清除当前 TTY 的输出

**console.log()**

打印到`stdout`,并带上换行符

**console.info()**

`console.log()`的别名