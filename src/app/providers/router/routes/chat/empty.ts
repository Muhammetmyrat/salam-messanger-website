import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ChatEmptyRoomPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '',
  component: () => import('@/pages/chat-empty-room')
}
