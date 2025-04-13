import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/Home.vue'

const routes = [
  { path: '/', component: HomeView, meta: { layout: 'main' } },
  { path: '/auth', component: () => import('@/views/Auth.vue'), meta: { layout: 'auth' } },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    meta: { layout: 'main', requireAuth: true },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
