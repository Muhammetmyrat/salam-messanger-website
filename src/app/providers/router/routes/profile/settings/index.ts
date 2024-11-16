import type { RouteRecordRaw } from 'vue-router'

import { route as settingsUsernameRoute } from './username'
import { route as settingsPhoneNumberRoute } from './phone-number'
import { route as settingsSecurityRoute } from './security'
import { route as settingsDevicesRoute } from './devices'
import { route as settingsLanguageRoute } from './language'
import { route as settingsThemeRoute } from './theme'
import { route as settingsQRCodeRoute } from './qrCode'
import { route as settingsBlackListRoute } from './blackList'

export const routeName = 'SettingsMainPage'

export const route: RouteRecordRaw = {
  name: routeName,
  path: 'settings',
  component: () => import('@/pages/profile/settings/main'),
  children: [settingsUsernameRoute, settingsPhoneNumberRoute, settingsSecurityRoute, settingsDevicesRoute, settingsLanguageRoute, settingsThemeRoute, settingsQRCodeRoute, settingsBlackListRoute]
}
