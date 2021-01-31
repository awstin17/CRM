<template>
  <v-dialog
    v-model="dialogOpen"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">
        <v-icon left dark>
          mdi-plus
        </v-icon>
        Add Contact
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Add Contact
      </v-card-title>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="fullName"
              label="Full Name*"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email*"
              required
            ></v-text-field>
            <v-text-field
              v-model="address"
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
          @click="addContact"
          :disabled="!fullName || !email || !address"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Add Button',
  data() {
    return {
      dialogOpen: false,
      fullName: '',
      email: '',
      address: '',
    }
  },
  methods: {
    addContact() {
      const newContact = {
        name: this.fullName,
        email: this.email,
        address: this.address,
      }
      this.$store.commit('addContact', newContact)
      this.dialogOpen = false
      this.clearAddForm()
    },
    clearAddForm() {
      this.fullName = ''
      this.email = ''
      this.address = ''
    },
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
