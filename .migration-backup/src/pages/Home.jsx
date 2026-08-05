import { useEffect, useRef, useState } from 'react'
import BrandSlider from '../components/BrandSlider'
import ServiceAreaMap from '../components/ServiceAreaMap'
import { PHONE, PHONE_TEL, towns, starString } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { interpolate } from '../i18n/content'

const initialStats = { years: 0, homesDisplay: 0, rating: '0.0', response: 0 }

export default function Home({ onNavigate, onOpenBooking, statsAnimated = true }) {
  const { t, content, lang } = useLanguage()
  const { services, testimonials, tips, trustBadges } = content
  const statsRef = useRef(null)
  const started = useRef(false)
  const [statCounts, setStatCounts] = useState(initialStats)

  useEffect(() => {
    started.current = false
    setStatCounts(initialStats)
  }, [lang])

  useEffect(() => {
    const node = statsRef.current
    if (!node || started.current) return

    const run = () => {
      if (started.current) return
      started.current = true
      const targets = { years: 27, homes: 12000, rating: 4.9, response: 2 }

      if (!statsAnimated) {
        setStatCounts({
          years: targets.years,
          homesDisplay: targets.homes.toLocaleString(lang === 'es' ? 'es-US' : 'en-US'),
          rating: targets.rating.toFixed(1),
          response: targets.response,
        })
        return
      }

      const duration = 1300
      const start = performance.now()
      const step = (time) => {
        const p = Math.min((time - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        const homes = Math.round(targets.homes * ease)
        setStatCounts({
          years: Math.round(targets.years * ease),
          homesDisplay: homes.toLocaleString(lang === 'es' ? 'es-US' : 'en-US'),
          rating: (targets.rating * ease).toFixed(1),
          response: Math.max(1, Math.round(targets.response * ease)),
        })
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) run()
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [statsAnimated, lang])

  const homeTestimonials = testimonials.slice(0, 4)
  const homeTips = tips.slice(0, 3)

  return (
    <section>
      <div className="hero-video" aria-label="Year Round Heating and Air Conditioning">
        <div className="hero-video__media">
          <video
            src="/videos/hero-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-home.jpg"
            aria-hidden="true"
          />
        </div>
        <div className="hero-video__shade" />
        <div className="hero-video__content">
          <p
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px,5vw,42px)',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              margin: '0 0 18px',
            }}
          >
            Year Round
          </p>
          <h1
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(34px,6vw,58px)',
              lineHeight: 1.05,
              margin: '0 0 20px',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              maxWidth: 720,
            }}
          >
            {t('home.headline')}
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: '#d7deea',
              maxWidth: 520,
              margin: '0 0 28px',
            }}
          >
            {t('home.sub')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button
              className="ui-btn"
              onClick={onOpenBooking}
              style={{
                background: '#b7202f',
                color: '#fff',
                border: 'none',
                borderRadius: 3,
                padding: '15px 26px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('home.schedule')}
            </button>
            <a
              href={PHONE_TEL}
              className="ui-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '2px solid #fff',
                borderRadius: 3,
                padding: '13px 24px',
                fontSize: 15,
                fontWeight: 700,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('home.call')} {PHONE}
            </a>
          </div>
        </div>
      </div>

      <div
        className="band band--slate band--compact"
        style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {trustBadges.map((label) => (
          <div
            key={label}
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#4a5468',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
            }}
          >
            <span style={{ color: '#b7202f' }}>✓</span>
            {label}
          </div>
        ))}
      </div>

      <div className="band band--ink-deep band--compact" style={{ overflow: 'hidden', paddingTop: 22, paddingBottom: 22 }}>
        <div className="band__inner" style={{ marginBottom: 10, textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: '#8f9ab5',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {t('home.brands')}
          </div>
        </div>
        <BrandSlider variant="dark" />
      </div>

      <div className="band band--mist">
        <div className="band__inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
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
              {t('home.whatWeDo')}
            </div>
            <h2
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 34,
                fontWeight: 700,
                margin: 0,
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('home.servicesHeadline')}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#4a5468',
                margin: '12px auto 0',
                maxWidth: 560,
                lineHeight: 1.55,
              }}
            >
              {t('home.servicesSub')}
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 18,
            }}
          >
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className="ui-card"
                role="button"
                tabIndex={0}
                onClick={() => onNavigate(svc.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onNavigate(svc.id)
                  }
                }}
                style={{
                  animation: 'fadeUp 0.5s ease both',
                  animationDelay: `${(i * 0.06).toFixed(2)}s`,
                }}
              >
                <img src={svc.icon} alt="" width={56} height={56} className="ui-card__icon" />
                <div
                  style={{
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 6,
                    color: '#1b2a4a',
                    textTransform: 'uppercase',
                  }}
                >
                  {svc.label}
                </div>
                <div style={{ fontSize: 13.5, color: '#4a5468', lineHeight: 1.5, marginBottom: 12 }}>
                  {svc.short}
                </div>
                <span className="ui-card__link">{t('home.learnMore')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={statsRef} className="band band--ink band--mid">
        <div
          className="band__inner--narrow"
          style={{
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: 24,
            textAlign: 'center',
          }}
        >
          {[
            [`${statCounts.years}+`, t('home.years'), '#fff'],
            [`${statCounts.homesDisplay}+`, t('home.systems'), '#fff'],
            [`${statCounts.rating}★`, t('home.rating'), '#ff8d97'],
            [
              interpolate(t('home.responseValue'), { n: statCounts.response }),
              t('home.response'),
              '#fff',
            ],
          ].map(([value, label, color]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: 42,
                  fontWeight: 700,
                  color,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: '#a9b3ca',
                  fontWeight: 700,
                  marginTop: 6,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="band band--white">
        <div
          className="band__inner"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div className="ui-media ui-media--map" style={{ height: 420 }}>
            <ServiceAreaMap id="service-area-map" height={420} />
          </div>
          <div>
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
              {t('home.serviceArea')}
            </div>
            <h2
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 30,
                fontWeight: 700,
                margin: '0 0 14px',
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('home.areaHeadline')}
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#4a5468', marginBottom: 22 }}>
              {t('home.areaSub')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {towns.map((town) => (
                <span key={town} className="ui-chip">
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="band band--slate">
        <div className="band__inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
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
              {t('home.realCustomers')}
            </div>
            <h2
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 34,
                fontWeight: 700,
                margin: 0,
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('home.reviewsHeadline')}
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 18,
            }}
          >
            {homeTestimonials.map((rv, i) => (
              <div
                key={rv.name}
                className="ui-panel"
                style={{
                  animation: 'fadeUp 0.5s ease both',
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
                <div style={{ fontSize: 12, color: '#4a5468' }}>{rv.town}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a
              onClick={() => onNavigate('reviews')}
              style={{
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('home.readAllReviews')}
            </a>
          </div>
        </div>
      </div>

      <div className="band band--blush">
        <div className="band__inner">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
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
              {t('home.fromTechs')}
            </div>
            <h2
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: 34,
                fontWeight: 700,
                margin: 0,
                color: '#1b2a4a',
                textTransform: 'uppercase',
              }}
            >
              {t('home.tipsHeadline')}
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 18,
            }}
          >
            {homeTips.map((tip, i) => (
              <div
                key={tip.title}
                className="ui-card"
                role="button"
                tabIndex={0}
                onClick={() => onNavigate('tips')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onNavigate('tips')
                  }
                }}
                style={{
                  animation: 'fadeUp 0.5s ease both',
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
                <div style={{ fontSize: 13.5, color: '#4a5468', lineHeight: 1.5, marginBottom: 12 }}>
                  {tip.excerpt}
                </div>
                <span className="ui-card__link">{t('home.readTip')}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a
              onClick={() => onNavigate('tips')}
              style={{
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('home.moreTips')}
            </a>
          </div>
        </div>
      </div>

      <div className="band band--red" style={{ textAlign: 'center', paddingTop: 64, paddingBottom: 64 }}>
        <h2
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: 32,
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 14px',
            textTransform: 'uppercase',
          }}
        >
          {t('home.ctaHeadline')}
        </h2>
        <p style={{ color: '#fbe4e6', fontSize: 15.5, marginBottom: 26 }}>
          {t('home.ctaSub')}
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="ui-btn"
            onClick={onOpenBooking}
            style={{
              background: '#1b2a4a',
              color: '#fff',
              border: 'none',
              borderRadius: 3,
              padding: '15px 28px',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
            }}
          >
            {t('home.schedule')}
          </button>
          <a
            href={PHONE_TEL}
            style={{
              border: '2px solid #fff',
              color: '#fff',
              borderRadius: 3,
              padding: '13px 24px',
              fontSize: 15,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
            }}
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}
