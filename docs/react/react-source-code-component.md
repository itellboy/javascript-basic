# React 源码阅读 ── Component()

```javascript
// React.js
import {Component, PureComponent} from './ReactBaseClasses';

// ReactBaseClasses
function Component(props, context, updater) { }
function PureComponent(props, context, updater) { }
```

`Component`和`PureComponent`两个基础 class 定义在 ReactBaseClasses.js中，实现也比较简单

## 1. Component

```javascript
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // 初始化 updater，一般通过渲染函数注入
  this.updater = updater || ReactNoopUpdateQueue;
}
```

在 ReactBaseClasses.js 中，定义了一个 Component 构造函数，将 props 和 context 作为构造函数的属性，后续的更新主要通过 updater 去实现，因为端的差异性，每个端的 updater 由每个端自己实现


```javascript
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(partialState, callback) {
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
```

定义构造函数之后，在`Component`构造函数的原型定义了一些方法

* `isReactComponent`：空对象
* `setState`：最常用的 API，用于`Component`的状态改变，具体由`updater`对象上的`enqueueSetState`属性实现
* `forceUpdate`：强制更新，具体由`updater`对象上面的`enqueueForceUpdate`属性实现

## 2. PureComponent

```javascript
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
```

在定义`PureComponent`之前，定义了一个虚拟的`ComponentDummy`构造函数，原型指向`Component`的原型对象

```javascript
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
```

`PureComponent`的定义和`Component`定义处理完全一样

```javascript
const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;
```

* 继承`Component`原型上的属性
* 在`PureComponent`的原型加上`isPureReactComponent`属性，值为`true`