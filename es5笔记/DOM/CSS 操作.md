# CSS 操作

* CSS 负责页面的视觉效果
* JavaScript 负责用户的行为互动

## HTML 元素的 style 属性

通过 HTML 元素操作属性的方法可以直接读写 style 属性

```javascript
document.getElementById('id').setAttribute('style', 'background-color: #fff;')
```

HTML 元素的 style 属性不仅可以当作一个字符串进行读写，还是一个对象，实现了 CSSStyleDeclaration 接口，可以通过 css 键名来读写属性，例如 `div.style.fontSize = '14px'`

## CSSStyleDelaration 接口

CSSStyleDeclaration 接口用来操作元素的样式，下面三个地方实现了这个接口

* 元素节点的 `style` 属性
* `CSSStyle` 实例的 `style` 属性
* `window.getComputedStyle()` 的返回值，参数为元素节点

CSSStyleDeclaration 接口可以直接读写 css 的样式属性，属性和 css 规则一一对应，

* 将横杠从 css 属性名中移除，将横杠后的第一个字母大写
* 如果属性为 JavaScript 保留字规则名之前需加上 `css` ，例如 `cssFloat`
* 属性值都是字符串，设置是必须包括单位
* `Element.style` 只包括行内样式，通过样式表或者继承的样式，无法获得，需通过 `window.getComputedStyle()` 方法获得所有 css 样式

### CSSStyleDeclaration 实例属性

| attribute | desc |
| --- | --- |
| CSSStyleDeclaration.cssText | 用来读写当前规则的所有样式声明文本，是一个字符串 |
| CSSStyleDeclaration.length | 返回一个整数值，表示当前规则含有多少条样式声明 |
| CSSStyleDeclaration.parentRule | 返回当前规则属于哪一个实例块（ CSSRule 实例），如果不存在所属的实例块，返回 `null` 只读 |

### CSSStyleDeclaration 实例方法

| method | desc |
| --- | --- |
| CSSStyleDeclaration.getPropertyPriority() | 接受 css 样式的属性名作为参数，表示该样式又没有设置 `important` 属性，有则返回 `important` ，没有返回空字符串 |
| CSSStyleDeclaration.getPropertyValue() | 接受 css 样式的属性名作为参数，返回该属性的属性值 |
| CSSStyleDeclaration.item() | 接受一个整数作为参数，返回第 n 个位置 css 属性的属性值 |
| CSSStyleDeclaration.removeProperty() | 移除某个属性，返回被移除的属性的属性值 |
| CSSStyleDeclaration.setProperty() | 设置某个属性的属性值，第一个参数是属性名，第二个参数是属性值，第三个参数是优先级 |

## CSS 模块的侦测

判断浏览器是否支持某个 css 属性

* typeof Element.style.propertyName 的值为 `string`，表示支持，如果不支持，会返回 `undefined`

## CSS 对象

浏览器原生提供 CSS 对象，为 JavaScript 提供方法操作 CSS，目前，该对象有两个静态方法

| method | desc |
| --- | --- |
| CSS.escape() | 转义 css 选择器里面的特殊字符，比如元素节点的 `id` 属性里面带有 `#` 字符 |
|CSS.supports() | 返回一个布尔值，表示当前环境是否支持某一条 CSS 规则，第一个参数是属性名，第二个参数为属性值 |

## 参考

[网道（WangDoc.com）是一个文档网站，提供互联网开发文档](https://wangdoc.com/javascript/dom/index.html)