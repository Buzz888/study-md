class Fn1 {
    readonly x:string;
    public y:number;
    private z:boolean = true;
    protected k:[number] = [1];
    public constructor (){

    }
}
let fn = new Fn1();
// fn.x = 'hello' err只读属性必须在声明时或构造函数里被初始化
// fn.z = true err属性“z”为私有属性，只能在类“Fn1”中访问
// fn.k = [1] err属性“k”受保护，只能在类“Fn1”及其子类中访问。
fn.y = 1;
class Fn2 extends Fn1{

}
let myAdd = function(x: number, y: number):number { return x+y; };
