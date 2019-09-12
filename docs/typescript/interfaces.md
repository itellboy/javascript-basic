# 接口

## 1. 描述对象的属性类型

包括可选属性，只读属性（通过字面量初始化）

```typescript
interface Animal {
  age: number;
  name?: string; // 可选属性
  readonly weight: number; // 只读属性
  [propName: string]: any; // 通过索引签名添加任意属性
}

const ani: Animal =  {
  name: 'Kitty',
  age: 12,
  weight: 24,
  color: 'blue',
}

ani.weight = 22; // Error
```

## 2. 描述函数类型

通过定以一个参数列表类型和返回值类型的接口可以描述一个函数的类型，参数名不需要一定相同，但相同位置的类型一定是正确的

```typescript
interface CalcLengthFunc {
  (source: string, target: string): boolean;
}

let calcFuncA: CalcLengthFunc = (source, target) => {
  return source.length > target.length
}

let calcFuncB: CalcLengthFunc = (src, tar) => {
  return src.length > tar.length
}
```


## 3. 描述索引类型

TypeScript 支持两种索引类型：数值索引和字符串索引

因为 JavaScript 中使用 number 作为索引的时候，同时会将其变成 string 进行索引，比如调用`a[10]`等同于调用`a['10']`

```typescript
class Animal {
  name: string;
}
class Cat extends Animal {
  color: string;
}

// 错误定义
interface AniInterface {
  [x: number]: Animal;
  [x: string]: Cat;
}
```

在上面`AniInterface`接口中，在调用`x`属性时候，得到的是`Animal`还是`Cat`是不确定的

## 4. 类类型

```typescript
interface ClockInterface {
  currentTime: Date,
}

class Clock implements ClockInterface 
```