import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/Home.vue'
import AuthView from '@/views/Auth.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/auth', component: AuthView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
