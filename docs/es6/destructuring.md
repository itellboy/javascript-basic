# 变量的解构赋值

## 基本概念

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

## 数组的解构赋值

```javascript
let [a, b, c] = [1, 2, 3];
let [a, ...b] = [1, 2, 3, 4];
let [x, y = 'b'] = ['a'];
```

* 可以指定变量的默认值，当一个数组成员严格等于`undefied`时，默认值才会生效
* 只要某种数据结构具有 Iterator 接口，就可以采用数组解构赋值

## 对象的解构赋值

```javascript
let {foo, bar} = {foo: 'aa', bar: 'bbb'};
// 等同于
let {foo: foo, bar: bar} = {foo: 'aa', bar: 'bbb'};
```

嵌套对象赋值注意模式和变量的区别

```javascript
let foo = {
  a: {
    b: '123'
  }
}

let {a: {b}} = foo;
a //报错
b // "123"
```

此处`a`为模式，`b` 为变量，要为`a`赋值，可以写作

```javascript
let foo = {
  a: {
    b: '123'
  }
}

let {a, a: {b}} = foo;
a // Object {b: '123'}
b // "123"
```

## 字符串的解构赋值

```javascript
const [a, b, c, d, e] = 'hello'
```

可以对字符串的`length`进行解构赋值

## 数值与布尔值的解构赋值

对于数值和布尔值进行解构赋值时，如果等号右边是布尔值或者是数值，则会先将其转化为对象

```javascript
let { toString } = 123
toString === Number.prototype.toString // true
```

由于`null`和`undefined`不能转化为对象，所有不能进行解构赋值

## 函数参数的解构赋值

```javascript
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```

## 用途

* 交换变量 `[x, y] = [y, x]`
* 从函数返回多个值
* 函数参数的定义
* 提取json数据
* 函数参数的默认值
* 便利map结构
* 输入模块的制定方法