# 类型与函数
## 1、基本类型
### 1.1 JavaScript的基本类型
> boolean
> null
> undefined
> number
> string
> symbol
> object
### 1.2 TypeScript的基本类型
> boolean: true false
> number
> string: 单引  双引  模板字符串
> undefined
> null
> 数组
>    + let list: 类型[] = [];
>    + let list: Array<类型> = []; // 数组泛型
### 1.3 变量声明
> 类型断言
> + 使用尖括号
> + 使用as关键字
```js
// 类型不匹配时结果为undefined
let oneString: any = 'this is a string';
let stringLength: number = (<string>oneString).length;
stringLength: number = (oneString as string).length;
```
### 1.4 泛型
#### 1.4.1 泛型函数
```JS
// 泛型变量-参数类型-返回值类型
function hello<T>(arg: T): T {
  return arg;
}
// 使用
let result = hello<string>('hello TypeScript');
let result = hello('hello TypeScript'); // 自动类型推断
```
#### 1.4.2 泛型变量
```js
function hello<T>(args: Array<T>): T[] {
  console.log(args.length);
  return args;
}
```
### 1.5 枚举

