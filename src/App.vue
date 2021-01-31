<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h1>CRM</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <HomeMain/>
    </v-main>
  </v-app>
</template>

<script>
import HomeMain from './components/contact-manager.vue'

export default {
  name: 'App',

  components: {
    HomeMain,
  },

  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch('getContacts')
  },
}
</script>
