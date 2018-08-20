# 字符串的扩展 (2)

## 字符的 unicode 表示法

JavaScript 利用`\uxxxx`(UTF-16) 表示一个字符，`xxxx`表示 unicode 码点，一个字符包括两个字节，表示范围只能是`\u0000`~`\uFFFF`，如果超出`\uFFFF`的范围， ES5 就利用双字符表示，也就是四个字节，比如 `\uD842\uDFB7`

ES6 则支持将大于四位的码点放入大括号，可以当成一个字符识别，比如 `\u{20BB7}`

## charPointAt()

* 因为扩展了字符的 unicode 表示法，所以字符串的`charAt()`和`charCodeAt()`方法会失真，在对码点大于`0xFFFF`的字符的时候，这两个方法会把它当作两个字符处理
* ES6 新增了`charPointAt()`方法，来正确识别`4`个字节储存的字符

	```javascript
	let s = '𠮷a';
	
	s.codePointAt(0) // 134071
	s.codePointAt(1) // 57271
	
	s.codePointAt(2) // 97
	```

上面代码中，JavaScript 会把`𠮷a`视为三个字符，`charPointAt(0)` 正确识别了`𠮷`的码点，`charPointAt(1)` 则识别了`𠮷`字符后面两个字节的码点，`charPointAt(2)`则识别了`a`字符的码点

* 经过测试发现，上面的方法还是不正确的，表面上看在`𠮷a`中，`a` 字符在第二个位置，正确的位置序号应该是`1`，解决办法为使用 `for...of`循环，它可以正确识别 32 位的 UTF-16 字符
* `charPointAt(n)`返回的是十进制数据，可以通过`toString(16)`将其转换成 16 进制数据

## String.fromCodePoint()

* ES5 提供的`fromCharCode()`方法，用于从码点返回字符，但这个方法不能识别 32 位的 UTF-16 字符
* ES6 新增的`String.fromCodePoint()`方法则解决了上述问题，与`charPointAt()`方法的作用正好相反，需要注意的是`fromCodePoint()`方法定义在`String`上面，而`charPointAt()`方法定义在字符串实例上面

## 字符串的遍历接口

可以使用`for...of`遍历字符串，并且可以正确识别 32 位的 UTF-16 的字符

## at()

替代 ES5 的`charAt()`方法，增加对  32 位的 UTF-16 的字符的识别

## 判断一个字符串是否包含在另外一个字符串内
* `indexOf`ES5
* `includes`ES6 返回布尔值
* `startsWith`ES6 返回布尔值
* `endWith`ES6 返回布尔值

## repeat()

返回一个新的字符串，将原字符串重复n次

```javascript
'x'.repeat(3);	// 'xxx'
```

## padStart(), padEnd()

字符串补齐

```javascript
'c'.padStart(4, 'ab')	// 'abac'
```

## matchAll() 
> 参见《正则表达式》

## 字符串模版
> 反引号,大括号里面可以写任意表达式

```javascript
let name = 'Tom';
`this is ${name}`;	// 'this is Tom'
```

## 剩余内容：模板编译、标签模板、 String.raw() 、模板字符串的限制
	