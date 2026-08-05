import { useEffect, useId, useRef } from 'react'

const MAX_PHOTOS = 4
const MAX_BYTES = 5 * 1024 * 1024
const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif'

const inputStyle = {
  padding: '12px 13px',
  border: '1px solid #e5e7eb',
  borderRadius: 3,
  fontSize: 14,
  fontFamily: "'Public Sans',sans-serif",
  color: '#1b2a4a',
  width: '100%',
  background: '#fff',
}

export default function QuoteForm({
  form,
  services,
  onChange,
  onSubmit,
  labels,
  showAddress = true,
  showDate = true,
  showMessage = true,
  compact = false,
}) {
  const fileId = useId()
  const inputRef = useRef(null)
  const photos = form.photos || []

  useEffect(() => {
    return () => {
      photos.forEach((p) => {
        if (p?.url) URL.revokeObjectURL(p.url)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- revoke only on unmount
  }, [])

  const setPhotos = (next) => onChange('photos', next)

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList || [])
    if (!incoming.length) return

    const room = MAX_PHOTOS - photos.length
    if (room <= 0) return

    const accepted = []
    for (const file of incoming.slice(0, room)) {
      if (!file.type.startsWith('image/')) continue
      if (file.size > MAX_BYTES) continue
      accepted.push({
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        size: file.size,
        url: URL.createObjectURL(file),
      })
    }
    if (accepted.length) setPhotos([...photos, ...accepted])
  }

  const removePhoto = (id) => {
    const target = photos.find((p) => p.id === id)
    if (target?.url) URL.revokeObjectURL(target.url)
    setPhotos(photos.filter((p) => p.id !== id))
  }

  const onDrop = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove('quote-upload--drag')
    addFiles(e.dataTransfer.files)
  }

  return (
    <form
      className={`quote-form${compact ? ' quote-form--compact' : ''}`}
      onSubmit={onSubmit}
    >
      <input
        placeholder={labels.fullName}
        value={form.name}
        onChange={(e) => onChange('name', e.target.value)}
        required
        autoComplete="name"
        style={{ ...inputStyle, gridColumn: '1 / -1' }}
      />
      <input
        placeholder={labels.phone}
        value={form.phone}
        onChange={(e) => onChange('phone', e.target.value)}
        required
        autoComplete="tel"
        inputMode="tel"
        style={inputStyle}
      />
      <input
        placeholder={labels.email}
        type="email"
        value={form.email}
        onChange={(e) => onChange('email', e.target.value)}
        autoComplete="email"
        style={inputStyle}
      />

      {showAddress && (
        <input
          placeholder={labels.address}
          value={form.address}
          onChange={(e) => onChange('address', e.target.value)}
          autoComplete="street-address"
          style={{ ...inputStyle, gridColumn: '1 / -1' }}
        />
      )}

      <div className="quote-field" style={{ gridColumn: '1 / -1' }}>
        <div className="quote-field__label">{labels.need}</div>
        <div className="quote-services" role="listbox" aria-label={labels.need}>
          {services.map((svc) => {
            const selected = form.service === svc.label
            return (
              <button
                key={svc.id}
                type="button"
                role="option"
                aria-selected={selected}
                className={`quote-service${selected ? ' is-selected' : ''}`}
                onClick={() => onChange('service', selected ? '' : svc.label)}
              >
                <span className="quote-service__badge">{svc.badge || svc.label.slice(0, 2)}</span>
                <span className="quote-service__label">{svc.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {showDate && (
        <label className="quote-field" style={{ gridColumn: compact ? '1 / -1' : undefined }}>
          <span className="quote-field__label">{labels.preferredDate}</span>
          <input
            type="date"
            value={form.date}
            onChange={(e) => onChange('date', e.target.value)}
            style={inputStyle}
          />
        </label>
      )}

      {showMessage && (
        <textarea
          placeholder={labels.message}
          value={form.message}
          onChange={(e) => onChange('message', e.target.value)}
          rows={compact ? 3 : 4}
          style={{
            ...inputStyle,
            gridColumn: '1 / -1',
            resize: 'vertical',
            minHeight: compact ? 72 : 96,
          }}
        />
      )}

      <div className="quote-field" style={{ gridColumn: '1 / -1' }}>
        <div className="quote-field__label">{labels.photos}</div>
        <p className="quote-field__hint">{labels.photosHint}</p>

        <input
          ref={inputRef}
          id={fileId}
          type="file"
          accept={ACCEPT}
          multiple
          hidden
          onChange={(e) => {
            addFiles(e.target.files)
            e.target.value = ''
          }}
        />

        <div
          className="quote-upload"
          onDragOver={(e) => {
            e.preventDefault()
            e.currentTarget.classList.add('quote-upload--drag')
          }}
          onDragLeave={(e) => e.currentTarget.classList.remove('quote-upload--drag')}
          onDrop={onDrop}
          onClick={() => photos.length < MAX_PHOTOS && inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              if (photos.length < MAX_PHOTOS) inputRef.current?.click()
            }
          }}
        >
          <div className="quote-upload__icon" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16V8m0 0l-3 3m3-3l3 3M4 16.5V18a2 2 0 002 2h12a2 2 0 002-2v-1.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="quote-upload__text">
            <strong>{labels.photosCta}</strong>
            <span>
              {photos.length}/{MAX_PHOTOS} · JPG, PNG, WEBP · max 5MB
            </span>
          </div>
        </div>

        {photos.length > 0 && (
          <div className="quote-photos">
            {photos.map((photo) => (
              <div key={photo.id} className="quote-photo">
                <img src={photo.url} alt={photo.name} />
                <button
                  type="button"
                  className="quote-photo__remove"
                  aria-label={`${labels.removePhoto} ${photo.name}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    removePhoto(photo.id)
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button type="submit" className="quote-submit">
        {labels.submit}
      </button>
    </form>
  )
}
