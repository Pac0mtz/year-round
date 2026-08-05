import { useEffect } from 'react'
import {
  COMPANY_NAME,
  EMAIL,
  FULL_ADDRESS,
  GEO,
  GOOGLE_MAPS_URL,
  OG_IMAGE,
  PHONE,
  SITE_ORIGIN,
  pathForPage,
} from '../data'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function absoluteUrl(path) {
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_ORIGIN
  if (!path) return origin
  if (path.startsWith('http')) return path
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export default function Seo({ page, service, lang, title, description }) {
  useEffect(() => {
    const path = service ? `/services/${service.id}` : pathForPage(page)
    const url = absoluteUrl(path)
    const image = absoluteUrl(service?.image || OG_IMAGE)
    const desc = description || ''
    const pageTitle = title || COMPANY_NAME

    document.title = pageTitle
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en'

    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'theme-color', '#1b2a4a')
    upsertMeta('name', 'geo.region', 'US-IL')
    upsertMeta('name', 'geo.placename', 'Bolingbrook')
    upsertMeta('name', 'geo.position', `${GEO.lat};${GEO.lng}`)
    upsertMeta('name', 'ICBM', `${GEO.lat}, ${GEO.lng}`)

    upsertMeta('property', 'og:type', service ? 'website' : page === 'home' ? 'website' : 'website')
    upsertMeta('property', 'og:site_name', COMPANY_NAME)
    upsertMeta('property', 'og:locale', lang === 'es' ? 'es_MX' : 'en_US')
    upsertMeta('property', 'og:title', pageTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', service?.label || COMPANY_NAME)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', pageTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', image)

    upsertLink('canonical', url)

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'HVACBusiness',
      name: COMPANY_NAME,
      image: absoluteUrl('/logo-mark.png'),
      url: absoluteUrl('/'),
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '459 Pheasant Chase Dr',
        addressLocality: 'Bolingbrook',
        addressRegion: 'IL',
        postalCode: '60490',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: GEO.lat,
          longitude: GEO.lng,
        },
        geoRadius: '80467',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '16:00',
        },
      ],
      priceRange: '$$',
      sameAs: [GOOGLE_MAPS_URL, 'https://www.buildzoom.com/contractor/year-round-heating-air-conditioning-inc'],
      hasMap: GOOGLE_MAPS_URL,
    }

    upsertJsonLd('ld-local-business', localBusiness)

    if (service) {
      upsertJsonLd('ld-service', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.label,
        description: service.sub || service.short,
        provider: { '@type': 'HVACBusiness', name: COMPANY_NAME },
        areaServed: 'Chicagoland, IL',
        url,
        image: absoluteUrl(service.image),
      })
    } else {
      const existing = document.getElementById('ld-service')
      if (existing) existing.remove()
    }

    if (service?.faq?.length) {
      upsertJsonLd('ld-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      })
    } else {
      const existing = document.getElementById('ld-faq')
      if (existing) existing.remove()
    }
  }, [page, service, lang, title, description])

  return null
}
