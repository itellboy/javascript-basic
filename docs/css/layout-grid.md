# 网格布局

## 1. 什么是网格

网格是一组相交的垂直线和水平线，它定义了网格的行和列

## 2. Grid vs FlexBox

Flex 是一个一维布局，只能在一条直线上放置内容区块。

Grid 是一个二维布局，根据设计需求可以将内容区块放置到任意地方

两者配合使用效果更好，Grid 作为 FlexBox 的升级，增加了一个维度

## 3. 网格元素

* Grid Container（网格容器）：元素应用：`display: grid;`，它是所有网格项的父元素
* Grid Item（网格项）：网格容器的子元素
* Grid Line（网格线）：组成网格项的分界线
* Grid Track（网格轨道）：相邻的两条网格线之间的区域
* Grid Cell（网格单元）：两个相邻的列网格线和两个相邻的行网格线组成的网格单元
* Grid Area（网格区域）：四个网格线包含的总空间
* fr（单位）：剩余空间分配数。用于在一系列长度值中分配剩余空间，如果多个部分已指定，则按照数字比例进行分配
* gr（单位）：网格数（实验中）


```html
<div style="display: grid;">
  <div>one</div>
  <div>two</div>
</div>

```

## 4. CSS 属性

### 4.1 display

* `grid`：生成块级网格
* `inline-grid`：生成行级网格
* `subgrid`：如果网格容器本身就是网格项（嵌套网格容器），此属性值用来继承父网格容器的行列大小，目前所有浏览器不兼容

同`FlexBox`，当元素设置了网格布局，`column`、`float`、`clear`、`vertical-align`属性无效

### 4.2 grid-template-columns、grid-tempate-rows

指定网格容器的行数和列数

**属性值**

* track-size（轨道大小）：可以使用 css 长度（px、em 等）、百分比、分数（用 fr 单位）
* line-name（网格线名称）：可以选择任意名称

```css
.container {
  grid-template-columns: 40px 50px auto 1fr 2fr;
  grid-template-rows: 25% 100px auto;
}
```

### 4.3 grid-template-areas

通过引用 grid-area 属性给指定的网格区域命名来定义网格区域，一块区域必须是一个矩形

**属性值**

*` <grid-area-name>`：使用 grid-area 属性设置网格区域的名称
* `.`：空网格
* `none`：没有定义网格区域

```css
.container {
  grid-template-areas: "header header header"
                       "sidebar . main main"
                       "footer footer footer footer";
}

.container .header { grid-area: header };
.container .sidebar { grid-area: sidebar };
.container .main { grid-area: main };
.container .footer { grid-area: footer }; 
``` 

### 4.4 grid-gap

网格线的大小，网格之间的间距

```css
grid-column-gap: 10px;
grid-row-gap: 20px;

grid-gap: <grid-column-gap> <grid-row-gap>;
gap: <grid-row-gap> <grid-column-gap>;
```

### 4.5 justify-items、align-items、place-items

网格内容沿着行轴对其方式、网格内容沿着列轴对其方式

* `start`：网格内左对齐
* `end`：网格内右对齐
* `center`：网格内中间对齐
* `stretch`：内容宽度占据整个网格的区域空间（默认）


```css
.container {
  justify-items: start;
  align-items: end;
  
  /* 同下 */
  place-items: start end;
  place-items: <align-item> <justify-items >
}
```

### 4.6 justify-content、align-content、place-content

网格项沿着行轴对齐方式、网格项沿着列轴对齐方式

* `start`: 网格项左对齐
* `end`：网格项右对齐
* `center`：网格项居中对齐
* `stretch`：调整 grid-item 的大小，让宽度填充整个网格容器
* `space-around`：grid-item 之间均等的间隙，外边缘间隙的大小为中间间隙的一半
* `space-between`：grid-iten 之间均等间隙，外边缘无间隙
* `space-evenly`：grid-item 之间和外边缘的间隙都相等

### 4.7 grid-auto

