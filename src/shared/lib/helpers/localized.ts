import { useI18n } from 'vue-i18n'

export const getLocalizedTitle = (data: any) => {
  const { locale } = useI18n()

  switch (locale.value) {
    case 'tm':
      return data.title_tm
    case 'en':
      return data.title_en
    case 'ru':
      return data.title_ru
    default:
      return data.title_tm
  }
}