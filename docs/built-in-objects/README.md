/# 标准内建对象（Standard Built-in Objects）

标准内建对象是 JavaScript 语言的核心，是由 JavaScript 标准实现的一些全局的属性、方法和对象，在所有宿主环境可使用，宿主环境的 API 在标准内建对象基础之上进行开发

* ❌：从语言标准中移除的 API
* ⚠️：已经废弃的 API，但还是可用的
* 🌡️：实验中的 API

## 1. 值属性（Value properties）

这些全局的属性直接返回一个值；它们没有属性和方法

* [Infinity](/built-in-objects/infinity/)
* [NaN](/built-in-objects/nan/)
* [undefined](/built-in-objects/undefined/)
* [null](/built-in-objects/null/)
* [globalThis](/built-in-objects/global-this/)

## 2. 函数属性（Function properties）

这些全局的方法可以直接调用，直接返回调用结果

* [eval()](/built-in-objects/eval/)
* [uneval() ❌](/built-in-objects/uneval/)
* [isFinite()](/built-in-objects/is-finite/)
* [isNaN()](/built-in-objects/is-nan/)
* [parseFloat()](/built-in-objects/parse-float/)
* [parseInt()](/built-in-objects/parse-int/)
* [decodeURI()](/built-in-objects/decode-uri/)
* [decodeURIComponent()](/built-in-objects/decode-uri-component/)
* [encodeURI()](/built-in-objects/encode-uri/)
* [encodeURIComponent()](/built-in-objects/encode-uri-component/)
* [escape() ⚠️](/built-in-objects/escape/)
* [unescape() ️️⚠️](/built-in-objects/unescape/)

## 3. 基础对象（Fundamental objects）

JavaScript 中最基本的对象，可以给其他对象使用，基本对象可以分为一般对象，错误对象和函数对象

* [Object](/built-in-objects/object/)
* [Function](/built-in-objects/function/)
* [Boolean](/built-in-objects/boolean/)
* [Symbol](/built-in-objects/symbol/)
* [Error](/built-in-objects/error/)
* [EvalError](/built-in-objects/eval-error/)
* [InternalError ❌](/built-in-objects/internal-error/)
* [SyntaxError](/built-in-objects/syntax-error/)
* [TypeError](/built-in-objects/type-error/)
* [URIError](/built-in-objects/uri-error/)

## 4. 数值和日期（Numbers and dates）

这些对象可以代表数值，日期和一些基本的数学计算

* [Number](/built-in-objects/number/)
* [BigInt](/built-in-objects/big-int/)
* [Date](/built-in-objects/date/)
* [Math](/built-in-objects/math/)

## 5. 字符串处理（Text processing）

这些对象用来处理字符串

* [String](/built-in-objects/string/)
* [Regexp](/built-in-objects/regexp/)

## 6. 可索引的集合（Indexed collections）

这些对象表示可用索引（下标）来排序的集合对象，包括数组，类型数组以及类数组结构的对象

* [Array](/built-in-objects/array/)
* [Int8Array](/built-in-objects/int-8-array/)
* [Uint8Array](/built-in-objects/uint-8-array/)
* [Uint8ClampedArray](/built-in-objects/uint-8-clamped-array/)
* [Int16Array](/built-in-objects/int-16-array/)
* [Uint16Array](/built-in-objects/uint-16-array/)
* [Int32Array](/built-in-objects/int-32-array/)
* [Uint32Array](/built-in-objects/uint-32-array/)
* [Float32Array](/built-in-objects/float-32-array/)
* [Float64Array](/built-in-objects/float-64-array/)
* [BigInt64Array](/built-in-objects/big-int-64-array/)
* [BigUint64Array](/built-in-objects/big-uint-64-array/)

## 7. 使用键的集合（Key collections）

这些对象表示一些用键来表示元素的集合对象，可以通过迭代器进行遍历

* [Map](/built-in-objects/map/)
* [Set](/built-in-objects/set/)
* [WeakMap](/built-in-objects/weak-map/)
* [WeakSet](/built-in-objects/weak-set/)

## 8. 结构化数据（Structured data）

这些对象用来表示和操作结构化数据，或者使用 JSON(Javascript Object Notation)编码的数据

* [ArrayBuffer](/built-in-objects/array-buffer/)
* [SharedArrayBuffer 🌡️](/built-in-objects/shared-array-buffer/)
* [Atomics 🌡️](/built-in-objects/atomics/)
* [DataView](/built-in-objects/data-view/)
* [JSON](/built-in-objects/json/)


## 9. 控制抽象对象（Control abstraction objects）

* [Promise](/built-in-objects/promise/)
* [Generator](/built-in-objects/generator/)
* [GeneratorFunction](/built-in-objects/generator-function/)
* [AsyncFunction 🌡️](/built-in-objects/async-function/)

## 10. 反射（Reflection）

* [Reflect](/built-in-objects/reflect/)
* [Proxy](/built-in-objects/proxy/)


## 11. 国际化（Internationalization）

可用于国际化

* [Intl](/built-in-objects/intl/)
* [Intl.Collator](/built-in-objects/intl-collator/)
* [Intl.DateTimeFormat](/built-in-objects/intl-date-time-format/)
* [Intl.ListFormat](/built-in-objects/intl-list-format/)
* [Intl.NumberFormat](/built-in-objects/intl-number-format/)
* [Intl.PluralRules](/built-in-objects/intl-plural-rules/)
* [Intl.RelativeTimeFormat](/built-in-objects/intl-relative-time-format/)
* [Intl.Locale](/built-in-objects/intl-locale/)

## 12. WebAssembly

* [WebAssembly](/built-in-objects/web-assembly/)
* [WebAssembly.Module](/built-in-objects/web-assembly-module/)
* [WebAssembly.Instance](/built-in-objects/web-assembly-instance/)
* [WebAssembly.Memory](/built-in-objects/web-assembly-memory/)
* [WebAssembly.Table](/built-in-objects/web-assembly-table/)
* [WebAssembly.CompileError](/built-in-objects/web-assembly-compile-error/)
* [WebAssembly.LinkError](/built-in-objects/web-assembly-link-error/)
* [WebAssembly.RuntimeError](/built-in-objects/web-assembly-runtime-error/)

## 13. 其他（other）

* [arguments](/functions/arguments/)