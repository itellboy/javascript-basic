# path 模块

提供一些操作文件和目录的函数，某些函数在 windows 和 POSIX 上的返回会有所不同

> `POSIX`表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX

**path.basename(path[, ext])**

返回一个`path`的最后一部分，没有尾部文件分割符

```javascript
path.basename('/bar/foo/q.html');  // q.html
path.basename('/bar/foo/q.html', '.html') // q
```

**path.delimiter**

返回系统的分隔符

```javascript
path.delimiter // ; Windows
path.delimiter // : POSIX
```

**path.dirname(path)**

返回一个`path`的目录名

```javascript
path.dirname('/bar/foo/a.html') // /bar/foo
```

如果`path`不是一个字符串，则抛出`TypeError`

**path.extname(path)**

返回`path`的扩展名，即最后一个`.`到字符串结尾的部分，如果第`path`中唯一一个`.`在字符串开头或者没有`.`，返回空字符串


```javascript
path.extname('/bar/foo/a.html') // .html
```

**path.format(pathObject)**

将一个`pathObject`转换成路径字符串返回

```javascript
pathObject = {
  dir: '',
  root: '',
  base: '',
  name: '',
  ext: '',
}
```

这些属性会有优先级关系存在

* 如果有`pathObject.dir`存在，`pathObject.root`属性会失效
* 如果有`pathObject.base`存在，`pathObject.name`和`pathObject.ext`属性会失效

**path.isAbsolute(path)**

判断`path`是否是一个绝对路径

**path.join([...paths])**

利用操作系统的分隔符将多个`path`拼接起来，生成一个规范的路径

```javascript
path.join('a', 'b', 'c') // 'a/b/c'
path.join('a', 'b', 'c', '..') // 'a/b'
```

**path.normalize(path)**

规范化给定的`path`

* POSIX

```javascript
path.normalize('/bar//foo/a/b/..') // '/bar/foo/a'
```

* windows

```javascript
path.normalize('c:\\bar\\foo\\..\\\\a') // 'c:\\bar\a'
```

**path.parse(path)**

返回一个`pathObject`对象，元素表示`path`

```javascript
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
```



**path.posix**

提供`path`针对 POSIX 的实现

**path.relative(from, to)**

返回从`from`到`to`的相对路径

```javascript
path.relative('/bar/foo/a/b', '/bar/c') // '../../../c'
```

**path.resolves([...paths])**

把一个路径或者路径片段解析为绝对路径，从右向左解析，直到构成一个完成的绝对路径，如果最后全部处理完不是一个绝对路径，则当前的工作目录会被用上，末尾的斜杠会被删除，如果没有参数，则返回当前工作目录

```javascript
path.resolve('/dir', 'foo', 'a') // '/dir/foo/a'
path.resolve('/dir', '/foo', 'a') // '/foo/a'
```

**path.sep**

返回操作系统的路径片段分隔符

* POSIX 返回`/`
* Windows 返`\`

**path.toNamespacedPath(path)**

仅仅在 Windows 上使用

**path.win32**

提供了`path`针对 Windows 的实现