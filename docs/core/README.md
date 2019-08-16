# 标准内建对象（Standard Built-in Objects）

标准内建对象是 JavaScript 语言的核心，是由 JavaScript 标准实现的一些全局的属性、方法和对象，在所有宿主环境可使用，宿主环境的 API 在标准内建对象基础之上进行开发

* ❌：从语言标准中移除的 API
* ⚠️：已经废弃的 API，但还是可用的
* 🌡️：实验中的 API

## 1. 值属性（Value properties）

这些全局的属性直接返回一个值；它们没有属性和方法

* [Infinity](/core/infinity)
* [NaN](/core/nan)
* [undefined](/core/undefined)
* [null](/core/null)
* [globalThis](/core/globalThis)

## 2. 函数属性（Function properties）

这些全局的方法可以直接调用，直接返回调用结果

* [eval()](/core/eval)
* [uneval() ❌](/core/uneval)
* [isFinite()](/core/is-finite)
* [isNaN()](/core/is-nan)
* [parseFloat()](/core/parse-float)
* [parseInt()](/core/parse-int)
* [decodeURI()](/core/decode-uri)
* [decodeURIComponent()](/core/decode-uri-component)
* [encodeURI()](/core/encode-uri)
* [encodeURIComponent()](/core/encode-uri-component)
* [escape() ⚠️](/core/escape)
* [unescape() ️️⚠️](/core/unescape)

## 3. 基础对象（Fundamental objects）

JavaScript 中最基本的对象，可以给其他对象使用，基本对象可以分为一般对象，错误对象和函数对象

* [Object](/core/object)
* [Function](/core/function)
* [Boolean](/core/boolean)
* [Symbol](/core/symbol)
* [Error](/core/error)
* [EvalError](/core/eval-error)
* [InternalError ❌](/core/internal-error)
* [SyntaxError](/core/syntax-error)
* [TypeError](/core/type-error)
* [URIError](/core/uri-error)

## 4. 数值和日期（Numbers and dates）

这些对象可以代表数值，日期和一些基本的数学计算

* [Number](/core/number)
* [BigInt](/core/big-int)
* [Date](/core/date)
* [Math](/core/math)

## 5. 字符串处理（Text processing）

这些对象用来处理字符串

* [String](/core/string)
* [Regexp](/core/regexp)

## 6. 可索引的集合（Indexed collections）

这些对象表示可用索引（下标）来排序的集合对象，包括数组，类型数组以及类数组结构的对象

* [Array](/core/array)
* [Int8Array](/core/int-8-array)
* [Uint8Array](/core/uint-8-array)
* [Uint8ClampedArray](/core/uint-8-clamped-array)
* [Int16Array](/core/int-16-array)
* [Uint16Array](/core/uint-16-array)
* [Int32Array](/core/int-32-array)
* [Uint32Array](/core/uint-32-array)
* [Float32Array](/core/float-32-array)
* [Float64Array](/core/float-64-array)
* [BigInt64Array](/core/big-int-64-array)
* [BigUint64Array](/core/big-uint-64-array)

## 7. 使用键的集合（Key collections）

这些对象表示一些用键来表示元素的集合对象，可以通过迭代器进行遍历

* [Map](/core/map)
* [Set](/core/set)
* [WeakMap](/core/weak-map)
* [WeakSet](/core/weak-set)

## 8. 结构化数据（Structured data）

这些对象用来表示和操作结构化数据，或者使用 JSON(Javascript Object Notation)编码的数据

* [ArrayBuffer](/core/array-buffer)
* [SharedArrayBuffer 🌡️](/core/shared-array-buffer)
* [Atomics 🌡️](/core/atomics)
* [DataView](/core/data-view)
* [JSON](/core/json)


## 9. 控制抽象对象（Control abstraction objects）

* [Promise](/core/promise)
* [Generator](/core/generator)
* [GeneratorFunction](/core/generator-function)
* [AsyncFunction 🌡️](/core/async-function)

## 10. 反射（Reflection）

* [Reflect](/core/reflect)
* [Proxy](/core/proxy)


## 11. 国际化（Internationalization）

可用于国际化

* [Intl](/core/intl)
* [Intl.Collator](/core/intl-collator)
* [Intl.DateTimeFormat](/core/intl-date-time-format)
* [Intl.ListFormat](/core/intl-list-format)
* [Intl.NumberFormat](/core/intl-number-format)
* [Intl.PluralRules](/core/intl-plural-rules)
* [Intl.RelativeTimeFormat](/core/intl-relative-time-format)
* [Intl.Locale](/core/intl-locale)

## 12. WebAssembly

* [WebAssembly](/core/web-assembly)
* [WebAssembly.Module](/core/web-assembly-module)
* [WebAssembly.Instance](/core/web-assembly-instance)
* [WebAssembly.Memory](/core/web-assembly-memory)
* [WebAssembly.Table](/core/web-assembly-table)
* [WebAssembly.CompileError](/core/web-assembly-compile-error)
* [WebAssembly.LinkError](/core/web-assembly-link-error)
* [WebAssembly.RuntimeError](/core/web-assembly-runtime-error)

## 13. 其他（other）

* [arguments](/core/arguments)