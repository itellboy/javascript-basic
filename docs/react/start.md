# React Start

## JSX

为了增强代码的可读性和可维护性，在书写 JSX 的时候带上换行和缩进。并且在 JSX 外面加上一对小括号，防止分号自动插入

React Dom 使用小驼峰定义属性的名称，而不是 HTML 的属性，例如：`onclick`变成了`onClick`、`class`变成了`className`、`tabindex`变成了`tabIndex`、`for`变成了`htmlFor`

```javascript
const name = "jack"
const Element = (
  <div>
    <span className="username"> hello {name}</span>
  </div>
)
```

在 JSX 中使用`{/* */}`写注释

## 组件 & props

组件名称必须以大写字母开头，每个组件的返回值只能包含一个根元素，所以我们可以在组件最外层包裹一层`<div></div>`

在 React16 中引入了`Fragment`组件，可以使用`Fragment`组件代替`div`进行包裹，减少页面元素的渲染

组件的 props 是单向数据流，不能擅自在组件内部修改传入的 props

## State & 生命周期

通过 ES6 类来定义组件，并且在构造函数内部调用`super(props)`，完成对`React.Component`的扩展

```javascript
class MyEle extend React.Component {
  // 构造函数
  constructor (props) {
    super(props)
    this.state = {
      name: 'tom'
    }
  }
  componentDidMount: {
    this.setState({
      name: 'jack'
    })
  }
  // render 函数
  render () {
    return (
      <div> hello {this.state.name}</div>
    )
  }
}
```

不要直接修改`state`，通过`setState()`修改

并且状态更新可能是异步的，不要通过`state`的值计算另一个值

## 事件处理

在事件处理函数里面使用`e.preventDefault()`阻止默认行为

```javascript
class MyEle extend React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    this.setState(preState => ({
      status: !preState.status
    }))
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.status ? "true" : "false}</button>
      </div>
    )
  }
}
```

ES6 类中声明的方法默认是没有绑定`this`的，所以在将方法作为回调函数使用的时候注意将函数内部的`this`指向组件实例

(1) 在构造函数中将声明的方法利用`bind()`进行绑定（缺点：每个声明的方法都要进行绑定）

(2) 利用 ES6 类实例属性声明提案，此方法还未正式进入 ECMAScript 标准，但是在 Create-React-App 中可以使用（将回调函数声明成匿名函数赋值给属性）

```javascript
handleClick = (e) => {
  e.preventDefault()
  this.setState(preState => ({
    status: !preState.status
  }))
}
```

可以通过`arraw function`和`Function.prototype.bind`来为事件回调函数传递参数，回调函数在接受参数的时候，事件对象`e`需放在最后一位

```javascript
handleClick (id, e) {
  e.preventDefault()a
  console.log(id)
}
render () {
  return (
    <div onClick="{(e) => this.handleClick(id, e)}"></div>
    <div onClick="this.handleClick.bind(this, id)"></div>
  )
}
```

## PropTypes 属性检查

React 组件可以通过引入`prop-types`库来进行组件属性类型的检查

```javascript
import PropTypes from 'prop-types'

class MyComponent extends React.Component {}

MyComponent.proptypes = {
  name: PropTypes.string  // 限制 name 属性为字符串类型
}
```

常见的检查包括

```javascript
PropTypes.array  // 数组
PropTypes.bool  // 布尔值
PropTypes.func  // 函数
PropTypes.number  // 数值
PropTypes.object  // 对象
PropTypes.string  // 字符串
PropTypes.symbol  // Symbol 值

PropTypes.element  // 一个 React 组件
```

可以通过设置组件的`defaultProps`属性来为属性设置默认值

```javascript
MyComponent.defaultProps = {
  name: 'tom'
}
```

类型检查发生在`defaultProps`属性操作之后，所以默认值也会被检查

## 生命周期函数

### 页面挂载（mounting）

* `componentWillMount`：组件被挂载到页面之前执行，`render`之前
* `componentDidMount`：组件被挂载到页面之后执行，`render`之后

### 页面更新（updation）

* `componentWillReceiveProps`：已经被挂载的组件的接受新的`props`时候执行
* `shouldComponentUpdate`：组件被更新之前执行，返回一个布尔值，表示页面是否重新渲染，接受两个参数表示下一个`props`和下一个`state`，性能优化点
* `componentWillUpdate`：组件被更新之前执行
* `componentDidUpdate`：组件被更新之后执行

### 页面卸载（unmounting）

* `componentWillUnmount`：组件被卸载的时候执行

## diff 算法

React 虚拟 DOM 比对采用同级比对，上层比对有差异，下层重新渲染

## 文档

[https://react.docschina.org/docs/hello-world.html](https://react.docschina.org/docs/hello-world.html)