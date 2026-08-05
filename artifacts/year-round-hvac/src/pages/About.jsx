import ImageSlot from '../components/ImageSlot'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t, content } = useLanguage()
  const { values, timeline, certs } = content

  return (
    <section>
      <div className="band band--white" style={{ paddingTop: 60, paddingBottom: 72 }}>
        <div
          className="band__inner"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div style={{ animation: 'fadeUp 0.55s ease both' }}>
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
              {t('about.story')}
            </div>
            <h1
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 'clamp(28px,4.5vw,40px)',
                fontWeight: 700,
                margin: '0 0 18px',
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('about.headline')}
            </h1>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#4a5468', marginBottom: 14 }}>
              {t('about.p1')}
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#4a5468' }}>
              {t('about.p2')}
            </p>
          </div>
          <div className="ui-media" style={{ height: 400 }}>
            <ImageSlot
              id="about-hero"
              src="/images/about-hero.jpg"
              alt={t('about.heroAlt')}
              shape="rounded"
              radius={0}
              style={{ width: '100%', height: 400, minWidth: 0, borderRadius: 0 }}
            />
          </div>
        </div>
      </div>

      <div className="band band--mist">
        <div className="band__inner">
          <h2
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontSize: 26,
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 36px',
              color: '#1b2a4a',
              textTransform: 'uppercase',
            }}
          >
            {t('about.values')}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 18,
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.id || v.title}
                className="ui-panel about-value"
                style={{
                  borderTop: '4px solid #1b2a4a',
                  animation: 'fadeUp 0.5s ease both',
                  animationDelay: `${(i * 0.06).toFixed(2)}s`,
                }}
              >
                {v.icon && (
                  <img
                    src={v.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="about-value__icon"
                  />
                )}
                <div
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: '#1b2a4a',
                    textTransform: 'uppercase',
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: 13.5, color: '#4a5468', lineHeight: 1.55 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band--white">
        <div className="band__inner">
          <h2
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontSize: 26,
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 36px',
              color: '#1b2a4a',
              textTransform: 'uppercase',
            }}
          >
            {t('about.history')}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 18,
            }}
          >
            {timeline.map((tl, i) => (
              <div
                key={tl.year}
                className="ui-panel ui-panel--soft"
                style={{
                  borderTop: '4px solid #b7202f',
                  animation: 'fadeUp 0.5s ease both',
                  animationDelay: `${(i * 0.06).toFixed(2)}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#b7202f',
                    marginBottom: 8,
                  }}
                >
                  {tl.year}
                </div>
                <div style={{ fontSize: 13.5, color: '#4a5468', lineHeight: 1.55 }}>{tl.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band--blush" style={{ paddingTop: 48, paddingBottom: 72 }}>
        <div
          className="band__inner"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 22,
            justifyContent: 'center',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 4,
            padding: 32,
          }}
        >
          {certs.map((c) => (
            <div
              key={c}
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#1b2a4a',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ color: '#b7202f' }}>✓</span>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
