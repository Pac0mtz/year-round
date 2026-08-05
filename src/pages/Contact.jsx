import { useState } from 'react'
import ServiceAreaMap from '../components/ServiceAreaMap'
import {
  PHONE,
  PHONE_TEL,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_MAPS_URL,
} from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { interpolate } from '../i18n/content'

const inputStyle = {
  padding: '12px 13px',
  border: '1px solid #e5e7eb',
  borderRadius: 3,
  fontSize: 14,
  fontFamily: "'Public Sans',sans-serif",
  color: '#1b2a4a',
}

export default function Contact({ form, onChange, bookingDone, onSubmit }) {
  const { t, content } = useLanguage()
  const { hours, services, contactFaq } = content
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
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', padding: 30 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                color: '#b7202f',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 16,
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
                  fontSize: 14,
                  color: '#1b2a4a',
                  padding: '8px 0',
                  borderBottom: '1px solid #e5e7eb',
                }}
              >
                <span style={{ fontWeight: 700 }}>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', padding: 34 }}>
          {bookingDone ? (
            <div style={{ textAlign: 'center', padding: '36px 10px', animation: 'fadeIn 0.25s ease' }}>
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
                {interpolate(t('contact.thanks'), { name: form.name })}
              </h3>
              <p style={{ color: '#4a5468', fontSize: 14 }}>
                {interpolate(t('contact.thanksSub'), { phone: form.phone })}
              </p>
            </div>
          ) : (
            <>
              <h3
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: 21,
                  fontWeight: 700,
                  margin: '0 0 18px',
                  color: '#1b2a4a',
                  textTransform: 'uppercase',
                }}
              >
                {t('contact.request')}
              </h3>
              <form
                onSubmit={onSubmit}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                  gap: 14,
                }}
              >
                <input
                  placeholder={t('contact.fullName')}
                  value={form.name}
                  onChange={(e) => onChange('name', e.target.value)}
                  required
                  style={{ ...inputStyle, gridColumn: 'span 2' }}
                />
                <input
                  placeholder={t('contact.phone')}
                  value={form.phone}
                  onChange={(e) => onChange('phone', e.target.value)}
                  required
                  style={inputStyle}
                />
                <input
                  placeholder={t('contact.email')}
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange('email', e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder={t('contact.address')}
                  value={form.address}
                  onChange={(e) => onChange('address', e.target.value)}
                  style={{ ...inputStyle, gridColumn: 'span 2' }}
                />
                <select
                  value={form.service}
                  onChange={(e) => onChange('service', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">{t('contact.need')}</option>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.label}>
                      {svc.label}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => onChange('date', e.target.value)}
                  style={inputStyle}
                />
                <textarea
                  placeholder={t('contact.message')}
                  value={form.message}
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
                    padding: 14,
                    fontSize: 14.5,
                    fontWeight: 700,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                  }}
                >
                  {t('contact.submit')}
                </button>
              </form>
            </>
          )}
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
