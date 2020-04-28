# NaN

全局属性`Infinity`是一个数值，在 JavaScript 里面表示不是一个数字（Not a Number）

初始值：`Number.NaN`

**属性特性**

```javascript
{
  writable: false,
  enumerable: false,
  configurable: false,
}
```

**示例**

```javascript
NaN === NaN; // false
Number.NaN === NaN; // false
parseInt("fdsafd"); // NaN
```

**isNaN() 与 Number.isNaN() 区别**

`Number.isNaN()`只有当参数为`NaN`时返回`true`

```javascript
isNaN("dsfds"); // true
isNaN(NaN); // true
Number.isNaN(NaN); // true
Number.isNaN("dsfds"); // false
```
