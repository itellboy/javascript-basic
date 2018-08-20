# flex 布局

> 采用 flex 布局的元素，称之为容器，子元素为容器的成员，称之为项目，项目的 float,clear,vertical-align 全部失效

* 水平的主轴
* 垂直的交叉轴

## 属性

| attribute       | desc                               | options                                                                     |
| --------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| flex-direction  | 主轴的方向                         | row(default), row-reverse, column, column-reverse                           |
| flex-wrap       | 定义如何换行                       | nowrap(default), wrap, wrap-reverse                                         |
| flex-flow       | flex-direction 和 flex-flow 的组合 | row nowrap(default)                                                         |
| justify-content | 主轴的对齐方式                     | flex-start(default), flex-end, center, space-between, space-around          |
| align-items     | 交叉轴的对齐方式                   | flex-start, flex-end, center, stretch(default), baseline                    |
| align-content   | 定义了多根轴线的对齐方式           | flex-start, flex-end, center, stretch(default), space-between, space-around |

## flex-direction

* row 主轴在水平方向，起点在左端
* row-reverse 主轴在水平方向，起点在右端
* column 主轴在垂直方向，起点在上端
* column-reverse 主轴在垂直方向，起点在下端

## flex-wrap

* nowrap 不换行
* wrap 换行，第一行在上方
* wrap-reverse 换行，第一行在下方

## flex-flow

> flex-direction 和 flex-wrap 的组合

## justify-content

* flex-start 左对齐
* flex-end 右对齐
* center 居中对齐
* space-between 两端对齐，项目间隔相等
* space-around 项目间隔相等，所以，项目与边框的间隔为项目与项目间间隔的一半

## align-item

* flex-start 顶部对齐
* flex-end 底部对齐
* center 居中对齐
* stretch 项目拉伸至容器最高高度
* base-line 项目第一行文字的底部对齐

## align-content

* flex-start 与交叉轴顶部对齐
* flex-end 与交叉轴底部对齐
* center 与交叉轴的中心对齐
* space-between 两端对齐，轴线间隔相等
* space-around 轴线间隔相等
* stretch 轴线占满整个交叉轴

## 项目的属性

| attribute   | desc                                                                         | options           |
| ----------- | ---------------------------------------------------------------------------- | ----------------- |
| order       | 项目的排列顺序                                                               | order: -1         |
| flex-grow   | 项目的放大比例，默认为 0                                                     | flex-grow: 1      |
| flex-shrink | 项目的缩小比例，默认为 1                                                     | flex-shrink: 2    |
| flex-basis  | 在分配多余空间之前，项目占据主轴空间                                         | flex-basis: auto  |
| flex        | flex-grow flex-shrink flex-basis                                             | flex: 0 1 auto    |
| align-self  | 允许单个项目与其他项目不同的对齐方式，可以覆盖 align-items 属性，默认值 auto | align-items: auto |