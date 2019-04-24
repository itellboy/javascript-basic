# 正则的扩展

## 1. 新增实例方法

* `Regexp.prototype[Symbol.match]()`：`String.prototype.match()`调用
* `Regexp.prototype[Symbol.search]()`：`String.prototype.search()`调用
* `Regexp.prototype[Symbol.split]()`：`String.prototype.split()`调用
* `Regexp.ptototype[Symbol.replace]`：`String.prototype.replace`调用
* `Regexp.prototype[Symbol.matchAll]()`：`String.prototype.matchAll `调用

### 1.1 String.prototype.matchAll

一般我们使用`g`或者`y`修饰符对字符串进行全局匹配的时候，需要循环判断，逐一取出结果

```javascript
var str = "_aaa_aa_a_";
var reg = /a+/g;

var match;
while(match = reg.exec(str)){
  console.log(match);
}

// ["aaa", index: 1, input: "_aaa_aa_a_", groups: undefined]
// ["aa", index: 5, input: "_aaa_aa_a_", groups: undefined]
// ["a", index: 8, input: "_aaa_aa_a_", groups: undefined]
```

`String.prototype.matchAll()`方法可以一次性取出所有匹配，返回一个迭代器，可以减少判断


```javascript
for(let match of str.matchAll(reg)){
  console.log(match)
}

// ["aaa", index: 1, input: "_aaa_aa_a_", groups: undefined]
// ["aa", index: 5, input: "_aaa_aa_a_", groups: undefined]
// ["a", index: 8, input: "_aaa_aa_a_", groups: undefined]
```

## 2. 新增修饰符

### 2.1 u 修饰符

增加`u`修饰符的正则表达式可以正确处理 4 个字节的 UTF-16 编码的字符

**用大括号包括码点形式表示的字符串必须加上`u`修饰符才能正确识别**

```javascript
/\u{62}/.test('b'); // false
/\u{62}/u.test('b'); // true
```

### 3.2 y 修饰符

全局匹配，`y`修饰符和`g`修饰符的不同在于，`y`修饰符的匹配成功的位置是正则表达式的`lastIndex`属性的位置，否则匹配不成功，返回`null`

```javascript
var str = '_aaa_aa_aa_';
var reg = /a+/g;
var reg2 = /a+/y;
var reg3 = /_a+/y;

reg.exec(str);
// ["aaa", index: 1, input: "_aaa_aa_aa_", groups: undefined]
reg2.exec(str);
// null
reg3.exec(str);
// ["_aaa", index: 0, input: "_aaa_aa_aa_", groups: undefined]
```

### 3.3 s 修饰符（dotAll 模式）

在之前的 JavaScript 版本，`.`字符并不能匹配所有字符，包括回车、换行、制表符、垂直制表符，我们使用`[^]`作为替代方案

ES2018 加入了`s`修饰符，加上了`s`修饰符的正则的`.`字符可以匹配任意字符

```javascript
var str = 'abc\ndef';
var reg = /abc.def/;
var reg2 = /abc.def/s;

reg.test(str);
// false
reg2.test(str);
// true
```

## 4. 新增实例属性

* `RegExp.prototype.sticky`：返回一个布尔值，表示正则是否设置可`y`修饰符
* `RegExp.prototype.flags`：返回一个字符串，表示正则设置的所有修饰符，按照字母顺序排列
* `RegExp.prototype.dotAll`：返回一个布尔值，表示正则是否设置了`s`修饰符

## 5. 支持后行断言

之前版本的 JavaScript 只支持先行断言 (`/x(?=y)/`) ，和先行否定断言 (`/x(?!y)/`) ，不支持后行断言和后行否定断言

ES2018 引入后行断言 （`/(?<=y)x/`）和后行否定断言 (`/(?<!y)x/`)

```javascript
var str = 'a4c5';
var reg = /(?<=c)\d/;
var reg2 = /(?<!c)\d/;

reg.exec(str);
// ["5", index: 3, input: "a4c5", groups: undefined]
reg2.exec(str);
// ["4", index: 1, input: "a4c5", groups: undefined]
```

## 6.具名组匹配

ES2018 引入了具名组匹配，允许为每一个组匹配指定一个名字，便于代码的阅读，格式为 `?<name>`

```javascript
var str = '2018-12-12';
var reg = /(\d{4})-(\d{2})-(\d{2})/;
var res = reg.exec(str)
console.log(res[1]); // 2018
console.log(res[2]); // 12
console.log(res[3]); // 12

var reg2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
var res = reg2.exec(str)
console.log(res.groups.year); // 2018
console.log(res.groups.month); // 12
console.log(res.groups.day); // 12

// 使用解构赋值
let { groups: { year, month, day } } = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec(str)
```