# Class 的继承

## 简介

* Class 可以通过 `extend` 关键字继承，比 `ES5` 修改原型链继承容易得多
* 子类必须在 `constructor` 方法中调用 `super()` 方法，只有在使用 `super` 方法后，才能使用 `this` 关键字，否则会报错
* 子类实例的构建时对父类实例的加工
* 父类的静态方法也能被子类继承
* 可以通过 `Object.getPropotypeOf()` 来判断一个类是否为另一个类的子类

## super 关键字

