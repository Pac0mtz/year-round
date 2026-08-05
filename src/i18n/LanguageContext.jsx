import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui'
import { getLocalizedContent } from './content'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'yr-lang'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* ignore */
  }
  return null
}

export function LanguageProvider({ children }) {
  const [stored] = useState(readStoredLang)
  const [lang, setLangState] = useState(stored || 'en')
  const [langReady, setLangReady] = useState(stored != null)

  const setLang = (next) => {
    const value = next === 'es' ? 'es' : 'en'
    setLangState(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
  }

  const chooseLang = (next) => {
    setLang(next)
    setLangReady(true)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en'
  }, [lang])

  useEffect(() => {
    document.body.style.overflow = langReady ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [langReady])

  const value = useMemo(() => {
    const strings = ui[lang] || ui.en
    const content = getLocalizedContent(lang)
    const t = (path, fallback = '') => {
      const parts = path.split('.')
      let cur = strings
      for (const part of parts) {
        if (cur == null || typeof cur !== 'object') return fallback || path
        cur = cur[part]
      }
      return typeof cur === 'string' ? cur : fallback || path
    }
    return { lang, setLang, chooseLang, toggleLang, langReady, t, strings, content }
  }, [lang, langReady])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
