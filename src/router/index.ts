import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
