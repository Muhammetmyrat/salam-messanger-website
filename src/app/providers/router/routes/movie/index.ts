import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'

export const routeName = 'MovieAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/movie',
  meta: { layout: 'default' },
  component: () => import('@/pages/movie/area'),
  children: [mainRoute]
}
