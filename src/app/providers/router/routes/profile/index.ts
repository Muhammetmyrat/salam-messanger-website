import type { RouteRecordRaw } from 'vue-router'

import { route as settingsRoute } from './settings'
import { route as publicationsRoute } from './publications'

export const routeName = 'ProfileMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/profile',
  meta: { layout: 'profile' },
  component: () => import('@/pages/profile/main'),
  children: [publicationsRoute, settingsRoute]
}
