const observer = (value) => {
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
}
class Observer {
    constructor(value) {
        this.data = value;
        this.walk(this.data);
    }
    walk(data) {
        for (const key in data) {
            this.defineReactive(this.data, key, data[key]);
        }
    }
    defineReactive(data, key, val) {
        let childData = observer(val);
        let dep = new Dep() //管理
        Object.defineProperty(data, key, {
            enumerable: true,//枚举
            configurable: false,
            get() {
                //存在target 添加到数组
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal
                // 新的值是object的话，进行监听
                childData = observer(newVal);
                // 通知订阅者
                dep.notify();
            }
        })


    }
}
let _id = 0;
class Dep {
    constructor() {
        this.id = _id++;
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub); //添加到数组
    }

    depend() {
        Dep.target.addDep(this);//调用addDep
    }
    removeSub() {
        let index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);//删除指令
        }
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })

    }
    

}