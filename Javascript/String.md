# String
## replace
>方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。

```
'hello world'.replace('hello','ok') //"ok world"
'hello world'.replace(/[a-z]/g,'ok') //"okokokokok okokokokok"

```
## slice() 
>方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

```
'hello world'.slice(1) //'ello world'
```
## 大小写转换
toUpperCase()方法返回一个将调用字符串转换为大写形式的值。
toLowerCase()会将调用该方法的字符串值转为小写形式

## match() 
> 方法检索返回一个字符串匹配正则表达式的的结果。