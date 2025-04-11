<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
      <v-app theme="dark">

        <v-navigation-drawer>
          <v-btn to="/" text="Home"></v-btn>
          <v-btn to="/auth" text="Auth"></v-btn>
        </v-navigation-drawer>

        <v-main>
          <router-view v-slot="{ Component }">
            <v-fade-transition hide-on-leave>
              <component :is="Component" />
            </v-fade-transition>
          </router-view>
        </v-main>
      </v-app>
</template>

<style scoped>

</style>
