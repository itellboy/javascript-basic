# Math

Math 对象提供了一系列的方法和属性提供数学相关的处理。

Math 只支持 Number 类型数据的处理，不支持处理 BigInt 数据类型。

## 属性

- `Math.E`：数学中的欧拉常数 e
- `Math.LN2`：e 为底 2 的对数
- `Math.LN10`：e 为底 10 的对数
- `Math.LOG2E`：2 为底，e 的对数
- `Math.LOG10E`：10 为底，e 的对数
- `Math.PI`：圆周率 π
- `Math.SQRT1_2`：1/2 的平方根
- `Math.SQRT2`：2 的平方根

## 方法

- `Math.abs(x)`：绝对值
- `Math.acos(x)`：反余弦
- `Math.acosh(x)`：反双曲线余弦
- `Math.asin(x)`：反正弦
- `Math.asinh(x)`：反双曲线正弦
- `Math.atan(x)`：反正切
- `Math.atanh(x)`：反双曲线正切
- `Math.atan2(y, x)`：确定象限的反正切
- `Math.cbrt(x)`：立方根
- `Math.ceil(x)`：向上取整
- `Math.clz32(x)`： 把数值转换成 32 无符号整形二进制形式，返回前导 0 的个数
- `Math.cos(x)`：余弦
- `Math.cosh(x)`：双曲余弦
- `Math.exp(x)`：e 的 x 次方
- `Math.expm1(x)`：`Math.exp(x)`的结果减去 1
- `Math.floor(x)`：向下取整
- `Math.fround(x)`：数值最近的单精度表示
- `Math.hypot(x[, y[, ...]])`：所有参数平方和的平方根
- `Math.imul(x, y)`：将两个参数转换成 32 位整数，相乘之后返回 32 位结果
- `Math.log(x)`：e 为底 x 的对数，也就是 x 的自然对数
- `Math.log1p(x)`：e 为底 (x + 1) 的对数，也就是 (x + 1) 的自然对数
- `Math.log10(x)`：10 为底，x 的对数
- `Math.log2(x)`：2 为敌，x 的对数
- `Math.max(x[, y[, ...]])`：参数中最大的值
- `Math.min(x[, y[, ...]])`：参数中最小的值
- `Math.pow(x, y)`：x 的 y 次方
- `Math.random()`：[0, 1) 随机数
- `Math.round(x)`：四舍五入返回整数
- `Math.sign(x)`：x 是否为正数，负数或者0，返回值为`1`、`0`、`-0`、`-1`
- `Math.sin(x)`：正弦
- `Math.sinh(x)`：双曲正弦
- `Math.sqrt(x)`：平方根
- `Math.tan(x)`：正切
- `Math.tanh(x)`：双曲正切
- `Math.trunc(x)`：去掉小数部分

