import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsSecurityPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'security',
  component: () => import('@/pages/profile/settings/security')
}
