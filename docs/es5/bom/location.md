# Location 对象，URL 对象，URLSearchParams 对象

## Location 对象

`Location`是浏览器原生提供操作和访问 URL 的对象，可以通过`document.location`和`window.location`获得

### Location 对象属性

* `origin`：协议+域名 + 端口
* `hash`：锚点，也就是网址`#`后面的值，包含`#`
* `host`：域名 + 端口，`80`和`443`端口会省略
* `hostname`：域名
* `href`：整个 URL
* `pathname`：URL 路径，从根路径`/`开始
* `port`：端口
* `protocol`：协议
* `search`：查询字符串部分，从`?`开始

```
hash: "#file-%E5%AF%B9%E8%B1%A1"
host: "itellboy.wang"
hostname: "itellboy.wang"
href: "https://itellboy.wang/es5/bom/file.html#file-%E5%AF%B9%E8%B1%A1"
origin: "https://itellboy.wang"
pathname: "/es5/bom/file.html"
port: ""
protocol: "https:"
search: ""
```

通过给`locaiton.href`赋值，可以进行网页跳转，直接修改`location`相当于修改`locaiton.href`

### Location 对象方法

* `assign()`：接受一个 URL 字符串作为参数，浏览器会跳转到该 URL
* `replace()`：接受一个 URL 字符串作为参数，浏览器会跳转到该 URL，和`assign()`不同的是，该方法将当前 URL 记录从`History`对象中清除，也就是说跳转之后不可以通过后退按钮退回原 URL，多用于网址从桌面端跳转到移动端
* `reload()`：重新加载当前 URL，相当于点击刷新按钮，接受一个布尔值作为参数，表示是否强制刷新
* `toString()`：返回`location.href`属性的结果

## URL 的编码与解码

网页的 URL 只能包含合法字符，其他字符必须被转义

合法字符分为两种

* URL 元字符（11 个）：`:`、`/`、`@`、`#`、`?`、`=`、`&`、`,`、`;`、`$`、`+`
* 语义字符：`a-z`、`A-Z`、`0-9`、`-`、`_`、`.`、`!`、`～`、`*`、`'`、`()`

转义规则：按照 UTF-8 规则对字符进行编码，然后在用`%`将每个字节分开，比如`对象`对应 UTF-8 编码为`E5 AF B9 E8 B1 A1`，转义之后为`%E5%AF%B9%E8%B1%A1`

### 编码与解码相关方法

#### encodeURI()

用于转码整个 URL，对合法字符之外的字符进行转义

```javascript
encodeURI('https://itellboy.wang/es5/bom/file.html#file-%E5%AF%B9%E8%B1%A1')
// "https://itellboy.wang/es5/bom/file.html#file-%25E5%25AF%25B9%25E8%25B1%25A1"
```

#### encodeURIComponent()

用于转码 URL 组成部分，除了语义字符外，都会进行转义

```javascript
encodeURIComponent('https://itellboy.wang/es5/bom/file.html#file-%E5%AF%B9%E8%B1%A1')
// "https%3A%2F%2Fitellboy.wang%2Fes5%2Fbom%2Ffile.html%23file-%25E5%25AF%25B9%25E8%25B1%25A1"
```

#### decodeURI()

`encodeURI()`方法的逆运算

#### decodeURIComponent()

`encodeURIComponent()`方法的逆运算

## URL 对象

`URL`对象为浏览器原生对象，用于对 URL 的构造，解析和编码，可以通过`window.URL`拿到这个对象

`<a>`和`<area>`部署了`URL`接口，可以使用`URL`对象的属性和方法

### 构造函数

`URL`对象本身是一个构造函数，可以通过`new`命令创建一个`URL`对象实例，接受一个 URL 字符串作为参数

```javascript
var url = new URL('https://itellboy.wang')
url.href // "https://itellboy.wang/"
```

### 实例属性

与`Location`对象属性基本一致

* `origin`：协议+域名 + 端口
* `hash`：锚点，也就是网址`#`后面的值，包含`#`
* `host`：域名 + 端口，`80`和`443`端口会省略
* `hostname`：域名
* `href`：整个 URL
* `pathname`：URL 路径，从根路径`/`开始
* `port`：端口
* `protocol`：协议
* `search`：查询字符串部分，从`?`开始
* `searchParams`：`URLSearchParams`对象实例，这是`Location`对象没有的

### 静态方法

#### URL.createObjectURL()

该方法用来为用于上传/下载的流媒体文件生成一个 URL 字符串，可以通过该字符串访问到`File`对象或者`Blob`对象

```html
<div id="root" />
<input onchange="fileChange(this.files)" />
```

```javascript
var div = document.getElementById('root')
function fileChange(files) {
  Array.prototype.forEach.call(files, (item) => {
    let img = document.createElement('img')
    img.src = window.URL.createObjectURL(item)
    div.appendChild(img)
  })
}
```

#### URL.revokeObjectURL()

每次使用`URL.createObjectURL()`都会在内存中生成一个 URL 实例，可以通过使用`URL.revokeObjectURL()`来释放内存

```javascript
function fileChange(files) {
  Array.prototype.forEach.call(files, (item) => {
    let img = document.createElement('img')
    img.src = window.URL.createObjectURL(item)
    img.onload = function() {
      window.URL.revokeObjectURL(this.src)
    }
    div.appendChild(img)
  })
}
```

一旦图片加载完成之后，为本地生成的 URL 字符串就没用了，可以在`img.onload`回调里面释放内存

## URLSearchParams 对象

URLSearchParams 是浏览器的原生对象，用来解析，构造和处理 URL 查询字符串

### 构造函数

字符串、对象、数组都可以作为 URLSearchParams 构造函数的参数，生成一个 URLSearchParmas 实例

```javascript
// 字符串
var searchParams = new URLSearchParams('?foo=1&bar=2')
// 对象
var searchParams = new URLSearchParams({foo: 1, bar: 2})
// 数组
var searchParams = new URLSearchParams([['foo', '1'], ['bar', 2]])

searchParams.toString() // "foo=1&bar=2"
```

可以将 URLSearchParams 实例作为 AJAX 的表单数据

### 实例方法

* `toString()`：返回实例的字符串形式
* `append()`：追加一对参数，不会覆盖
* `delete()`：删除一对参数
* `has()`：判断实例是否含有某个键名的参数
* `set()`：设置一对参数，会替换已存在键名
* `get()`：查询键名对应的键值
* `getAll()`：获取键名对应的所有键值数组
* `sort()`：对所有键名进行 Unicode 码点进行排序
* `keys()`：返回所有键名组成的遍历器
* `values()`：返回所有键值的遍历器
* `entries()`：返回键值对的遍历器
