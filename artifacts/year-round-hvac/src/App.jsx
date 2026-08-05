import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Seo from './components/Seo'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Reviews from './pages/Reviews'
import Tips from './pages/Tips'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import { COMPANY_NAME, PHONE, PHONE_TEL, pageFromPath, pathForPage } from './data'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import LanguageGate from './components/LanguageGate'

function AppShell() {
  const { t, content, lang } = useLanguage()
  const { services, seoMap } = content
  const [page, setPage] = useState(() =>
    typeof window !== 'undefined' ? pageFromPath(window.location.pathname, services) : 'home',
  )
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 880 : false,
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [emergencyEnabled] = useState(true)

  const currentService = services.find((s) => s.id === page)
  const openBooking = () => setBookingOpen(true)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 880)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname, services))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [services])

  let seoTitle
  let seoDesc
  if (currentService) {
    seoTitle =
      lang === 'es'
        ? `${currentService.label} en Bolingbrook, IL | ${COMPANY_NAME}`
        : `${currentService.label} in Bolingbrook, IL | ${COMPANY_NAME}`
    seoDesc = currentService.sub
  } else {
    ;[seoTitle, seoDesc] = seoMap[page] || seoMap.home
  }

  const navigate = (id) => {
    const next = pathForPage(id, services)
    if (window.location.pathname !== next) {
      window.history.pushState({ page: id }, '', next)
    }
    setPage(id)
    setMobileOpen(false)
    setServicesOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div
      style={{
        fontFamily: "'Public Sans',sans-serif",
        color: '#151f33',
        background: '#ffffff',
        minHeight: '100%',
        overflowX: 'hidden',
      }}
    >
      <Seo
        page={page}
        service={currentService}
        lang={lang}
        title={seoTitle}
        description={seoDesc}
      />

      <LanguageGate />

      {emergencyEnabled && (
        <div
          style={{
            background: '#b7202f',
            color: '#fff',
            textAlign: 'center',
            padding: '8px 16px',
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {t('emergency')}{' '}
          <a href={PHONE_TEL} style={{ color: '#fff', textDecoration: 'underline' }}>
            {PHONE}
          </a>
        </div>
      )}

      <Header
        page={page}
        isMobile={isMobile}
        servicesOpen={servicesOpen}
        mobileOpen={mobileOpen}
        onNavigate={navigate}
        onToggleServices={() => setServicesOpen((v) => !v)}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onOpenBooking={openBooking}
      />

      <main key={`${page}-${lang}`} style={{ animation: 'fadeUp 0.5s ease both' }}>
        {page === 'home' && <Home onNavigate={navigate} onOpenBooking={openBooking} />}
        {page === 'about' && <About />}
        {currentService && (
          <Service service={currentService} onNavigate={navigate} onOpenBooking={openBooking} />
        )}
        {page === 'reviews' && <Reviews />}
        {page === 'tips' && <Tips />}
        {page === 'contact' && <Contact />}
        {page === 'thank-you' && <ThankYou onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}
