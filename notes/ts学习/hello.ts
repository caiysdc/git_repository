// console.log("hello world");
// let b: number = 1_000_000;
// console.log({ b });
// let oneString: any = 'this is a string';
// let stringLength: number = (<string>oneString).length;
// let len: number = (oneString as string).length;
// console.log({ stringLength, len })
// function hello<T>(arg: T) : T {
//     return arg;
// }
// hello('hello TypeScript');
// function hello2<T>(args: Array<T>): T[] {
//   console.log(args.length);
//   return args;
// }
// hello2([1,2,3,4]) 
function padLeft(value: string, padding: number): string;
function padLeft(value: string, padding: string): string;
function padLeft(value: any, padding: any): string {
  if (typeof padding === 'string') {
    return "string"
  } else if (typeof padding === 'number') {
    return "number"
  } else {
    return "other"
  }
}
console.log(padLeft("a", 7));
function test(a: number = 3, b?: string): string {
  if (typeof b === 'string') return a + b;
  return '';
}
console.log(test(undefined))
abstract class Animal {
  name: string;
  // constructor(){}
  constructor(name: string) {
    this.name = name;
  }
  abstract work(): void;
}
abstract class ChildAnimal extends Animal {
  constructor(name: string) {
    super(name)
  }
  abstract run(): void;
}
class Dog extends ChildAnimal {
  constructor(name: string) {
    super(name)
  }
  work() {
    console.log(`${this.name}在工作`)
  }
  run() {
    console.log(`${this.name}在运动`)
  }
}
const dog1 = new Dog('小黑');
dog1.work();
dog1.run();

type validateObj = {
  label: string,
  value: string,
}
interface face1 {
  label: string,
  value: string,
}
interface face1 {
  age: number;
  gender: string;
  setAge(age: number): void;
}
type user = { a: string } & { b: string }
const user: user = { a: '1', b: '2' }
const obj = { label: '张三', value: 'zhangsan', age: 20, gender: '男', setAge(age: number) { this.age = age } }
const func1 = (obj: face1): void => {
  console.log(obj)
}
func1(obj)
// 类装饰器
function logClass1(param: string) {
  return (target: any) => {
    console.log('类装饰器1' + param)
  }
}
// 类装饰器
function logClass2(param: string) {
  return (target: any) => {
    console.log('类装饰器2' + param)
  }
}
// 方法装饰器1
function logMethod1(param: string) {
  return (target: any, methodName: string, desc: any) => {
    console.log('方法装饰器1', param, methodName, desc)
  }
}
// 方法装饰器2
function logMethod2(param: string) {
  return (target: any, methodName: string, desc: any) => {
    console.log('方法装饰器2', param, methodName, desc)
  }
}
// 属性装饰器1
function logAttr1(param: string) {
  return (target: any, attrName: string) => {
    console.log('属性装饰器1', param, attrName)
  }
}
// 属性装饰器1
function logAttr2(param: string) {
  return (target: any, attrName: string) => {
    console.log('属性装饰器2', param, attrName)
  }
}
// 参数装饰器1
const logParam1 = (param: string) => {
  return (target: any, paramName: string, paramIndex: number) => {
    console.log('参数装饰器1', paramName, paramIndex)
  }
}
// 参数装饰器1
const logParam2 = (param: string) => {
  return (target: any, paramName: string, paramIndex: number) => {
    console.log('参数装饰器2', paramName, paramIndex)
  }
}

@logClass1('class1')
@logClass2('class2')
class Test {

  @logAttr1('attr1')
  @logAttr2('attr3')
  name: string | undefined

  @logAttr2('attr2')
  age: number | undefined

  @logMethod1('logMethod1')
  func1() {

  }

  @logMethod2('logMethod2')
  func2(@logParam1('logParam1') name: string, @logParam2('logParam2') age: number) {

  }
}

// const t = new Test()
