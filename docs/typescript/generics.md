# 泛型（Generics）

定义类型变量

```typescript
function hello<T>(arg: T): T {
  return arg;
}

let funcA: <T>(arg: T) => T = hello; // 泛型函数类型

let funcB: { <T>(arg: T): T } = hello; // 通过签名的对象字面量定义泛型函数
```