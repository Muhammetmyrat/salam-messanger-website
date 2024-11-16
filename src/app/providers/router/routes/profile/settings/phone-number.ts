import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsPhoneNumberPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'phone-number',
  component: () => import('@/pages/profile/settings/phoneNumber')
}
