import { createI18n } from 'vue-i18n'
import tm from '@/shared/locales/tm.json'
import en from '@/shared/locales/en.json'
import ru from '@/shared/locales/ru.json'

export const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'tm',
  fallbackLocale: 'tm',
  detectBrowserLanguage: false,
  strategy: 'prefix_except_default',
  defaultLocale: 'tm',
  messages: {
    tm,
    en,
    ru,
  },
})