import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ExploreMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '',
  component: () => import('@/pages/explore/main')
}
