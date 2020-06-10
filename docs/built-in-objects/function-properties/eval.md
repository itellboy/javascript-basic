# eval()

`eval(string)`将传入的字符串当作 JavaScript 代码执行

::: warning 注意
尽量避免使用`eval()`执行函数
:::

**示例**

```javascript
var a = uneval(function foo() {
  return "hi";
});
var foo = eval(a);
foo(); // returns "hi"
```
