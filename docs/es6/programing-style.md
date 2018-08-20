# 编程风格

* 用 `let` 代替 `var`
* 定义全局常量使用 `const`
* 静态字符串使用单引号，动态字符串使用反引号
* 优先使用解构赋值
* 单行定义对象不使用逗号结尾，多行定义对象使用逗号结尾
* 对象尽量静态化，不要随意更改对象属性，使用 `Object.assign()` 更改对象属性
* 对象的属性和方法，尽量使用简洁表达法
* 使用扩展运算符 `...` 拷贝数组
* 使用 `Array.from()` 将类似数组对象转化为数组
* 使用默认值语法为函数参数设置默认值
* 总是使用 Class 来取代 prototype 的操作
* 使用 `extends` 实现继承
* Module 是 JavaScript 模块标准写法，尽量用 `import` 替代 `require` ，使用 `export` 替代 `module.exports` ，模块只有一个默认值就用 `export default`