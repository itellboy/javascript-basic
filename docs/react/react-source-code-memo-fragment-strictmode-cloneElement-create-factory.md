# React 源码阅读 ── memo、Fragment、StrictMode、cloneElement、createFactory

## 1. memo

用于函数式组件，相当于类组件的`PureComponent`，当组件的`props`未发生变化时，不执行`render()`方法

```javascript
import {REACT_MEMO_TYPE} from 'shared/ReactSymbols';

import isValidElementType from 'shared/isValidElementType';
import warningWithoutStack from 'shared/warningWithoutStack';

export default function memo<Props>(
  type: React$ElementType,
  compare?: (oldProps: Props, newProps: Props) => boolean,
) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: compare === undefined ? null : compare,
  };
}
```

## 2. Fragment

React Symbol 组件，React 要求`render()`函数只能返回一个节点，当我们需要返回多个节点的时候，可以使用`<Fragment></Fragment>`进行，包裹，这样可以减少`<div></div>`节点的渲染

```javascript
const React = {
    Fragment: REACT_FRAGMENT_TYPE,
}
```

## 3. StrictMode

React Symbol 组件，子节点如果使用了即将废弃的 API，则会在控制台进行警告

```javascript
const React = {
  StrictMode: REACT_STRICT_MODE_TYPE,
}
```

## 4. cloneElement

克隆 Element 节点，过程跟`createElement()`过程差不多

## 5. createFactory

对`createElement()`方法的封装

```javascript
// ReactElement.js
export function createFactory(type) {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
}
```