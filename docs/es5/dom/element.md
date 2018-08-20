# Element 节点

Element 对象继承了 Node 接口，不同的 html 元素对应的元素节点不一样，浏览器使用不同的构造函数，所以元素节点除了继承 Element 对象的属性和方法外，还继承各自构造函数的属性和方法

## 实例属性

### 元素特性相关属性

| attribute | desc |
| --- | --- |
| Element.id | 元素的 id 属性，可以读写，大小写敏感 |
| Element.accessKey | 读写分配给当前元素的快捷键 |
| Element.draggable | 当前元素是否可拖动，可读写 |
| Element.lang | 读写元素的语言设置 |
| Element.tabIndex | 返回一个整数，当前元素在 tab 键遍历时的顺序，可读写 |
| Element.title | 读写当前元素的 title 属性 |

### 元素状态相关属性

| attribute | desc |
| --- | --- |
| Element.hidden | 控制当前元素是否可见，与 css 属性时相互独立的，css 的优先级高于 `Element.hidden` |
| Element.contentEditable </br> Element.isContentEditable | - html 元素可设置 `contentEditable` 属性，使得元素的内容可编辑 </br> - `Element.contentEditable` 返回元素可编辑状态，`true`,`false`,`inherit` </br> - `Element.sContentEditable` 返回当前元素是否设置了 `contentEditable` 属性，只读 |

### Element.attributes

返回一个类似数组对象，当前元素所有的属性节点

### class 相关

| attribute | desc |
| --- | --- |
| Element.className | 读写当前元素的 `class` 属性，值是一个字符串，多个 `class` 之间用空格隔开 |
| Element.classList | - 返回 `array-like-object` ，每个 `class` 为这个对象的成员，对象提供下列方法操作元素的 `class` </br> - add() </br> - remove() </br> - contains() </br> - toggle() 将某个 class 移入或移除当前元素，接受一个布尔值作为第二个参数，`true` 表示添加， `false` 表示移除 </br> - item() </br> - toString() 结果和 `className` 一样

### Element.dataset

* 网页元素可以自定义 `date-` 属性，来添加数据
* `Element.dataset` 属性返回一个对象，可以从这个对象读写 `data-` 属性
* `data-` 属性的属性名只能包括英文字母，数字，连线 `-`，下划线 `_`，冒号 `:`，点 `.`，他们转化成对应的 `Element.dataset` 属性，规则如下
  
  1. 开头的 `data-` 省略掉
  2. 如果连线后面跟了一个英文字母，连线去掉，字母变成大写
  3. 其他不变

### Element.innerHTML

* 读写该元素内部所有 html 代码
* 可以生成 `<script>` 标签，但是不会执行脚本
* 如果插入文本，建议使用 `Element.textContent`

### Element.outerHTML

* 读写包括该元素在内的 html 代码
* 如果元素没有父节点，使用 outerHTML 会报错

### Element 位置

* clientHeight, offsetHeight, scrollHeight

![](https://i.stack.imgur.com/NANud.png) ![](https://i.stack.imgur.com/RFxSh.png)

| attribute | desc |
| --- | --- |
| Element.clientHeight | - 返回一个整数，表示元素的 css 高度，只对块级元素生效，行内元素为 0，包括 `padding` ，不包括 `marign`, `border` ，如果没有设置 css 高度，则返回元素的实际高度 </br> - `document.documentElement.clientHeight` 返回当前视图的高度，不包括水平滚动条， 等同于 `window.innerHeight` 减去水平滚动条的高度 |
| Element.clientWidth | 同 `Element.clientHeight` ，返回元素的实际宽度，只对块级元素生效 |
| Element.clientLeft </br> Element.clientTop | 返回一个整数，表示元素左边框和顶部边框的宽度（单位像素），如果没有设置或者元素为行内元素，返回 0 |
| Element.scrollHeight </br> Element.scrollTop | 当前元素总高度，包括溢出、不可见部分，只读 </br> 当前元素总宽度，包括溢出、不可见部分，只读 |
| Element.scrollLeft </br> Element.scrollTop | 当前元素水平滚动条向右滚动的像素，可读写 </br> 当前元素垂直滚动条向下滚动的像素，可读写 |
| Element.offsetParent | 只读属性，返回一个指向最近的（closest ，指包含层级上的最近）包含该元素的定位元素，当元素 css 的 `display` 设置为 `none` 时，`offsetParent` 属性为 `null` |
| Element.offsetHeight </br> Element.offsetWidth | 返回一个整数，表示元素 css 的垂直高度（单位像素），包括元素本身的高度， `padding`, `border`, 以及水平滚动条的高度，只读 </br> 返回一个整数，表示元素 css 水平宽度（单位像素），其他和 `Element.offsetHeight` 一致 |
| Element.offsetLeft </br> Element.offsetTop | 返回当前元素左上角相对于 `offsetParent` 元素节点的水平位移和垂直位移 |

### Element.style

每个元素节点都有 style 属性来描述元素的行内样式信息

### 元素之间的关系

| attribute | desc |
| --- | --- |
| Element.children </br> Element.childElementCount </br> Element.firstElementChild() </br> Element.lastElementChild |  ParentNode.prototype.children() </br> ParentNode.prototype.childElementCount() </br> ParentNode.ptorotype.firstElementChild </br> ParentNode.prototype.lastElementChild | 
| Element.nextElementSibling </br> Element.previousElementSibling | 下一个同级元素 </br> 上一个同级元素 |

## 实例方法

### 属性相关

* getAttribute() 读取某个属性
* getAttributeNames() 返回当前元素所有属性名
* setAttribute() 写入属性值
* hasAttribute() 某个属性是否存在
* hasAttributes() 当前元素是否有属性
* removeAttribute() 移除某个属性

### 查询节点

| method | desc |
| --- | --- |
| Element.querySelector() | 接受 css 选择器作为参数，返回父元素第一个匹配的子元素 |
| Element.querySelectorAll() | 接受 css 选择器作为参数，返回一个 `NodeList` 实例 |
| Element.getElementsByClassName() | 返回一个 `HTMLCollection` 实例，成员是当前元素节点的所有具有指定 class 的子元素节点，大小写敏感 |
| Element.getElementsByTagName | 返回一个 `HTMLCollection` 实力，成员是当前元素节点的所有标签名匹配的子元素节点，大小写不敏感 |
| Element.closest() | 接受 css 选择器作为参数，返回匹配该选择器的，最接近当前节点的祖先节点 |
| Element.matches() | 接受 css 选择器作为参数，返回一个布尔值，表示当前元素是否匹配该选择器 |

### 事件相关方法

* Element.addEventListener() 添加事件监听
* Element.removeEventListener() 移除事件监听
* Element.dispatchEvent() 派送事件

### Element.scrollIntoVeiw()

滚动当前元素，进入浏览器的可见区域

### Element.getBoundingClientRect()

返回一个对象，提供当前元素的大小，位置，基本上是 css 盒装模型的所有信息，返回的对象具有以下属性：

* x: 元素左上角相对于视口的横坐标
* y: 元素左上角相对于视口的纵坐标
* height: 元素的高度，包括 `padding` + `border`
* width: 元素的宽度，包括 `padding` + `border`
* left: x 属性
* right: x + width
* top: y
* bottom: y + height

### Element.getClientRects()

* 返回一个类似数组的对象，成员是该元素在页面上所有的矩形，每个矩形都具有 `left`, `right`, `top`, `bottom`, `height`, `width` 六个属性
* 对于盒装元素，例如 `<div>`, `p` ，该方法返回的对象中只有该元素一个成员
* 对于行内元素 `<span>`, `<a>`, `<em>` ，文本在页面上占多少行就形成多少个矩形，这是和 `Element.getBoundingClientRect()` 的主要区别

### Element.insertAdjacentElement()

接受两个参数，第一个是字符串，表示插入的位置，第二个待插入的节点，帝一个参数可以读取以下值：

* beforebegin: 当前元素之前
* afterbegin: 当前元素内部的第一个子节点前
* beforeend: 当前元素之后
* afterend: 当前元素最后一个子节点之后

### Element.insertAdjacentHTML, Element.insertAdjacentText

与 `Element.insertAdjacentElement()` 类似，只是插入的内容有区别，`Element.insertAdjacentHTML` 插入的 html 不会被转义

### 其他

| method | desc |
| --- | --- |
| Element.remove() | 继承至 `ChildNode.remove()`，用法一样 |
| Element.focus() </br> Element.blur() | 将页面的焦点转移至元素上 </br> 将焦点从元素上移除 |
| Eliment.click() | 在该元素上模拟一次鼠标点击，触发 click 事件 |







## 参考

[网道（WangDoc.com）是一个文档网站，提供互联网开发文档](https://wangdoc.com/javascript/dom/element.html)
