<script lang="ts">
import { SPOTIFY_ENDPOINTS, spotifyApiClient } from '@/shared/config/api'
import { authSpotify, getSpotifyToken } from '@/shared/services/spotify'
import { defineComponent } from 'vue'

type Profile = {
  name: string
  country: string
  email: string
}

const profileDefaultData: Profile = {
  name: '',
  country: '',
  email: '',
}

export default defineComponent({
  name: 'AppSpotify',
  data: () => ({
    isAuth: false,
    profile: profileDefaultData,
  }),
  props: {},
  methods: {
    async handleLogin() {
      await authSpotify()
    },
    async handleSpotifyCallback() {
      const url = new URL(window.location.href)
      const code = url.searchParams.get('code')

      if (!code) return

      const data = await getSpotifyToken(code)

      if (!data.success) {
        this.isAuth = false
        return
      }

      this.isAuth = true
      url.searchParams.delete('code')
      window.history.replaceState({}, document.title, url.pathname + url.search)

      const profileResponse = await spotifyApiClient.get(SPOTIFY_ENDPOINTS.PROFILE)

      if (profileResponse.status === 200) {
        this.profile = {
          name: profileResponse.data.display_name,
          country: profileResponse.data.country,
          email: profileResponse.data.email,
        }
      }
    },
  },
  async mounted() {
    await this.handleSpotifyCallback()
  },
})
</script>

<template>
  <v-card
    class="d-flex flex-column flex-grow-1 align-start px-4 py-4 ga-4"
    min-height="300px"
    outlined
  >
    <p class="text-overline">music</p>
    <v-btn v-if="!isAuth" @click="handleLogin">Login</v-btn>
    <template v-else>
      <p class="text-h4">{{ profile.name }}</p>
      <p class="text-h5">{{ profile.email }}</p>
      <p class="text-h5">{{ profile.country }}</p>
    </template>
  </v-card>
</template>

<style scoped></style>
