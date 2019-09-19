# 函数

函数参数类型和函数返回值类型，通常 typescript 会根据函数体自动推断除函数返回值的类型，通常可以省略定义函数返回值类型。

```typescript
function func(x: number, y: number): number {
  return x + y;
}

let func = (x: number, y: number): number => {
  return x + y;
}
```

## 1. 函数类型定义

定义一个完整的函数类型

通过函数类型定义的函数在调用的时候每个参数都是必须的，不能多也不能少，变量名可以不一样，但是每个位置的类型必须是一样的

```typescript
let func: (x: number, y: number) => number;
func = (x: number, y: number): number => {
  return x + y;
}
func(1) // Error

// 可选参数，可选参数必须在比选参数的后面，调用时可省略
let funcOption: (x: number, y?: number) => number;

// 默认参数，默认参数可以在必选参数的前面
let functionDefault: (x: number, y = 1) => number;

// 剩余参数
let functionRest: (x: number, ...arg: string[]) => number;
```