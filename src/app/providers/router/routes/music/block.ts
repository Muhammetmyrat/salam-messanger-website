import type { RouteRecordRaw } from 'vue-router'

export const routeName: string = 'MusicBlockPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'block/:id',
  component: () => import('@/pages/music-block')
}
