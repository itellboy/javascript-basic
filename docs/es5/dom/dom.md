# DOM

> JavaScript 操作网页的接口，全称 Document Object Model(文档对象模型)，JavaScript 可以通过 DOM 接口操作网页，

## 节点

> DOM 的最小组成单位，有七种类型的节点

| node | desc |
| --- | --- |
| Document | 文档树的顶层节点 |
| DocumentType |`doctype`标签，比如`<!DOCTYPE html>`|
| Element | 网页的各种 HTML 标签 |
| Attribute | 标签的属性 |
| Text | 标签之间或者标签内部的文本 |
| Comment | 文档的注释 |
| DocumentFragment | 文档的片段 |

浏览器提供了一个原生的`Node`对象，上面的节点都继承了该对象，因此具有一些共同的属性和方法

## 节点树

* 浏览器原生提供`document`对象，代表整个文档，文档的第一层只有一个`<html>`标签，作为文档的根结点(root node)，其他的 html 标签都作为它的子节点

出了根节点外，其他节点互相可以形成三种关系

1. 父节点关系 (ParentNode): 上一级节点
2. 子节点关系 (ChildNodes): 下一级节点
3. 同级节点关系 （sibling）: 同级节点

DOM 提供操作接口，用来获取三种关系的节点，子节点包括`firstChild(第一个字节点)`,`lastChild(最后一个字节点)`,`nextSibling(下一个同级节点)`,`previousSibling(上一个同级节点)`

## Node 接口

> 所有的 DOM 节点对象都继承了 Node 接口

### 属性

#### Node.prototype.nodeType

> 返回一个整数值，表示节点的类型，Node 对象定义了一些常量表示

| nodeType | number | constant |
| --- | --- | --- |
| document | 9 | Node.DOCUMENT_NODE |
| element | 1 | Node.ELEMENT_NODE |
| attribute | 2 | Node.ATTRIBUTE_NODE |
| text | 3 | Node.TEXT_NODE |
| DocumentType | 10 | Node.DOCUMENT\_TYPE\_NODE |
| Comment | 8 | Node.COMMENT_NODE |
| DocuemntFragment | 11 | NODE.DOCUMENT\_FRAGMENT\_NODE |

#### Node.prototype.nodeName

> 返回节点的名称

| nodeType | return |
| --- | --- |
| document |`#document`|
| element | 大写的标签名 |
| attribute | 大写的属性名 |
| text |`#text`|
| DocumentType | 文档类型，例如`html`|
| Comment | #comemnt |
| DocuemntFragment |`#document-fragment`|

#### Node.prototype.nodeValue

> 返回当前节点本身的文本值，只有 text 和 comment 节点才会有值返回，其他节点该属性返回结果为`null`，可读写

```javascript
// <div id="node"> text </div>

docuemnt.getElementById('node').nodeValue // null
docuemnt.getElementById('node').firstChild.nodeValue // text
```

#### Node.prototype.textContent

> 返回当前节点和所有子节点的所有文本内容，不包括 comment 节点，可读写

* document 和 documentType 类型的节点的 textContent 值为`null`，要读取整个文档，使用`document.documentElement.textContent`

#### Node.prototype.baseURI

> 返回一个当前网页绝对路径的 URI，只读

可以通过`<base>`标签改变当前网页的 baseURI 属性

#### Node.prototype.ownerDocument

> 返回当前网页顶层的 document 对象

#### Node.prototype.nextSibling

> 返回紧跟在当前节点后面的节点，没有返回`null`

* 如果节点后面是一个空格，则返回一个内容为一个空格的文本节点
* 如果节点后面是注释，则返回注释节点

#### Node.prototype.previousSibling

> 同上，返回紧跟当前节点前面的节点

#### Node.prototype.parentNode

> 返回当前节点的父节点，只可能是 document 节点，element 节点 documentFragment 节点

#### Node.prototype.parentElement

> 返回当前节点的父元素节点，如果当前节点不是节点或者父节点不是元素节点，则返回`null`

#### Node.prototype.firstChild, Node.prototype.lastChild

> 返回当前节点的子节点，包括文本节点和注释节点，没有则返回`null`

#### Node.prototype.childNodes

> 返回一个类似数组的对象（`nodeList`集合），包括当前节点所有子节点集合，包括注释节点和文本节点

#### Node.prototype.isConented

> 返回一个布尔值，表示该节点是否在文档中

### 方法

#### Node.prototyoe.appendChild()

> 接受一个节点对象作为参数，表示将该参数节点作为当前节点的最后一个子节点插入，返回插入的节点对象

#### Node.hasChildNodes()

> 返回一个布尔值，表示当前节点是否有子节点

```javascript
// 判断一个节点是否有子节点的三种方法
node.hasChildNodes();
node.firstChild !== null;
node.ChildNodes && node.ChildNodes.length > 0;
```
#### Node.prototype.cloneNode()

> 克隆一个节点，接受一个布尔值作为参数，表示是否克隆其子节点，返回克隆出来的新节点

* 克隆一个节点会拷贝该节点的所有属性，但是会丧失`addEventListener`方法和`on-`属性，添加在这个节点上的事件回调属性
* 该方法返回的节点对象不在文档中
* 须修改返回节点对象的`id`属性和`name`属性，避免被插入文档之后，文档中出现多个具有相同`id`或者`name`属性的节点

#### Node.prototype.insertBefore()

> 接受两个参数，第一个为待插入节点，第二个为父节点内部的一个子节点，表示将第一个节点插入第二个参数节点的前面

* 如果第二个参数为`null`，则将节点插入节点的最后一个节点

#### Node.prototype.removeChild()

> 接受节点的一个子节点作为参数，将子节点从该节点内部移除

#### Node.prototype.replaceChild()

> 用一个新节点，替换当前节点的某一个子节点

#### Node.prototype.contains()

> 返回一个布尔值，传入一个参数节点，表示该参数节点是否为当前节点或者为当前节点的子节点或者当前节点的后代节点

#### Node.prototype.compareDocumentPosition()

> 用法与`contains()`一直，返回一个七个比特为的二进制值，表示参数节点与当前节点的关系

| binary | decimal | meaning |
| --- | --- | --- |
| 0000000 | 0 | 两个节点相同 |
| 0000001 | 1 | 两个节点不在同一个文档中 |
| 0000010 | 2 | 参数节点在该节点的前面 |
| 0000100 | 4 | 参数节点在该节点的后面 |
| 0001000 | 8 | 参数节点包含该节点 |
| 0010000 | 16 | 该节点包含参数节点 |
| 0100000 | 32 | 浏览器内部使用 |

#### Node.prototype.isEqualNode(), Node.prototype.isSameNode()

*`isEqualNode()`判断两个节点是否相等，包括类型相等，属性相等，子节点相同
*`isSameNode()`判断两个节点是否为同一个节点

#### node.prototype.normallize()

> 清理当前节点内部所有文本节点，去除内容为空的文本节点，将内容不为空的毗邻的文本节点合并成一个文本节点

#### Node.prototype.getRootNode()

> 返回文档的根结点

## NodeList 接口，HTMLCollection 接口

> 容纳多个节点的数据结构

### NodeList 接口

> 一个类似数组的对象，包括多个 Node 节点

获得途径

* Node.prototype.ChildNodes
* document.querySelectorAll(), document.getDocumentByTagName() 等节点搜索方法

属性

* length

方法

* forEach()
* item()
* keys(), value(), entries()

### HTMLCollection 接口

> 元素节点的集合，没有`forEach()`方法

获得途径：`document`对象上的集合属性

* document.links
* document.images
* document.forms
* ...

属性

* length

方法

* item()
* nameItem() 参数是一个字符串，查找`id`或`name`属性为参数字符串的元素节点

## ParentNode接口，ChildNode接口

节点对象出了继承 Node 接口之外，还会继承其他接口

* ParentNode 表示当前节点是一个父节点，提供一些处理子节点的方法
* ChildNode 表示当前节点是一个子节点

### ParentNode 接口

> 如果当前节点是父节点，就会继承 ParentNode 接口

属性&方法

| attribute&method | desc |
| --- | --- |
| ParentNode.prototype.children | 返回一个 HTMLCollection 实例，所有子元素节点集合，只读 |
| ParentNode.prototype.firstElementChild </br> ParentNode.prototype.lastElementChild | 返回当前节点的第一个元素节点 </br> 返回当前节点最后一个元素节点 </br> 没有则返回`null`|
| ParentNode.childElementCount | 返回子元素节点的个数 </br> 等同于 ParentNode.prototype.children.length |
| ParentNode.prototype.append() </br> ParentNode.prototype.prepend() | 将参数节点作为最后一个子元素节点插入 </br> 将参数节点作为第一个元素节点插入 </br> 没有返回值 |

### ChildNode 接口

> 如果一个节点有父节点，则该节点继承 ChildNode 接口

方法

| method | desc |
| --- | --- |
| ChildNode.prototype.remove() | 从父节点移除该节点 |
| ChildNode.prototype.before() </br> ChildNode.prototype.after() | 在当前节点前面插入参数节点 </br> 在当前节点后面插入参数节点 |
| ChildNode.prototype.replacewith() | 用参数节点替换当前节点 |

## 参考

[https://wangdoc.com/javascript/dom/general.html](https://wangdoc.com/javascript/dom/general.html)
