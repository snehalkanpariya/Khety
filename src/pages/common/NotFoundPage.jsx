import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <main className="not-found page-width">
      <span className="not-found__code">404</span>
      <h1>{t('errors.notFoundTitle')}</h1>
      <p>{t('errors.notFoundDescription')}</p>
      <Link className="button button--primary" to="/">
        {t('errors.backHome')}
      </Link>
    </main>
  )
}
