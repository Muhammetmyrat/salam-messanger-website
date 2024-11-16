import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'ChatRoomPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: ':room',
  component: () => import('@/pages/chat-room')
}
