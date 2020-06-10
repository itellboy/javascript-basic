# Date

在 JavaScript 中，使用 Date 表示某个时刻，基于[Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)进行计算，即 1970 年 1 月 1 日起经过的毫秒数。

## 构造函数

### 函数直接调用

直接调用`Date()`会返回一个表示当前时间的字符串

```javascript
Date();
// "Wed Jun 10 2020 16:04:07 GMT+0800 (中国标准时间)"
```

### 通过 new 调用

通过`new`去创建一个 Date 对象，主要有四种传参方式：

- `new Date()`：返回表示当前时间的 Date 对象
- `new Date(timeStamp)`：将 unix 毫秒时间戳作为参数，传入，返回时间戳对应的时刻的 Date 对象
- `new Date(dateString)`：传入表示日期的字符串值，比如`2012-12-12 20:12:12`

::: warning 注意
日期的字符串需要能被`Date.parse()`方法正确解析，因浏览器实现有差异，不建议使用该方法创建 Date 对象。比如`2012-12-12 20:12:12`在 safari 浏览器不能被正确解析，`Date.parse()`结果为`NaN`。
:::

- `new Date(year, monthIndex[, day[, hour[, minute[, seconds[, milliseconds]]]]])`：分别提供日期与时间的每一个成员

::: tip 提示
使用传具体数值方法构造 Date 对象时，如果数值大于可选范围（如月份 为 14，分钟为 70），则会进位。比如：`new Date(2020, 13)`和`new Date(2021, 1)`表示相同时间。
:::

## 静态属性

- `Date.prototype`：Date 实例的原型对象
- `Date.length`：7，表示 7 个可选参数

## 静态方法

- `Date.now()`：unix 毫秒时间戳
- `Date.parse()`：解析一个时间日期字符串，返回解析日期的 unix 毫秒时间戳
- `Date.UTC()`：接受和 Date 构造函数最多参数一样的参数，返回 unix 毫秒时间戳

## 实例方法

### 时间获取

- `getDate()`：日期（1-31）
- `getDay()`：星期几（0-6）
- `getFullYear()`：年份
- `getHours()`：小时（0-23）
- `getMilliseconds()`：毫秒数（0-999）
- `getMinutes()`：分钟（0-59）
- `getMonth()`：月份（0-11）
- `getSeconds()`：秒（0-59）
- `getTime()`：返回 unix 毫秒时间戳，1970 年 1 月 1 日之前返回负数
- `getTimezoneOffset()`：时区偏差分钟数
- `getUTCDate()`：UTC 日期（1-31）
- `getUTCDay()`：UTC 星期几（0-6）
- `getUTCFullYear()`：UTC 年份
- `getUTCHours()`：UTC 小时（0-23）
- `getUTCMilliseconds()`：UTC 毫秒数（0-999）
- `getUTCMinutes()`：UTC 分钟（0-59）
- `getUTCMonth()`：UTC 月份（0-11）
- `getUTCSeconds()`：UTC 秒（0-59）

### 时间设置

::: tip 提示
Date 实例在设置日期的时候，如果设置的值不合常理，则改变上一个时间值进行调整，比如`setDate(0)`表示将时间推到上个月的最后一天，同理，如果参数为 -1，则为上个月的倒数第二天
:::

以下例子返回均为 unix 毫秒时间戳。

- `setDate()`：设置日期
- `setFullYear()`：设置日期
- `setHours()`：设置日期
- `setMilliseconds()`：设置日期
- `setMinutes()`：设置日期
- `setMonth()`：设置日期
- `setSeconds()`：设置日期
- `setTime()`：设置日期
- `setUTCDate()`：设置日期
- `setUTCFullYear()`：设置日期
- `setUTCHours()`：设置日期
- `setUTCMilliseconds()`：设置日期
- `setUTCMinutes()`：设置日期
- `setUTCMonth()`：设置日期
- `setUTCSeconds()`：设置日期

### 时间显示

- `toUTCString()`：UTC 时区的时间字符串，格式为`Www, dd Mmm yyyy hh:mm:ss GMT`
- `toISOString()`：符合 [ISO 8601 Extended Format](http://en.wikipedia.org/wiki/ISO_8601) 格式的字符串，格式为`YYYY-MM-DDTHH:mm:ss.sssZ`，时区总是为 UTC 
- `toJSON()`：返回`toISOString()`结果，在使用`JSON.stringify()`格式化 Date 对象的时候调用
- `toLocalString()`：重写`Object.prototype.toLocalString()`，返回日期时间字符串，格式与系统设置相关
- `toLocalDateString()`：日期字符串，格式与系统设置相关
- `toLocalTimeString()`：时间字符串，格式与系统设置有关
- `toString()`：重写`Object.prototype.toString()`，返回时间字符串
- `toDateString()`：以人类易读的形式返回表示日期部分的字符串，包括年、月、日、星期
- `toTimeString()`：以人类易读的形式返回表示时间部分的字符串
- `valueOf()`：重写`Object.prototype.valueOf()`，返回 unix 毫秒时间戳