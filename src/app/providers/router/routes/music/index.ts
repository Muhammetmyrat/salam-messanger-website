import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'
import { route as blockRoute } from './block'

export const routeName = 'MusicAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/music',
  meta: { layout: 'default' },
  component: () => import('@/pages/music-area'),
  children: [mainRoute, blockRoute]
}
