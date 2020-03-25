# 函数

一般来说，一个函数是一个能够被其他代码调用的“子程序”，一个函数由一些语句组成。一个函数接受值作为参数，同时也能返回值。

在 JavaScript 中，函数是一等公民，它们和对象一样有自己的属性和方法，区别在于函数能被调用。

## 1.概述

JavaScript 中的每个函数都是一个`Function`对象。一个函数一定有一个返回值，如果没有指定返回值，它们都会有一个默认的返回值。使用`new`关键字调用的构造器函数返回指向实例对象的`this`参数，对于其他的函数，默认返回`undefined`。

调用函数是，传递给函数参数被称为函数的实参，对应位置的函数参数名叫做函数的形参。如果实参为基本数据类型（字符串，数值，布尔值）的变量，则就算在函数内部改变形参的值，不会影响实参的值。如果实参是一个对象，则形参和实参为同一个对象引用，如果在函数内部改变形参指向对象的属性，则对应实参的属性也会随之改变。

在函数执行环境中，`this`关键字会指向调用函数对象所处的上下文，不会指向该运行函数

## 2.内容

* [箭头函数](/functions/arrow-functions/)
* [默认参数值](/functions/default-parameters/)
* [方法的定义](/functions/method-definitions/)
* [Rest 参数](/functions/rest-parameters/)
* [Arguments 对象](/functions/arguments/)
* [getter](/functions/getter/)
* [setter](/functions/setter/)