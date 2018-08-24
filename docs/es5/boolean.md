# Boolean 布尔值

JavaScript 三个包装对象之一，用于生成布尔值的包装对象`Boolean`

```javascript
var b = new Boolean(true)
typeof b // "object"
b.valueOf() // true
```

**下面六种对象的值通过`Boolean()`包装会返回`false`**

```javascript
Boolean('') // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(0) // false
Boolean(false) // false
Boolean(NaN) // false
```

**使用双重否定运算符`!!`可以将任意值转化为布尔值**

```javascript
!!'' // false
!!0 // false
!!{} // true
```