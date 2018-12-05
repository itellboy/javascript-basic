# Canvas 画布

Canvas 是为了解决以前在网页中只能显示静态图片而提出的可以使用 JavaScript 脚本语言在一块区域中绘制图像的解决方案

* 目前浏览器支持 支持 IE9 +

## 1 用途

* 绘制图形
* 图像处理
* 创建动画
* 实时视频处理和渲染
* `WebGL`也适用`<canvas>`元素在网页上绘制硬件加速的 3D 徒刑

## 2 基本用法

`<canvas>`标签只有`height`和`weight`两个属性来规定画布的高度和宽度

**兼容性检查**

对于老旧的不支持 Canvas 的浏览器，会直接显示`<canvas>`标签中间的内容

## 3 getContext()

Canvas 元素节点带一个`getContext()`获取上下文的方法，可以接受下面两个字符串参数

* `2d`：返回一个 CanvasRenderingContext2D 对象实例，用于绘制图形和图像处理
* `webgj`：返回一个 WebGLRenderingContext 对象实例，用于创建动画和实时视频处理和渲染

```javascript
var canvas = document.getElementById('canvas')
canvas.getContext('2d')
```

下面主要是 2D 平面图像的 api

## 4 绘制图形

Canvas 绘制空间坐标：左上角为坐标原点，向左为 x 轴，向下为 y 轴

![画布](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)

### 4.1 绘制矩形

* `fillRect(x, y, width, height)`：绘制一个填充的矩形
* `strokeRect(x, y, width, height)`：绘制一个矩形的边框
* `clearRect(x, y, width, height)`：绘制一个透明的矩形

```javascript
ctx.fillRect(25, 25, 100, 100)
ctx.clearRect(45, 45, 60, 60)
ctx.strokeRect(50, 50, 50, 50)
```

绘制结果为：

![](https://mdn.mozillademos.org/files/245/Canvas_rect.png)

### 4.2 绘制路径

* `beginPath()`：新建一条绘制路径
* `closePath()`：结束路径绘制，如果绘制的终点和起点一样，不需要调用此函数
* `stroke()`：沿着路径绘制线条
* `fill()`：填充路径包裹区域

#### 4.2.1 移动画笔

* `moveTo(x, y)`：将画笔移动到指定坐标，可以联想到提笔落笔的过程
* `lineTo(x, y)`：绘制一条当前点到指定坐标的直线

```javascript
// 绘制一个奇怪的图形
ctx.beginPath();
ctx.moveTo(75, 50)
ctx.lineTo(100, 75)
ctx.lineTo(100, 15)
ctx.lineTo(90, 15)
ctx.fill()
```

#### 4.2.2 圆弧

* `arc(x, y, radius, startAngle, endAngle, anticlockwise)`：画一个以`(x, y)`为圆心，`radius`为半径，从`startAngle`弧度开始，`endAngle`弧度结束，按照`anticlockwise`指定方向（默认：顺时针）来画圆弧

#### 4.2.3 矩形

`rect(x, y, width, height)`：绘制一个矩形

#### 4.2.4 Path2D 对象

将绘制的图形用 Path2D 对象存储起来，这样可以快速的绘制同样的图形

通过`new Path2D()`能生成一个 Path2D 对象的实例，CanvasRenderingContext2D 对象实例绘制路径的 api 都可以在 Path2D 对象实例上面使用，并且可以通过`addPath()`方法增加绘制动作

```javascript
var ctx = canvas.getContext('2d')

var rectangle = new Path2D()
rectangle.rect(10, 10, 50, 50)

var circle = new Path2D()
circle.moveTo(125, 35)
circle.arc(100, 35, 25, 0, 2 * Math.PI)

ctx.stroke(rectangle)
ctx.fill(circle)
```

Path2D 对象还可以接受一个 SVG path 作为初始化参数

```javascript
var p = new Path2D("M10 10 h 80 v 80 h -80 Z")
```

### 4.3 色彩 Colors

可以通过下面两个属性给图形上色

* `fillStyle`：设置填充颜色
* `strokeStyle`：设置轮廓颜色

属性值可以是任意符合[CSS3 颜色值标准](https://www.w3.org/TR/css-color-3/)的字符串

* `globalAlpha`：透明度，0.0 到 1.0，会影响到 Canvas 里面所有图形，建议使用设置`rgba`属性值的`fillStyle`属性

### 4.4 线型 Line Styles

* `lineWidth`：线条宽度
* `lineCap`：线条末端样式，`butt`表示以方形结束，`round`表示以圆形结束，`square`表示以方形结束，但是增加了一个高度是线条宽度的一半，宽度是线条宽度的矩形区域
* `lineJoin`：线条与线条结合处的样式
* `miterLimit`：限制当两条线相交时交接处最大长度
* `getLineDash()`：获取线条虚线样式
* `setLineDash()`：设置线条虚线样式
* `lineDashOffset`：线条虚线样式起始偏移量



## 5 图像处理