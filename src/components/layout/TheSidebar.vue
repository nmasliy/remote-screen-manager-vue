<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheSidebar'
})
</script>

<template>
  <v-navigation-drawer>
    <v-btn to="/" text="Home"></v-btn>
    <v-btn to="/auth" text="Auth"></v-btn>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
