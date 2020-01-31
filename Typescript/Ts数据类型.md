# Ts数据类型
---
## 布尔值

```javascript
let isDone: boolean = false;
```

## 数字

```
let num: number = 01;
```

## 字符串

```
let str: string = 'hello ts';
```

## 元组 Tuple

```
let x :[string,number]; 
x = ['hello', 10]; // OK;
x = [10, 'hello']; // Error;
```

## 枚举

```
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];

console.log(colorName);
```

## Void

```
void类型像是与any类型相反，它表示没有任何类型。 
当一个函数没有返回值时，你通常会见到其返回值类型是 void
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
```

## Never
>never类型表示的是那些永不存在的值的类型。

## Object
>object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。


