# CSS 效果属性

## box-shadow

* 营造层次感（立体感）
* 充当没有宽度的边框
* 特殊效果

```css
/* offset-x offset-y 模糊区域 扩展区域 color 内阴影(inset) */
.shadow {
  box-shadow: 10px 20px 25px 5px rgab(0, 0, 0, 0.2)
}
```

可以利用`box-shadow`实现一个 div 画出特殊图案的例子

## text-shadow

* 立体感
* 印刷的品质感

```css
/* offset-x offset-y 模糊区域 color */
.shadow {
  text-shadow : 0px 0px 5px red;
}
```

## border-radius

* 圆角矩形
* 圆形
* 扇形/半圆
* 一些复杂的图形

可以单独定义某个圆角的的半径

* border-bottom-left-radius：左下角
* border-bottom-right-radius：右下角
* border-top-left-radius：左上角
* border-top-right-radius：右上角

## background

* 纹理、图案
* 渐变
* 雪碧图动画
* 背景图尺寸适应`background-size: cover;`、`background-size: contain`

## clip-path

* 对容器进行裁剪
* 常见几何图形
* 自定义路径，利用 svg 对容器进行裁剪

## transform

2D 和 3D 变换

## 常见面试题

* 如何用一个 div 画一个 xxx（用 box-shadow 无线投影、::after、::before）
* 如何产生不占空间的边框（无阴影 box-shadow、outline）
* 如何实现 ios 图标（clip-path：svg）
* 如何圆形头像
* 如何实现半圆、扇形
* 如何实现背景图的居中显示、不重复、改变大小（backgroud-position、background-repeat、background-size）
* 如何平移、放大一个元素（transform）
* 如何实现 3D 效果（perspective: 500px; transform-style: perserve-3d; transform: translate rotate...）
