<template>
  <v-data-table
    v-model="$store.state.selected"
    :headers="headers"
    :items="contacts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
    height=400
    fixed-header
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        label="Search Contacts"
        class="mx-4"
        clearable
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </template>
    <template v-slot:item.actions>
      <v-icon
        small
        class="mr-2"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      singleSelect: false,
      // selected: [],
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Address', value: 'address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        this.$store.commit('updateSelected', value)
      },
    },
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
