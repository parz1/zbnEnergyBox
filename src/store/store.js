// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    energy: 5000,
    
  },
  mutations: {
    increment: (state, n) => {
      const obj = state
      obj.energy += 1
    },
    decrement: (state) => {
      const obj = state
      obj.energy -= 1
    }
  }
})

export default store
