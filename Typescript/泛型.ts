function identity<T>(arg): T {
    return arg;
}
identity<number>(1)
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity([1, 2, 3, 2])
interface Fn {
    a:string;
    b:number
}
let obj:Fn={
a:'hell',
b:1
}
function loggingIdentity1<Fn>(arg):Fn{
    return arg;
}
loggingIdentity1({a:1,b:2})