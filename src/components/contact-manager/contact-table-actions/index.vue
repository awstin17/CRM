<template>
  <div class="contact-table-actions">
    <div class="contact-table-actions__button-container">
      <div class="contact-table-actions__button-container-left">
        <v-dialog
          v-model="editDialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="secondary"
              v-bind="attrs"
              v-on="on"
              :disabled="selected.length != 1"
              class="contact-table-actions__button"
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
                @click="editDialog = false"
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
        <v-dialog
          v-model="deleteDialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="secondary"
              v-bind="attrs"
              v-on="on"
              :disabled="selected.length === 0"
              class="contact-table-actions__button"
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

            <v-card-text>
              Are you sure you want to delete this record?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="deleteDialog = false"
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
      </div>
      <div class="contact-table-actions__button-container-right">
        <v-dialog
          v-model="addDialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on" class="contact-table-actions__button">
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
                @click="addDialog = false"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact Actions',
  data() {
    return {
      editDialog: false,
      deleteDialog: false,
      addDialog: false,
      fullName: '',
      email: '',
      address: '',
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
    deleteContacts() {
      this.$store.commit('deleteSelected', this.selected)
      this.deleteDialog = false
    },
    addContact() {
      const newContact = {
        name: this.fullName,
        email: this.email,
        address: this.address,
      }
      this.$store.commit('addContact', newContact)
      this.addDialog = false
      this.clearAddForm()
    },
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
      this.editDialog = false
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
