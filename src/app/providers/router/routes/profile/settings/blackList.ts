import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsBlackListPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'black-list',
  component: () => import('@/pages/profile/settings/blackList')
}
