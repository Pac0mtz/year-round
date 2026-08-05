import { useState } from 'react'
import ServiceAreaMap from '../components/ServiceAreaMap'
import QuoteEmbed from '../components/QuoteEmbed'
import {
  PHONE,
  PHONE_TEL,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_MAPS_URL,
} from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t, content } = useLanguage()
  const { hours, contactFaq } = content
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="band band--mist" style={{ paddingTop: 60, paddingBottom: 88 }}>
      <div className="band__inner">
        <div style={{ textAlign: 'center', marginBottom: 44, animation: 'fadeUp 0.5s ease both' }}>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: '#b7202f',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 10,
            }}
          >
            {t('contact.kicker')}
          </div>
          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontSize: 'clamp(28px,4.5vw,38px)',
              fontWeight: 700,
              margin: 0,
              color: '#1b2a4a',
              textTransform: 'uppercase',
            }}
          >
            {t('contact.headline')}
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 44,
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ background: '#1b2a4a', padding: 30, color: '#fff', marginBottom: 18 }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: '#e8b3ba',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 16,
                }}
              >
                {t('contact.contact')}
              </div>
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  fontFamily: "'Oswald',sans-serif",
                  marginBottom: 6,
                }}
              >
                <a href={PHONE_TEL} style={{ color: '#fff' }}>
                  {PHONE}
                </a>
              </div>
              <div style={{ fontSize: 14, color: '#c3ccdd', marginBottom: 16 }}>
                <a href={`mailto:${EMAIL}`} style={{ color: '#c3ccdd' }}>
                  {EMAIL}
                </a>
              </div>
              <div style={{ fontSize: 14, color: '#c3ccdd', lineHeight: 1.6 }}>
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
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: 14,
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: '#e8b3ba',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {t('contact.openInMaps')}
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', padding: 26 }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: '#b7202f',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 14,
                }}
              >
                {t('contact.hours')}
              </div>
              {hours.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    fontSize: 14,
                    color: '#1b2a4a',
                    padding: '8px 0',
                    borderBottom: '1px solid #f1f3f7',
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-quote" style={{ background: '#fff', border: '1px solid #e5e7eb', padding: 28 }}>
            <h3
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 21,
                fontWeight: 700,
                margin: '0 0 8px',
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('contact.request')}
            </h3>
            <p style={{ fontSize: 13.5, color: '#4a5468', margin: '0 0 18px', lineHeight: 1.5 }}>
              {t('booking.requestSub')}
            </p>
            <QuoteEmbed title={t('contact.request')} maxWidth="100%" />
          </div>
        </div>

        <div className="ui-media ui-media--map" style={{ height: 400, marginBottom: 64 }}>
          <ServiceAreaMap id="contact-map" height={400} />
        </div>

        <h2
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: 24,
            fontWeight: 700,
            margin: '0 0 22px',
            color: '#1b2a4a',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {t('contact.faq')}
        </h2>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {contactFaq.map((f, i) => (
            <div key={f.q} style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 0' }}>
              <div
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: '#1b2a4a' }}>{f.q}</span>
                <span style={{ fontSize: 18, color: '#b7202f', fontWeight: 700 }}>
                  {openFaq === i ? '−' : '+'}
                </span>
              </div>
              {openFaq === i && (
                <div
                  style={{
                    fontSize: 14,
                    color: '#4a5468',
                    lineHeight: 1.6,
                    marginTop: 12,
                    animation: 'fadeIn 0.2s ease',
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
