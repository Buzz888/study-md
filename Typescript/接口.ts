interface Ain {
    a: string;
    b?: number;
    readonly r: string
}
let b: Ain = {
    a: 'hello',
    b: 11,
    r: 'ok'
}
interface fn {
    (flag: boolean,
        ary: [],
        str: string): number
}
let fnc: fn;
fnc = (a: boolean, b: [], c: string) => {
    return 1
}
interface Cls {
    str: string;
    fn()
}
class Fn implements Cls {
    str: 'hello';
    fn = () => {
    };
    constructor() {

    }

}