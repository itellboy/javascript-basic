# css3 transform

> 定义元素的 2D 和 3D 转换，包括移动、旋转、倾斜、缩放等

```css
transform: none|transform-functions;
```

## grammar

| value | desc | demo |
| --- | --- |--- |
| none | 定义不进行转换 |
| [matrix(n,n,n,n,n,n)](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵/) | 定义 2D 转换，使用六个值的矩阵 |
| matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | 定义 3D 转换，使用 16 个值的 4x4 矩阵 |
| translate(x,y) | 定义 2D 转换 | translate(10px, 20px);
| translate3d(x,y,z) | 定义 3D 转换 |
| translateX(x) | 定义 x 轴的转换 |
| translateY(y) | 定义 y 轴的转换 |
| translateZ(z) | 定义 z 轴的转换 |
| scale(x,y) | 定义 2D 缩放转换 | scale(1.5,1.5) |
| scale3d(x,y,z) | 定义 3D 缩放转换 |
| scaleX(x) |
| scaleY(y) |
| scaleZ(z) |
| rotate(angle) | 定义 2D 旋转 | rotate(30deg) |
| rotate3d(x,y,z,angle) | 定义 3D 旋转 |
| rotateX(x) | 定义沿着 x 轴的 3D 旋转 |
| rotateY(y) | 定义沿着 y 轴的 3D 旋转 |
| rotateZ(z) | 定义沿着 z 轴的 3D 旋转 |
| skew(x-angle,y-angle) | 定义沿着 x 轴和 y 轴的 2D 倾斜转换 | skew(10deg,10deg) |
| skewX(x-angle) |
| skewY(y-angle) |
| perspective(n) | 为 3D 转换元素定义透视视图 |

* skew, scale, rotate, translate 本质上都是利用 matrix 实现的，可以看作是 matrix 的语法糖
* 坐标原点在屏幕的左上角