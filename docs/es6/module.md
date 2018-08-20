# Module 的语法

## 概述

为了使 JavaScript 有模块体系，将各个功能拆分成小模块，在用简单的方法拼装起来

## 与 CommonJS 比较

* ES6 模块采用编译时加载， CommonJS 是运行时加载
* ES6 采用按需加载，只加载需要的属性， CommonJS 将模块作为一个对象全部加载

## 严格模式

ES6 模块自动采用严格模式，主要有以下限制

1. 变量必须申明后使用
2. 函数的参数不能有同名属性，否则报错
3. 不能使用`with`语句
4. 不能对只读对象赋值，否则报错
5. 必能使用前缀 0 表示八进制数，否则报错
6. 不能删除不可删除属性，否则报错
7. 不能删除变量`delete prop`，会报错，只能删除属性`delete global[prop]`
8. `eval`不会在外层作用域引入变量
9. `eval`和`arguments`不能被赋值
10.`arguments`不能反映参数的动态变化
11. 不能使用`arguments.callee`
12. 不能使用`arguments.caller`
13. 禁止`this` 指向全局对象
14. 不能使用`fn.caller()`和`fn.arguments`来获取函数调用的堆栈
15. 增加了保留字，（比如`protected`,`static`,`interface`）

## export 命令和 import命令

* 模块主要由两个命令构成 `export`,`import`。`export`规定模块对外的借口，`import`主要用于输入其他模块的功能


**export**

* 模块内部可以直接通过`export`关键字输出模块内部定义的变量和方法
* `export`输出的变量名不变，可以通过`as`重命名

	```javascript
	var bar = 1;
	export {bar as a}
	```

* `export`输出的值与 module 内部变量的是关联的，这一点与 CommonJS 完全不同， CommonJS 输出的值是模块内部值的拷贝

**import**

* `import`命令接受一对大括号，里面接受导入的变量名，必须与导出的变量名相同
* `import`输入的变量都是只读的，不可改写
* 如果重复执行多次同一条`import`语句，那么只会执行一次，也就是说，`import`语句是 Singleton 模式
* `import`命令有提升效果

## 模块的整体加载

```javascript
import * as myModule from './myModule.js';
```

## export default 命令

> 为模块指定默认输出

* 使用`export default`的输出不需要使用`{}`引入
* 不需要知道输出时候的变量名，引入的时候可以随意命令