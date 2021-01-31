<template>
  <v-container class="home-main__container">
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="display-2 home-main__title">Contacts</h2>
        <ContactActions></ContactActions>
        <ContactTable></ContactTable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactActions from '@/components/contact-table-actions/index.vue'
import ContactTable from '@/components/contact-table/index.vue'

export default {
  name: 'Home Main',
  components: {
    ContactActions,
    ContactTable,
  },
}
</script>

<style src="./contact-manager.sass" lang="sass"></style>
