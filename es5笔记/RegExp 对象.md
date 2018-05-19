# RegExp 对象

> 正则表达式一种文本匹配的模式。

## 新建正则表达式

```javascript
var regexp = new RegExp('xyz');

var regexp = /xyz/;
```

## 实例属性
* 只读属性，修饰符

```javascript
RegExp.prototype.ignoreCase  // 忽略大小写
RegExp.prototype.global  // 全局匹配
RegExp.prototype.multiline  // 多行模式匹配
```

* 其他属性

```javascript
RegExp.prototype.lastIndex  // 返回一个数值，表示下一次搜索开始的位置，可写，当使用 g 修饰符的时候，该属性才发挥作用
RegExp.prototype.source  // 返回正则表达式的字符串形式，不包括反斜杠，只读
```

可以通过手动指定 `lastIndex` 属性来设置匹配的起始位置

## 实例方法

### RegExp.prototype.test

返回布尔值，当前模式是否匹配参数字符串

### RegExp.prototype.exec

* 正则匹配字符串，如果匹配上，返回包含结果的类数组的对象；如果没有结果，返回 `null`
* 返回类数组对象第一个成员为匹配成功的子串，第二个成员是圆括号匹配的结果
* 返回的类数组对象包含 `input` 和 `index` 两个属性，分别表示原字符串和匹配成功子串在原字符串的起始位置

## 字符串的实例方法

```javascript
String.ptototype.match()  // 返回一个数组，包含所有匹配到的子串，没有返回 null
String.prototype.search()  // 返回一个整数，表示匹配成功开始的位置，没有返回 -1
String.prototype.replace()  // 按照给定的正则表达式替换字符串，返回替换后的字符串
String.prototype.split()  // 按照给定的正则表达式对字符串进行分割，返回一个包含分割后子串的数组
```

