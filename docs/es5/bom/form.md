# 表单，FormData 对象

## 表单

用户可以通过`<form>`表单填写一些数据并且提交到服务端
```html
<form>
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">提交</button>
</form>
```

表单里每一个控件都会生成一对键值对，键名为控件的`name`属性，提交的数据格式与表单元素的`method`属性有关

如果是值为`GET`，所有的键值对会以 URL 查询字符串的形式提交

```javascript
"?username=tom&password=123456"
```

如果值为`POST`，所有的键值对会连接成一行提交到服务端

```javascript
"username=tome&password=123456"
```

### 表单元素的方法

* `submit()`：提交表单
* `reset()`：重置表单

## FormData 对象

通过 JavaScript 脚本模拟表单行为

### 构造函数

浏览器原生提供 FormData 构造函数，可以通过`new`命令生成表单实例

```javascript
var formData = new FormData()
formData.append('username', 'tom')
formData.append('password', '123456')
```

### 实例方法

* `get(key)`：获取指定的键名对应的键值
* `getAll()`：获取所有的键值对
* `set(key, value)`：设置已存在键名对应的值，如果不存在，则新增，否则更新
* `delete(key)`：删除指定键名的键值对
* `append(key, value)`：添加一对键值对，如果已存在，则
* `has(key)`：是否存在指定键名的键值对
* `keys()`：返回键名的遍历器对象
* `values()`：返回键值的遍历器对象
* `entries()`：返回键值对的遍历器对象

## 表单的内置验证

### 自动校验

可以给表单元素添加一些特殊的属性来进行表单的自动校验

```html
<input required />
<input pattern="a|b"/>
<input type="number" min="0" max="10">
<input minLength="1" maxLength="10">
<input type="email"/>
<input type="URL"/>
```

如果表单通过验证，表单会匹配`:valid`的 CSS 伪类，如果不匹配则匹配`:invalid`的 CSS 伪类

### checkValidity()

可以调用表单元素或者表单控件元素的`checkValidaty()`来手动出发表单的校验

### willValidate

表单控件元素的`willValidate`属性返回一个布尔值，表示该控件在提交的时候是否进行校验

### validitionMessage

控件元素的`validationMessage`属性返回一个字符串，表示在校验不通过的情况下需要显示的文本

### setCustomValidaty()

传入一个字符串参数，来设置控件元素的校验不通过的错误信息

### validity

控件元素的`validity`属性返回一个 ValidityState 对象，表示该控件元素的校验信息，所有属性只读

* `badInput`：布尔值，表示浏览器是否不能将用户的输入转换成正确的类型，比如用户在数值框里面输入字符串
* `customError`：是否调用`setCustomValidaty()`方法设置了自定义校验信息
* `patternMisMatch`：布尔值，表示用户输入的值是否不满足模式的要求
* `rangeOverflow`：布尔值，表示用户输入的值是否大于最大范围
* `rangeUnderflow`：布尔值，表示用户输入的值是否小于最小范围
* `stepMismatch`：布尔值，表示用户输入的值不符合步长的设置
* `tooLong`：布尔值，表示用户输入的长度是否大于最大长度
* `tooShort`：布尔值，表示用户输入的长度是否小于最小长度
* `typeMisMatch`：布尔值，表示用户输入的值是否满足控件元素的`type`属性
* `valid`：布尔值，表示用户是否满足所有校验条件
* `valueMissing`：布尔值，表示用户没有填入必填的值

### novalidate 属性

表单元素设置`novalidate`可以关闭校验，也可以通过`form.noValidate = true`来设置

## enctype 属性

表单能够用四种编码向服务端发送数据，取决于表单元素的`enctype`属性

假设有下面一组数据需要发出

```javascript
var data = {
  foo: 'hello',
  bar: 'world'
}
```

### Get

如果请求为 Get 请求，`enctype`属性无效，因为数据是以 URL 查询字符串的形式发出

```javascript
"?foo=hello&bar=world"
```

### application/x-www-form-urlencoded

如果请求为 POST 请求，则`enctype`的默认值为`application/x-www-form-encoded`

```
Content-Type: "application/x-www-form-urlencoded"

"foo=hello&bar=world"
```

### text/plain

如果将`enctype`的值设置为`text/plain`，则表单数据将以纯文本的形式发出

```
Content-Type: "text/plain"

foo=hello
bar=world
```

### multipart/form-data

数据将以混合形式发出

```
------WebKitFormBoundaryKfJrVCF4V3AoVtX0
Content-Disposition: form-data; name="file"; filename="1432794491_nwlukUAV.jpg"
Content-Type: image/jpeg


------WebKitFormBoundaryKfJrVCF4V3AoVtX0
Content-Disposition: form-data; name="save_path"

/public/upload/user_images/
------WebKitFormBoundaryKfJrVCF4V3AoVtX0
Content-Disposition: form-data; name="is_rename"

1
------WebKitFormBoundaryKfJrVCF4V3AoVtX0--
```