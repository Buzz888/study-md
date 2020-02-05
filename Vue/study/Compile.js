class Compile {
    constructor(el, vm) {
        this.$vm = vm;
        this.$data = vm.$data
        this.$el = this.isElementNode(el) ? el : document.getElementById(el)
        if (this.$el) {
            this.$fragment = this.node2Fragment(this.$el);
            this.compileElement(this.$fragment);
            this.$el.appendChild(this.$fragment);
        }
    }
    //判断node
    isElementNode(el) {
        return el.nodeType == 1
    }
    //放入文档碎片
    node2Fragment(el) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    //获取每一个节点
    compileElement(el) {
        let childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                //元素节点
                this.elementnode(node)
                this.compileElement(node)//递归
            } else {
                //文本节点
                this.textnode(node)
            }
        })

    }
    // 判断 v-
    isdirective(name) {
        return name.slice(0, 2) === 'v-'
    }
    // 判断 on
    isEventDirective(dir) {
        return dir.indexOf('on') === 2;
    }
    //处理element
    elementnode(node) {
        let attrs = node.attributes;
        if (attrs.length !== 0) {
            Array.from(attrs).forEach(attrs => {
                if (this.isdirective(attrs.name)) {
                    let key = attrs.name.slice(2);//键
                    let val = attrs.value;//值
                    //事件指令
                    if (this.isEventDirective(attrs.name)) {
                        compileUtil.eventHandler(node, this.$vm, key, val);
                    } else {
                        compileUtil[key] && compileUtil[key](node, this.$vm, val);
                    }
                    node.removeAttribute(attrs.name); //移除自定义属性
                }
            })
        }

    }
    //处理text
    textnode(node) {
        let val = node.textContent;
        let reg = /\{\{([^}]+)\}\}/g;
        if (reg.test(val)) {
            compileUtil['text'](node, this.$vm, val);
        }
    }
}
//存放指令
let compileUtil = {
    model(node, vm, exp) {
        let updateFn = this.update['updatemodel']
        new Watcher(vm, exp, function (node, val) {
            updateFn && updateFn(node, val);
        },node);
        let val = this._getVMVal(vm, exp)
        updateFn && updateFn(node, val)
        node.addEventListener('input', function (e) {
            let newValue = e.target.value;
            if (val === newValue) {
                return;
            }
            vm.$data['word'] = newValue
        })
    },
    text(node, vm, exp) {
        let updateFn = this.update['updatetxt']
        new Watcher(vm, exp, function (node, value) {
            updateFn && updateFn(node, value);
        },node);
        updateFn && updateFn(node, this._getVMVal(vm, exp))


    },
    eventHandler(node, vm, key, val) {
        console.log(node, vm, key, val)
        console.log(vm.$options.methods[val])
        node.addEventListener('click',vm.$options.methods[val].bind(vm.$data))

    },
    update: {
        updatetxt(node, value) {  node.textContent = value },
        updatemodel(node, value) { node.value = value }
    },
    _getVMVal(vm, exp) {
        if (exp.indexOf('.') === -1) {
            let key = exp.match(/[a-z]/g).join('');
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
    },
}
