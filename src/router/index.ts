import { createWebHistory, createRouter } from 'vue-router'
import { APP_ROUTES } from '@/shared/config/constants'
import HomeView from '@/views/Home.vue'

const routes = [
  { path: APP_ROUTES.HOME, component: HomeView, meta: { layout: 'main' } },
  { path: APP_ROUTES.AUTH, component: () => import('@/views/Auth.vue'), meta: { layout: 'auth' } },
  {
    path: APP_ROUTES.PROFILE,
    component: () => import('@/views/Profile.vue'),
    meta: { layout: 'main', requireAuth: true },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
