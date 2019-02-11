# React 源码阅读 ── Context

React 组件与组件之间通信，比较常用的是通过`props`属性传递，比如

* 上层组件通过`props`传递下层组件需要的数据
* 上层组件通过`props`传递方法给下层组件来实现下层组件控制上层组件

当遇到多层嵌套的关系的时候，使用`props`会很不方便，React 推出了 Context 相关的一些 API，来实现祖孙组件之间的通讯

## 1. `childContextTypes`

使用方法：

```javascript
// 上层组件
class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childContextValue: '123'
    }
  }
  getChildContext() {
    return { value: this.state.childContextValue }
  }
  render() {
    return <span>parent</span>
  }
}
Parent.childContextTypes = {
  value: PropTypes.string,
}

// 下层组件
class Child extexds Component {
  constructor(props) {
    super(props)
    this.state = {
      childContextValue: '123'
    }
  }
  render() {
    return <span>contextValue: {this.context.value}</span>
  }
}
// 声明希望从上层组件 Context 中获取的属性
Child.contextTypes = {
  value: PropTypes.string
}
```

## 2. `createContext()`

```javascript
// 获取 Provider 和 Consumer
const {Provider, Consumer} = React.createContext('default')

// Parent
render() {
  <Provicer value={this.state.childContextValue} />
}

// child
render() {
  <Customer>{value => <p>contextValue: {value}</p> }</Customer>
}
```