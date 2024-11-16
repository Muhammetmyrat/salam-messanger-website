import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsDevices'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'devices',
  component: () => import('@/pages/profile/settings/devices')
}
