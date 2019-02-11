# React 源码阅读 ── Hooks

Hooks 的使用使得函数式组件有了自己的状态和生命生命周期相关的方法

## 1. Hooks 使用

```javascript
import React, { useState, useEffect } from 'react'

export default () => {
  // 组件状态
  const [name, setName] = useState('jack')
  
  // 生命周期方法
  useEffect(() => {
    console.log('component update')
    return () => {
      console.log('unbind')
    }
  })
  
  return (
    <div>
      <span>{name}</span>
      <input type="text" value={name} onChange={ e => setName(e.target.value) } />
    </div>
  )
}
```