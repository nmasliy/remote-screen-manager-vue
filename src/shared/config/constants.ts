export const WEATHER_BASE_ICONS_URL = 'http://openweathermap.org/img/wn'

export const APP_ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  AUTH: '/auth',
} as const

export enum StorageKey {
  SpotifyToken = 'spotify_access_token',
  Username = 'username',
}
