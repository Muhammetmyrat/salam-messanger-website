import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsTheme'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'themes',
  component: () => import('@/pages/profile/settings/theme')
}
