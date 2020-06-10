# AggregateError

当多个 Error 需要包装成一个 Error 的时候，该 Error 的类型为 AggregateError。

```javascript
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```
