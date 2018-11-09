# 编程风格

**缩进**

使用两个空格缩进

```javascript
// bad
function foo() {
    console.log('hello world')
}
// good
function foo() {
  console.log('hello world')
}
```

**区块**

总是使用大括号表示区块，尽管在可以省略的地方

```javascript
// bad
if (true) 
  console.log('hello world')
// good
if (true) {
  console.log('hello world')
}
```

**圆括号**

在方法的定义和调用时，方法名和左边括号没有空格，其他情况有空格

```javascript
// bad
function foo () {}
if(true) { }
return(1 + 2)
// good
function foo() { }
if (true) {}
return (1 + 2)
```

**行尾的分号**

统一就可以，看个人习惯

**全局变量**

避免使用全局变量，用大写字母定义常量，表示不可变，比如`USER_AGENT`

**变量声明**

JavaScript 变量存在变量提升的现象，为了清晰的知道已经声明的变量，尽量在头部将需要的变量定义好

```javascript
// bad
if (true) {
  var a = {}
}
// good
var a
if (true) {
  a = {}
}
```

**with 语句**

避免`with`的使用

**相等与严格相等**

使用严格相等`===`替代`==`

