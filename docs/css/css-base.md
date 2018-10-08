# css 基础

## 选择器

### 解析方式

css 的解析方式是从右往左解析的

```css
body div .name {
  font-size: 12px;
}
```

浏览器在解析上述代码的时候，先找到`class="name"`的元素，然后向上查找验证

### 选择器权重

官大一级压死人的规则

* id 选择器：+100
* 类 属性 伪类：+10
* 元素 伪元素：+1
* 其他选择器：+0
* !important：优先级最高
* 元素属性优先级高
* 相同权重按顺序覆盖

## 非布局样式

* 字体、字重、颜色、大小、行高
* 背景、边框
* 滚动、换行
* 粗体、斜体、下划线
* 其他

### 字体

* 字体族（不能使用引号）
	* serif（衬线字体）、sans-serif（非衬线字体）、monospace（等宽字体）、cursive（手写体）、fantasy（花体）
* 多字体（fallback）
* 网络字体、自定义字体
* ：

```css
/* 自定义字体  */
@font-face {
  font-family: "custom-font";
  src: url("xxx.ttf");
}
.custom {
  font-family: custom-font;
}
```

### 行高

**行高的构成**

由`line-box`组成，`line-box`的高度取决于`inline-box`中最高的`line-height`

* 顶线（top）：文本占据的顶部
* 底线（bottom）：文本占据的地步
* 基线（baseline）：英文字母的底部，默认对齐方式

`inline-box`的高度由文本的字体大小决定

**行高相关的现象和方案**

如果`inline-box`的高度小于`line-box`的高度，则`inline-box`会垂直居中，所以可以通过设置元素的`line-height`可以使得行内元素垂直居中

行内元素默认按照基线对齐，可以通过设置`vertical-align`属性来改变行内元素的对齐方式

* middle：居中对齐
* top：顶部对齐
* middle：底部对齐
* baseline：基线对齐

当图片标签和行内元素处于同一行的时候，会出现**图片3px缝隙问题**，调整图片的`vertical-aligh`为`bottom`，可以解决这个问题

### 背景

* 背景颜色：
* 渐变色背景：`backgroud: linear-gradient(0deg, red 0%, green 50%, black 100%);`（`0deg`相当于从`to top`，`90deg`相当于`to right`）
* 多背景叠加：可以给`background`设置多个`linear-gradient()`来实现多背景叠加
* 背景图片和属性（雪碧图）：通过设置`background-position`属性来调整背景图的位置，通过`background-size`调整背景图的大小
* base64 和性能优化
* 多分辨率适配