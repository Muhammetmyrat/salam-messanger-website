import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsUsernamePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'username',
  component: () => import('@/pages/profile/settings/username')
}
