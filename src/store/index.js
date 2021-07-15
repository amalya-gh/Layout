import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedValues:{}
  },
  mutations: {
    setSelectedValues(state, val){
      state.selectedValues = val

    }
  },
  actions: {
  },
  modules: {
  }
})
