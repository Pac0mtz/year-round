import { brands } from '../data'

export default function BrandSlider({ variant = 'dark' }) {
  const logos = [...brands, ...brands]
  const isLight = variant === 'light'

  return (
    <div
      className={`brand-slider ${isLight ? 'brand-slider--light' : 'brand-slider--dark'}`}
      aria-label="Brands we service"
    >
      <div className="brand-slider__track">
        {logos.map((brand, i) => (
          <div className="brand-slider__item" key={`${brand.id}-${i}`}>
            <img src={brand.logo} alt={brand.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
