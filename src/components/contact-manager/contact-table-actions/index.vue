<template>
  <div class="contact-table-actions">
    <div class="contact-table-actions__button-container">
      <div class="contact-table-actions__button-container-left">
        <v-btn class="contact-table-actions__button">
          <v-icon left dark>
            mdi-pencil
          </v-icon>
          Edit
        </v-btn>
        <v-btn class="contact-table-actions__button">
          <v-icon left dark>
            mdi-delete
          </v-icon>
          Delete
        </v-btn>
      </div>
      <div class="contact-table-actions__button-container-right">
        <v-btn class="contact-table-actions__button">
          <v-icon left dark>
            mdi-plus
          </v-icon>
          Add Contact
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact Actions',
}
</script>

<style src="./index.sass" lang="sass"></style>
