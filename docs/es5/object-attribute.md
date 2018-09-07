# 属性描述对象

JavaScript 为每个对象的属性提供一个描述对象，来表示属性的值，是否可写、是否可以枚举、是否可以配置、`getter`、`setter`函数，可以通过`Object.getOwnPropertyDescriptor()`来获取该属性

```javascript
var obj = {
  foo: '123'
}
Object.getOwnPropertyDescriptor(obj, 'foo')
// configurable: true
// enumerable: true
// value: "123"
// writable: true
```

**value**

表示该属性的值

**writable**

表示该属性值`value`是否可以改变

**enumerable**

表示该属性是否可以枚举，如果设置为`false`，则不可以被`Object.keys()`和`foo...of`遍历

**configurable**

表示该属性是否可以配置，如果设置为`false`，则不可以配置该属性的属性描述对象，不可以删除该属性

**get**

属性的取值函数`getter`，默认`undefined`，不能与`value`属性同时定义，不接受参数

```javascript
var bar = Object.defineProperty({}, 'foo' , {
  get: function(){
    return 'getter'
  }
})
bar.foo
// "getter"
```

**set**

属性的存值函数`setter`，默认`undefined`，接受一个参数

```javascript
var bar = Object.defineProperty({}, 'foo' , {
  set: function(value){
    console.log('setter' + value)
  }
})
bar.foo = true
// "settertrue"
// true
```
可以直接在对象上面定义`get`和`set`，写法如下

```javascript
var obj = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter: ' + value);
  }
};
```