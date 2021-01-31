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
    updateSelected(state, selected) {
      state.selected = selected
    },
    deleteSelected(state, selected) {
      selected.forEach((contact) => {
        const index = state.contacts.indexOf(contact)
        state.contacts.splice(index, 1)
      })
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
      console.log(state, newContact)
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
