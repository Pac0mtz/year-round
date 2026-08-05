import { useLanguage } from '../i18n/LanguageContext'
import QuoteEmbed from './QuoteEmbed'

export default function BookingModal({ onClose }) {
  const { t } = useLanguage()

  return (
    <div className="quote-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="quote-modal quote-modal--embed"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t('booking.requestTitle')}
      >
        <button
          type="button"
          className="quote-modal__close"
          onClick={onClose}
          aria-label={t('booking.close')}
        >
          ×
        </button>
        <h3 className="quote-modal__title">{t('booking.requestTitle')}</h3>
        <p className="quote-modal__sub">{t('booking.requestSub')}</p>
        <QuoteEmbed title={t('booking.requestTitle')} maxWidth="100%" />
      </div>
    </div>
  )
}
