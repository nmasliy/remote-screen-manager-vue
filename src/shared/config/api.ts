import axios from 'axios'
import { EXCHANGE_RATE_API_KEY, GEO_IPIFY_API_KEY, OPEN_WEATHER_API_KEY } from './environment'
import { StorageKey } from './constants'

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}`
const IPIFY_API_URL = 'https://api.ipify.org'
const GEO_IPIFY_API_URL = `https://geo.ipify.org/api/v1?apiKey=${GEO_IPIFY_API_KEY}`
const EXCHANGE_RATE_API_URL = `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}`
const SPOTIFY_API_URL = 'https://api.spotify.com/v1'

export const apiClient = axios.create({})
export const spotifyApiClient = axios.create({
  baseURL: SPOTIFY_API_URL,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem(StorageKey.SpotifyToken)}`,
  },
})

export const API_ENDPOINTS = {
  WEATHER: WEATHER_API_URL,
  IPIFY: `${IPIFY_API_URL}`,
  GEO_IPIFY: GEO_IPIFY_API_URL,
  EXCHANGE_RATE: EXCHANGE_RATE_API_URL,
  SPOTIFY: SPOTIFY_API_URL,
} as const

export const SPOTIFY_ENDPOINTS = {
  PROFILE: 'me',
} as const
