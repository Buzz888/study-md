import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:'hello react'
  },
  getters:{
    newdata:state=>state.data + 'hello'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
