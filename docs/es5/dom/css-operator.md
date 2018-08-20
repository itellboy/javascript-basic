# CSS 操作

* CSS 负责页面的视觉效果
* JavaScript 负责用户的行为互动

## HTML 元素的 style 属性

通过 HTML 元素操作属性的方法可以直接读写 style 属性

```javascript
document.getElementById('id').setAttribute('style', 'background-color: #fff;')
```

HTML 元素的 style 属性不仅可以当作一个字符串进行读写，还是一个对象，实现了 CSSStyleDeclaration 接口，可以通过 css 键名来读写属性，例如`div.style.fontSize = '14px'`

## CSSStyleDelaration 接口

CSSStyleDeclaration 接口用来操作元素的样式，下面三个地方实现了这个接口

* 元素节点的`style`属性
* `CSSStyle`实例的`style`属性
* `window.getComputedStyle()`的返回值，参数为元素节点

CSSStyleDeclaration 接口可以直接读写 css 的样式属性，属性和 css 规则一一对应，

* 将横杠从 css 属性名中移除，将横杠后的第一个字母大写
* 如果属性为 JavaScript 保留字规则名之前需加上`css`，例如`cssFloat`
* 属性值都是字符串，设置是必须包括单位
* `Element.style`只包括行内样式，通过样式表或者继承的样式，无法获得，需通过`window.getComputedStyle()`方法获得所有 css 样式

### CSSStyleDeclaration 实例属性

| attribute                      | desc                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| CSSStyleDeclaration.cssText    | 用来读写当前规则的所有样式声明文本，是一个字符串                                      |
| CSSStyleDeclaration.length     | 返回一个整数值，表示当前规则含有多少条样式声明                                        |
| CSSStyleDeclaration.parentRule | 返回当前规则属于哪一个实例块（ CSSRule 实例），如果不存在所属的实例块，返回`null`只读 |

### CSSStyleDeclaration 实例方法

| method                                    | desc                                                                                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| CSSStyleDeclaration.getPropertyPriority() | 接受 css 样式的属性名作为参数，表示该样式又没有设置`important`属性，有则返回`important`，没有返回空字符串 |
| CSSStyleDeclaration.getPropertyValue()    | 接受 css 样式的属性名作为参数，返回该属性的属性值                                                          |
| CSSStyleDeclaration.item()                | 接受一个整数作为参数，返回第 n 个位置 css 属性的属性值                                                     |
| CSSStyleDeclaration.removeProperty()      | 移除某个属性，返回被移除的属性的属性值                                                                     |
| CSSStyleDeclaration.setProperty()         | 设置某个属性的属性值，第一个参数是属性名，第二个参数是属性值，第三个参数是优先级                           |

## CSS 模块的侦测

判断浏览器是否支持某个 css 属性

* typeof Element.style.propertyName 的值为`string`，表示支持，如果不支持，会返回`undefined`

## CSS 对象

浏览器原生提供 CSS 对象，为 JavaScript 提供方法操作 CSS，目前，该对象有两个静态方法

| method         | desc                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------- |
| CSS.escape()   | 转义 css 选择器里面的特殊字符，比如元素节点的`id`属性里面带有`#`字符                        |
| CSS.supports() | 返回一个布尔值，表示当前环境是否支持某一条 CSS 规则，第一个参数是属性名，第二个参数为属性值 |

## Window.getComputedStyle()

* 接受一个元素节点作为第一哥参数，返回元素经过浏览器计算后的到的最终样式规则，也就是各种 css 叠加后的结果
* 可以传入第二个参数，表示当前元素的伪元素，比如`:before`,`:after`,`:first-line`,`first-letter`
* CSSStyleDelaration 实例返回的 css 值都是绝对单位，比如，长度是像素单位，返回值包括`px`后缀，颜色是`rgba(#,#,#,#)`
* 该方法返回的 CSSStyledeclaration 实例没有`cssText`属性，返回`undefined`

## CSS 伪元素

* CSS 伪元素是通过 css 向 DOM 添加的元素，主要是通过`:before`和`:after`选择器生成，内容通过`content`指定
* 无法通过元素的`style`属性获取伪元素，只能通过`window.getComputedStyle()`方法传入第二个伪元素选择器来获取元素的伪元素的属性

## StyleSheet 接口

* `StyleSheet`接口表示一张网页的样式表，包括通过`<link>`加载的样式表和`<style>`内嵌的样式表
* `document.styleSheets` 属性返回整个页面所有的样式表，返回一个`array-like-obj`，成员是每一个`StyleSheets`实例
* 如果是`<style>`引入的内嵌样式，可以通过元素的`sheet`属性来获取`StyleSheets`接口
* CSSStyleSheet 接口继承了 StyleSheet 接口的属性

### 实例属性

| attribute                   | desc                                                                                                                                                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| StyleSheet.disabled         | 设置样式表的禁用状态                                                                                                                                                                                                                                            |
| StyleSheet.href             | 返回样式表的网址，如果是内嵌样式，返回`null`，只读                                                                                                                                                                                                              |
| StyleSheet.title            | 返回样式表的`title`属性                                                                                                                                                                                                                                         |
| StyleSheet.type             | 返回样式表的类型，通常是`text/css`                                                                                                                                                                                                                              |
| StyleSheet.parentStyleSheet | CSS 的`@import`命令允许在样式表中加载其他样式表，返回包含当前样式表的样式表                                                                                                                                                                                     |
| StyleSheet.media            | 返回一个类似数组的对象（`MediaList`实例），成员是表示适用媒介的字符串，只读 </br> - 打印：`print` </br> - 屏幕：`screen`</br> - 手持设备：`handheld` </br> - 所有：`all`</br>`MediaList` 实例的`appendMedia()`方法用于增加媒介，`deleteMedia()`方法用于删除媒介 |
| StyleSheet.ownerNode        | 返回`StyleSheet`实例对象所在的 DOM 节点，通常是`<style>`或者`<link>`                                                                                                                                                                                            |
| CSSStyleSheet.cssRules      | 指向一个`CSSRuleList`实例，里面的每个成员都是当前的一条 CSS 规则 </br> - 使用该规则的`cssText`属性，可以的到当前 CSS 规则对应的字符串表达形式 </br> - 使用改规则的`style`属性，指向一个对象，用来读写具体的 CSS 命令                                            |
| CSSStyleSheet.ownerRule     | 有些样式表是通过`@import`引入的，他得`ownerRule`属性会返回一个`CSSRule`实例，代表那行`@import` 规则，如果当前样式表不是通过`@import`引入的，则返回`null`                                                                                                       |

### 实例方法

| method                     | desc                                                                                                                                                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSSStyleSheet.insertRule() | 插入一条新的 CSS 规则，接受两个参数 </br> - 第一个参数是表示 CSS 规则的字符串，只能有一条规则，否则报错 </br> - 第二个参数是插入的位置，默认为 0 </br> - 浏览器对于用脚本插入样式规则有许多的限制，最好使用`try...catch`块对错误进行捕获 |
| CSSStyleSheet.deleteRule() | 用来删除一条规则，参数为整数，表示规则在 CSSRules 实例里面的位置                                                                                                                                                                         |

## 添加样式表

网页添加样式表有两种方式：

1. 添加一张内置样式表，也就是添加一个`<style>`节点
2. 添加一个`<link>`节点，并设置该节点的`href`属性

## CSSRuleList 接口

CSSRuleList 接口是一个`array-like-obj`，成员是 CSSRule 实实例， 一般通过`CSSStyleSheet.cssRules`属性获得

### CSSRule 接口

一条 CSS 规则包括两个部分： CSS 选择器和样式声明，JavaScript 通过`CSSRule`接口来读取一条 CSS 规则

### CSSRule 实例属性

| attribute                | desc                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| CSSRule.cssText          | 返回当前规则的文本，如果是`@import`加载的样式，则返回`@import'url'`                                                  |
| CSSRule.parentStyleSheet | 返回当前规则所在的样式表对象`CSSStyleSheet`接口实例                                                                  |
| CSSRule.parentRule       | 返回包括当前规则的父规则，如果不存在父规则，则返回`null`                                                             |
| CSSRule.style            | 返回规则的类型 </br> - 1 : 普通样式规则 </br> - 3 : @import 规则 </br> - 4 : @media 规则 </br> \- 5 : font-face 规则 |

### CSSStyleRule 接口

如果 CSS 规则是一条普通的 CSS 样式规则（不包含特殊的 CSS 命令），那么除了实现 CSSRule 接口之外，还实现了 CSSStyleRule 接口，接口实例具有下面两个属性

* CSSStyleRule.selectorText 返回当前规则的选择器字符串
* CSSStyleRule.style 返回一个 CSSStyleDeclaration 实例

### CSSMediaRule 接口

如果 CSS 是`@media`代码块，除了实现了 CSSRule 接口，还实现了 CSSMediaRule 接口，有两个属性

* CSSMediaRule.media 返回代表`@media`规则的一个对象（ MediaList 实例）
* CSSMediaRule.conditionText 返回`@media`规则的生效条件

## window.matchMedia()

用来将 CSS 的`MediaQuery`条件语句，转换成`MediaQueryList`实例

### 实例属性

| attribute               | desc                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MediaQueryList.media    | 返回一个字符串，表示对应的 MediaQuery 条件语句                                                                                                                                                                                             |
| MediaQueryList.matches  | 返回一个布尔值，表示当前页面是否符合指定的 MediaQuery 条件语句                                                                                                                                                                             |
| MediaQueryList.onchange | 如果 MediaQuery 条件语句的适配环境发生变化，会出发`change`事件，MediaQueryList.onchange 用来指定`change`事件监听的函数，该函数的参数是`change`事件的对象（MediaQueryListEvent 实例），与 MediaQueryList 相似，也有`media`和`matches`属性 |

### 实例方法

MediaQueryList.addListener() 和 MediaQueryList.removeListener() 用来为`change`事件添加或移除监听函数


## 参考

[网道（WangDoc.com）是一个文档网站，提供互联网开发文档](https://wangdoc.com/javascript/dom/index.html)