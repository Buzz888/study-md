# Object
## Object.assign()
> 一个或多个源对象复制到目标对象  需要为可枚举的对象
```
Object.assign({a:1,b:2},{a:2,b:3,c:4})
{a: 2, b: 3, c: 4}
```

## Object.create()
>方法创建一个新对象，使用现有的对象来提供新创建的对象

Object.create()实现继承

```
function Fn1(){
    this.x = 0;
    this.y = 2;
    
}
Fn1.prototype.say = function(){
    console.log(this)
    this.x = 2
    console.log('hello wolrd')
}
function Fn2(){
    Fn1.call(this)//将this指向改变
}
Fn2.prototype = Object.create(Fn1.prototype) //创建prototype
Fn2.prototype.constructor = Fn2 //修正constructor
```
## Object.freeze()
> 可以冻结一个对象一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

```
let obj = {
    a:1
}
Object.freeze(obj)

obj.a = 33;
// Throws an error in strict mode
```
>浅冻结 冻结对象不是常量对象 深冻结通过循环遍历每一项冻结

```
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```
## Object.is()
> Object.is() 方法判断两个值是否是相同的值。

```
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```
## Object.keys() 
>方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。即返回键名

```
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
```
## Object.values()
> 获取值

```
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]
```
## Object.preventExtensions()
>方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

## hasOwnProperty() 
>方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）

```
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true
```
