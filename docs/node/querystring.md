# querystring

> 解析和格式化 url 查询字符串

**querystring.escape(str)**

对给定的 str 进行 url 编码,不直接使用,提供给`querystring.stringify()`使用

**querystring.parse(str[,sep[,eq[,options]]])**

* `str`要解析的字符串
* `sep`用于界定查询字符串中键值对的字符串,默认为`&`
* `eq`用于界定查询字符串中键与值的子字符串
* `options`
	* `decodeURIComponent`解码查询字符串的字符所使用的函数,默认为`querystring.unescape()`
	* `maxKeys`解析的最大键值对的数量

```javascript
var str = 'foo=bar&abc=xyz&abc=123'

querystring.parse(str)
// {foo: 'bar', abc: ['xyz', '123']}
```

**querystring.stringify(obj[,sep[,eq[,options]]])**

```javascript
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// 'foo=bar&baz=qux&baz=quux&corge='
```

**querystring.unescape(str)**

对给定的`str`进行解码,不直接使用,提供给`querystring.parse()`使用