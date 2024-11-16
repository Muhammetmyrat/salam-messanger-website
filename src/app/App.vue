<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppLayout from './providers/layouts/AppLayout.vue'

const THEME_KEY = 'theme'
const DARK_MODE = 'dark'
const LIGHT_MODE = 'light'
const SYSTEM_MODE = 'system'

const getStoredTheme = (): string => localStorage.getItem(THEME_KEY) || SYSTEM_MODE

const isSystemDarkMode = (): boolean => window.matchMedia(`(prefers-color-scheme: ${DARK_MODE})`).matches

const applyTheme = (theme: string): void => {
  if (theme === SYSTEM_MODE) {
    document.documentElement.setAttribute(
      'prefers-color-scheme',
      isSystemDarkMode() ? DARK_MODE : LIGHT_MODE
    )
  } else {
    document.documentElement.setAttribute(
      'prefers-color-scheme',
      theme === DARK_MODE ? DARK_MODE : LIGHT_MODE
    )
  }
}

const initializeTheme = (): void => applyTheme(getStoredTheme())

const handleSystemThemeChange = (): void => {
  window.matchMedia(`(prefers-color-scheme: ${DARK_MODE})`).addEventListener('change', (e) => {
    if (getStoredTheme() === SYSTEM_MODE) {
      applyTheme(e.matches ? DARK_MODE : LIGHT_MODE)
    }
  })
}

onMounted(() => {
  initializeTheme()
  handleSystemThemeChange()
})
</script>
