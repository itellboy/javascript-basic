# CommonJS 规范

Node 应用的模块都采用 CommonJS 规范，每个文件是一个模块，每个模块都有自己的作用域，在作用域里面定义的变量，函数，类，都是私有的，外部不可访问

* 所有代码运行在模块作用域，不会污染全局作用域
* 模块可以被多次加载，只有在第一次被加载的时候才会运行，后面的加载直接读取缓存的结果
* 模块加载的顺序，按照代码中出现的顺序

模块代码会被 Node 封装在下面这个函数里面

```javascript
(function(exports, require, module, __filename, __dirname){
  // 模块代码
})
```

## module 变量           　　　　　　　   

每个模块内部有一个 module 变量表示当前模块具有以下属性

| attribute | desc |
| --- | --- |
| module.id | 模块的标识符，通常是绝对路径加上模块文件名 |
| module.filename | 模块的文件名 |
| module.loaded | 模块是否加载完成 |
| module.parent | 调用模块的模块 |
| moduel.children | 返回一个数组，表示该模块调用的其他模块 |
| module.exports | 模块对外输出的值 |

## requrie 命令

require 用于加载模块 

加载规则

* 如果以`/`开头，表示加载一个绝对路径的模块文件
* 如果以`./`开头，表示加载一个相对路径的模块文件
* 如果不以`./`或者`/`开头，表示加载一个默认提供的模块，或者位于各级`node_modules`目录下面的模块
* 如果不以`./`或者`/`开头,而是一个路径，比如`bar/foo/abc.js`，Node 会尝试照到`bar`目录的路径，然后继续往下照
* 如果指定的模块文件没有找啊到，Node 会尝试为文件名添加`.js`, `.node`, `.json`后缀，`.js`会以 JavaScript 脚本文件解析，`.json`会以 Json 格式的文件解析，`.node`会以编译后的二进制文件解析
* 如果想得到`require`命令加载的确切文件名，可以使用`require.resolve()`方法

**目录的加载规则**

通常我们会吧相关文件放在一个文件夹里面，便于组织，然后设置一个入口文件，让`require`通过入口文件加载整个目录，Node 模块的入口文件为`package.json`，入口文件通过`main`属性指定

**模块的缓存**

Node 在第一次夹在模块时，会缓存该模块，以后加载直接读取该模块的`module.exports`属性

所有的缓存模块保存在`require.cache`中，可以通过下面的方式删除模块的缓存

```javascript
delete require.cache['moduleName'];

Object.keys(require.cache).forEach(key => {
  delete require.cache[key]
})
```

**require.main**

`require`对象有一个`main`属性，用来判断模块是直接执行还是被调用执行

* 直接执行`node module.js` 返回模块本身
* 被调用执行`require('module.js')` // 返回`false`

## 模块的加载机制

输入的值是被输出值的拷贝，一旦模块的值被输出，在模块内部去改变，不会影响已经被输出的值

## \_\_filename, \_\_dirname

`__filename`文件的绝对路径加上文件名

`__dirname`文件的绝对路径，不包括文件名
