<template>
  <div class="contact-table-actions">
    <div class="contact-table-actions__button-container">
      <div class="contact-table-actions__button-container-left">
        <EditButton></EditButton>
        <DeleteButton></DeleteButton>
      </div>
      <div class="contact-table-actions__button-container-right">
        <AddButton></AddButton>
      </div>
    </div>
  </div>
</template>

<script>
import EditButton from './edit-button/index.vue'
import DeleteButton from './delete-button/index.vue'
import AddButton from './add-button/index.vue'

export default {
  name: 'Contact Actions',
  components: {
    EditButton,
    DeleteButton,
    AddButton,
  },
}
</script>

<style src="./index.sass" lang="sass"></style>
