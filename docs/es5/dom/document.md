# Document 节点

> 文档的根结点

获得途径

*`window.document`或`document`
* 内部节点的`ownerDocument`或`getRootNode()`
*`iframe`框架里面的网页，通过`iframe`节点的`contentDocument`属性获取

继承接口

* Node 接口
* EventTarget 接口
* ParentNode 接口

## 属性

### 快捷方式属性

| attribute                         | desc                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------- |
| document.defaultView              | `window`对象                                                                    |
| document.doctype                  | 文档类型节点                                                                    |
| document.documentElement          | 文档的根节点，一般是`<html>`节点                                                |
| document.body </br> document.head | `<body>`节点 </br> `<head>`节点                                                 |
| document.scorllingElement         | 文档的滚动元素，标准模式下返回`<html>`，兼容模式下返回`<body>`                  |
| document.activeElement            | 获得当前焦点 (focus) 的元素，通常是表单元素，如果没有，则返回`<body>`或者`null` |
| document.fullscreenElement        | 当前以全屏展示的元素，如果不是全屏状态，返回`null`                              |

### 节点集合属性

| attribute                              | desc                                                |
| -------------------------------------- | --------------------------------------------------- |
| document.links                         | 当前文档设置了`href`属性的`<a>`标签或者`<area>`标签 |
| document.forms                         | 当前文档素有的`<form>`                              |
| document.images                        | 当前文档的`<img>`                                   |
| document.scripts                       | 当前文档的`scripts`                                 |
| document.embeds </br> document.plugins | 当前文档的`<embed>`                                 |
| document.styleSheets                   | 当前文档嵌入或引入的样式表集合                      |

* 除了 document.styleSheets 外，其他节点集合都返回 HTMLCollection 实例

### 文档静态信息属性

| attribute                               | desc                                                                                                                        |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| document.documentURI </br> document.URL | 当前文档的网址                                                                                                              |
| document.domain                         | 当前文档的域名，不包括协议和端口                                                                                            |
| document.location                       | 浏览器原生 Location 对象，提供 URL 相关信息和操作方法                                                                       |
| document.title                          | `<title>`节点的值，可读写                                                                                                   |
| document.characterSet                   | 当前文档编码                                                                                                                |
| document.referrer                       | 表示文档访问者来自哪里，与请求头的`Referer`相等                                                                             |
| document.dir                            | 文档文字方向，`rtl`从右到左，`ltr`从左到右                                                                                  |
| document.compatMode                     | 浏览器处理文档的模式 </br> BackCompat 向后兼容 </br> CSS1Compat 严格模式 </br>`<!DOCTYPE html>`开头的文档都返回`CSS1Compat` |

### 文档状态属性

| attribute                | desc                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| document.hidden          | 当前页面是否可见，最小化或者切换 tab 后值为`true`                                                                                                           |
| document.visibilityState | 文档可见状态 </br>`visible`页面可见 </br>`hidden`页面不可见 </br>`prerender`渲染中 </br>`unloaded`页面从内存中卸载了                                        |
| document.readyState      | 返回当前文档的状态 </br>`loading`html 代码加载阶段 </br>`interctive`加载外部资源阶段 </br>`complete`加载完成 </br> 每次状态变化会触发`readystatechange`事件 |

### document.cookie

> 用于操作浏览器的 cookie

### document.designMode

> 控制文档是否可以编辑，`on`|`off`

### document.implementation

> 返回一个`DOMImplementation`对象，该对象可以创建新的 Document 对象

* DOMImplementation.createDocument() 创建一个 XML 文档
* DOMImplementation.createHTMLDocument() 创建一个 HTML 文档
* DOMImplementation.createDocumentType() 创建一个 DocumentType 对象

## 方法

### 文档打开关闭和写入

| method                                    | desc                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| document.open() </br> document.close()    | 清除当前文档打开的内容，是文档处理可写状态 </br> 关闭 document.open() 打开的文档                                                                                                                                                                                                                                                                  |
| document.write() </br> document.writeIn() | - 用于向当前文档写入内容 </br> - 页面在首次渲染阶段（执行 document.close() 之前），使用该方法写入的内容会被追加到文档尾部 </br> - 写入的文本会被当作 html 文档进行解析 </br> - 页面解析完成（DOMContentLoaded 事件执行）之后，调用`write()`会先调用`open()`，清除文档所有内容，再进行写入 </br> -`writeIn()`方法会在输出内容加上`ASCII`码的换行符 |

### 文档元素查找

| method                                                     | desc                                                                                                                                                                                 |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| document.querySelector() </br> document.querySelectorAll() | - 参数为 css 选择器，不支持伪元素和伪选择器 </br> - 可以在元素节点上调用 </br> -`querySelector()`返回第一个匹配节点，无则返回`null`</br> -`querySelectorAll()`返回一个`NodeList`集合 |
| document.getElementByTagName()                             | 匹配 html 标签名与参数字符串相等的节点，返回`HTMLCollection`集合，大小写不敏感                                                                                                       |
| document.getElementByClassName()                           | 匹配 class 与参数字符串相等的节点，返回`HTMLCollection`集合，大小写敏感                                                                                                              |
| document.getElementByName()                                | 匹配 name 值与参数字符串相等的节点，返回`NodeList`集合                                                                                                                               |
| document.getElementById()                                  | 匹配 id 与参数字符串相等的节点，返回匹配到的节点，没有返回`null`                                                                                                                     |

### 文档位置信息

| method                                                         | desc                                                           |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| document.elementFromPoint() </br> document.elementsFromPoint() | 选择指定坐标位置最上层的元素节点和元素节点集合                 |
| document.caretPositionFromPoint()                              | 返回 CaretPosiont 对象，包含指定坐标点在节点对象内部的位置信息 |

### 文档节点创建

| method                          | desc                                                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| document.createElement()        | 创建元素节点                                                                                                                                                 |
| document.createTextNode()       | 创建文本类型节点                                                                                                                                             |
| document.createAttribute()      | 创建属性类型节点                                                                                                                                             |
| document.createComment()        | 创建注释节点                                                                                                                                                 |
| document.createDocumentFragment | - 创建空的文档片段对象 </br> - DocumentFragment 是一段存在与内存中的 DOM 片段，在进行比较复杂的 DOM 操作的时候，可以利用 DocumentFragment 来实现可以提升效率 |

### 文档事件

 | method                                                                                          | desc                                                                                        |
 | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
 | document.createEvent()                                                                          | 生成一个事件对象 (Event 实例) ，该对象可以被`element.dispatchEvent()`方法使用，触发指定事件 |
 | document.addEventListener() </br> document.removeEventListener() </br> document.dispatchEvent() | 都继承`EventTarget`接口，处理`document`节点的事件                                           |

### 其他方法

 | method                                                                                           | desc                                                                                                                                                                                                                                                                                                                                                                                                              |
 | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | document.hasFocus()                                                                              | 当前文档中是否有元素激活或者获得焦点                                                                                                                                                                                                                                                                                                                                                                              |
 | document.adoptNode() </br> document.importNode()                                                 | -`adoptNode(node)`将节点从原来的文档中移除，归属当前文档，`parentNode`属性为`null`</br> -`importNode(node, flag)`与`adoptNode()`作用一样，`importNode`是将节点对象拷贝后归属当前文档，flag 布尔值表示是否深拷贝                                                                                                                                                                                                   |
 | document.createNodeIterator()                                                                    | - 返回一个子节点遍历器，接受两个参数，第一个参数为所遍历的根结点，第二个参数为所要遍历的节点类型 </br> - 遍历的节点类型 有四个选择 </br> - 所有节点:`NodeFilter.SHOW_ALL`</br> - 元素节点:`NodeFilter.SHOW_ELEMENT`</br> - 文本节点:`NodeFilter.SHOW_TEXT`</br> - 评论节点:`NodeFilter.SHOW_COMMENT`</br> - 通过遍历器的`nextNode()`和`previousNode()`方法可以进行遍历 </br> - 遍历器返回的第一个节点，总是根节点 |
 | document.createTreeWalker()                                                                      | 返回一个 DOM 的子树遍历器，与`createNodeIterator()`类似，只不过返回的是`TreeWalker`实例，另外，它的第一个节点不是根节点，用来遍历元素节点                                                                                                                                                                                                                                                                         |
 | document.execCommand() </br> document.queryCommandSupport() </br> document.queryCommandEnabled() | -`document.designMode`的值设为`on`，那么整个文档可编辑 </br> - 元素的`contenteditable`属性设为`on`，属性可编辑 </br> - 上面两种情况可以使用`document.execCommand()`                                                                                                                                                                                                                                               |
 | document.getSelection()                                                                          | 和`document.getSelection()`相同                                                                                                                                                                                                                                                                                                                                                                                   |