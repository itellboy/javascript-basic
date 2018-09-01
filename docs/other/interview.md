# 面试常见问题

## CSS

**如何实现左边固定宽度，右边自适应的布局**

```html
<div id="wrap">
  <div id="sidebar"></div>
  <div id="content"></div>
</div>
```

方法1：

```css
#wrap {
  display: table;
  width: 800px;
}

#sidebar, #content {
  height: 300px;
  display: table-cell;
}

#sidebar {
  width: 240px;
}
```

把`wrap`容器的`display`属性设置为`table`，然后把子节点的`display`设置为`table-cell`，自己点就会自适应宽度，把要固定宽度的宽度设置固定，就可以实现上述需求，不支持 IE7

**如何实现垂直居中**

方法1（使用 flex 布局）：

父容器的`display`属性设置为`flex`，`align-item`属性设置为`center`

## JavaScript

**如何让一个函数对象继承另一个函数对象**

```javascript
function Parent () {
  this.bar = 'foo'
}

var Child = new 
```

**数组如何去重**



## 网络

**get 请求和 post 请求的区别**



**http 和 https 的区别**

