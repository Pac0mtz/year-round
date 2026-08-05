import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ADDRESS_LINE1, ADDRESS_LINE2 } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

/** Bolingbrook HQ */
const HQ = {
  lat: 41.6981,
  lng: -88.0684,
}

/** Service points across Chicagoland suburbs (within ~50 miles of HQ). */
const SERVICE_POINTS = [
  { name: 'Bolingbrook', lat: 41.6981, lng: -88.0684, hq: true },
  { name: 'Naperville', lat: 41.7508, lng: -88.1535 },
  { name: 'Aurora', lat: 41.7606, lng: -88.3201 },
  { name: 'Joliet', lat: 41.525, lng: -88.0817 },
  { name: 'Plainfield', lat: 41.607, lng: -88.2128 },
  { name: 'Romeoville', lat: 41.6475, lng: -88.0895 },
  { name: 'Downers Grove', lat: 41.8089, lng: -88.0112 },
  { name: 'Orland Park', lat: 41.6303, lng: -87.8539 },
  { name: 'Tinley Park', lat: 41.5734, lng: -87.7845 },
  { name: 'Oak Lawn', lat: 41.7109, lng: -87.7581 },
  { name: 'Lemont', lat: 41.6736, lng: -88.0017 },
  { name: 'Lockport', lat: 41.5895, lng: -88.0578 },
  { name: 'Woodridge', lat: 41.747, lng: -88.0503 },
  { name: 'Shorewood', lat: 41.52, lng: -88.2017 },
  { name: 'New Lenox', lat: 41.512, lng: -87.9656 },
  { name: 'Homer Glen', lat: 41.6, lng: -87.9381 },
  { name: 'Wheaton', lat: 41.8661, lng: -88.107 },
  { name: 'Lombard', lat: 41.88, lng: -88.0078 },
  { name: 'Oak Brook', lat: 41.8328, lng: -87.9289 },
  { name: 'Frankfort', lat: 41.4956, lng: -87.8484 },
  { name: 'Crest Hill', lat: 41.5548, lng: -88.0987 },
  { name: 'Darien', lat: 41.7519, lng: -87.9739 },
]

function hqMarkerIcon(label) {
  return L.divIcon({
    className: 'svc-map-marker svc-map-marker--hq',
    html: `
      <div class="svc-map-marker__wrap">
        <span class="svc-map-marker__pulse"></span>
        <span class="svc-map-marker__dot svc-map-marker__dot--hq"></span>
        <span class="svc-map-marker__label svc-map-marker__label--hq">${label}</span>
      </div>
    `,
    iconSize: [120, 44],
    iconAnchor: [12, 12],
  })
}

function townMarkerIcon(name) {
  return L.divIcon({
    className: 'svc-map-marker svc-map-marker--town',
    html: `
      <div class="svc-map-marker__wrap">
        <span class="svc-map-marker__dot"></span>
        <span class="svc-map-marker__label">${name}</span>
      </div>
    `,
    iconSize: [110, 28],
    iconAnchor: [6, 6],
  })
}

export default function ServiceAreaMap({
  id = 'service-area-map',
  height = 360,
  className = '',
}) {
  const { t, lang } = useLanguage()
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const isEs = lang === 'es'
    const hqLabel = isEs ? 'Sede · Bolingbrook' : 'HQ · Bolingbrook'
    const servesLabel = isEs ? 'Área de servicio' : 'Service area'
    const popupHq = isEs
      ? `<strong>Year Round HVAC</strong><br/>${ADDRESS_LINE1}<br/>${ADDRESS_LINE2}<br/><em>Sede — suburbios de Chicagoland</em>`
      : `<strong>Year Round HVAC</strong><br/>${ADDRESS_LINE1}<br/>${ADDRESS_LINE2}<br/><em>HQ — Chicagoland suburbs</em>`

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    }).setView([HQ.lat, HQ.lng], 10)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18,
    }).addTo(map)

    // Light connector lines from HQ to each town
    SERVICE_POINTS.forEach((point) => {
      if (point.hq) return
      L.polyline(
        [
          [HQ.lat, HQ.lng],
          [point.lat, point.lng],
        ],
        {
          color: '#1b2a4a',
          weight: 1,
          opacity: 0.16,
          dashArray: '4 6',
          interactive: false,
        },
      ).addTo(map)
    })

    // Town / HQ markers with permanent labels
    SERVICE_POINTS.forEach((point) => {
      if (point.hq) {
        L.marker([point.lat, point.lng], {
          icon: hqMarkerIcon(hqLabel),
          zIndexOffset: 1000,
        })
          .addTo(map)
          .bindPopup(popupHq)
        return
      }

      L.marker([point.lat, point.lng], {
        icon: townMarkerIcon(point.name),
        zIndexOffset: 200,
      })
        .addTo(map)
        .bindPopup(`<strong>${point.name}</strong><br/>${servesLabel}`)
    })

    const bounds = L.latLngBounds(SERVICE_POINTS.map((p) => [p.lat, p.lng]))
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 })

    mapRef.current = map

    const onResize = () => map.invalidateSize()
    window.addEventListener('resize', onResize)
    const timer = window.setTimeout(() => map.invalidateSize(), 100)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('resize', onResize)
      map.remove()
      mapRef.current = null
    }
  }, [lang])

  const legendTowns = SERVICE_POINTS.filter((p) => !p.hq).length

  return (
    <div id={id} className={`svc-area-map ${className}`.trim()} style={{ height }}>
      <div
        ref={containerRef}
        className="svc-area-map__canvas"
        role="img"
        aria-label={t('contact.mapAlt')}
      />
      <div className="svc-area-map__legend">
        <div className="svc-area-map__legend-row">
          <span className="svc-area-map__legend-hq" />
          <span>{lang === 'es' ? 'Sede' : 'Headquarters'}</span>
        </div>
        <div className="svc-area-map__legend-row">
          <span className="svc-area-map__legend-town" />
          <span>
            {lang === 'es' ? `${legendTowns} pueblos` : `${legendTowns} towns`}
          </span>
        </div>
      </div>
      <div className="svc-area-map__badge">
        <strong>{t('home.mapBadge')}</strong>
        <span>
          {ADDRESS_LINE1}, {ADDRESS_LINE2}
        </span>
      </div>
    </div>
  )
}
