import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'SettingsQRCodePage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'qr-code',
  component: () => import('@/pages/profile/settings/qrCode')
}
