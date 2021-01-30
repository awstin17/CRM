<template>
  <div class="contact-actions">
    <v-row no-gutters class="text-center">
      <v-col cols="5">
        <v-text-field
          label="Search"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <div class="contact-actions__button-container">
          <div class="contact-actions__button-container-left">
            <v-btn class="contact-actions__button">
              <v-icon left dark>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
            <v-btn class="contact-actions__button">
              <v-icon left dark>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </div>
          <div class="contact-actions__button-container-right">
            <v-btn class="contact-actions__button">
              <v-icon left dark>
                mdi-plus
              </v-icon>
              Add Contact
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Contact Actions',
}
</script>

<style src="./index.sass" lang="sass"></style>
