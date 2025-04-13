<script lang="ts">
import { defineComponent } from 'vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { TheSidebar },
})
</script>

<template>
  <the-sidebar />

  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<style scoped></style>
