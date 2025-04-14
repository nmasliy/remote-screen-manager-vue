<script lang="ts">
import { API_ENDPOINTS, apiClient } from '@/shared/config/api'
import { formatDate } from '@/shared/utils/date'
import { defineComponent } from 'vue'
import Weather from './Weather.vue'
import ExchangeRate from './ExchangeRate.vue'
import UserInfo from './UserInfo.vue'
import Spotify from './Spotify.vue'

type UserData = {
  ip: string
}

const defaultUserData: UserData = {
  ip: '',
}

export default defineComponent({
  name: 'AppScreens',
  components: { Weather, ExchangeRate, UserInfo, Spotify },
  data() {
    return {
      userData: defaultUserData,
    }
  },
  methods: {
    formatDate,
  },
  async mounted() {
    const response = await apiClient.get(API_ENDPOINTS.IPIFY)

    this.userData.ip = response.data
  },
})
</script>

<template>
  <v-row>
    <v-col class="d-flex flex-column" cols="4">
      <UserInfo :userData="userData" />
    </v-col>
    <v-col class="d-flex flex-column" cols="4">
      <Spotify />
    </v-col>
    <v-col class="d-flex flex-column" cols="4">
      <Weather />
    </v-col>
    <v-col class="d-flex flex-column" cols="4">
      <ExchangeRate />
    </v-col>
  </v-row>
</template>

<style scoped></style>
