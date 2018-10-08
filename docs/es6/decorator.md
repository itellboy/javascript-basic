# 修饰器

## 类的修饰

```
@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A
```

上面的代码描述了修饰器的行为，主要作用是对类的行为进行再一次的修改

修饰器可以接受参数，下面是一个利用修饰器为类添加方法的例子

```javascript
function decorator(...args){
  return function (target) {
    Object.assign(target.prototype, ...args)
  }
}

var foo = {
  print () {
    console.log('print')
  }
}

@decorator
class A {}

var a = new A()
a.print() // "foo"
```