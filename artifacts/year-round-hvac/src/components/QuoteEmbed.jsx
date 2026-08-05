import { useEffect, useState } from 'react'

export const QUOTE_EMBED_ORIGIN =
  'https://ef5df434-65a1-4e4d-af8a-67318b01c811-00-38k1p93kvqm6t.worf.replit.dev'
export const QUOTE_EMBED_TOKEN = 'MgUShorqNj1PQOj1PGC_19ABxFz8JiIS'
export const QUOTE_EMBED_SCRIPT = `${QUOTE_EMBED_ORIGIN}/embed.js`

export default function QuoteEmbed({
  maxWidth = '480px',
  minHeight = 600,
  title = 'Lead form',
  className = '',
}) {
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== QUOTE_EMBED_ORIGIN) return
      const data = e.data
      if (!data || data.type !== 'taskflow-form-height') return
      if (data.token && data.token !== QUOTE_EMBED_TOKEN) return
      if (typeof data.height === 'number' && data.height > 0) {
        setHeight(Math.ceil(data.height))
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div className={`quote-embed${className ? ` ${className}` : ''}`}>
      <iframe
        src={`${QUOTE_EMBED_ORIGIN}/embed/lead/${encodeURIComponent(QUOTE_EMBED_TOKEN)}`}
        title={title}
        loading="lazy"
        scrolling="no"
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        style={{
          border: 0,
          width: '100%',
          maxWidth,
          height,
          borderRadius: 8,
          display: 'block',
          margin: '0 auto',
          transition: 'height 150ms ease',
          background: '#fff',
        }}
      />
    </div>
  )
}
