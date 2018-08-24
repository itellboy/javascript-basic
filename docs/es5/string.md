# String 字符串

JavaScript 三个包装对象之一，用于生成字符串类型的包装对象`String`

## 静态方法

**String.fromCharCode()**

将 Unicode 码点转化为对应的字符

```javascript
String.formCharCode(97) // "a"
```

## 实例属性

**length**

表示字符串的长度

## 实例方法

**charAt(index)**

返回指定位置的字符

**cartCodeAt(index)**

返回指定位置字符对应的 Unicode 码点

**concat(str1, str2, ...)**

拼接两个字符串，返回一个拼接好的新的字符串

```javascript
var str1 = 'hello'
var str2 = ' world'
str1.concat(str2) // "hello world"
```

**slice(start, end)**

返回原字符串上指定开始位置和结束位置的子字符串，不改变原字符串

```javascript
var str = 'hello woard'
str.slice(0, 4) // "hell"
```

**substr(start, length)**

返回原字符串上指定开始位置和截取长度的子字符串，不改变原字符串

```javascript
var str = 'hello word'
str.substr(0, 2) // "he"
```

**indexOf(), lastIndexOf()**

返回子串第一次或最后一次在原字符串中出现的位置，没有则返回`-1`

**trim()**

返回原字符串去掉前后空格之后的字符串，不改变原字符串

```javascript
var str = '  hello  '
str.trim() // "hello"
```

**toUpperCase(), toLowerCase()**

返回原字符串中字符全部转为大写或者小写之后的字符串，不改变原字符串

```javascript
var arr = 'abc'
arr.toUpperCase() // "ABC"

var arr1 = "ABC"
arr1.toLowerCase() // "abc"
```

**match(), search(), replace(), split()**

详见[《正则表达式》](/es5/regexp.html)

**localCompare()**

按照自然序对两个字符串进行比较

* 第一个字符串小于第二个字符串，返回`-1`
* 第一个字符串等于第二个字符串，返回`0`
* 第一个字符串大于第二个字符串，返回`1`