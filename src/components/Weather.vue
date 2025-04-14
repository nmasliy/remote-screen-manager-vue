<template>
  <v-card
    class="d-flex flex-column flex-grow-1 align-start px-4 py-4 ga-3"
    min-height="300px"
    outlined
  >
    <div class="align-self-stretch">
      <p class="text-overline">{{ weather.city }}</p>
      <div class="d-flex ga-4 align-center">
        <p class="text-h4">{{ weather.temperature }}&deg;C</p>
        <p class="text-h5 text-uppercase ml-auto font-weight-medium">
          {{ weather.description }}
        </p>
      </div>
      <p class="text-h6 text-grey">Feels like {{ weather.feelsLike }}&deg;C</p>
    </div>

    <v-img :src="weather.iconUrl" class="mt-4 mx-auto h-auto" rounded width="90px"></v-img>

    <p class="text-grey mt-auto">{{ formatDate(new Date()) }}</p>
  </v-card>
</template>

<script lang="ts">
import { API_ENDPOINTS, apiClient } from '@/shared/config/api'
import { WEATHER_BASE_ICONS_URL } from '@/shared/config/constants'
import { formatDate } from '@/shared/utils/date'
import { defineComponent } from 'vue'

type Weather = {
  description: string
  temperature: number
  iconUrl: string
  city: string
  feelsLike: number
  wind: {
    deg: number
    speed: number
  }
}

const weatherDefaultData: Weather = {
  description: '',
  temperature: 0,
  iconUrl: '',
  city: '',
  feelsLike: 0,
  wind: {
    deg: 0,
    speed: 0,
  },
}

export default defineComponent({
  name: 'AppWeather',
  data() {
    return {
      weather: weatherDefaultData,
    }
  },
  methods: {
    formatDate,
  },
  async mounted() {
    try {
      const geoResponse = await apiClient.get(API_ENDPOINTS.GEO_IPIFY)
      const { city } = geoResponse.data.location
      const weatherResponse = await apiClient.get(
        `${API_ENDPOINTS.WEATHER}&q=${city}&units=metric&lang=en`,
      )
      const { weather, main, wind } = weatherResponse.data

      this.weather = {
        description: weather[0].description,
        temperature: main.temp,
        iconUrl: `${WEATHER_BASE_ICONS_URL}/${weather[0].icon}@2x.png`,
        wind,
        city,
        feelsLike: main.feels_like,
      }
    } catch (error) {
      console.error(error)
    }
  },
})
</script>

<style scoped></style>
