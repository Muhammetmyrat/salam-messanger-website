import type { RouteRecordRaw } from 'vue-router'

import { route as listRoute } from './list'

export const routeName = 'ExploreMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/explore',
  meta: { layout: 'default' },
  component: () => import('@/pages/explore/main'),
  children: [listRoute]
}
