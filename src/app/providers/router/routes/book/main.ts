import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'BookMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '',
  component: () => import('@/pages/book/main')
}
