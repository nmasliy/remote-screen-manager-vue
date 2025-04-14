import axios from 'axios'
import { SITE_URL, SPOTIFY_CLIENT_ID } from '../config/environment'
import { StorageKey } from '../config/constants'

export const authSpotify = async () => {
  const codeVerifier = generateRandomString(64)
  const hashedCodeVerifier = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashedCodeVerifier)

  const scope = 'user-read-private user-read-email'
  const authUrl = new URL('https://accounts.spotify.com/authorize')

  window.localStorage.setItem('code_verifier', codeVerifier)

  const params = {
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: SITE_URL,
  }

  authUrl.search = new URLSearchParams(params).toString()
  window.location.href = authUrl.toString()
}

function generateRandomString(length: number) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const values = crypto.getRandomValues(new Uint8Array(length))
  return values.reduce((acc, x) => acc + possible[x % possible.length], '')
}

async function sha256(plain: string) {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

function base64encode(input: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

export async function getSpotifyToken(code: string) {
  const codeVerifier = localStorage.getItem('code_verifier') || ''

  const url = 'https://accounts.spotify.com/api/token'

  const response = await axios.post(
    url,
    {
      client_id: SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: SITE_URL,
      code_verifier: codeVerifier,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )

  localStorage.setItem(StorageKey.SpotifyToken, response.data.access_token)

  if (response.data) {
    return { success: true }
  }
  return { success: false }
}
