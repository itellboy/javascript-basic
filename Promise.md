## Promise
> * Promise是一个代理对象，与其他原来的操作没有任何关系  
> * 通过引入一个回调，避免其他回调

###三种状态
* pending
* fulfilled
* rejected  

*尽量在所有的Promise最后catch一下，保证能够捕获前面所有异步处理过程中出现的异常*

```
	Promise.all()	//批量执行Promise,返回所有promise执行结果的一个数组结果，所有promise状态必须是fullfilled才算完成
	Promise.all().map()	//与all()搭配使用
	Promise.resole();
	Promise.reject();
	Promis.race()	//类似于all，只要有一个完成，则完成，应用于异步操作和定时器放在一起，提醒超时
```
	
### promise经典实例
```javascript
f1()
	.then(() => {
		return doSomething();
	})
	.then(() => {
		doSomeElse();
	})

f2()
	.then(() => {
		doSomething();
	})
	.then(() => {
		doSomeElse();
	})
f3()
	.then(doSomething())
	.then(() => }{
		doSomeElse();
	})
f4()
	.then(doSomething)
	.then(() => {
		doSomeElse();
	})

```
### 其他
> fetch API现代化的XMLHttpRequest的解决方案，浏览器原生支持Promise

### async/await
> ES2017新增运算符，新的语言元素  

* 赋予JavaScript以顺序的手法编写异步脚本的能力
* 既保留异步计算的无阻塞特性，还继续使用同步写法
* 还能正常使用return/try/catch

*仍然需要Promise*