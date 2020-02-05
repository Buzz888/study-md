import Vue from 'vue'
import App from './App.vue'

export class Store {
  constructor(options = {}, Vue) {
      this.options = options;
      Vue.mixin({ beforeCreate: vuexInit });
  }
  get state () {
      return this.options.state;
  }
}
function vuexInit () {
  const options = this.$options
  if (options.store) {
      // 组件内部设定了store,则优先使用组件内部的store
      this.$store = typeof options.store === 'function'
      ? options.store()
      : options.store
  } else if (options.parent && options.parent.$store) {
      // 组件内部没有设定store,则从根App.vue下继承$store方法
      this.$store = options.parent.$store
  }
}
let store = new Store({
  state: {
    count: 0
  }
}, Vue);
const http = function(){
  window.console.log(1)
  
}
Vue.use(http)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')