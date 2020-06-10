# parseFloat()

`parseFloat(string)`解析一个参数，返回一个浮点数，如果解析不成功，则返回`NaN`。

**示例**

以下示例都会返回 3.14

```javascript
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString: function() {
    return "3.14";
  },
});
```
