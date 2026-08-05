export default function ImageSlot({
  id,
  src,
  alt,
  shape = 'rounded',
  radius = 4,
  placeholder,
  style,
}) {
  const isCircle = shape === 'circle'
  const shared = {
    borderRadius: isCircle ? '50%' : radius,
    overflow: 'hidden',
    ...style,
  }

  if (src) {
    return (
      <img
        id={id}
        src={src}
        alt={alt || placeholder || ''}
        style={{
          display: 'block',
          objectFit: 'cover',
          ...shared,
        }}
      />
    )
  }

  return (
    <div
      id={id}
      role="img"
      aria-label={placeholder || 'Image placeholder'}
      style={{
        background: 'linear-gradient(145deg, #e8e4da 0%, #d5d0c4 45%, #c8c2b4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4a5468',
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center',
        padding: 20,
        lineHeight: 1.4,
        ...shared,
      }}
    >
      {placeholder}
    </div>
  )
}
