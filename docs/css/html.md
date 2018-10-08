# html

## 页面元素

### 头部元素

* meta
* title
* style
* link
* script
* base

```html
<meta charset="utf-8">
<!-- width=device-width 视口宽度等于屏幕宽度 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">

<base href="/>
```

### body 元素

* div、section、article、aside、header、footer
* p
* span、em、strong
* table、thead、tbody、tr、td、th
* ul、ol、li、dl、dt、dd
* a
* form、input、select、option、textarea、button

## html 元素重要属性

* a[href, target]
* img[src, alt]
* table td[colspan, rowspan]
* form[target, method, enctype]
* input[type, value]
* button[type]
* select>option[value]
* label[for]

## 元素分类

### 按照默认样式

* 块级元素 block
* 行内元素 inline
* 行内块元素 inline-block

## 元素之间的嵌套关系

* 块级元素可以包含行内元素
* 块级元素不一定可以包含块级元素
* 行内元素一般不能包含块级元素，`a>div`是合法的

## 元素默认样式

* normalize.css

## 面试题

### doctype 的意义

* 让浏览器以标准模式渲染
* 让浏览器知道元素的合法性

### html5 有哪些变化

* 语义化元素
* 表单增强
* 新的 api（离线，音视频，图形，实时通讯，本地存储，设备能力）
* 分类和嵌套变更

### em 和 i 有什么区别

* em 是语义化标签，表示强调
* i 是纯样式标签，表斜体
* html5 中不推荐使用，一般用作图标

### 语义化的意义是什么

* 开发者容易理解
* 机器容易理解结构（搜索，读屏软件）
* 有助于 SEO
* semantic microdata

### 哪些元素可以自闭合

* 表单元素 input
* 图片 img
* br、hr
* meta、link

### HTML 和 DOM 的关系

* HTML 是纯字符串
* DOM 是由浏览器解析而来
* Javascript 可以操作 DOM

### property 和 attribute 区别

* attribute 是死的
* property 是活的

### form 的作用

* 直接提交表单
* 使用 submit/reset 按钮
* 便于浏览器保存表单
* 你用第三方库可以整体取值
* 第三方库可以进行表单验证