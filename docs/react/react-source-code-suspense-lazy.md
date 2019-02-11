# React 源码阅读 ── Suspense & lazy

## 1. Suspense

```javascript
const React = {
  Suspense: REACT_SUSPENSE_TYPE,
}
```

Suspense 是一个 React 常量

## 2. lazy

```javascript
// ReactLazy.js
import type {LazyComponent, Thenable} from 'shared/ReactLazyComponent';

import {REACT_LAZY_TYPE} from 'shared/ReactSymbols';
import warning from 'shared/warning';

export function lazy<T, R>(ctor: () => Thenable<T, R>): LazyComponent<T> {
  let lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // 使用下列变量存储结果
    _status: -1,
    _result: null,
  };

  return lazyType;
}
```

暴露一个`lazy()`方法，参数是一个匿名函数，该匿名函数是一个状态可变函数