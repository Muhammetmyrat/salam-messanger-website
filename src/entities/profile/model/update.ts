import { useProfileStore } from './stores'

export function toggleSettingsSecurity(): void {
  const { state } = useProfileStore()
  
  state.settings.security.isSecurity = !state.settings.security.isSecurity
}

export function toggleSettingsTheme(mode: string): void {
  const { state } = useProfileStore()

  const DARK_MODE = 'dark'
  const LIGHT_MODE = 'light'
  const SYSTEM_MODE = 'system'

  const isSystemDarkMode = (): boolean => window.matchMedia(`(prefers-color-scheme: ${DARK_MODE})`).matches

  const selectedTheme = state.settings.themes.find(theme => theme.mode === mode)
  const activeTheme = state.settings.themes.find(theme => theme.active)

  if (!selectedTheme || !selectedTheme.mode) return

  if (activeTheme) {
    activeTheme.active = false
  }

  selectedTheme.active = true
  localStorage.setItem('theme', selectedTheme.mode)

  applyTheme(selectedTheme.mode)

  function applyTheme(themeMode: string): void {
    switch (themeMode) {
      case SYSTEM_MODE:
        if (isSystemDarkMode()) {
          document.documentElement.setAttribute('prefers-color-scheme', DARK_MODE)
        } else {
          document.documentElement.removeAttribute('prefers-color-scheme')
        }
        break
      case DARK_MODE:
        document.documentElement.setAttribute('prefers-color-scheme', DARK_MODE)
        break
      case LIGHT_MODE:
      default:
        document.documentElement.removeAttribute('prefers-color-scheme')
        break
    }
  }
}
