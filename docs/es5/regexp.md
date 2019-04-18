# 正则表达式

正则表达式是一种文本匹配的模式

## 1. RegExp 对象

在 JavaScript 中，有两种创建正则表达式的方式，它们分别是

```javascript
var regexp = new RegExp('xyz');
var regexp = /xyz/;
```

### 1.1 实例属性

* `RegExp.prototype.ignoreCase`：只读，返回布尔值，表示是否具有忽略大小写修饰符`i`
* `RegExp.prototype.global`：只读，返回布尔值，表示是否具有全局匹配修饰符`g`
* `RegExp.prototype.multiline`：只读，返回布尔值，表示是否具有多行匹配修饰符`m`
* `RegExp.prototype.source`：只读，返回正则表达式的字符串形式，不包括修饰符
* `RegExp.prototype.flags`：只读，返回字符串，表示正则表达式的匹配模式，按照字母顺序排序，可能的值：`gimsuy`

* `RegExp.prototype.lastIndex`：可读写，表示下一次匹配开始的位置，可以通过手动设置属性来设置匹配的起始位置，只对同一个正则表达式生效

### 1.2 实例方法

#### 1.2.1 RegExp.prototype.test()

从正则表达式的`lastIndex`属性位置开始搜索字符串，如果找到匹配的值，返回`true`，否则返回`false`

如果正则表达式含有`g`修饰符，并且匹配成功，正则表达式的`lastIndex`属性会随之改变为下一次开始匹配的位置

```javascript
var reg = /xyz/g;
var str = 'abcdxyzfgxyz';
while(reg.test(str)) {
  console.log(reg.lastIndex)
}
// 7
// 12
```

#### 1.2.2 RegExp.prototype.exec()

用正则表达式去匹配字符串，如果匹配成功，则返回一个数组，否则返回`null`

如果正则表达式含有`()`，表示组匹配，数组成员为匹配成功的子字符串，第一个成员为匹配整个正则表达式的字符串，第二个位匹配第一对`()`规则的字符串，以此类推。

返回的数组还包含以下两个属性：

* `index`：整个正则表达式匹配字符串的起始位置
* `input`：原始字符串

```javascript
var reg = /xy(z)/g;
var str = 'abcxyzfdgxyz';

while(true) {
  const match = reg.exec(str);
  console.log(match);
  if(!match) break;
}
// (2) ["xyz", "z", index: 4, input: "abcdxyzfgxyz", groups: undefined]
// (2) ["xyz", "z", index: 9, input: "abcdxyzfgxyz", groups: undefined]
// null
```

## 2. 字符串中使用正则表达式的实例方法

* `String.prototype.match()`：匹配字符串
* `String.prototype.search()`：搜索字符串
* `String.prototype.replace()`：替换字符串
* `String.prototype.split()`：分割字符串

上面几个方法都可以接受正则表达式作为参数字符串，每次匹配都是从`0`开始，手动设置正则表达式的`lastIndex`属性无效

### 2.1 String.prototype.match()

接受一个正则表达式作为参数，返回一个数组，成员时匹配成功的子字符串，如果没有匹配成功`null`

* 当正则表达式没有带有`g`修饰符的时候，执行的结果和`RegExp.prototype.exec()`结果一致
* 当正则表达式带有`g`修饰符的时候，返回所有匹配成功的子字符串

```javascript
var reg = /xyz/;
var reg2 = /xyz/g;
var str = 'abcxyzabcxyz';

str.match(reg);
// ["xyz", index: 3, input: "abcxyzabcxyz", groups: undefined]
str.match(reg2);
// ["xyz", "xyz"]
```

### 2.2 String.prototype.search()

接受一个正则表达式作为参数，返回第一个匹配字符串在原字符串中的位置，如果没有匹配成功，返回`-1`

```javascript
var reg = /x/;
var str = 'abxcxd';
str.search(reg);
// 2
```

### 2.3 String.prototype.replace()

接受两个参数，第一个为正则表达式，第二个位替换的字符串，如果正则表达式带有`g`修饰符，则替换所有满足条件的子字符串，如果没有，则替换第一个满足条件的子字符串

```javascript
var reg = /x/g;
var str = 'abxcxd';
str.replace(reg, '0');
// "ab0c0d"
```

### 2.4 String.prototype.split()

按照正则规则将原字符串分割成数组

接受两个参数，第一个位正则表达式，第二个位返回数组的最大长度，可以省略，返回一个数组。

```javascript
var reg = /x/;
var str = 'abxcxd';
str.split(reg);
// (3) ["ab", "c", "d"]
```

## 3.正则表达式规则

### 3.1 字面量字符

在正则表达式中，某个字符只表示它字面的含义，比如`/z/`,`/a/`分别匹配 a 和 b，就叫他字面量字符

### 3.2 元字符

具有特殊含义的字符，主要有

* `.`：点字符，匹配除开回车 (`\r`)、换行 (`\n`)、行分割符 (`\u2028`) 和段分割符 (`\u2029`) 之外任意一个字符
* `^`：开始位置字符，表示匹配字符串开始
* `$`：结束为止字符，表示匹配字符串结束
* `|`：选择字符，表示或的关系

```javascript
/^a.(b|c)d$/.test('abd'); // false
/^a.(b|c)d$/.test('accd'); // true
/^a.(b|c)d$/.test('accdb'); // false
```

### 3.3 转义符`\`

正则表达式中有一些特殊含义的元字符，如果要表达他们本身，则需要在字符前加上`\`进行转义

```javascript
/\+/.test('a+b'); // true
```

### 3.4 特殊字符

正则表达式为一些不能打印的字符，提供了一些表达方法

* `[\b]`匹配退格键，不要与`\b`混淆
* `\n`匹配换行键
* `\r`匹配回车键
* `\t`匹配制表符
* `\v`匹配垂直制表符
* `\f`匹配换页符
* `\0`匹配`null`字符
* `\xhh`匹配`\u00`和`\uFF`
* `\uhhhh`匹配`\u0000`和`\uFFFF`

### 3.5 字符类`[]`

字符类表示一些可供选择的字符，只要匹配一个就可以，把所有待匹配的字符放入方括号类，组成一个字符类

```javascript
var reg = /[abc]/;
var str = 'a';
reg.test(str); // true
```

在字符类中下面两种字符有个特殊含义

**脱字符`^`**

* 表示除开方括号字符的任意字符都可以匹配，`[^abc]`表示匹配除开 a, b, c 之外的任意字符
* `[^]`表示匹配一切字符，范围比点字符`.`要大
* 脱字符只有在字符类的第一位才有效，否则就是字面量字符

**连字符`-`**

* `/[0-9]/`表示`[0123456789]`
* `/[a-z]/`表示 26 个小写字母
* `/[A-Z]/`表示 26 个大写字母

### 3.6 预定义模式

常见匹配模式的简写

* `\d`等同于`[0-9]`
* `\D`等同于`[^0-9]`
* `\w`等同于`[a-zA-Z0-9_]`
* `\W`等同于`[^a-zA-Z0-9_]`
* `\s`等同于`[\r\n\t\v\f]`
* `\S`等同于`[^\r\n\t\v\f]`
* `\b`匹配词的边界
* `\B`匹配非词边界，即在词的内部

### 3.7 重复类

`/a{2,9}/`匹配 a 字符重复 2 次到 9 次

```javascript
var reg = /^1\d{10}$/; // 匹配 1 开头的总共十一位的数字
```

### 3.8 量字符

* `?`匹配 0 次或 1 次，等同于`{0, 1}`
* `* `匹配 任意次，等同于`{0,}`
* `+`匹配 1 次或多次，等同于`{1,}`

### 3.9 贪婪模式

量字符的原则是最大可能匹配，知道下一个字符不匹配为止，我们称这种匹配模式为贪婪模式

如果想讲贪婪模式改为非贪婪模式，则在量字符后面加上`?`

* `*?`表示某个模式出现 0 次或多次，采用非贪婪模式
* `+?`表示某个模式出现 1 次或者多次匹配，采用非贪婪模式

```javascript
/\d+/.exec('453'); // ["453", index: 0, input: "453", groups: undefined]
/\d+?/.exec('453'); // ["4", index: 0, input: "453", groups: undefined]
```

### 3.10 修饰符

* `g`：全局匹配，主要用于搜索和替换
* `i`：忽略大小写进行匹配
* `m`：多行匹配模式

### 3.11 分组匹配

正则表达式的括号表示分组匹配

```javascript
var reg = /(\d)a(\D)/;
var str = '4ab6a4';
var result = str.match(reg);
result;
// ["4ab", "4", "b", index: 0, input: "4ab6a4", groups: undefined]
```

正则表达式内部可以使用`\1`,`\2`，来表示括号匹配的内容，`\1`表示获取第一个括号匹配的内容

```javascript
/(.)a(\d)\1\2/.test('ba4b4'); // true
```

实例：html 标签闭合匹配

```javascript
var tagReg = /<([^>]+)>[^>]*<\/\1>/;
var str = '<span>abc</span>';
tagReg.exec(str)
// (2) ["<span>abc</span>", "span", index: 0, input: "<span>abc</span>", groups: undefined]
```

#### 3.11.1 非组捕获

`(?:x)`称为非组捕获，表示不返回匹配`x`的内容

```javascript
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"];
```

#### 3.11.2 先行断言

`x(?=y)`称为先行断言，`x`只有在`y`前面才匹配，`y`不计入匹配结果

```javascript
var m = 'xaxy'.match(/x(?=y)/);
m;
// ["x", index: 2, input: "xaxy", groups: undefined]
```

#### 3.11.3 先行否定断言

`x(?!y)`称为先行否定断言，只有不在`y`前面的`x`才匹配，`y`不计入匹配结果

```javascript
var m = 'abcacb'.match(/c(?!a)/);
m;
// ["c", index: 4, input: "abcacb", groups: undefined]
```

## 4. 常用的正则表达式

下面是一些常用的正则表达式，仅供参考，方便日常开发使用

* `/^([1][3,4,5,6,7,8,9])\d{9}$/`：手机号码
* `/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/`：邮件地址
* `/^[a-zA-Z]\w{5,17}$/`：密码（以字母开头，长度在 6~18 之间，只能包含字母、数字和下划线）
* `/^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/`：18 位身份证号码（数字，字母`X`结尾）
* `/^[a-zA-z]+://[^\s]*$/`：网址（URL）