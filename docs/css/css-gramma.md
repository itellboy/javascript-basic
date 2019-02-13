# CSS 语法

CSS 的顶层样式表由两种规则组成的样式列表组成

* `at-rule`：at 规则，由`@`关键字和后面的一个区块组成，以逗号结尾
* `qualified-rule`：普通规则，也就是我们常见的选择器和属性置顶构成的规则

## 1. at 规则

在 CSS 标准里面，由以下几种 at 规则

* `@charset`
* `@import`
* `@media`
* `@page`
* `@counter-style`
* `@keyframes`
* `@fontface`
* `@supports`
* `@namespace`
* `@viewport`

### 1.1 @charset

用于指定 CSS 文件的编码规则，必须定义在文件的最前面，不影响页面的展示效果

```css
@charset "utf-8";
```

### 1.2 @import

用于引入一个 CSS 文件，出了`@charset`不会被引入，文件的其他内容会被全部引入

```css
@import "mystyle.css";
@import url("mystyle.css");
```

### 1.3 @media

用于指定 media query 规则，可以对设备的类型进行判断，在区块内部就是针对该设备类型的普通 CSS 规则

```css
@media print {
  body {
    font-size: 12px;
  }
}
```

### 1.4 @page

用于页面打印的时候修改页面的 CSS 属性

```css
@page {
  margin: 1cm;
}
```

### 1.5 @counter-style

用于定义列表项的表现

```css
@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: " ";
}
```

### 1.6 @keyframes

用于定义动画的关键帧

```css
@keyframes move {
  from {
    left: 0;
    top: 0;
  }
  to {
    left: 100px;
    top: 100px;
  }
}
```

### 1.7 @fontface

定义字体，iconfont 就是用`@fontface`实现

```css
@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p { font-family: Gentium, serif; }
```

### 1.8 @supperts

检查环境的特性

### 1.9 @namespace

定义命名空间，内部的 CSS 选择前全部会带上命名空间

### 1.10 @viewport

设置视口的一些特性，可以使用 HTML 的 meta 标签代替

## 2. 普通规则

普通 CSS 规则由**选择器**和**声明区块**组成，声明区块又由**属性**和**值**构成的列表

### 2.1 选择器

选择器的语法如下图所示

<img src="http://static.itellboy.wang/docs/d56974c0265982b9ac84b067cd623e00.png" width="500" />

### 2.2 声明区块：属性和值

声明区块是由`属性: 值`组成的序列

#### 2.2.1 属性

* 属性是由下划线、中划线、字母组成的标识符
* CSS 属性不允许使用两个中划线开头，这样的属性会被认为是 CSS 变量

#### 2.2.2 值

CSS 的属性值可能是：

* CSS 范围的关键字：`inherit`、`unset`、`initial`，任何属性都可以设置这些关键字
* 字符串：比如`content`属性的值
* URL：使用`url()`函数的值
* 整数/实数
* 维度：带单位的整数/实数
* 百分比：大部分维度都可以使用百分比表示
* 颜色：比如`background-color`的值
* 图片：比如`background-image`的值
* 2D 位置：比如`background-size`的值
* 函数：来自函数的值，比如`transform的属性`

CSS 支持一些特定的值计算函数：

* `calc()`：支持加减乘除元算，并且可以带上维度单位，比如：`width: calc(100%/3 + 2*1em - 2*1px)`
* `max()`：取最大值
* `min()`：取最小值
* `clamp()`：限定值得范围，超出则取最大或者最小
* `toggle()`：允许在几个值中随机切换，比如：`ul { list-style-type: toggle(circle, square); }`，这种规则会使得列表项的样式以圆点或者方点间隔出现
* `attr()`