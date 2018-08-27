# Math 对象

Math 对象是 JavaScript 的原生对象，它提供许多数学计算相关的属性和方法，Math 对象不能生成实例，所有的方法和属性，需直接在 Math 对象上调用

## 静态属性

| attribute | desc |
| --- | --- |
| Math.E | 常数`e`|
| Math.LN2 | 2 的自然对数 |
| Math.LN10 | 10 的自然对数 
| Math.LOG2E | 以 2 为底`e`的对数 |
| Math.LOG10E | 以 10 为底`e`的对数 |
| Math.PI | 常数`π`|
| Math.SQRT1_2 | 0.5 的平方根 |
| Math.SQRT2 | 2 的平方根 |

## 静态方法

| method | desc |
| --- | --- |
| Math.abs() | 求绝对值 |
| Math.max() | 求最大值 |
| Math.min() | 求最小值 |
| Math.floor() | 向下取整 |
| Math.ceil() | 向上取整 |
| Math.random() | 求随机数，范围 [0, 1) |
| Math.pow() | 指数运算 |
| Math.round() | 四舍五入 |
| Math.sqrt() | 求平方根 |
| Math.log() | 对数运算 |
| Math.exp() | `e`的对数 |

### 三角函数方法

正弦，余弦，正切，参数为弧度

* Math.sin()
* Math.cos()
* Math.tan()

反正弦，反余弦，反正切，返回弧度

* Math.asin()
* Math.acos()
* Math.atan()