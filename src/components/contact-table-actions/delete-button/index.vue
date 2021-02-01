<template>
  <v-dialog
    v-model="dialogOpen"
    width="500"
    class="delete-button"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        v-bind="attrs"
        v-on="on"
        :disabled="selected.length === 0"
        >
        <v-icon left dark>
          mdi-delete
        </v-icon>
        Delete
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Delete
      </v-card-title>

      <v-card-text class="delete-button__message">
        Are you sure you want to delete this record?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialogOpen = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="deleteContacts"
        >
          Yes, Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteButton',
  data() {
    return {
      dialogOpen: false,
    }
  },
  computed: {
    selected() {
      return this.$store.state.selected
    },
  },
  methods: {
    deleteContacts() {
      this.$store.commit('deleteSelected', this.selected)
      this.dialogOpen = false
    },
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
