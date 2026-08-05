import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageGate() {
  const { chooseLang, langReady } = useLanguage()

  if (langReady) return null

  return (
    <div className="lang-gate" role="dialog" aria-modal="true" aria-labelledby="lang-gate-title">
      <div className="lang-gate__panel">
        <img
          src="/logo-mark.png"
          alt="Year Round Heating & Air Conditioning"
          width={112}
          height={112}
          className="lang-gate__logo"
        />
        <h1 id="lang-gate-title" className="lang-gate__brand">
          Year Round
        </h1>
        <p className="lang-gate__tag">Heating &amp; Air Conditioning</p>
        <p className="lang-gate__prompt">
          Choose your language
          <span aria-hidden="true"> · </span>
          Elija su idioma
        </p>
        <div className="lang-gate__actions">
          <button type="button" className="lang-gate__btn lang-gate__btn--en" onClick={() => chooseLang('en')}>
            English
          </button>
          <button type="button" className="lang-gate__btn lang-gate__btn--es" onClick={() => chooseLang('es')}>
            Español
          </button>
        </div>
      </div>
    </div>
  )
}
