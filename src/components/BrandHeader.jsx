import { Sprout } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useAppLanguage } from '../hooks/useAppLanguage'

const languages = ['en', 'gu', 'hi']

export function BrandHeader() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useAppLanguage()

  return (
    <header className="site-header">
      <a className="brand-lockup" href="/" aria-label={t('brand.name')}>
        <span className="brand-mark" aria-hidden="true">
          <Sprout size={22} strokeWidth={2} />
        </span>
        <span className="brand-copy">
          <span className="brand-name">{t('brand.name')}</span>
          <span className="brand-tagline">{t('brand.tagline')}</span>
        </span>
      </a>
      <nav className="site-navigation" aria-label={t('navigation.overview')}>
        <a href="#overview">{t('navigation.overview')}</a>
        <a href="#design-system">{t('navigation.designSystem')}</a>
      </nav>
      <label className="language-control">
        <span className="sr-only">{t('navigation.language')}</span>
        <select
          aria-label={t('navigation.language')}
          value={language}
          onChange={(event) => changeLanguage(event.target.value)}
        >
          {languages.map((code) => (
            <option key={code} value={code}>
              {t(`languages.${code}`)}
            </option>
          ))}
        </select>
      </label>
    </header>
  )
}
