# React Conf 2018 回顾

2018 年 10 月 25、26 号 两天， React Conf 在 Henderson, Nevada 举行，超过 600 个参会者一起讨论了用户界面构建的最新情况

## 1. Blog

[https://reactjs.org/blog/2018/11/13/react-conf-recap.html](https://reactjs.org/blog/2018/11/13/react-conf-recap.html)

## 2. Sophie Alpert

React 核心团队的 Leader

<img src="http://static.itellboy.wang/docs/WechatIMG136.png" width="400" />

在去年，Google Trending 的数据显示，React 超过了 JQuery。

<img src="http://static.itellboy.wang/docs/WechatIMG134.png" width="400" />

React 的使命是能让开发者更轻松的构建更好的用户界面

<img src="http://static.itellboy.wang/docs/WechatIMG135.png" width="400" />

去年一年 React 针对下面面三个问题提供了 Suspense、Time Slicing、Profiler 三个新功能

<img src="http://static.itellboy.wang/docs/WechatIMG137.png" width="400" />

到目前为止，React 还是有很多糟糕的地方

* 多个组件内逻辑不能重复使用，会造成`Wrapper hell`的现象
* 类组件各种生命周期函数会导致组件越来庞大，并且不能拆分
* 目前，如果要使用 state 和 生命周期函数，React 要求使用 class component，但是，在 JavaScript 中理解 class 是一件比较困难的事情，而且 class 的使用经常让人感到很多困惑。并且 class 对于编译器来说是很难去进行优化

<img src="http://static.itellboy.wang/docs/WechatIMG139.png" width="400" />

<img src="http://static.itellboy.wang/docs/WechatIMG138.png" width="400" />

## 3. Dan Abramov

Dan 的演讲主要为了解决下面三个问题

<img src="http://static.itellboy.wang/docs/WechatIMG140.png" width="300" />

实际上，这三个问题归根到底还是一个问题，如何让 React 提供一个简单的，更小的，轻量级并且带有 state 和生命周期函数的 component？

<img src="http://static.itellboy.wang/docs/WechatIMG141.png" width="400" />

在以前版本的 React 里面是有一个 mix-in 的解决方案，但是 Dan 不鼓励用这种方式，接下来主要讲的就是为了解决上述问题的 React 的新特性 Hooks

在切换投屏的过程中出现了一些小插曲，但很快工作人员就解决了，很有趣的 Dan 说了一句“Disaster averted～”

接下来 Dan 通过编写了 class component 和 function component 两种组件方式对比来说明如何利用 Hooks 实现函数组件实现类组件的 state 和生命周期函数的功能

### 3.1 Demo

下面的代码是 Dan 现场演示，如何使用**函数组件**利用 Hooks 实现**类组件**的一些功能，包括 state、context、lifecycle，并且如何将一些通用的逻辑抽象出来在函数组件外面定义

Class Component

```javascript
import React from 'react'
import Row from './Row'
import {ThemeContext, LocaleContext} from './context'

export default class Greeting extends from React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
      width: window.innerWidth,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  
  componentDidMounted() {
    document.title = this.state.name + ' ' + this.state.surname
    window.addEventListener('resize', this.handleResize)
    
  }
  
  componentDidUpdated() {
    document.title = this.state.name + ' ' + this.state.surname
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  
  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }
  
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  
  handleSurNameChange(e) {
    this.setState({
      surname: e.target.value
    })
  }
  
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <section className={theme}>
              <Row label="Name">
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Row>
              <Row label="Surname">
                <input
                  value={this.state.surname}
                  onChange={this.handleSurNameChange}
                />
              </Row>
              <Row label="Width">
                {this.state.width}
              </Row>
              <LocaleContext.Consumer>
              {
                locale => (
                  <Row label="Language">
                    {locale}
                  </Row>
                )
              }
              </LocaleContext.Consumer>
            </section>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
```

Function Component

```javascript
import React, { useState, useContext, useEffect } from 'react'
import Row from './Row'
import {ThemeContext, LocaleContext} from './context'

export default function Greeting(props) {
  const width = useWindowWidth()
  
  const name = useFormInput('Mary')
  const surname = useFormInput('Poppins')
   
  useDocumentTitle(name.value + ' ' + surname.value)
  
  const theme = useContext(themeContext)
  const locale = useContext(localeContext)
  
  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Language">
        {locale}
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>
  )
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

function useFormInput(initValue) {
  const [value, setValue] = useState(initValue)
  function handleValueChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleValueChange,
  }
}
```

### 3.2 Proposal: Hooks

Hooks 提议：

* 不通过 class，使用 Hooks 尽可能的覆盖所有 React 功能
* 组件之间逻辑复用
* 选择使用并且 100% 向后兼容

<img src="http://static.itellboy.wang/docs/WechatIMG143.png" width="400" />

使用 Hooks 建议

* 我们正在收集反馈
* 能在 16.7 alpha 版本试用 Hooks 功能
* 千万不要用 hooks 重写你的 components

<img src="http://static.itellboy.wang/docs/WechatIMG144.png" width="400" />

### 3.3 future

Hooks 是 React 未来的愿景，同时也是推动 React 向前走的象征，我们没有对 React 进行巨大的重写，我们想通过一种新的模式，让你逐渐接受 React。我开始学习 React 大约在四年以前，我第一个问题是为什么是 JSX？现在我的第二个问题是我找到了 logo 和 react 是什么关系。React 教会了我一些如何构建用户界面，怎么分割成独立的单元类似的一些事情。我不认为 Hooks 是 React 的一个新功能，我感觉 Hooks   是一个 React 更为正确的一个方向，它真正的解释了一个组件的内部工作原理，就像 React 的 logo 正在围绕的那个东西一样