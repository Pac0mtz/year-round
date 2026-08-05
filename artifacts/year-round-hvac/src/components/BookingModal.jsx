import { useLanguage } from '../i18n/LanguageContext'
import { interpolate } from '../i18n/content'

const inputStyle = {
  padding: '11px 13px',
  border: '1px solid #e5e7eb',
  borderRadius: 3,
  fontSize: 14,
  fontFamily: "'Public Sans',sans-serif",
  color: '#1b2a4a',
}

export default function BookingModal({ form, done, onChange, onSubmit, onClose }) {
  const { t, content } = useLanguage()
  const { services } = content

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(21,31,51,0.6)',
        zIndex: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderTop: '5px solid #b7202f',
          maxWidth: 520,
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: 32,
          animation: 'fadeIn 0.22s ease',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label={t('booking.close')}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 22,
            cursor: 'pointer',
            color: '#4a5468',
          }}
        >
          ×
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '26px 6px' }}>
            <div style={{ fontSize: 40, marginBottom: 14, color: '#b7202f' }}>✓</div>
            <h3
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: '#1b2a4a',
                marginBottom: 10,
                textTransform: 'uppercase',
              }}
            >
              {interpolate(t('booking.thanks'), { name: form.name })}
            </h3>
            <p style={{ color: '#4a5468', fontSize: 14, marginBottom: 20 }}>
              {interpolate(t('booking.thanksSub'), { phone: form.phone })}
            </p>
            <button
              onClick={onClose}
              style={{
                background: '#b7202f',
                color: '#fff',
                border: 'none',
                borderRadius: 3,
                padding: '12px 24px',
                fontSize: 13.5,
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('booking.done')}
            </button>
          </div>
        ) : (
          <>
            <h3
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 21,
                fontWeight: 700,
                margin: '0 0 6px',
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('booking.title')}
            </h3>
            <p style={{ fontSize: 13, color: '#4a5468', marginBottom: 18 }}>
              {t('booking.sub')}
            </p>
            <form
              onSubmit={onSubmit}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
                gap: 12,
              }}
            >
              <input
                placeholder={t('booking.fullName')}
                value={form.name}
                onChange={(e) => onChange('name', e.target.value)}
                required
                style={{ ...inputStyle, gridColumn: 'span 2' }}
              />
              <input
                placeholder={t('booking.phone')}
                value={form.phone}
                onChange={(e) => onChange('phone', e.target.value)}
                required
                style={inputStyle}
              />
              <input
                placeholder={t('booking.email')}
                type="email"
                value={form.email}
                onChange={(e) => onChange('email', e.target.value)}
                style={inputStyle}
              />
              <select
                value={form.service}
                onChange={(e) => onChange('service', e.target.value)}
                style={{ ...inputStyle, gridColumn: 'span 2' }}
              >
                <option value="">{t('booking.need')}</option>
                {services.map((svc) => (
                  <option key={svc.id} value={svc.label}>
                    {svc.label}
                  </option>
                ))}
              </select>
              <textarea
                placeholder={t('booking.message') || t('contact.message')}
                value={form.message || ''}
                onChange={(e) => onChange('message', e.target.value)}
                rows={3}
                style={{
                  ...inputStyle,
                  gridColumn: 'span 2',
                  resize: 'vertical',
                }}
              />
              <button
                type="submit"
                style={{
                  gridColumn: 'span 2',
                  background: '#b7202f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 3,
                  padding: 13,
                  fontSize: 14.5,
                  fontWeight: 700,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {t('booking.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
