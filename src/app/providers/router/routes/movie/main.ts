import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'MovieMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '',
  component: () => import('@/pages/movie/main')
}
