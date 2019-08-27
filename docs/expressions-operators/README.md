# 表达式和操作符

## 1. 基础表达式

下面的表达式是 JavaScript 语言里面最基础的关键字和一般表达式

* [this](/expressions-operators/this)：是指向当前执行环境上下文的关键字
* [function](/expressions-operators/function)：声明一个方法
* [function*](/expressions-operators/function*)：声明一个 generator 方法
* [class](/expressions-operators/class)：声明一个 class
* [yield](/expressions-operators/yield)：暂停或者恢复一个 generator 方法
* [yield*](/expressions-operators/yield*)：委派给另外一个generator函数或可迭代的对象
* [async function](/expressions-operators/async-function)：定义一个异步函数表达式
* [await](/expressions-operators/await)：暂停或恢复执行异步函数，等待一个 Promise 的 resolution 或者是 rejection
* [[]](/expressions-operators/array-init)：数组初始化/字面量语法
* [{}](/expressions-operators/object-init)：对象初始化/字面量语法
*  [()](/expressions-operators/grouping)：分组语法
*  [/ab+ci/](/core/regexp)：正则表达式的字面量语法

## 2. 左边表达式

左边的值是赋值的目标

* [属性访问符](/expressions-operators/property-accessors)：访问对象的属性和方法，比如`Object.property`、`Object['property']`
* [new](/expressions-operators/new)：实例化构造函数
* [new.target](/expressions-operators/new-target)：在构造函数里面，`new.target`指向`new`调用的构造函数
* [super](/expressions-operators/new-target)：`super`可以调用父构造函数
* [...obj](/expressions-operators/spread-syntax)：可以讲一个可迭代的对象延展成一个一个的成员参数

## 3. 自增/自减

* [a++](/expressions-operators/arithmetic-operators)：后置自增运算符
* [a--](/expressions-operators/arithmetic-operators)：后置自减运算符
* [++a](/expressions-operators/arithmetic-operators)：前置自增运算符
* [--a](/expressions-operators/arithmetic-operators)：前置自减运算符

## 4. 一元运算符

一元运算符仅仅操作一个对象

* [delete](/expressions-operators/delete)：可以从对象中删除一个属性
* [void](/expressions-operators/void)：表示表达式放弃返回值
* [typeof](/expressions-operators/typeof)：返回给定对象的类型
* [+](/expressions-operators/arithmetic-operators)：一元加法操作符将给定对象转换为 Number 类型
* [-](/expressions-operators/arithmetic-operators)：一元加法操作符将给定对象转换为 Number 类型，并取反
* [~](/expressions-operators/bitwise-operators)：按位非运算符
* [!](/expressions-operators/logical-operators)：逻辑非运算符

## 5. 算术运算符

* [+](/expressions-operators/arithmetic-operators)：加法运算符
* [-](/expressions-operators/arithmetic-operators)：减法运算符
* [*](/expressions-operators/arithmetic-operators)：乘法运算符
* [/](/expressions-operators/arithmetic-operators)：除法运算符
* [%](/expressions-operators/arithmetic-operators)：取模运算符
* [**](/expressions-operators/arithmetic-operators)：指数运算符

## 6. 关系运算符

通过一个比较运算符进行比较，根据比较结果返回一个布尔值

* [in](/expressions-operators/in)：判断对象是否拥有给定属性
* [instanceof](/expressions-operators/instanceof)：判断一个对象是否为另一个对象的实例
* [>](/expressions-operators/comparison-operators)：大于
* [>=](/expressions-operators/comparison-operators)：大于等于
* [<](/expressions-operators/comparison-operators)：小于
* [<=](/expressions-operators/comparison-operators)：小于等于

## 7. 相等运算符

返回比较对象是否相等

* [==](/expressions-operators/comparison-operators)：相等
* [!=](/expressions-operators/comparison-operators)：不等
* [===](/expressions-operators/comparison-operators)：全等
* [!==](/expressions-operators/comparison-operators)：非全等

## 8. 位移运算符

* [<<](/expressions-operators/bitwise-operators)：左移
* [>>](/expressions-operators/bitwise-operators)：左移
* [>>>](/expressions-operators/bitwise-operators)：无符号右移

## 9. 二进制运算符

* [|](/expressions-operators/bitwise-operators)：或
* [&](/expressions-operators/bitwise-operators)：与
* [^](/expressions-operators/bitwise-operators)：异或

## 10. 二元逻辑运算符

* [&&](/expressions-operators/logical-operators)：逻辑与
* [||](/expressions-operators/logical-operators)：逻辑或

## 11. 三元运算符

* [condition ? true : false](/expressions-operators/conditional-operators)：三元运算符

## 12. 赋值运算符

赋值运算符将运算符右边的值赋值给左边

* [=](/expressions-operators/assignment-operators)：赋值运算符
* [+=](/expressions-operators/assignment-operators)：赋值求和
* [-=](/expressions-operators/assignment-operators)：赋值求差
* [*=](/expressions-operators/assignment-operators)：赋值求积
* [/=](/expressions-operators/assignment-operators)：赋值求商
* [%=](/expressions-operators/assignment-operators)：赋值求余
* [<<=](/expressions-operators/assignment-operators)：赋值左位移
* [>>=](/expressions-operators/assignment-operators)：赋值右位移
* [>>>=](/expressions-operators/assignment-operators)：赋值无符号右位移
* [&=](/expressions-operators/assignment-operators)：赋值与
* [|=](/expressions-operators/assignment-operators)：赋值或
* [^=](/expressions-operators/assignment-operators)：赋值异或
* [[a, b] = [1, 2]](/expressions-operators/destructuring-assignment)：解构赋值
* [{a, b} = {a: 1, b: 2}](/expressions-operators/destructuring-assignment)：解构赋值

## 13. 逗号操作符

* [,](/expressions-operators/comma-operator)：结合多个操作，从左到右进行，返回最后一个操作的值
