<template>
  <v-card
    class="d-flex flex-column flex-grow-1 align-start px-4 py-4 ga-4"
    min-height="300px"
    outlined
  >
    <div class="align-self-stretch">
      <p class="text-overline">{{ exchangeRate.baseCode }}</p>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Currency</th>
            <th class="text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in exchangeRate.conversionRates" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <p class="text-grey mt-auto" v-if="exchangeRate.lastUpdatedAt">
      {{ formatDate(exchangeRate.lastUpdatedAt) }}
    </p>
  </v-card>
</template>

<script lang="ts">
import { API_ENDPOINTS, apiClient } from '@/shared/config/api'
import { formatDate } from '@/shared/utils/date'
import { defineComponent } from 'vue'

type ExchangeRate = {
  baseCode: string
  lastUpdatedAt: string
  conversionRates: {
    USD: number
    EUR: number
    KZT: number
    RUB: number
  }
}

const exchangeRateDefaultData: ExchangeRate = {
  baseCode: 'USD',
  lastUpdatedAt: '',
  conversionRates: {
    USD: 1,
    EUR: 1,
    KZT: 1,
    RUB: 1,
  },
}

export default defineComponent({
  name: 'ExchangeRate',
  data() {
    return {
      exchangeRate: exchangeRateDefaultData,
    }
  },
  methods: {
    formatDate,
  },
  async mounted() {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.EXCHANGE_RATE}/latest/USD`)

      if (!response.data) {
        console.error('Error fetching exchange rate')
        return
      }

      this.exchangeRate = {
        lastUpdatedAt: response.data.time_last_update_utc,
        baseCode: response.data.base_code,
        conversionRates: {
          USD: response.data.conversion_rates.USD,
          EUR: response.data.conversion_rates.EUR,
          KZT: response.data.conversion_rates.KZT,
          RUB: response.data.conversion_rates.RUB,
        },
      }
    } catch (error) {
      console.error(error)
    }
  },
})
</script>

<style scoped></style>
