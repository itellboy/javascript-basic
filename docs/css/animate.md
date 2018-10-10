# CSS 动画

## 动画的原理

* 视觉暂留作用
* 画面逐渐变化

## 动画的作用

* 愉悦的用户体验
* 引起用户注意
* 信息的反馈
* 掩饰加载过程

## 动画类型

* transition 补间动画
* keyframe 关键帧动画
* 逐帧动画

## transition 过渡动画

只支持部分 css 属性[支持列表](http://oli.jp/2010/css-animatable-properties/)，[效果](http://leaverou.github.io/animatable/)

局限性：

* 需要事件触发
* 一次性，不能重复
* 只能定义开始状态和结束状态
* 一条 transition 规则只能定义一个规则

```css
.container {
  transition: all .3s ease-in-out;
}
```

## 关键帧动画

* 可以自动播放
* 可以定义多个状态，相当于多个过渡动画

可以定义的规则有

* `animation-direction`：播放顺序`normal | reverse | alternate | alternate-reverse`（正常、反向、正反交替、反正交替）
* `animation-fill-mode`：动画停止状态`none | forwards | backwards | both`（不改变任何样式、保持最后一帧、保持第一帧、都执行一次）
* `animation-iteration-count`：播放次数`infinite`（无限循环）
* `animation-play-state`：播放状态`running | paused`（播放、暂停）不可简写在`animation`
* `animation-delay`：延迟播放

```css
.container {
  animation: run 1s ease-in-out;
}
@keyframe run {
  0% {
    width: 100px;
  }
  100% {
    width: 300px;
  }
}
```

逐帧动画可以将`animation-timing-function`属性设置为`steps(1)`可以实现，达到去掉过渡动画的效果

## 面试题

* CSS 动画实现方式有几种
* 过渡动画和关键帧动画的区别
* 如何实现逐帧动画（使用关键帧动画，使用`steps`去掉过渡动画）
* 性能问题