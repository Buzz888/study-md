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

let fn = new Fn2()
fn.say()
console.log(fn)

let obj = {
    a:1
}
Object.freeze(obj)
console.log(obj)
let obj1 = {
    internal: {}
  };
  Object.freeze(obj1)
  obj1.internal.a = 1
  console.log(obj1)

