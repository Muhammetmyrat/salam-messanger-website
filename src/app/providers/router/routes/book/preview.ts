import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'BookPreviewPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'preview/:id',
  component: () => import('@/pages/book/preview')
}
