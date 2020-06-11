# String

String 对象可以用来表示和操作一个字符串。

## 静态方法

- `String.fromCharCode()`：通过 unicode 字符创建字符串
- `String.fromCodePoint()`：通过一串码点创建字符串
- `String.raw()`：通过模板字符串创建字符串

## 实例属性

- `length`：长度

## 实例方法

- `charAt(index)`：指定位置的字符
- `charCodeAt(index)`：指定位置字符的 unicode
- `codePointAt(index)`：返回使用 UTF-16 编码的给定位置的值的非负整数
- `concat(str[, ...strs])`：连接字符串
- `includs(searchStr[, fromIndex])`：从 index 位置开始检索，返回是否能检索到 searchStr
- `endsWith(searchStr[, length])`：是否以 searchStr 结尾，length 为被检索字端的长度
- `indexOf(searchStr[, fromIndex])`：从 fromIndex 位置开始开始向右检索 searchStr，没有检索到返回 -1，检索到返回首次出现的位置
- `lastIndexOf(searchStr[, fromIndex])`：从 fromIndex 位置开始向左检索 searchStr，没有检索到返回 -1，检索到返回首次出现的位置
- `localCompare(compareStr[, locales[, options]])`：比较两个字符串，如果引用字符串在比较字符串前面，返回负数，相等返回 0，否则返回正数
- `match(regexp)`：使用正则表达式匹配字符串
- `matchAll(regexp)`：使用正则表达式匹配字符串
- `normalize([form])`：按照指定的一种 Unicode 正规形式将当前字符串正规化
- `padEnd(targetLength[, padStr])`：使用 padStr（缺省为`''`）循环填充原字符串尾部，直到 targetLength 长度为止，如果 targetLength 小于原字符串长度，则返回原字符串
- `padStart(targetLength[, padStr])`：使用 padStr（缺省为`''`）循环填充原字符串头部，直到 targetLength 长度为止，如果 targetLength 小于原字符串长度，则返回原字符串
- `repeat(count)`：重复字符串，count 范围为 [0, +∞)
- `replace(searchFor, replaceWith)`：替换字符串
- `replaceAll(searchFor, replaceWith)`：替换字符串
- `search(regexp)`：对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标
- `slice(beginIndex[, endIndex])`：截取字符串，参数可为负数
- `split(sep[, limit])`：使用 sep 分隔符将字符串分割成数组，limit 为数组的长度
- `startWith(searchStr[, index])`：判断引用字符串是否以搜索字符串开头，从 index 处开始计算
- `substring(indexStart[, indexEnd])`：截取字符串，小于 0 的参数当作 0 处理
- `toLocalLowerCase([locale, ...locales])`：返回字符串的小写形式
- `toLocalUpperCase([locale, ...locales])`：返回字符串的大写形式
- `toLowerCase()`：返回字符串的小写形式
- `toString()`：重写`Object.prototype.toString()`
- `toUpperCase()`：返回字符串的大写形式
- `trim()`：去掉首尾空字符
- `trimStart()`：去掉首部空字符
- `trimEnd()`：去掉尾部空字符
- `valueOf()`：重写`Object.prototype.valueOf()`
- `[Symbole.iterator]()`：迭代器访问字符的方法