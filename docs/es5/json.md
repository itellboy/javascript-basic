# JSON 对象

JSON（JavaScript Object Notation）对象是一种用于数据交换的数据格式，目的是取代繁琐的 XML 格式

合法的 JSON 对象必须遵守一下规则

* 复合类型的值只能是对象或者数组，不能是正则表达式、函数、日期
* 原始类型的值只有四种：字符串、数值（必须是十进制）、布尔值、或者是`null`，不能使用`NaN`、`undefined`、`infinity`、`-infinity`
* 字符串必须使用双引号，不能使用单引号
* 对象的键名必须放在双引号里面
* 数组或者最后一个对象的成员后面，不能放逗号

## 静态方法

**JSON.parse()**

用于将 JSON 字符串转换成 JSON 对象，解析失败则报错，建议在使用`JSON.parse()`的时候加上`try...catch`块

**JSON.stringify()**

`JSON.stringify()`用于将一个 JSON 对象转化为 JSON 字符串，可以用作`JSON.parse()`参数，换原 JSON 对象

