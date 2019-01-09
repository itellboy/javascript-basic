# 记一次 Code Splitting 中遇到的问题

之前很少写类似的总结，这一次解决问题的过程中遇到不少麻烦，于是就想记录下来

**主题：使用 React16.6.6 自带的 Suspense 和 lazy 进行代码拆分**

## react-loadable

刚开始想到使用 react-loadable 这个插件进行拆分，在每个路由对应的页面下面加上了一个 loadable.js 的问题

```javascript
import React from 'react'
import Loadable from 'react-loadable';
import { LoadableLoading } from '../../components';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: LoadableLoading,
  delay: 300,
});

export default () => <LoadableComponent />
```

直接在路由里面引入 loadable.js 即可，简单方便快捷，开发环境也没有任何问题，但是打包之后发到线上环境，就出现问题了，问题截图如下

<img src="http://static.itellboy.wang/docs/WechatIMG16023.png" width="400" style="margin-left: 50px;" />

应用程序使用的是 redux 数据流，每个页面有一个单独的 reducer，通过`combineReducers()`方法合并起来

通过调试发现其中有一些截图中`reducers`数组中有一个成员为`undefined`，直接抛出错误

## Suspense, lazy

后面在 so 上面搜索和在一些群里面询问，都建议我试一试 react 自带的 Suspense 和 lazy 去进行 code splitting

刚开始简单尝试了这两个组件

```javascript
import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'

const Login = lazy(() => import('./Login'))
class App extends Component {
  render() {
    return (
      <Suspense fallback={() => <div>Loading...</div>}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </Suspense>

    );
  }
}

export default App;

```

没有让我失望，控制台报出了如下两个⚠️

<img src="http://static.itellboy.wang/docs/WechatIMG25.png" width="500" />

<img src="http://static.itellboy.wang/docs/WeChataf6cf197f255b9cd4b368d9d7b091bb7.png" width="500" />

第二个错误比较好解决，Suspense 组件的`fallback`属性不需要返回一个函数组件，改成`fallback={<div>Loading...</div>}`即可

第一个问题，在 stackoverflow 上面有人遇到了[相同的问题](https://stackoverflow.com/questions/43396818/warning-failed-prop-type-invalid-prop-component-of-type-object-supplied-to)，后来发现是 react-router-dom 组件的问题，找到相关 [issue](https://github.com/ReactTraining/react-router/issues/6420#issuecomment-433541079)，发现是官方在 4.4.0-beta.5 才解决该问题

> Fixed <Route component> prop-type warning when using forwardRef (see #6417, thanks @frehner and @eXon)

因为 4.4.0 版本还没有 release，所以只能暂时只能使用 beta.6，安装之后，排除了⚠️，希望官方能早日 release🥳