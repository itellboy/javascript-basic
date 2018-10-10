# CSS 布局

## 常用布局

* table 表格布局
* float 浮动 + margin 布局
* inline-block 布局
* flexbox 布局

## 盒子模型

<img src="http://www.w3school.com.cn/i/ct_boxmodel.gif" width="300">

盒子所占空间 = 元素的宽高 + padding + border + margin

## display/position

* `display` 确定元素的显示类型
	* `block`
	* `inline`
	* `inline-block`
* `position` 确定元素的位置
	* `fixed`：脱离文档流，相对于窗口定位，可以设置`z-index`属性
	* `absolute`：脱离文档流，绝对定位，相对于其他带有定位属性元素进行偏移，可以设置`z-index`属性
	* `relative`：相对定位，相对自身进行偏移，偏移不会影响布局，可以设置`z-index`属性
	* `static`：默认定位

## table 布局

以前比较通用用来布局的方式，利用`<table>`、`<tr>`、`<td>`进行布局

## flexbox 布局

* 弹性盒子
* 盒子是并列的
* 指定宽度

## float 布局

* 元素“浮动”
* 脱离文档流，不会影响其他元素的布局
* 不脱离文本流，影响其他的文本

**对自身的影响**

* 形成“块”，可以设置宽高
* 位置尽量靠上
* 位置尽量靠两边

**对父元素的影响**

* 从布局上“消失”
* 高度塌陷

**高度塌陷的解决办法**

```css
/* 父级元素设置 overflow */
.p {
  overflow: hidden
}

/* 设置伪元素 */
.p::after {
  content: '';
  clear: both;
  display: block;
  height: 0px;
  visibility: hidden;
}
```

**三栏布局**

```css
.left {
  float: left;
  width: 200px;
  height: 100%;
}
.right {
  float: right;
  width: 200px;
  height: 100%;
}
.middle {
  margin-left: 200px;
  marign-right: 200px;
}
```

## inline-block 布局

* 像文本一样排 block 元素
* 没有浮动问题
* 需要处理间隙问题，把父元素的`font-size`属性设置为`0px`
* 不适合自适应布局，适合定宽度的布局

```css
.container {
  font-size: 0px;
  width: 800px;
  height: 200px;
}
.left {
  display: inline-block;
  width: 200px;
  height: 200px;
  font-size: 14px;
}
.right {
  display: inline-block;
  width: 600px;
  height: 200px;
  font-size: 14px;
}
```

## 响应式设计和布局

* 在不同的设备上能够正常使用
* 主要处理屏幕大小问题
* 主要方法：折叠、隐藏、自适应空间（rem、viewport、media query）

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  @media (max-width=640px) {
    /* 给屏幕宽度小于 640px 的设备写单独的样式 */
  }
</style>
```

## 面试题

* 两栏、三栏布局
* position、absolute、fixed 有什么不同
* display: inline-block 为什么会有间隙（字符间距，消灭自负或者消灭间距）
* 为什么、怎么清除浮动（盒子管理自己的布局、加伪元素）
* 如何适配移动端页面（viewport、rem、media query，隐藏、折行、留下自适应空间）