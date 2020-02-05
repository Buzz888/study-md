class Mvvm {
    constructor(options = {}) {
        this.$options = options;
        this.$data = this.$options.data;
        observer(this.$data);
        this.$compile = new Compile(this.$options.el || document.body, this)

    }
    $watch(key, cb){
        new Watcher(this, key, cb);
    }


}