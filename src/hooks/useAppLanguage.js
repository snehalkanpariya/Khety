import { useTranslation } from 'react-i18next'

export function useAppLanguage() {
  const { i18n } = useTranslation()

  return {
    language: i18n.resolvedLanguage ?? 'en',
    changeLanguage: (language) => i18n.changeLanguage(language),
  }
}
