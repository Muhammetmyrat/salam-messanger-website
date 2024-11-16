import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'
import { route as previewRoute } from './preview'

export const routeName = 'BookAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/book',
  meta: { layout: 'default' },
  component: () => import('@/pages/book/area'),
  children: [mainRoute, previewRoute]
}
