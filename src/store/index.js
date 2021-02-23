import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    initList(state, list) {
      state.list = list
    }
  },
  actions: {
    async getList(context) {
      const { data } = await axios.get('/list.json')
      context.commit('initList',data)
    }
  },
  modules: {
  }
})
