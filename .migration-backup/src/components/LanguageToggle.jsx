import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle({ compact = false }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label={t('lang.label')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.22)',
        borderRadius: 3,
        padding: 2,
        gap: 0,
        flexShrink: 0,
      }}
    >
      {[
        { id: 'en', label: t('lang.en'), title: t('lang.switchToEn') },
        { id: 'es', label: t('lang.es'), title: t('lang.switchTo') },
      ].map((opt) => {
        const active = lang === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLang(opt.id)}
            aria-pressed={active}
            title={opt.title}
            style={{
              border: 'none',
              background: active ? '#b7202f' : 'transparent',
              color: active ? '#fff' : '#c3ccdd',
              borderRadius: 2,
              padding: compact ? '5px 8px' : '6px 10px',
              fontSize: compact ? 11 : 12,
              fontWeight: 700,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              fontFamily: "'Public Sans',sans-serif",
              lineHeight: 1,
              minWidth: compact ? 32 : 36,
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
