# 数值的扩展

**二进制和八进制表示法**

* 使用前缀 0b(0B) 表示二进制
* 使用前缀 0o(0O) 表示八进制

**Number.isFinite(), Number.isNaN()**

* `Number.isFinite()`方法对于非数值返回`false`，判断一个数值是否是有限的
* `Number.isNaN()`方法只对`NaN`返回`true`
* 全局的`isFinite()`和`isNaN()`方法是先调用`Number()`转化为数值再进行判断

```javascript
isNaN('123abc') // true
isFinite('123') // true

Number.isNaN('123abc') // false
Number.isFinite('123') // false
```

**Number.parseInt(), Number.parseFloat()**

和全局的`parseInte()`和`parseFloat()`用法没有变化，ES6 旨在减少全局性方法，将语言逐渐模块化

**Number.isInteger()**

判断一个数值是否为整数，如果参数不是一个数值，返回`false`

```javascript
Number.isInteger(25) // true
Number.isInteger(25.0) // true
```

如果超过 JavaScript 可以表示的精度，会使该方法失真

**Number.EPSILON**

常量，表示`1`与大于`1`的最小浮点数之间的差，表示 JavaScript 浮点型计算的误差范围

```javascript
Number.EPSILON // 2.220446049250313e-16
```

**Number.isSafeInteger()**

判断数值是否在`Number.MAX_SAFE_INTEGER`和`Number.MIN_SAFE_INTEGER`安全范围之间

**Math 对象的扩展**

* `Math.trunc()`：去除一个数的小数部分，返回证书部分
* `Math.sign()`：判断一个数是正数、负数、还是零`+1`,`-1`,`+0`,`-0`,`NaN`
* `Math.cbrt()`：计算一个数的立方根
* `Math.clz32()`：返回一个数的 32 位无符号整数形式有多少个前导0
* `Math.imul()`：返回两个数以 32 位带符号整数形式相乘的结果，在进行大精度计算的时候保证可以得到正确的低位数值
* `Math.fround()`：返回一个数的 32 位单精度浮点数形式
* `Math.hypot()`：返回两个数的平方和的平方根
* 4 个对数运算方法：`Math.expm1()`,`Math.log1p()`,`Math.log10()`,`Math.log2()`
* 6 个双曲函数方法：`Math.sinh(x)`,`Math.cosh(x)`,`Math.tanh(x)`,`Math.asinh(x)`,`Math.acosh(x)`,`Math.atanh(x)`

**指数运算符**

ES2016 新增了指数运算符`**`，支持连用，右结合

```javascript
2 ** 3 // 8
2 ** 3 ** 2 // 512

a **= 3 // 相当于 a = a * a * a;
```