# Canvas 画布

Canvas 是为了解决以前在网页中只能显示静态图片而提出的可以使用 JavaScript 脚本语言在一块区域中绘制图像的解决方案

* 目前浏览器支持 支持 IE9 +

## 1 用途

* 绘制图形
* 图像处理
* 创建动画
* 实时视频处理和渲染
* `WebGL`也适用`<canvas>`元素在网页上绘制硬件加速的 3D 图形

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

下面绘制图形和图像处理的 API 定义在 CanvasRenderingContext2D 对象上面

## 4 绘制图形

Canvas 绘制空间坐标：左上角为坐标原点，向左为 x 轴，向下为 y 轴

![画布](http://static.itellboy.wang/docs/Canvas_default_grid.png)

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

![](http://static.itellboy.wang/docs/Canvas_rect.png)

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

### 4.5 渐变和图像填充

* `createLinearGradient(x1, y1, x2, y2)`：线性渐变
* `createRadialGradient(x1, y1, r1, x2, y2, r2)`：径向渐变

* `createPattern(image, type)`：图像填充，`type`取值范围`repeat`、`repeat-x`、`repeat-y`、`no-repeat`

### 4.6 阴影 Shadow

* `shadowOffsetX`：阴影在 X 轴的延伸距离
* `shadowOffsetY`：阴影在 Y 轴的延伸距离
* `shadowBlur`：阴影的模糊距离
* `shadowColor`：阴影颜色值


## 5 图像处理

Canvas 提供了丰富的 API 来处理图像

### 5.1 图像源

Canvas 可以利用以下几种资源作为图像源

* `HTMLImageElement`：HTML 图片元素，可以是通过`new Image()`生成的实例或者`<img />`节点对象
* `HTMLVideoElement`：HTML `<video />` 节点元素，Canvas 从视频源中抓取一帧作为图像源
* `HTMLCanvasElement`：HTML 另一个`<canvas />`元素
* `ImageBitmap`：高性能的位图

这些图像源可以统一使用 CanvasImageSource 对象引用

### 5.2 绘制图像

* `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`：绘制图像，参数意思如下图，除开`image`源，前四个参数定义了图像源切片的位置和大小，后四个参数定义了切片在画布中显示的位置和大小

![](http://static.itellboy.wang/docs/=Canvas_drawimage.jpg)

## 6 Canvas 节点元素接口

### 6.1 属性

* `height`：元素高度
* `width`：元素宽度

### 6.2 方法

* `getContext()`：获取 Canvas 元素处理的上下文
* `toDataURL()`：返回`data:`类型的 URL，表示图像内容的字符串编码
* `toBlob()`：返回一个 Blob 对象，表示 Canvas 中的图像内容

```javascript
// 返回 DataURL 示例
function test() {
 var canvas = document.getElementById('canvas')
 var url = canvas.toDataURL()
 
 var newImg = document.createElement('img')
 newImg.src = url
 document.body.appendChild(newImg)
}
// 返回 Blob 对象示例
function test() {
  var canvas = document.getElementById('canvas')
  canvas.toBlob(function(blob) {
    var newImg = document.createElement('img')
    url = URL.createObjectURL(blob)
    newImg.onload = function() {
      URL.revokeObjectURL(url)
    }
    newImg.src = url
    document.body.appendChild(newImg)
 })
}
```
