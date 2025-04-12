import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/Home.vue'

const routes = [
  { path: '/', component: HomeView, meta: { layout: 'main' } },
  { path: '/auth', component: import('@/views/Auth.vue'), meta: { layout: 'auth' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
