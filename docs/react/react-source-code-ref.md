# React 源码阅读 ── createRef & ref

可以通过组件的`ref`非常方便的获取到组件对应的 DOM 节点

有三种常用的使用方式

```javascript
class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    
    this.objRef = React.createRef()
  }
  componentDidMount() {
    setTimeout( () => {
      this.refs.refString.textContent = 'String ref'
      this.eleRef.textContent = 'element ref'
      this.ObjRef.current.textContent = 'create ref'
    },1 000)
  }
  render() {
    return (
      <div>
        <p ref="refString" ></p>
        <p ref={ele => this.eleRef = ele } ></p>
        <p ref={this.objRef} ></p>
      </div>
    )
  }
}
```

**string ref**

会在当前组件的`refs`属性上面挂在一个字符串对象，通过该字符串对象可以访问到 DOM

**function ref**

给当前组件元素的`ref`属性传入一个匿名函数，可以通过该函数的第一个参数访问到组件元素

**React.createRef()**

React 官方推荐操作 DOM 的方法，首先使用`React.createRef()`方法来创建一个 ref 对象，再将这个对象传给组件元素的`ref`属性，则可以通过 ref 对象的`current`属性来访问组件元素

## createRef()

```javascript
// React.js
import {createRef} from './ReactCreateRef';

// ReactCreateRef.js
import type {RefObject} from 'shared/ReactTypes';

// an immutable object with a single mutable value
export function createRef(): RefObject {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    Object.seal(refObject);
  }
  return refObject;
}
```

`React.createRef()`方法实现很简单，就返回了一个对象，含有一个值为`null`的`current`属性