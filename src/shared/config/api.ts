import axios from 'axios'
import { GEO_IPIFY_API_KEY, OPEN_WEATHER_API_KEY } from './constants'

const BASE_API_URL = 'https://67fa70f18ee14a542627b479.mockapi.io'
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}`
const IPIFY_API_URL = 'https://api.ipify.org'
const GEO_IPIFY_API_URL = `https://geo.ipify.org/api/v1?apiKey=${GEO_IPIFY_API_KEY}`

export const apiClient = axios.create({})

export const API_ENDPOINTS = {
  SCREENS: `${BASE_API_URL}/screens`,
  WEATHER: WEATHER_API_URL,
  IPIFY: `${IPIFY_API_URL}`,
  GEO_IPIFY: GEO_IPIFY_API_URL,
}
