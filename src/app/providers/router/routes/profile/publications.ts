import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'ProfilePublicationsPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'publications',
  component: () => import('@/pages/profile/publications')
}
