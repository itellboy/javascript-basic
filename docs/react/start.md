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