# RegExp

RegExp 对象用于表达字符串的匹配模式。

## 字面量和构造函数

以下三种方式可以创建同样的正则表达式

```javascript
/ab+c/i;
new RegExp("ab+c", "i");
new RegExp(/ab+c/, "i");
```

## 静态属性

- `RegExp.lastIndex`：该索引表示从哪里开始下一个匹配

## 实例属性

- `flags`：返回正则表达式的修饰符字符串
- `dotAll`：是否设置 s 修饰符
- `global`：是否设置 g 修饰符
- `ignoreCase`：是否设置 i 修饰符
- `multiline`：是否设置 m 修饰符
- `sticky`：是否设置 y 粘连修饰符
- `unicode`：是否设置 u 修饰符
- `source`：正则表达式的文本

## 实例方法

- `exec()`：执行正则表达式匹配
- `test()`：测试字符串是否匹配正则表达式
- `[Symbol.match]()`：实现`String.prototype.match()`
- `[Symbol.matchAll]()`：实现`String.prototype.matchAll()`
- `[Symbol.search]()`：实现`String.prototype.search()`
- `[Symbol.replace]()`：实现`String.prototype.replace()`
- `[Symbol.split]()`：实现`String.prototype.split()`
- `toString()`：重写`Object.prototype.toString()`方法