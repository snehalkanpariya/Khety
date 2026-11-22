import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import gu from './locales/gu.json'
import hi from './locales/hi.json'

const resources = {
  en: { translation: en },
  gu: { translation: gu },
  hi: { translation: hi },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'gu', 'hi'],
  interpolation: { escapeValue: false },
})

const languageToDocument = { en: 'en', gu: 'gu', hi: 'hi' }

i18n.on('languageChanged', (language) => {
  const resolvedLanguage = languageToDocument[language] ?? 'en'
  document.documentElement.lang = resolvedLanguage
  document.documentElement.dataset.language = resolvedLanguage
})

export default i18n
