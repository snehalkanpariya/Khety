import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  MapPin,
  ShieldCheck,
  Sprout,
  Tractor,
  UsersRound,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { TextField } from '../../components/TextField'
import { serviceCategories } from '../../data/serviceCategories'

const categoryIcons = [Tractor, Sprout, ShieldCheck]
const principleIcons = [UsersRound, Check, Sprout]
const principleKeys = ['One', 'Two', 'Three']

export function FoundationPage() {
  const { t } = useTranslation()

  return (
    <main>
      <section className="hero-section page-width" id="overview">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            {t('foundation.eyebrow')}
          </span>
          <h1>{t('foundation.title')}</h1>
          <p className="hero-description">{t('foundation.description')}</p>
          <div className="hero-actions">
            <Button
              onClick={() =>
                document
                  .getElementById('design-system')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('foundation.primaryAction')}
              <ArrowUpRight size={17} />
            </Button>
            <a className="text-link" href="#principles">
              {t('foundation.secondaryAction')}
              <ArrowDownRight size={16} />
            </a>
          </div>
          <div className="trust-note">
            <span className="trust-note__icon">
              <ShieldCheck size={18} />
            </span>
            <span>
              <strong>{t('foundation.trustLabel')}</strong>
              <small>{t('foundation.trustText')}</small>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
            alt={t('foundation.imageAlt')}
          />
          <div className="hero-visual__shade" />
          <div className="location-pill">
            <MapPin size={15} />
            <span>{t('foundation.location')}</span>
          </div>
          <div className="image-caption">
            <span className="image-caption__icon">
              <Sprout size={18} />
            </span>
            <span>
              <strong>{t('foundation.trustLabel')}</strong>
              <small>{t('foundation.trustText')}</small>
            </span>
          </div>
          <div className="visual-stamp" aria-hidden="true">
            <Sprout size={21} />
          </div>
        </div>
      </section>

      <section className="work-section page-width" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t('foundation.sectionLabel')}</span>
            <h2 id="work-title">{t('foundation.sectionTitle')}</h2>
          </div>
          <p>{t('foundation.sectionDescription')}</p>
        </div>
        <div className="category-grid">
          {serviceCategories.map((category, index) => {
            const Icon = categoryIcons[index]

            return (
              <Card className="category-card" key={category.id}>
                <span className="category-card__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{t(category.labelKey)}</h3>
                <p>{t(`foundation.${['ploughing', 'sowing', 'cropCare'][index]}Detail`)}</p>
                <span className="category-card__arrow" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="page-width">
          <div className="section-heading section-heading--compact">
            <div>
              <span className="section-kicker">{t('foundation.principlesLabel')}</span>
              <h2>{t('foundation.principlesTitle')}</h2>
            </div>
          </div>
          <div className="principles-grid">
            {principleKeys.map((key, index) => {
              const Icon = principleIcons[index]

              return (
                <div className="principle-item" key={key}>
                  <span className="principle-item__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{t(`foundation.principle${key}Title`)}</h3>
                    <p>{t(`foundation.principle${key}Detail`)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="design-section page-width"
        id="design-system"
        aria-labelledby="design-title"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t('foundation.previewLabel')}</span>
            <h2 id="design-title">{t('foundation.previewTitle')}</h2>
          </div>
          <p>{t('foundation.previewDescription')}</p>
        </div>
        <div className="showcase-grid">
          <Card className="showcase-card showcase-card--controls">
            <span className="showcase-label">{t('foundation.buttonLabel')}</span>
            <div className="showcase-buttons">
              <Button>{t('foundation.primaryButton')}</Button>
              <Button variant="secondary">{t('foundation.secondaryButton')}</Button>
            </div>
            <TextField
              label={t('foundation.fieldLabel')}
              placeholder={t('foundation.fieldPlaceholder')}
            />
          </Card>
          <Card className="showcase-card showcase-card--service">
            <span className="showcase-label">{t('foundation.cardLabel')}</span>
            <div className="sample-service">
              <div className="sample-service__icon">
                <Tractor size={22} />
              </div>
              <div className="sample-service__content">
                <h3>{t('foundation.cardTitle')}</h3>
                <p>{t('foundation.cardDetail')}</p>
                <span className="availability">
                  <span />
                  {t('foundation.statusLabel')}
                </span>
              </div>
              <ArrowUpRight className="sample-service__arrow" size={18} />
            </div>
            <div className="spinner-example">
              <LoadingSpinner label={t('foundation.statusLabel')} />
              <span>{t('foundation.statusLabel')}</span>
            </div>
          </Card>
        </div>
      </section>

      <footer className="site-footer page-width">
        <span className="footer-brand">
          <Sprout size={17} />
          {t('brand.name')}
        </span>
        <span>{t('foundation.footer')}</span>
      </footer>
    </main>
  )
}
