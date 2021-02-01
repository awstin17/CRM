<template>
  <v-dialog
    v-model="dialogOpen"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        v-bind="attrs"
        v-on="on"
        :disabled="selected.length != 1"
        @click="prepopulateEditFields">
        <v-icon left dark>
          mdi-pencil
        </v-icon>
        Edit
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Edit
      </v-card-title>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="newName"
              label="Full Name*"
              required
            ></v-text-field>
            <v-text-field
              v-model="newEmail"
              label="Email*"
              required
            ></v-text-field>
            <v-text-field
              v-model="newAddress"
              label="Address*"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

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
          @click="editContact"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EditButton',
  data() {
    return {
      dialogOpen: false,
      newName: '',
      newEmail: '',
      newAddress: '',
    }
  },
  computed: {
    selected() {
      return this.$store.state.selected
    },
  },
  methods: {
    prepopulateEditFields() {
      this.newName = this.selected[0].name
      this.newEmail = this.selected[0].email
      this.newAddress = this.selected[0].address
    },
    editContact() {
      const newContact = {
        name: this.newName,
        email: this.newEmail,
        address: this.newAddress,
      }
      this.$store.commit('editContact', newContact)
      this.dialogOpen = false
    },
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
