import { useState } from 'react'
import { GOOGLE_REVIEW_URL, starString } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export default function Reviews() {
  const { t, content } = useLanguage()
  const { testimonials, reviewFilters, tagLabel } = content
  const [filter, setFilter] = useState('all')
  const active = reviewFilters.find((f) => f.id === filter)
  const filtered = active?.tag
    ? testimonials.filter((item) => item.tag === active.tag)
    : testimonials

  return (
    <section className="band band--mist" style={{ paddingTop: 60, paddingBottom: 88 }}>
      <div className="band__inner">
      <div style={{ textAlign: 'center', marginBottom: 40, animation: 'fadeUp 0.5s ease both' }}>
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
          {t('reviews.kicker')}
        </div>
        <h1
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: 'clamp(28px,4.5vw,40px)',
            fontWeight: 700,
            margin: '0 0 12px',
            color: '#1b2a4a',
            textTransform: 'uppercase',
          }}
        >
          {t('reviews.headline')}
        </h1>
        <p style={{ fontSize: 15, color: '#4a5468' }}>
          {t('reviews.sub')}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 36,
        }}
      >
        {reviewFilters.map((rf) => {
          const activeFilter = filter === rf.id
          return (
            <button
              key={rf.id}
              onClick={() => setFilter(rf.id)}
              style={{
                border: `2px solid ${activeFilter ? '#b7202f' : '#e5e7eb'}`,
                background: activeFilter ? '#b7202f' : '#fff',
                color: activeFilter ? '#fff' : '#1b2a4a',
                borderRadius: 3,
                padding: '8px 16px',
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {rf.label}
            </button>
          )
        })}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 18,
        }}
      >
        {filtered.map((rv, i) => (
          <div
            key={`${rv.name}-${rv.tag}`}
            className="ui-panel"
            style={{
              animation: 'fadeUp 0.4s ease both',
              animationDelay: `${(i * 0.05).toFixed(2)}s`,
            }}
          >
            <div style={{ color: '#b7202f', fontSize: 14, marginBottom: 10 }}>
              {starString(rv.stars)}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: '#1b2a4a', margin: '0 0 14px' }}>
              “{rv.quote}”
            </p>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1b2a4a' }}>{rv.name}</div>
            <div style={{ fontSize: 12, color: '#4a5468' }}>
              {rv.town} · {tagLabel(rv.tag)}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: 44,
          background: '#fff',
          border: '1px solid #e5e7eb',
          padding: 36,
        }}
      >
        <h3
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: 21,
            fontWeight: 700,
            margin: '0 0 10px',
            color: '#1b2a4a',
            textTransform: 'uppercase',
          }}
        >
          {t('reviews.ctaHeadline')}
        </h3>
        <p style={{ color: '#4a5468', fontSize: 14, marginBottom: 18 }}>
          {t('reviews.ctaSub')}
        </p>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#b7202f',
            color: '#fff',
            borderRadius: 3,
            padding: '12px 22px',
            fontSize: 13.5,
            fontWeight: 700,
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
          }}
        >
          {t('reviews.leaveReview')}
        </a>
      </div>
      </div>
    </section>
  )
}
