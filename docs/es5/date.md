# Date 对象

Date 对象是 JavaScript 原生的时间库，以`1970-01-01 00:00:00`作为时间的零点，可以表示前后一亿年，单位是毫秒

## 作为普通函数使用

```javascript
Date()
// "Sun Aug 26 2018 17:50:50 GMT+0800 (中国标准时间)"
```

返回当前的时间的字符串

## 构造函数的用法

可以通过使用`new`命令来生成一个`Date`的实例，如果不传参数，则返回当前时间的字符串，`Date`构造函数可以传递多种类型的参数来表示时间

```javascript
new Date(-1378218728000)
// Fri Apr 30 1926 17:27:52 GMT+0800 (中国标准时间)

new Date('2013-2-15')
new Date('2013/2/15')
new Date('02/15/2013')
new Date('2013-FEB-15')
new Date('FEB, 15, 2013')
new Date('FEB 15, 2013')
new Date('Feberuary, 15, 2013')
new Date('Feberuary 15, 2013')
new Date('15 Feb 2013')
new Date('15, Feberuary, 2013')
// Fri Feb 15 2013 00:00:00 GMT+0800 (中国标准时间)

new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (中国标准时间)
```

`Date`对象求值的时候调用的是`toString()`方法，返回表示当前时间的字符串，其他对象都是调用`valueOf()`方法

## 静态方法

**Date.now()**

返回当前时间距离时间零点（1970-01-01 00:00:00）的毫秒数，也就是 Unix 时间戳乘以 1000

```javascript
Date.now()

// 1535277693042
```

**Date.parse()**

解析时间格式的字符串，解析失败返回`NaN`

**Date.UTC()**

接受年、月、日、时、分、秒、毫秒作为参数，返回该事件距离时间零点的毫秒数

```javascript
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
```

## 实例方法

除开`toString()`和`valueOf()`，可以将`Date`实例的方法分为三类

* `to`类：返回`Date`实例的时间字符串
* `get`类：获得`Date`对象的时间或者日期
* `set`类：设置`Date`对象的时间或者日期

**valueOf()**

与`getTime()`一样，返回`Date`实例对象与时间零点相隔的毫秒数

### to 类

**toString()**

返回一个完整的日期字符串

**toUTCString()**

返回对应的 UTC 时间，比北京时间晚八个小时

```javascript
var date = new Date()

date.toUTCString()
// "Mon, 27 Aug 2018 09:42:34 GMT"
```

**toISOString()**

返回对应的 ISO8601 写法，与`toJSON()`返回结果一样

```javascript
var date = new Date()

date.toISOString()
// "2018-08-27T09:42:34.440Z"
```
**toDateString()**

返回包含日期的字符串，不包含时、分、秒

```javascript
var date = new Date()

date.toDateString()
// "Mon Aug 27 2018"
```

**toTimeString()**

返回包含时间的字符串，不包括年、月、日、周

```javascript
var date = new Date()

date.toTimeString()
// "17:42:34 GMT+0800 (中国标准时间)"
```

**toLocaleDateString()**

返回符合当地写法的日期字符串，不包括时、分、秒

```javascript
var date = new Date()

date.toLocaleDateString()
// "2018/8/27"
```

**toLocaleTimeString()**

返回符合当地写法的时间字符串，不包括年、月、日、周

```javascript
var date = new Date()

date.toLocaleTimeString()
// "下午5:42:34"
```

**toLocaleString()**

返回符合当地写法的时间字符串

```javascript
var date = new Date()

date.toLocaleString()
// "2018/8/2 下午5:42:34"
```

### get 类

`Date`对象提供了一系列`get*`方法来获得时间的信息

| method | desc |
| --- | --- |
| getTime() | 返回实例对象距离时间零点的毫秒数 |
| getDate() | 返回实例对象对应每个月的几号 |
| getDay() | 返回星期几（0-6）|
| getYear() | 返回距离 1900 年的年数 |
| getFullYear() | 返回四位的年数 |
| getMonth() | 返回月份数（0-11）|
| getHours() | 返回小时数（0-23）|
| getMinutes() | 返回分钟数（0-59） |
| getSeconds() | 返回秒数（0-59） |
| getMilliseconds | 返回毫秒数（0-999）|
| getTimezoneOffset() | 返回当前时间与 UTC 时间的差异，以分钟表示 |

### set 类

`Date`对象提供一系列的`set*`方法来设置时间的信息

* setDate()
* setYear()
* setFuleYear()
* setHours()
* setMilliseconds()
* setMinutes()
* setMonth()
* setSeconds()
* setTime()

基本和`get*`一样的意思