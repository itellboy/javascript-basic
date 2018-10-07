# Class 的继承

Class 可以通过`extend`关键字实现类的继承

```javascript
class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

class ChildPoint extend Point {
  constructor (x, y, color) {
    super(x, y)
    this.color = color
  }
}
```

子类的构造函数必须调用`super()`方法，否则新建实例会报错