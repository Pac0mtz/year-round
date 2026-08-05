import { COMPANY_NAME, PHONE, PHONE_TEL, GOOGLE_REVIEW_URL } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { interpolate } from '../i18n/content'

export default function ThankYou({ onNavigate }) {
  const { t } = useLanguage()

  return (
    <section className="thank">
      <div className="thank__glow" aria-hidden="true" />
      <div className="thank__inner">
        <img
          src="/logo-mark.png"
          alt={COMPANY_NAME}
          width={96}
          height={96}
          className="thank__logo"
        />
        <div className="thank__check" aria-hidden="true">
          ✓
        </div>
        <h1 className="thank__brand">Year Round</h1>
        <p className="thank__tag">{t('nav.brandTag')}</p>
        <h2 className="thank__headline">{t('thankYou.headline')}</h2>
        <p className="thank__sub">{t('thankYou.sub')}</p>
        <div className="thank__actions">
          <a href={PHONE_TEL} className="svc-btn svc-btn--primary ui-btn">
            {interpolate(t('thankYou.call'), { phone: PHONE })}
          </a>
          <button
            type="button"
            className="svc-btn svc-btn--ghost"
            onClick={() => onNavigate('home')}
          >
            {t('thankYou.home')}
          </button>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="thank__review"
        >
          {t('thankYou.review')}
        </a>
      </div>
    </section>
  )
}
