# 函数防抖与函数防抖

## 问题来源

遇到了一个判断页面是否拉动到底部的问题，思路和以前一样，判断当前窗口的高度 + 已经滑动的高度 >= 页面整体高度，代码如下：

```javascript
 window.document.body.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight) {
    console.log('到底了')
  }
}
```

然后测试过程中发现，在 Android 和 PC 端的模拟都可以正确执行一次，在 IOS 端，会重复执行很多次，导致在 IOS 端访问的时候，后端请求数量急剧上增，造成卡顿。

经过询问之后，发现这种问题的通用方案是使用函数节流，顺便也接触到了函数防抖，于是就学而记之

## 函数防抖

