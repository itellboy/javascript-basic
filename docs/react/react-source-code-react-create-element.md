# React 源码阅读 ── React.createElement()

`React.createElement()`是在使用 React 过程中是的的最多，也是最基础的的一个 API

```javascript
// ReactElement.js
export function createElement(type, config, children) {
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}

// React.js
import {
  createElement,
  createFactory,
  cloneElement,
  isValidElement,
} from './ReactElement';
```

## 1. JSX 到 JavaScript 的转换

```javascript
// JSX
<div id="element" style={{borderColor: 'red'}}>
  <span>abc</span>
  <span>abc</span>
</div>

// JavaScript
"use strict";

React.createElement(
  "div",
  { id: "element", style: { borderColor: 'red' } },
  React.createElement(
    "span",
    null,
    "abc"
  ),
  React.createElement(
    "span",
    null,
    "abc"
  )
);
```

JSX 转化为 JavaScript 实现都是通过`React.createElement()`这个方法去实现的，该方法的参数可变，第一个参数为 HTML 标签名称字符串或者 React 组件，第二个参数为组件的属性，后面的参数为组件的子节点

## 2. 属性处理

```javascript
let propName;
const props = {};

if (config != null) {
  if (hasValidRef(config)) {
    ref = config.ref;
  }
  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  self = config.__self === undefined ? null : config.__self;
  source = config.__source === undefined ? null : config.__source;
  // 将属性保存到新的 props 对象
  for (propName in config) {
    if (
      hasOwnProperty.call(config, propName) &&
      !RESERVED_PROPS.hasOwnProperty(propName)
    ) {
      props[propName] = config[propName];
    }
  }
}
```

将属性提取出来保存到组件的`props`变量

## 3. 子节点处理

```javascript
const childrenLength = arguments.length - 2;
if (childrenLength === 1) {
  props.children = children;
} else if (childrenLength > 1) {
  const childArray = Array(childrenLength);
  for (let i = 0; i < childrenLength; i++) {
    childArray[i] = arguments[i + 2];
  }
  props.children = childArray;
}
```

将前两个参数之外的参数赋值给`props`对象的`children`属性

## 4. 默认属性处理

```javascript
// 将 React 组件的默认属性保存在 props 对象里面
if (type && type.defaultProps) {
  const defaultProps = type.defaultProps;
  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }
}
```

## 5. ReactElement()

```javascript
const ReactElement = function(type, key, ref, self, source, owner, props) {}
```

`React.createElement()`会包装好`ReactElement()`方法需要的参数，返回`ReactElement()`方法的执行结果

```javascript
const element = {
  // 内置 React 组件类型
  $$typeof: REACT_ELEMENT_TYPE,

  // React 组件所具有的属性
  type: type,
  key: key,
  ref: ref,
  props: props,

  // Record the component responsible for creating this element.
  _owner: owner,
}
return element;
```