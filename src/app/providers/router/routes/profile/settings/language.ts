import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsLanguage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'languages',
  component: () => import('@/pages/profile/settings/language')
}
