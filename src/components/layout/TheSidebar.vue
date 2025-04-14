<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheSidebar',
})
</script>

<template>
  <v-navigation-drawer class="py-4 px-4">
    <div class="d-flex flex-column">
      <v-btn class="mb-4" to="/" text="Home"></v-btn>
      <v-btn to="/profile" text="Profile"></v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped></style>
