<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '@/layout/AuthLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'

export default defineComponent({
  components: { AuthLayout, MainLayout },
})
</script>

<template>
  <v-app theme="dark">
    <component :is="$route.meta.layout + '-layout'">
      <slot />
    </component>
  </v-app>
</template>

<style scoped></style>
