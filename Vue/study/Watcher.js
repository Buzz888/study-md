class Watcher {
    constructor(node, exp, cb,vm) {
        this.node = node
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.value = this.get();

    }
    get() {
        Dep.target = this;
        //  Dep.target = null;
        // return value;
        // console.log(this.exp)

    }
    addDep(dep) {
        // console.log(this)
        dep.addSub(this);

    }
    update() {
        
        this.cb(this.vm, this._getVMVal(this.node,this.exp))

    }
    _getVMVal(vm, exp) {
        if (exp.indexOf('.') === -1) {
            let key = exp.match(/[a-z]/g).join('');
            // console.log(vm.$data[key])
            return vm.$data[key];
        } else {
            let ary = exp.split('.');
            ary[0] = ary[0].slice(2);
            ary[ary.length - 1] = ary[ary.length - 1].slice(0, -2)
            let value = ary.reduce((i1, i2) => {
                return i1[i2]
            }, vm.$data)
            return value
        }
    }
}

