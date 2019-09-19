# 基础类型（Basic Types）

TypeScript 支持 JavaScript 的数据单元，并且增加了一些方便实用的其他数据单元，比如枚举

* Boolean（布尔值）
* Number（数值）
* String（字符串）
* Array（数组）
* Any（任意类型）
* Void
* Null
* Undefined
* Never
* Object（对象）

```typescript
let flag: boolean = false;
let num: number = 1;
let str: string = 'abc';
let arr: number[] = [1, 2, 3];
let any: any = 1;
function func(): void {
  console.log('hello world');
}
let u: undefined = undefined;
let n: null = null;
function func(): never {
  throw new Error('error');
}
declare function create(obj: object | null): void;
```

* Tuple（元组）

```typescript
let arr: [string, number];
arr = [1, 'abc']; // Error
arr = ['abc', 1]; // Ok
```

* Enum (枚举)

默认情况，元素的编号从`0`开始

```typescript
enum Animal {Cat, Dog, Fox};
let animal: Animal = Animal.Cat;
```

## 类型断言（Type Assetions）

显示指定变量的类型，有`<>`和`as`两种写法，目前在`.tsx`文件中只支持`as`写法的类型断言

```typescript
let str: any = 'hello world';
let len1: number = (<string>str).length;
let len2: number = (str as number).length;
```

