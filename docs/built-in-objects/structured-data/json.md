# JSON

JSON 对象用来进行 JSON 格式数据和字符串之间的转换和解析。

## 方法

- `JSON.stringify(value[, receiver])`：返回指定值对应的字符串形式
- `JSON.parse(value[, replacer[, space]])`：解析 JSON 字符串并返回对应的值，解析如果不成功返回`SyntaxError: Unexpected end of JSON input`