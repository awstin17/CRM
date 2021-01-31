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
    getContacts(state, contactList) {
      state.contacts = contactList
    },
    updateSelected(state, selected) {
      state.selected = selected
    },
    deleteSelected(state, selected) {
      selected.forEach((contact) => {
        const index = state.contacts.indexOf(contact)
        state.contacts.splice(index, 1)
      })
      state.selected = []
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
    },
    editContact(state, newContact) {
      const index = state.contacts.indexOf(state.selected[0])
      state.contacts = [
        ...state.contacts.slice(0, index),
        newContact,
        ...state.contacts.slice(index + 1),
      ]
      state.selected = []
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
