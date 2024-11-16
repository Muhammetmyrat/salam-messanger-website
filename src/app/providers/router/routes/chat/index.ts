import type { RouteRecordRaw } from 'vue-router'

import { route as roomRoute } from './room'
import { route as emptyRoomRoute } from './empty'

export const routeName = 'ChatAreaPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '/chat',
  meta: { layout: 'chat' },
  component: () => import('@/pages/chat-area'),
  children: [emptyRoomRoute, roomRoute]
}
