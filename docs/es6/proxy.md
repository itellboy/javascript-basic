# Proxy

代理对象，在操作对象的时候可以利用`Proxy`对象进行拦截

一个代理实例

```javascript
var obj = {
  name: 'tom',
}

var proxy = new Proxy(obj, {
  get(target, propKey, receiver){
    return Reflect.get(target, propKey)
  },
  set(target, propKey, value, receiver){
    console.log('setting ' + value)
    return Reflect.set(target, propKey, value)
  }
})

proxy.name // "tom"
proxy.age = 19 // "setting 19"
```

## 构造函数

所有的代理对象都通过`new Proxy(target, handler)`来生成，返回被代理后的对象，在`handler`对象里面可以设置下面 13 种拦截操作

* `get(target, propKey, receiver)`
* `set(target, propkey, value, receiver)`
* `has(target, propKey)`
* `deleteProperty(target, propKey)`
* `ownKeys(target)`
* `getOwnPropertyDescriptor(target, propKey)`
* `defineProperty(target, propKey, attributes)`
* `preventExtensions(target)`
* `isExtensible(target)`
* `getPropertyOf(target)`
* `setPropertyOf(target, proto)`
* `apply(target, obj, args)`
* `construct(target, args)`

