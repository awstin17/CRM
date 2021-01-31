import Vue from 'vue'
import Vuex from 'vuex'
import contacts from './contacts.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    selected: [],
  },
  mutations: {
    getContacts(state, data) {
      state.contacts = data
    },
    updateSelected(state, data) {
      state.selected = data
    },
  },
  actions: {
    // mocking initial GET request for data
    async getContacts({ commit }) {
      setTimeout(() => {
        commit('getContacts', contacts)
      }, 200)
    },
  },
  modules: {
  },
})
