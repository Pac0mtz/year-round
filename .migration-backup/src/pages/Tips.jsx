import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Tips() {
  const { t, content } = useLanguage()
  const { tips } = content
  const [openTip, setOpenTip] = useState(null)

  return (
    <section className="band band--blush" style={{ paddingTop: 60, paddingBottom: 88 }}>
      <div className="band__inner band__inner--narrow">
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
          {t('tips.kicker')}
        </div>
        <h1
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: 'clamp(28px,4.5vw,38px)',
            fontWeight: 700,
            margin: '0 0 12px',
            color: '#1b2a4a',
            textTransform: 'uppercase',
          }}
        >
          {t('tips.headline')}
        </h1>
        <p style={{ fontSize: 15, color: '#4a5468' }}>
          {t('tips.sub')}
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 18,
        }}
      >
        {tips.map((tip, i) => {
          const isOpen = openTip === i
          return (
            <div
              key={tip.title}
              className="ui-card"
              onClick={() => setOpenTip(isOpen ? null : i)}
              style={{
                animation: 'fadeUp 0.4s ease both',
                animationDelay: `${(i * 0.06).toFixed(2)}s`,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#b7202f',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {tip.category}
              </span>
              <div
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  margin: '10px 0 8px',
                  color: '#1b2a4a',
                }}
              >
                {tip.title}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: '#4a5468',
                  lineHeight: 1.6,
                  animation: isOpen ? 'fadeIn 0.2s ease' : undefined,
                }}
              >
                {isOpen ? tip.body : tip.excerpt}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#b7202f',
                  marginTop: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {isOpen ? t('tips.showLess') : t('tips.readMore')}
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </section>
  )
}
