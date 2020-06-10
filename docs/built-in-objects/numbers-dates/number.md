# Number

Number 是数值的包装对象，可以通过`Number()`构造函数创建。

在 JavaScript 里面，Number 类型为[双精度 64 位类型](https://en.wikipedia.org/wiki/Floating-point_arithmetic)，没有整数类型。

JavaScript 可以使用 BigInt 处理大整形数据。

## 静态变量

- `Number.EPSILOG`：1 与 大于 1 的最小浮点数之差

可理解为 JavaScript 数值可表示的最小精度。

如果两个数值之差小于该常量，则可认为两者是相等的。

数值大小为`Math.pow(2, -52)`。

```javascript
Number.EPSILOG;
2.220446049250313e-16;
```

- `Number.MAX_SAFE_INTEGER`：最大安全整数。
- `Number.MIN_SAFE_INTEGER`：最小安全整数。
- `Number.MAX_VALUE`：最大数值
- `Number.MIN_VALUE`：最小数值
- `Number.NaN`：同`NaN`
- `Number.NEGATIVE_INFINITY`：负无穷大
- `Number.POSITIVE_INFINITY`：正无穷大
- `Number.prototype`：数值对象的原型对象

## 静态方法

- `Number.isNaN()`：判断值是否为`NaN`，与全局变量`isNaN()`实现有差异
- `Number.isFinite()`：判断值是否是无穷大或者无穷小
- `Number.isInteger()`：判断值是否为整数
- `Number.isSafeInteger()`：判断值是否是一个安全的整数，介于`Number.MIN_SAFE_INTEGER`和`Number.MAX_SAFE_INTEGER`之间
- `Number.parseFloat(string)`：同`parseFloat()`
- `Number.parseInt(string[, radix])`：同`parseInt()`

## 实例方法

- `toExponential(int)`：返回数值的指数表达式，int 的取值范围为 [0, 20]
- `toFixed(n)`：返回保留 n 位小数的字符串
- `toLocalString()`：
- `toString()`：
- `toPrecision(n)`：返回保留 n 位有效数字的字符串
- `valueOf()`：返回数值