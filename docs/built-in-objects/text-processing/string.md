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
- `localCompare(compareStr[, locales[, options]])`：
- `match(regexp)`：
- `matchAll(regexp)`：
- `normalize([form])`：
- `padEnd(targetLength[, padString])`：
- `padStart(targetLength[, padString])`：
- `repeat(count)`：
- `replace(searchFor, replaceWith)`：
- `replaceAll(searchFor, replaceWith)`：
- `search(regexp)`：
- `split(sep[, limit])`：
- `startWith(searchStr[, length])`：
- `substring(indexStart[, indexEnd])`：
- `toLocalLowerCase([locale, ...locales])`：
- `toLocalUpperCase([locale, ...locales])`：
- `toLowerCase()`：
- `toString()`：
- `toUpperCase()`：
- `trim()`：
- `trimStart()`：
- `trimEnd()`：
- `valueOf()`：
- `[Symbole.iterator]()`：