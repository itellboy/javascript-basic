# Number 数值

JavaScript 三个包装对象之一，用于生成数值类型的包装对象`Number`

## 静态属性

**Number.POSITIVE_INFINITY**

正向无限，指向`infinity`

**Number.NEGATIVE_INFINITY**

负向无限，指向`-infinity`

**Number.NaN**

指向非数值`NaN`

**Number.MIN_VALUE**

最小的正数`5e-324`

**Number.MAX_SAFE_INTEGER**

表示精确表示的最大整数`9007199254740991`

**Number.MIN_SAFE_INTEGER**

表示精确表示的最小整数`-9007199254740991`

```javascript
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
Number.NaN // NaN

Number.MAX_VALUE
// 1.7976931348623157e+308
Number.MAX_VALUE < Infinity
// true

Number.MIN_VALUE
// 5e-324
Number.MIN_VALUE > 0
// true

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991
```

## 实例方法

**toString()**

将数值转化为字符串形式

**toFixed()**

将数值转化为指定位数的小数，以字符串的形式返回，四舍五入

```javascript
var num = 123.456
num.toFixed(2) // "123.46"
```

**toExponential()**

转化为科学计数法表示，以字符串的形式返回

```javascript
var a = 123
a.toExponential() // "1.23e+2"
```

**toPrecision()**

将一个数值转化为指定有效位数的数值，以字符串的形式返回

```javascript
var num = 12.34
num.toPrecision(3) // "12.3"
```