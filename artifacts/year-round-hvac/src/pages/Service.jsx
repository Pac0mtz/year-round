import { useMemo, useState } from 'react'
import BrandSlider from '../components/BrandSlider'
import { PHONE, PHONE_TEL } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { interpolate } from '../i18n/content'

const SECONDARY_BY_ID = {
  'ac-repair': 'ac-install',
  'ac-install': 'ac-repair',
  'furnace-repair': 'heating-install',
  'heating-install': 'furnace-repair',
  'duct-cleaning': 'ac-repair',
  commercial: 'emergency',
  'water-heaters': 'heating-install',
  electrical: 'emergency',
  emergency: 'furnace-repair',
}

export default function Service({ service, onOpenBooking, onNavigate }) {
  const { t, content, strings } = useLanguage()
  const { services } = content
  const trust = strings.service.trust
  const subServices = service.subServices || []
  const related = (service.relatedIds || [])
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean)
  const [openFaq, setOpenFaq] = useState(0)
  const [activeSign, setActiveSign] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [activeInclude, setActiveInclude] = useState(0)

  const secondaryImage = useMemo(() => {
    const relatedSvc = services.find((s) => s.id === SECONDARY_BY_ID[service.id])
    return relatedSvc?.image || service.image
  }, [service.id, service.image, services])

  const bookSub = () => {
    onOpenBooking()
  }

  return (
    <section className="svc">
      <header
        className="svc-hero"
        style={{ backgroundImage: `url(${service.image || '/images/hero-home.jpg'})` }}
      >
        <div className="svc-hero__shade" />
        <div className="svc-hero__content">
          <div className="svc-hero__kicker">{service.kicker}</div>
          <h1>{service.headline}</h1>
          <p>{service.sub}</p>
          <div className="svc-hero__actions">
            <button
              type="button"
              className="svc-btn svc-btn--primary ui-btn"
              onClick={() => onOpenBooking({ service: service.label })}
            >
              {interpolate(t('service.schedule'), { label: service.label })}
            </button>
            <a href={PHONE_TEL} className="svc-btn svc-btn--ghost">
              {PHONE}
            </a>
          </div>
        </div>
      </header>

      <div className="svc-trust">
        <div className="svc-trust__inner">
          {trust.map((item) => (
            <button key={item.label} type="button" className="svc-trust__item" title={item.detail}>
              <span className="svc-trust__mark" aria-hidden="true" />
              <span className="svc-trust__text">
                <strong>{item.label}</strong>
                <em>{item.detail}</em>
              </span>
            </button>
          ))}
        </div>
      </div>

      {subServices.length > 0 && (
        <div className="band band--white svc-subs">
          <div className="band__inner">
            <div className="svc-section-head">
              <div className="svc-eyebrow">{t('service.subKicker')}</div>
              <h2>{t('service.subHeadline')}</h2>
              <p>{t('service.subSub')}</p>
            </div>

            <div className="svc-subs__grid">
              {subServices.map((sub, i) => (
                <button
                  key={sub.id}
                  type="button"
                  className={`svc-sub ${sub.popular ? 'is-popular' : ''}`}
                  style={{ animationDelay: `${(i * 0.05).toFixed(2)}s` }}
                  onClick={() => bookSub(sub)}
                >
                  <span className="svc-sub__top">
                    <span className="svc-sub__icon-wrap">
                      <img src={sub.icon} alt="" width={56} height={56} className="svc-sub__icon" />
                    </span>
                    {sub.popular && <span className="svc-sub__badge">{t('service.popular')}</span>}
                  </span>
                  <strong className="svc-sub__title">{sub.title}</strong>
                  <span className="svc-sub__desc">{sub.desc}</span>
                  <span className="svc-sub__cta">{t('service.bookThis')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="band band--mist">
        <div className="band__inner band__inner--narrow">
          <div className="svc-section-head">
            <div className="svc-eyebrow">{t('service.whenToCall')}</div>
            <h2>{t('service.signsHeadline')}</h2>
            <p>{t('service.signsSub')}</p>
          </div>

          <div className="svc-signs">
            <div className="svc-signs__list" role="listbox" aria-label={t('service.symptoms')}>
              {service.signs.map((text, i) => {
                const selected = activeSign === i
                return (
                  <button
                    key={text}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`svc-sign ${selected ? 'is-active' : ''}`}
                    onClick={() => setActiveSign(i)}
                  >
                    <span className="svc-sign__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc-sign__label">{text}</span>
                  </button>
                )
              })}
            </div>

            <aside className="svc-signs__detail">
              <div className="svc-signs__media">
                <img src={service.image} alt={`${service.label} equipment`} />
              </div>
              <div className="svc-signs__copy">
                <div className="svc-eyebrow">{t('service.symptomFocus')}</div>
                <h3>{service.signs[activeSign]}</h3>
                <p>
                  {interpolate(t('service.symptomCopy'), { label: service.label.toLowerCase() })}
                </p>
                <button
                  type="button"
                  className="svc-btn svc-btn--primary ui-btn"
                  onClick={() => onOpenBooking({ service: service.label })}
                >
                  {t('service.bookDiagnostic')}
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="band band--white">
        <div className="band__inner band__inner--narrow">
          <div className="svc-split">
            <div className="svc-split__media">
              <img src={secondaryImage} alt={`Related ${service.label} work`} />
              <div className="svc-split__caption">
                <strong>{t('service.resCom')}</strong>
                <span>{t('service.resComSub')}</span>
              </div>
            </div>

            <div className="svc-split__body">
              <div className="svc-section-head svc-section-head--left">
                <div className="svc-eyebrow">{t('service.coverage')}</div>
                <h2>{t('service.included')}</h2>
                <p>{t('service.includedSub')}</p>
              </div>

              <div className="svc-includes">
                {service.included.map((inc, i) => {
                  const open = activeInclude === i
                  return (
                    <button
                      key={inc.t}
                      type="button"
                      className={`svc-include ${open ? 'is-open' : ''}`}
                      onClick={() => setActiveInclude(i)}
                      aria-expanded={open}
                    >
                      <span className="svc-include__top">
                        <span className="svc-include__index">{String(i + 1).padStart(2, '0')}</span>
                        <span className="svc-include__title">{inc.t}</span>
                        <span className="svc-include__toggle" aria-hidden="true">
                          {open ? '−' : '+'}
                        </span>
                      </span>
                      <span className={`svc-include__body ${open ? 'is-open' : ''}`}>{inc.d}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="band band--slate">
        <div className="band__inner band__inner--narrow">
          <div className="svc-section-head">
            <div className="svc-eyebrow">{t('service.processKicker')}</div>
            <h2>{t('service.processHeadline')}</h2>
            <p>{t('service.processSub')}</p>
          </div>

          <div className="svc-process">
            <div className="svc-process__tabs" role="tablist" aria-label={t('service.processLabel')}>
              {service.process.map((step, i) => (
                <button
                  key={step.n}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === i}
                  className={`svc-process__tab ${activeStep === i ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span>{step.n}</span>
                  {step.t}
                </button>
              ))}
            </div>

            <div className="svc-process__panel" role="tabpanel">
              <div className="svc-process__num" aria-hidden="true">
                {service.process[activeStep].n}
              </div>
              <div>
                <h3>{service.process[activeStep].t}</h3>
                <p>{service.process[activeStep].d}</p>
                <div className="svc-process__actions">
                  <button
                    type="button"
                    className="svc-btn svc-btn--primary ui-btn"
                    onClick={() => onOpenBooking({ service: service.label })}
                  >
                    {t('service.startStep')}
                  </button>
                  <a href={PHONE_TEL} className="svc-link">
                    {interpolate(t('service.orCall'), { phone: PHONE })}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="band band--ink-deep band--mid svc-brands">
        <div className="band__inner">
          <div className="svc-section-head svc-section-head--light">
            <div className="svc-eyebrow svc-eyebrow--light">{t('service.brandsKicker')}</div>
            <h2>{t('service.brandsHeadline')}</h2>
            <p>{t('service.brandsSub')}</p>
          </div>
        </div>
        <BrandSlider variant="dark" />
      </div>

      <div className="band band--white">
        <div className="band__inner" style={{ maxWidth: 820 }}>
          <div className="svc-section-head svc-section-head--left">
            <div className="svc-eyebrow">{t('service.faqKicker')}</div>
            <h2>{t('service.faqHeadline')}</h2>
          </div>

          <div className="svc-faq">
            {service.faq.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={f.q} className={`svc-faq__item ${open ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="svc-faq__q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="svc-faq__icon" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`svc-faq__a ${open ? 'is-open' : ''}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="band band--mist svc-related">
          <div className="band__inner">
            <div className="svc-section-head">
              <div className="svc-eyebrow">{t('service.relatedKicker')}</div>
              <h2>{t('service.relatedHeadline')}</h2>
            </div>
            <div className="svc-related__grid">
              {related.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className="svc-related__card"
                  onClick={() => onNavigate?.(svc.id)}
                >
                  <img src={svc.icon} alt="" width={40} height={40} className="svc-related__icon" />
                  <span>
                    <strong>{svc.label}</strong>
                    <em>{svc.short}</em>
                  </span>
                  <span className="svc-related__link">{t('service.relatedCta')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="band band--ink svc-cta">
        <div className="band__inner svc-cta__inner">
          <div>
            <h2>{service.ctaHeadline}</h2>
            <p>{t('service.ctaSub')}</p>
          </div>
          <div className="svc-cta__actions">
            <button
              type="button"
              className="svc-btn svc-btn--primary ui-btn"
              onClick={() => onOpenBooking({ service: service.label })}
            >
              {t('service.scheduleService')}
            </button>
            <a href={PHONE_TEL} className="svc-btn svc-btn--ghost">
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
