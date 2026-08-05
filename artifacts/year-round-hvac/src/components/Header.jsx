import { PHONE, PHONE_TEL } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Header({
  page,
  isMobile,
  servicesOpen,
  mobileOpen,
  onNavigate,
  onToggleServices,
  onToggleMobile,
  onOpenBooking,
}) {
  const { t, content } = useLanguage()
  const { services } = content
  const isService = services.some((s) => s.id === page)
  const navColor = (id) => (page === id ? '#b7202f' : '#fff')
  const serviceColor = isService || servicesOpen ? '#b7202f' : '#fff'

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: '#1b2a4a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px clamp(20px,4vw,40px)',
          borderBottom: '3px solid #b7202f',
          gap: 12,
        }}
      >
        <div
          onClick={() => onNavigate('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}
        >
          <img
            src="/logo-mark.png"
            alt="Year Round Heating & Air Conditioning"
            width={46}
            height={46}
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              border: '2px solid #b7202f',
              objectFit: 'cover',
              background: '#1b2a4a',
              flexShrink: 0,
            }}
          />
          <div className="header-brand__text">
            <span
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              Year Round
            </span>
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#e8b3ba',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              {t('nav.brandTag')}
            </div>
          </div>
        </div>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            <a
              onClick={() => onNavigate('home')}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: navColor('home'),
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {t('nav.home')}
            </a>
            <div style={{ position: 'relative' }}>
              <span
                onClick={onToggleServices}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: serviceColor,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                {t('nav.services')}{' '}
                <span
                  style={{
                    fontSize: 9,
                    transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  ▼
                </span>
              </span>
              {servicesOpen && (
                <div className="mega-menu" role="menu">
                  <div className="mega-menu__grid">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        role="menuitem"
                        className={`mega-menu__item${page === svc.id ? ' is-active' : ''}`}
                        onClick={() => onNavigate(svc.id)}
                      >
                        <img
                          src={svc.icon}
                          alt=""
                          width={44}
                          height={44}
                          className="mega-menu__icon"
                        />
                        <span className="mega-menu__text">
                          <strong>{svc.label}</strong>
                          <em>{svc.short}</em>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {[
              ['about', t('nav.about')],
              ['reviews', t('nav.reviews')],
              ['tips', t('nav.tips')],
              ['contact', t('nav.contact')],
            ].map(([id, label]) => (
              <a
                key={id}
                onClick={() => onNavigate(id)}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: navColor(id),
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LanguageToggle compact={isMobile} />
          {!isMobile && (
            <a
              href={PHONE_TEL}
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: '#fff',
              }}
            >
              {PHONE}
            </a>
          )}
          <button
            onClick={onOpenBooking}
            style={{
              background: '#b7202f',
              color: '#fff',
              border: 'none',
              borderRadius: 3,
              padding: isMobile ? '10px 12px' : '11px 20px',
              fontSize: isMobile ? 11.5 : 13,
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {t('nav.schedule')}
          </button>
          {isMobile && (
            <button
              onClick={onToggleMobile}
              aria-label={t('nav.openMenu')}
              style={{
                background: 'none',
                border: '1px solid #3a4a6b',
                borderRadius: 3,
                width: 38,
                height: 38,
                fontSize: 18,
                cursor: 'pointer',
                color: '#fff',
              }}
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#1b2a4a',
            zIndex: 60,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            animation: 'fadeIn 0.2s ease',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <LanguageToggle />
            <button
              onClick={onToggleMobile}
              aria-label={t('nav.closeMenu')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 26,
                cursor: 'pointer',
                color: '#fff',
              }}
            >
              ×
            </button>
          </div>
          <a
            onClick={() => onNavigate('home')}
            style={{
              fontSize: 22,
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 600,
              color: '#fff',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {t('nav.home')}
          </a>
          <a
            onClick={() => onNavigate('about')}
            style={{
              fontSize: 22,
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 600,
              color: '#fff',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {t('nav.about')}
          </a>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#e8b3ba',
              marginTop: 6,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {t('nav.services')}
          </div>
          <div className="mega-menu--mobile">
            {services.map((svc) => (
              <button
                key={svc.id}
                type="button"
                className="mega-menu__item mega-menu__item--mobile"
                onClick={() => onNavigate(svc.id)}
              >
                <img src={svc.icon} alt="" width={40} height={40} className="mega-menu__icon" />
                <span className="mega-menu__text">
                  <strong>{svc.label}</strong>
                </span>
              </button>
            ))}
          </div>
          {[
            ['reviews', t('nav.reviews')],
            ['tips', t('nav.tips')],
            ['contact', t('nav.contact')],
          ].map(([id, label]) => (
            <a
              key={id}
              onClick={() => onNavigate(id)}
              style={{
                fontSize: 22,
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 600,
                color: '#fff',
                marginTop: id === 'reviews' ? 6 : 0,
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#e8b3ba',
              marginTop: 10,
            }}
          >
            {PHONE}
          </a>
        </div>
      )}
    </>
  )
}
