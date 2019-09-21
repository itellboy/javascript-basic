# 编程风格

良好的编程风格有助于团队的协同开发，这里主要参考 [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)。

## 1. 变量声明

### 1.1 使用`const`和`let`

所有的局部变量使用`const`或者`let`声明，默认使用`const`，当明确该变量在以后会被重新赋值的时候使用`let`，不再使用`var`。

### 1.2 一次只声明一个变量

```javascript
// good
let a = 1;
let b = 2;

// bad
let a = 1, b = 2;
```

### 1.3 需要的时候再声明，并尽可能初始化该变量

### 1.4 更具需要声明类型