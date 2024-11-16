import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'BookPreviewPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'list',
  component: () => import('@/pages/explore/list')
}
