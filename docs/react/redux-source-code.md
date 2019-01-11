# redux 源码阅读

一直听说 redux 的源码非常短小精悍，总共不超过 700 行代码，为单页应用提供了强大的数据流支持，正好遇到了要异步加载 reducer 的问题，加上之前对 redux 也是一知半解，索性就把 redux 源码 clone 下来阅读了一番，受益匪浅

源码结构

```
.src
├── utils                #工具函数
├── applyMiddleware.js
├── bindActionCreators.js        
├── combineReducers.js     
├── compose.js       
├── createStore.js  
└── index.js             #入口 js
```

## index.js

index.js 作为 redux 的入口，为开发者暴露了 redux 的一些接口

```
export {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware, 
  compose,
  __DO_NOT_USE__ActionTypes // 内置 actionTypes
}
```

文件里面里面定义了一个`isCrushed()`方法，用来判断是否在生产环境压缩了 redux 代码，如果压缩了，会在控制台出现⚠️

```javascript
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  warning(
    'You are currently using minified code outside of NODE_ENV === "production". ' +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' +
      'to ensure you have the correct code for your production build.'
  )
}
```

## utils

工具函数集

### actionType.js

定义了一个生成随机字符串的方法和三个内置的 actionTypes

```javascript
const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7)
    .split('')
    .join('.')

const ActionTypes = {
  INIT: `@@redux/INIT${randomString()}`,
  REPLACE: `@@redux/REPLACE${randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
}
```

* 对于未知的 actionType，必须返回当前的 state
* 如果当前 state 为定义，必须返回初始的 state
* 不能使用 redux 内置的 actionType

### isPlainObject.js

定义了一个判断对象是否为纯对象的方法，通过字面量或者`Object`构造函数生成的对象可以称之为纯对象（plainObject）

```javascript
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
```

不太理解的地方，为什么不直接用`Object.getPrototypeOf(obj) === Object.prototype || Object.getPrototypeOf(obj) === null`，猜测是因为一些边界情况的出现

### warning.js

警告信息的统一出口

## compose.js

使用单参数匿名函数替代多参数函数的方法（[柯里化函数 curry](https://segmentfault.com/a/1190000003733107)），将参数函数进行右结合组合起来，第一次比较清楚的理解函数式编程的理念，例如`compose(a, b, c)` 会变成`(...args) => a(b(c(...args)))`

实现很精简

```javascript
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

## createStore.js

返回一个`createStore()`方法，该方法用来创建一个仓库 store 来支撑应用程序的 state 状态树，只能够通过`dispatch()`方法去改变状态树的状态

整个应用程序只有一颗状态树，可以通过`combineReducers()`方法将很多个 reducer 组合起来形成一个 reducer ，来响应不同的 action

```javascript
export default function createStore(reducer, preloadedState, enhancer) {
  function ensureCanMutateNextListeners() {}
  function getState() {}
  function subscribe() {}
  function dispatch() {}
  function replaceReducer() {}
  function observable() {}
  
  // 初始化
  dispatch({ type: ActionTypes.INIT })
  
  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}
```

### 参数

* `reducer`：返回下一个状态树的方法，接收两个参数，一个是当前状态，一个是触发的 action
* `[preloadedState]`：状态树的初始状态对象，可以从服务端渲染的初始状态或者序列化的用户的 session，如果使用了`combineReducers()`组合提供 reducer，该对象必须具有`combineReducers`对象相同的键名
* `[enhancer]`：store 增强器，可以使用一些第三方库作为中间件来增强 store 的功能，例如时间旅行，持久化等，这个函数只能通过 redux 提供的`applyMiddleware()`方法生成

源码对着三个参数做了一些判断来处理一些边界情况

```javascript
if (
  (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
  (typeof enhancer === 'function' && typeof arguments[3] === 'function')
) {
  throw new Error(
    'It looks like you are passing several store enhancers to ' +
      'createStore(). This is not supported. Instead, compose them ' +
      'together to a single function'
  )
}

if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
  enhancer = preloadedState
  preloadedState = undefined
}
// 利用增强器，也就是中间件重新包装 createStore 函数，提供更多 dispatch 的功能
if (typeof enhancer !== 'undefined') {
  if (typeof enhancer !== 'function') {
    throw new Error('Expected the enhancer to be a function.')
  }

  return enhancer(createStore)(reducer, preloadedState)
}

if (typeof reducer !== 'function') {
  throw new Error('Expected the reducer to be a function.')
}

let currentReducer = reducer
let currentState = preloadedState // 当前状态树
let currentListeners = [] // 当前的监听器列表
let nextListeners = currentListeners // 下次的监听器列表
let isDispatching = false // 是否正在派发 action
```

### 返回

返回一个`store`对象，代表整个状态仓库，可以读取状态（state）、派发 action（dispatch）和订阅事件（subscribe）

### ensureCanMutateNextListeners()

提供给`subscribe()`使用，确保下次执行的监听器列表和当前执行的监听器列表不是同一个引用，简单来说就是，新的订阅和删除，下次生效

```javascript
function ensureCanMutateNextListeners() {
  if (nextListeners === currentListeners) {
    nextListeners = currentListeners.slice()
  }
}
```

### getState()

读取状态树

```javascript
function getState() {
  if (isDispatching) {
    throw new Error(
      'You may not call store.getState() while the reducer is executing. ' +
        'The reducer has already received the state as an argument. ' +
          'Pass it down from the top reducer instead of reading it from the store.'
    )
  }
  return currentState
}
```

### subscribe(listener)

* 增加一个监听器到下次的监听器列表，不影响当前正在执行的监听器列表，也就是说当前新增的监听器会在下次`dispatch()`方法的时候调用
* 返回一个`unsubscribe()`方法，调用该方法可以从下次监听器列表中删除传入的监听器，执行`unsubscribe()`后，下次调用`dispatch()`方法不会执行该监听器

```javascript
function subscribe(listener) {
  if (typeof listener !== 'function') {
    throw new Error('Expected the listener to be a function.')
  }

  if (isDispatching) {
    throw new Error(
      'You may not call store.subscribe() while the reducer is executing. ' +
        'If you would like to be notified after the store has been updated, subscribe from a ' +
        'component and invoke store.getState() in the callback to access the latest state. ' +
        'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
    )
  }

  let isSubscribed = true

  ensureCanMutateNextListeners()
  nextListeners.push(listener)

  return function unsubscribe() {
    if (!isSubscribed) {
      return
    }

    if (isDispatching) {
      throw new Error(
        'You may not unsubscribe from a store listener while the reducer is executing. ' +
          'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
      )
    }

    isSubscribed = false

    ensureCanMutateNextListeners()
    const index = nextListeners.indexOf(listener)
    nextListeners.splice(index, 1)
  }
}
```

### dispatch(action)

* 向 store 派发一个 action，这是唯一触发改变状态树的方式
* `reducer()`方法会被调用，参数为当前状态树 state 和派发的 action，返回一个新的状态树，并且遍历`nextListeners`，依次调用每个监听器
* `dispatch()`方法原生只支持派发纯对象（plain object）作为 action，如果向派发其他类型的 action，比如 Promise，thunk等等，需要利用`applyMiddleware()`方法创建一个中间件去解决

```javascript
function dispatch(action) {
  if (!isPlainObject(action)) {
    throw new Error(
      'Actions must be plain objects. ' +
        'Use custom middleware for async actions.'
    )
  }

  if (typeof action.type === 'undefined') {
    throw new Error(
      'Actions may not have an undefined "type" property. ' +
        'Have you misspelled a constant?'
    )
  }

  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.')
  }

  try {
    isDispatching = true
    currentState = currentReducer(currentState, action)
  } finally {
    isDispatching = false
  }

  const listeners = (currentListeners = nextListeners)
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }
  return action
}
```

### replaceReducer()

用一个新的 reducer 替换掉当前的 reducer，当应用程序使用了代码切割（code splitting）需要动态加载 reducer 的时候需要使用该方法去动态替换 reducer

```javascript
function replaceReducer(nextReducer) {
  if (typeof nextReducer !== 'function') {
    throw new Error('Expected the nextReducer to be a function.')
  }

  currentReducer = nextReducer
  dispatch({ type: ActionTypes.REPLACE })
}
```
通过派发 redux 内置的 actionType 事件来替换 reducer

### observable()

没有直接暴露给开发者使用，下回再分析

## combineReducers.js

默认暴露出一个`combineReducers()`的方法，用于将多个`reducer`合并成一个`reduer`提供给`createStore()`使用

```javascript
export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning(`No reducer provided for key "${key}"`)
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.keys(finalReducers)

  let unexpectedKeyCache
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {}
  }

  let shapeAssertionError
  try {
    assertReducerShape(finalReducers)
  } catch (e) {
    shapeAssertionError = e
  }

  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError
    }

    if (process.env.NODE_ENV !== 'production') {
      const warningMessage = getUnexpectedStateShapeWarningMessage(
        state,
        finalReducers,
        action,
        unexpectedKeyCache
      )
      if (warningMessage) {
        warning(warningMessage)
      }
    }

    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    return hasChanged ? nextState : state
  }
}
```

* 先使用`assertReducerShape()`方法校验传入的 reducers 是否合法
* 函数执行返回一个`combination()`方法，该方法为提供给 store 使用的 reducer
* `combination()`方法里面过程，遍历校验过后的 reducers，将当前 reducer 对应的状态`previousStateForKey`和`action`传入每个 reducer，判断`previousStateForKey`和`nextStateForKey`是否相等，如果相等，返回`nextState`，否则返回`state`

## applyMiddleware.js

组合多个中间件，返回一个 enhancer 函数，提供给 createStore 使用

```javascript
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this dispatch.`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // 生成中间件链
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    // 将 store.dispatch传入中间件链，依次处理，增强 dispatch 功能
    dispatch = compose(...chain)(store.dispatch)
    // 返回创建好的 store 和经过中间件加工后的 dispatch
    return {
      ...store,
      dispatch
    }
  }
}
```

总结：按照原有的参数生成一个 store，将 store 的 dispatch 利用中间件链加工，返回一个带有增强功能 dispatch 的 store

## bindActionCreators.js

