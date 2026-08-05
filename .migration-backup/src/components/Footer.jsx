import {
  COMPANY_NAME,
  EMAIL,
  PHONE,
  PHONE_TEL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_MAPS_URL,
  OUTBOUND_LINKS,
} from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer({ onNavigate }) {
  const { t, content } = useLanguage()
  const { services } = content

  return (
    <footer
      style={{
        background: '#1b2a4a',
        color: '#c3ccdd',
        padding: '52px clamp(20px,4vw,40px) 26px',
        borderTop: '3px solid #b7202f',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 32,
          marginBottom: 36,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <img
              src="/logo-mark.png"
              alt="Year Round"
              width={40}
              height={40}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '2px solid #b7202f',
                objectFit: 'cover',
                background: '#1b2a4a',
              }}
            />
            <div
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#fff',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}
            >
              Year Round
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#8f9ab5', marginBottom: 10 }}>{COMPANY_NAME}</div>
          <div style={{ fontSize: 13, color: '#8f9ab5', lineHeight: 1.6, marginBottom: 16 }}>
            {t('footer.blurb')}
          </div>
          <div style={{ fontSize: 13, color: '#8f9ab5', marginBottom: 16 }}>{t('footer.licensed')}</div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 10,
            }}
          >
            {t('footer.findUs')}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {OUTBOUND_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 3,
                  padding: '7px 11px',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t('footer.services')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {services.map((svc) => (
              <a
                key={svc.id}
                onClick={() => onNavigate(svc.id)}
                style={{ fontSize: 13.5, color: '#c3ccdd', cursor: 'pointer' }}
              >
                {svc.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t('footer.company')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['about', t('footer.aboutUs')],
              ['reviews', t('footer.reviews')],
              ['tips', t('footer.tips')],
              ['contact', t('footer.contact')],
            ].map(([id, label]) => (
              <a
                key={id}
                onClick={() => onNavigate(id)}
                style={{ fontSize: 13.5, color: '#c3ccdd', cursor: 'pointer' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t('footer.contactTitle')}
          </div>
          <div style={{ fontSize: 13.5, color: '#c3ccdd', lineHeight: 1.8 }}>
            <a href={PHONE_TEL} style={{ color: '#fff', fontWeight: 700 }}>
              {PHONE}
            </a>
            <br />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c3ccdd' }}
            >
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2}
            </a>
            <br />
            <a href={`mailto:${EMAIL}`} style={{ color: '#c3ccdd' }}>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          borderTop: '1px solid #2f3d5c',
          paddingTop: 20,
          fontSize: 12,
          color: '#7f8cab',
        }}
      >
        © {new Date().getFullYear()} {COMPANY_NAME}. {t('footer.rights')}
      </div>
    </footer>
  )
}
