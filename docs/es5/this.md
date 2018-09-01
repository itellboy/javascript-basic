# this 关键字

JavaScript 里面的`this`指向当前函数运行环境所处的对象

```javascript
var obj = {
  name: 'jack',
  getName: function () {
    return this.name
  }
}
obj.getName() // "jack"

var f = obj.getName()
var name = 'rose'
f() // "rose"
```

`obj.getName()`运行环境在`obj`对象里面，`f()`的运行环境在全局对象里面，所以返回不同的结果

