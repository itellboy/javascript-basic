# Redux Start

Redux 数据流

<img src="https://blog.gisspan.com/img/redux.gif" width="300">

## 核心 API

* `createStore()`：创建一个 store
* `store.getState()`：获得存储在 store 里面的 state
* `store.subscribe()`：订阅 store 的改变
* `store.dispatch()`：向 store 派发一个 action

## Redux 中间件

* Redux Thunk 中间件实际上就是对`dispatch`方法进行重新封装，将异步的方法放到 action 里面进行
* Redux Saga 中间件将异步方法单独放在 sagas.js 的文件中进行处理，使用 generator 生成器

## React Redux

* Provider 组件，将 store 绑定在顶层组件
* connect 连接方法，将 state 和 dispatch 通过 props 提供给组件使用

## 最佳实践

**通过 props 将 React 组件拆分成容器组件和 UI 组件**

**利用构造函数的方式编写无状态组件（UI 组件）**
