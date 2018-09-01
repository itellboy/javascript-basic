# 实例对象与 new 命令

JavaScript 程序的对象基于构造函数（constructor）和原型链（prototype）

构造函数的特点

* 内部使用`this`指向生成的实例对象
* 生成对象的时候使用`new`命令

```javascript
// 定义一个构造函数
function Animal () {
  this.color = 'red'
}

var sheep = new Animal()
sheep.color // "red"
```

通常构造函数的首字母大写

## new 命令

构造函数生成实例对象必须使用`new`命令，如果不使用`new`命令，则和普通函数无区别，并且没有自己的作用域（scope）

`new`命令的执行流程

* 创建一个空对象作为返回实例对象
* 将空对象的原型指向构造函数的`prototype`属性
* 空对象内部的`this`对象指向这个空对象
* 执行构造函数内部的代码

如果构造函数内部有`return`语句，则通过`new`命令生成实例对象的返回为`return`语句后面的内容，否则为实例对象本身

## new.target 命令

在构造函数内部可以使用`new.target`命令，判断当前函数是否通过`new`命令调用，如果`new.target`与当前构造函数比较返回逻辑真，则表示当前函数是通过`new`调用，否则为普通函数调用