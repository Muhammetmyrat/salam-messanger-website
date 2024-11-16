import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'MusicPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: '',
  component: () => import('@/pages/music-main')
}
