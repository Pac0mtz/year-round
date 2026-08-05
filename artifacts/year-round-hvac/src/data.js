export const COMPANY_NAME = 'Year Round Heating and Air Conditioning Inc'
export const PHONE = '(708) 710-8134'
export const PHONE_TEL = 'tel:7087108134'
export const EMAIL = 'yearroundhac@gmail.com'
export const ADDRESS_LINE1 = '459 Pheasant Chase Dr'
export const ADDRESS_LINE2 = 'Bolingbrook, IL 60490'
export const OWNER = 'Ruben Barajas'

/** Production origin for sitemap / absolute OG URLs (override with VITE_SITE_URL). */
export const SITE_ORIGIN =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://yearroundhac.com'

export const FULL_ADDRESS = `${ADDRESS_LINE1}, ${ADDRESS_LINE2}`

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${COMPANY_NAME}, ${FULL_ADDRESS}`)

export const GOOGLE_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(FULL_ADDRESS)

export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=' +
  encodeURIComponent(`${COMPANY_NAME} Bolingbrook reviews`)

export const BUILDZOOM_URL =
  'https://www.buildzoom.com/contractor/year-round-heating-air-conditioning-inc'

/** Outbound profiles / directories found for this business (no invented socials). */
export const OUTBOUND_LINKS = [
  { id: 'google-maps', label: 'Google Maps', href: GOOGLE_MAPS_URL },
  { id: 'google-reviews', label: 'Google Reviews', href: GOOGLE_REVIEW_URL },
  { id: 'buildzoom', label: 'BuildZoom', href: BUILDZOOM_URL },
]

export const OG_IMAGE = '/images/og-default.jpg'
export const GEO = { lat: 41.6981, lng: -88.0684 }

export function pathForPage(pageId, servicesList = []) {
  if (!pageId || pageId === 'home') return '/'
  if (servicesList.some((s) => s.id === pageId)) return `/services/${pageId}`
  return `/${pageId}`
}

export function pageFromPath(pathname, servicesList = []) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/'
  if (path === '/' || path === '') return 'home'
  const serviceMatch = path.match(/^\/services\/([^/]+)$/)
  if (serviceMatch && servicesList.some((s) => s.id === serviceMatch[1])) {
    return serviceMatch[1]
  }
  const staticPages = ['about', 'reviews', 'tips', 'contact', 'thank-you']
  const slug = path.slice(1)
  if (staticPages.includes(slug)) return slug
  if (slug === 'thankyou') return 'thank-you'
  if (servicesList.some((s) => s.id === slug)) return slug
  return 'home'
}

export const services = [
  {
    id: 'ac-repair',
    label: 'AC Repair',
    badge: 'AR',
    icon: '/icons/svc-ac-repair.png?v=3',
    image: '/images/services/ac-repair.jpg',
    short: 'Fast diagnosis and same-day repairs for homes and businesses with warm air, weird noises, or dead systems.',
    kicker: 'Residential & Commercial AC Repair',
    headline: 'Cooling down fast when Illinois summers heat up.',
    sub: 'From warm airflow to a system that won\'t start, our technicians diagnose the real problem and fix it right the first time — for residential and commercial properties.',
    signs: [
      'Warm air blowing from the vents',
      'AC runs constantly but never cools the space',
      'Grinding, clicking, or squealing noises',
      'Water pooling near the indoor unit',
      'Higher electric bills with no explanation',
      'Thermostat set low but rooms stay warm',
    ],
    included: [
      { t: 'Full System Diagnostic', d: 'We test refrigerant levels, electrical components, and airflow to pinpoint the exact issue.' },
      { t: 'Upfront, Written Pricing', d: 'You approve the cost before any repair begins — no surprises on the invoice.' },
      { t: 'Same-Day Repairs', d: 'Most repairs are completed in a single visit using parts we carry on the truck.' },
      { t: '90-Day Repair Guarantee', d: 'If the same issue returns within 90 days, we come back and fix it at no charge.' },
    ],
    process: [
      { n: '01', t: 'Call or Book Online', d: 'Tell us what\'s going on and we\'ll get a technician scheduled, often same-day.' },
      { n: '02', t: 'On-Site Diagnosis', d: 'We inspect your system and explain exactly what\'s wrong in plain language.' },
      { n: '03', t: 'Approve & Repair', d: 'You approve the fix and price up front, then we get your air cooling again.' },
    ],
    faq: [
      { q: 'How fast can you get here?', a: 'Most Bolingbrook-area calls are scheduled same-day, and we offer priority scheduling for no-cool emergencies.' },
      { q: 'Do you repair all AC brands?', a: 'Yes — our technicians are trained on Trane, Carrier, Lennox, Rheem, American Standard, York, and Bryant systems.' },
      { q: 'What if my AC can\'t be repaired?', a: 'If a repair isn\'t cost-effective, we\'ll walk you through honest replacement options with no pressure.' },
    ],
    ctaHeadline: 'Don\'t sweat it out another day.',
  },
  {
    id: 'ac-install',
    label: 'AC Installation & Replacement',
    badge: 'AI',
    icon: '/icons/svc-ac-install.png?v=3',
    image: '/images/services/ac-install.jpg',
    short: 'Right-sized central air for homes and businesses, installed and warrantied by our own crews.',
    kicker: 'Residential & Commercial AC Install',
    headline: 'A cooling system sized right for your property.',
    sub: 'We size and install central air systems using proper load calculations for residential and commercial spaces, so your new AC runs efficiently for years.',
    signs: [
      'Your AC is 12+ years old',
      'Repairs are becoming frequent and costly',
      'Your system uses R-22 refrigerant',
      'Uneven cooling between rooms or zones',
      'Rising energy bills each summer',
      'You\'re renovating, expanding, or updating a business space',
    ],
    included: [
      { t: 'Free On-Site Estimate', d: 'We measure your home or commercial space and walk through system options with transparent pricing.' },
      { t: 'Proper Load Calculation', d: 'Every system is sized to the building\'s square footage, insulation, and layout — not the old unit\'s size.' },
      { t: 'Professional Installation', d: 'Our crews follow manufacturer specs and local code on every residential and commercial install.' },
      { t: 'Warranty Registration', d: 'We register your equipment so your full manufacturer coverage is protected.' },
    ],
    process: [
      { n: '01', t: 'Free Site Assessment', d: 'We evaluate ductwork, insulation, and cooling needs at your home or business.' },
      { n: '02', t: 'Choose Your System', d: 'We present options across efficiency tiers and budgets, no pressure.' },
      { n: '03', t: 'Install & Walkthrough', d: 'Most installs finish in a day; we walk you through your new thermostat and system.' },
    ],
    faq: [
      { q: 'How long does installation take?', a: 'Most residential and light commercial AC replacements are completed in a single day, including removal of the old system.' },
      { q: 'Do you offer financing?', a: 'Yes, we offer financing options on approved credit to help spread out the cost of a new system.' },
      { q: 'What efficiency rating should I choose?', a: 'We\'ll compare efficiency ratings against your budget and typical summer usage to find the right balance of upfront cost and long-term savings.' },
    ],
    ctaHeadline: 'Let\'s size your new system right.',
  },
  {
    id: 'furnace-repair',
    label: 'Furnace & Heating Repair',
    badge: 'FR',
    icon: '/icons/svc-furnace-repair.png?v=3',
    image: '/images/services/furnace-repair.jpg',
    short: 'Safety-first diagnostics and same-visit fixes for residential and commercial heating systems.',
    kicker: 'Residential & Commercial Heating Repair',
    headline: 'Reliable heat when Illinois winters turn brutal.',
    sub: 'A furnace that won\'t fire on a 10-degree night isn\'t just uncomfortable — it\'s urgent. We diagnose and repair gas, electric, and boiler heating systems for homes and businesses.',
    signs: [
      'No heat or the furnace won\'t turn on',
      'Burner smell or a yellow instead of blue flame',
      'Furnace short-cycling on and off',
      'Loud banging, popping, or rattling at startup',
      'Thermostat calls for heat but nothing happens',
      'Rising gas bills with no change in usage',
    ],
    included: [
      { t: 'Safety-First Diagnostics', d: 'We check for gas leaks, cracked heat exchangers, and carbon monoxide risks before anything else.' },
      { t: 'Upfront Repair Pricing', d: 'You\'ll know the cost before we start any work.' },
      { t: 'Stocked Service Trucks', d: 'Common igniters, sensors, and blower parts are on hand for same-visit fixes.' },
      { t: 'Emergency No-Heat Priority', d: 'No-heat calls jump to the front of the schedule, even on weekends.' },
    ],
    process: [
      { n: '01', t: 'Describe the Problem', d: 'Tell us what you\'re hearing, smelling, or noticing and we\'ll prioritize the call.' },
      { n: '02', t: 'Safety & System Check', d: 'We inspect the heat exchanger, ignition system, and gas lines for safety first.' },
      { n: '03', t: 'Repair & Test', d: 'We fix the issue and run a full heat cycle before we leave to confirm it\'s holding.' },
    ],
    faq: [
      { q: 'Is a cracked heat exchanger dangerous?', a: 'Yes — it can leak carbon monoxide into your home. We test for this on every furnace call and will shut down an unsafe unit immediately.' },
      { q: 'Do you work on boilers too?', a: 'Yes, our technicians service gas boilers and hydronic heating systems in addition to forced-air furnaces.' },
      { q: 'Can you come out at night?', a: 'We hold emergency slots for no-heat calls, including evenings and weekends, during the winter season.' },
    ],
    ctaHeadline: 'Don\'t wait out a cold house.',
  },
  {
    id: 'heating-install',
    label: 'Heating Installation',
    badge: 'HI',
    icon: '/icons/svc-heating-install.png?v=3',
    image: '/images/services/heating-install.jpg',
    short: 'Furnace, heat pump, and dual-fuel systems for homes and commercial buildings.',
    kicker: 'Residential & Commercial Heating Install',
    headline: 'Furnace and heat pump installs built for Illinois winters.',
    sub: 'We help homes and businesses choose between a high-efficiency furnace, heat pump, or dual-fuel system, then install it to handle Midwest winters.',
    signs: [
      'Your furnace is 15+ years old',
      'You\'re facing a major repair on an aging system',
      'Some rooms never get warm enough',
      'Your heating bills keep climbing',
      'You\'re switching from a boiler to forced air',
      'You want a more efficient dual-fuel or heat pump system',
    ],
    included: [
      { t: 'Free Heating Consultation', d: 'We review your current system, ductwork, and comfort complaints before recommending anything.' },
      { t: 'Right-Sized Equipment', d: 'Furnace and heat pump sizing based on your home\'s actual heat loss, not rules of thumb.' },
      { t: 'Code-Compliant Installation', d: 'Venting, gas lines, and electrical work completed to Bolingbrook and local code.' },
      { t: 'Post-Install Walkthrough', d: 'We show you the new thermostat, filter location, and maintenance basics before we leave.' },
    ],
    process: [
      { n: '01', t: 'In-Home Evaluation', d: 'We assess your ductwork, insulation, and current heating performance.' },
      { n: '02', t: 'Compare Systems', d: 'Furnace, heat pump, or dual-fuel — we lay out the tradeoffs in plain terms.' },
      { n: '03', t: 'Install & Test', d: 'Full installation and a complete heat-cycle test before we call the job done.' },
    ],
    faq: [
      { q: 'Furnace or heat pump — which is better for Illinois winters?', a: 'A high-efficiency gas furnace or a dual-fuel system (heat pump plus furnace backup) both perform well in our climate; we\'ll compare costs based on your home.' },
      { q: 'How disruptive is a heating installation?', a: 'Most furnace replacements are done in a day. Heat pump or ductwork changes may take longer, which we\'ll outline upfront.' },
      { q: 'Will a new system lower my gas bill?', a: 'Older furnaces often run well below the efficiency of new high-efficiency models, which typically shows up in your winter gas bills.' },
    ],
    ctaHeadline: 'Let\'s plan your new heating system.',
  },
  {
    id: 'duct-cleaning',
    label: 'Air Duct Cleaning',
    badge: 'DC',
    icon: '/icons/svc-duct-cleaning.png?v=3',
    image: '/images/services/duct-cleaning.jpg',
    short: 'Clearing dust and debris from residential and commercial ductwork so air flows the way it should.',
    kicker: 'Residential & Commercial Duct Cleaning',
    headline: 'Duct cleaning that clears out years of dust and debris.',
    sub: 'Dust, debris, and allergens build up in ductwork over time, restricting airflow in homes and businesses. We clean it out and check your system while we\'re at it.',
    signs: [
      'Visible dust blowing from vents',
      'Musty or stale odor when the system runs',
      'Increased allergy or dust symptoms indoors',
      'Uneven airflow room to room',
      'Pets in the home or a recent renovation',
      'It\'s been 3+ years since your last cleaning',
    ],
    included: [
      { t: 'Full Duct Inspection', d: 'We check supply and return lines for buildup, leaks, and disconnected sections.' },
      { t: 'High-Powered Vacuum Cleaning', d: 'Negative-pressure equipment pulls debris out of the ductwork, not just the visible vents.' },
      { t: 'Vent & Register Cleaning', d: 'Every supply and return register is cleaned as part of the service.' },
      { t: 'Optional Sanitizing Treatment', d: 'An antimicrobial treatment is available for homes dealing with mold or odor issues.' },
    ],
    process: [
      { n: '01', t: 'Inspection', d: 'We assess your ductwork and identify buildup, leaks, or damage.' },
      { n: '02', t: 'Clean the System', d: 'Supply lines, return lines, and every register are cleaned thoroughly.' },
      { n: '03', t: 'Final Airflow Check', d: 'We confirm airflow is restored to each room before wrapping up.' },
    ],
    faq: [
      { q: 'How often should ducts be cleaned?', a: 'Most homes benefit from duct cleaning every 3-5 years, sooner if you have pets, allergies, or recently renovated.' },
      { q: 'Will duct cleaning lower my energy bill?', a: 'Cleaner ducts improve airflow, which can ease strain on your system, though savings vary by home.' },
      { q: 'Can you clean ducts and service my furnace in one visit?', a: 'Yes, many customers combine duct cleaning with a seasonal furnace or AC tune-up.' },
    ],
    ctaHeadline: 'Breathe easier in your own home.',
  },
  {
    id: 'commercial',
    label: 'Commercial HVAC',
    badge: 'CM',
    icon: '/icons/svc-commercial.png?v=3',
    image: '/images/services/commercial.jpg',
    short: 'Rooftop units, packaged systems, and maintenance contracts — with residential service available too.',
    kicker: 'Commercial & Residential HVAC Systems',
    headline: 'Keeping Bolingbrook businesses — and homes — comfortable and running.',
    sub: 'Rooftop units, packaged systems, and commercial boilers need a partner who understands downtime costs money. We also handle residential systems, so one call covers your home and your business.',
    signs: [
      'Rooftop unit short-cycling or icing up',
      'Uneven temperatures across the building',
      'Rising utility costs without added usage',
      'System is past its expected service life',
      'No current maintenance contract in place',
      'Recent tenant buildout requiring new HVAC zoning',
    ],
    included: [
      { t: 'Preventive Maintenance Contracts', d: 'Scheduled inspections that catch problems before they cause closures.' },
      { t: 'Rooftop & Packaged Unit Service', d: 'Repair and replacement for RTUs, packaged units, and split systems.' },
      { t: 'Commercial Installation', d: 'New equipment sizing and installation for renovations, buildouts, and new construction.' },
      { t: 'After-Hours Emergency Response', d: 'Priority response to minimize downtime for your business.' },
    ],
    process: [
      { n: '01', t: 'Site Walkthrough', d: 'We assess your current equipment, usage patterns, and pain points.' },
      { n: '02', t: 'Proposal & Scheduling', d: 'We recommend a service or install plan that works around your business hours.' },
      { n: '03', t: 'Service or Install', d: 'Work is completed with minimal disruption, often outside business hours.' },
    ],
    faq: [
      { q: 'Do you offer maintenance contracts for businesses?', a: 'Yes, we offer scheduled preventive maintenance plans tailored to your equipment and operating hours.' },
      { q: 'Can you work outside business hours?', a: 'Yes, we regularly schedule commercial installs and major repairs after close to avoid disrupting operations.' },
      { q: 'What types of businesses do you serve?', a: 'We service offices, retail spaces, restaurants, warehouses, and light industrial facilities throughout Bolingbrook and nearby communities.' },
    ],
    ctaHeadline: 'Keep your business running.',
  },
  {
    id: 'water-heaters',
    label: 'Water Heaters',
    badge: 'WH',
    icon: '/icons/svc-water-heaters.png?v=3',
    image: '/images/services/water-heaters.jpg',
    short: 'Tank and tankless repair, replacement, and installation for homes and businesses.',
    kicker: 'Residential & Commercial Water Heaters',
    headline: 'Hot water you can count on, tank or tankless.',
    sub: 'From a leaking tank to a full tankless upgrade, we repair and install gas and electric water heaters for residential and commercial properties.',
    signs: [
      'No hot water or it runs out quickly',
      'Rusty or discolored water',
      'Water pooling around the base of the tank',
      'Strange banging or rumbling noises',
      'Water heater is 10+ years old',
      'Considering a switch to tankless',
    ],
    included: [
      { t: 'Same-Day Repairs', d: 'Igniters, thermocouples, and heating elements are stocked for common fixes.' },
      { t: 'Tank & Tankless Installation', d: 'We install standard tank units and high-efficiency tankless systems.' },
      { t: 'Proper Sizing', d: 'Sized to your household\'s actual hot water demand, not guesswork.' },
      { t: 'Code-Compliant Venting & Gas Lines', d: 'All installs meet local plumbing and gas code.' },
    ],
    process: [
      { n: '01', t: 'Diagnose or Consult', d: 'We identify the repair issue or walk through tank vs. tankless options.' },
      { n: '02', t: 'Recommend the Right Fit', d: 'Sizing based on household size, usage, and fuel type.' },
      { n: '03', t: 'Install or Repair', d: 'Most jobs are completed same day, with a full system test before we leave.' },
    ],
    faq: [
      { q: 'Is tankless worth the upgrade?', a: 'Tankless units provide continuous hot water and take up less space, though the upfront cost is higher than a standard tank.' },
      { q: 'How long do water heaters typically last?', a: 'Tank water heaters generally last 8-12 years; tankless units can last 15-20 years with proper maintenance.' },
      { q: 'Do you install electric water heaters too?', a: 'Yes, we install and repair both gas and electric tank and tankless water heaters.' },
    ],
    ctaHeadline: 'Never run out of hot water again.',
  },
  {
    id: 'electrical',
    label: 'Electrical Services',
    badge: 'EL',
    icon: '/icons/svc-electrical.png?v=3',
    image: '/images/services/electrical.jpg',
    short: 'Panel upgrades, outlets, lighting, wiring, and electrical troubleshooting for homes and businesses.',
    kicker: 'Residential & Commercial Electrical',
    headline: 'Safe, code-compliant electrical work for homes and businesses.',
    sub: 'From tripped breakers and outlet installs to panel upgrades and commercial lighting, our electricians keep your property powered safely — residential and commercial.',
    signs: [
      'Breakers that trip repeatedly',
      'Flickering or dimming lights',
      'Outlets that do not work or feel warm',
      'Need for new circuits, EV charger, or panel upgrade',
      'Burning smell or sparking from outlets or switches',
      'Commercial lighting or tenant buildout electrical needs',
    ],
    included: [
      { t: 'Full Electrical Diagnostic', d: 'We troubleshoot panels, circuits, and devices to find the real issue — not just reset a breaker.' },
      { t: 'Panel & Circuit Upgrades', d: 'Safe capacity upgrades for renovations, new equipment, and growing electrical demand.' },
      { t: 'Residential & Commercial Work', d: 'Homes, offices, retail, and light industrial spaces with scheduling that fits your hours.' },
      { t: 'Code-Compliant Installation', d: 'All work follows Illinois electrical code with clean finishes and clear walkthroughs.' },
    ],
    process: [
      { n: '01', t: 'Describe the Issue', d: 'Tell us what is failing or what you need installed at your home or business.' },
      { n: '02', t: 'Inspect & Quote', d: 'We assess the work on-site and give upfront pricing before anything starts.' },
      { n: '03', t: 'Repair or Install', d: 'We complete the job safely, test everything, and leave the space ready to use.' },
    ],
    faq: [
      { q: 'Do you handle both residential and commercial electrical?', a: 'Yes — we service homes, offices, retail spaces, and light commercial properties across Bolingbrook and nearby communities.' },
      { q: 'Can you upgrade my electrical panel?', a: 'Yes. We evaluate load needs and install panel upgrades that support modern appliances, HVAC equipment, and business systems.' },
      { q: 'Do you install outlets, lighting, and dedicated circuits?', a: 'Absolutely — from kitchen and garage circuits to commercial lighting and equipment feeds.' },
    ],
    ctaHeadline: 'Power up your home or business.',
  },
  {
    id: 'emergency',
    label: 'Emergency Service',
    badge: '24/7',
    icon: '/icons/svc-emergency.png?v=3',
    image: '/images/services/emergency.jpg',
    short: 'On-call technicians, day or night, for HVAC and electrical emergencies at homes and businesses.',
    kicker: '24/7 Residential & Commercial Emergency',
    headline: 'No heat. No AC. No power. No waiting.',
    sub: 'HVAC and electrical emergencies don\'t wait for business hours, and neither do we. Our on-call technicians respond around the clock for residential and commercial properties.',
    signs: [
      'No heat during freezing temperatures',
      'No cooling during extreme summer heat',
      'Gas smell or suspected carbon monoxide leak',
      'Water leaking from your furnace or AC unit',
      'Electrical burning smell, sparking, or total power loss',
      'Total system failure with no warning at home or work',
    ],
    included: [
      { t: '24/7/365 Availability', d: 'Nights, weekends, and holidays — our on-call line is always answered.' },
      { t: 'Rapid Response', d: 'Emergency calls are prioritized and dispatched immediately.' },
      { t: 'Fully Stocked Trucks', d: 'Our techs carry common parts to resolve emergencies in a single visit whenever possible.' },
      { t: 'Transparent Emergency Pricing', d: 'You\'ll know the cost before we start, even after hours.' },
    ],
    process: [
      { n: '01', t: 'Call Now', d: 'Reach our 24/7 line directly, no answering service runaround.' },
      { n: '02', t: 'Immediate Dispatch', d: 'An on-call technician is sent out right away, prioritized by severity.' },
      { n: '03', t: 'Fix or Stabilize', d: 'We resolve the issue on-site or get your home or business safely stabilized until a full repair.' },
    ],
    faq: [
      { q: 'Is there an extra charge for after-hours service?', a: 'There is an after-hours dispatch fee, which we quote upfront before any work begins.' },
      { q: 'What counts as an emergency?', a: 'No heat in freezing weather, no cooling in extreme heat, gas smells, leaks, power loss, and electrical hazards all qualify as emergencies for homes and businesses.' },
      { q: 'How fast do you typically respond?', a: 'Emergency calls are prioritized ahead of routine scheduling, with most Bolingbrook-area response times under two hours.' },
    ],
    ctaHeadline: 'We\'re already on our way.',
  },
]

// Every service covers both residential and commercial properties
services.forEach((service) => {
  service.markets = ['Residential', 'Commercial']
})

export const brands = [
  { id: 'trane', name: 'Trane', logo: '/images/brands/trane.svg?v=5' },
  { id: 'carrier', name: 'Carrier', logo: '/images/brands/carrier.svg?v=5' },
  { id: 'lennox', name: 'Lennox', logo: '/images/brands/lennox.svg?v=5' },
  { id: 'rheem', name: 'Rheem', logo: '/images/brands/rheem.svg?v=5' },
  { id: 'american-standard', name: 'American Standard', logo: '/images/brands/american-standard.svg?v=5' },
  { id: 'york', name: 'York', logo: '/images/brands/york.svg?v=5' },
]

export const towns = [
  'Bolingbrook',
  'Naperville',
  'Aurora',
  'Joliet',
  'Plainfield',
  'Romeoville',
  'Downers Grove',
  'Orland Park',
  'Tinley Park',
  'Oak Lawn',
  'Lemont',
  'Lockport',
  'Woodridge',
  'Shorewood',
  'New Lenox',
  'Homer Glen',
]

export const testimonials = [
  { name: 'Sarah M.', town: 'Plainfield', stars: 5, tag: 'AC', quote: 'Our AC died during the hottest week of July and they had someone out within three hours. Fixed it on the spot and didn\'t try to sell us a new unit we didn\'t need.' },
  { name: 'Tom R.', town: 'Bolingbrook', stars: 5, tag: 'Heating', quote: 'Furnace went out at 11pm in January. They picked up, walked me through keeping the pipes safe, and had a tech out first thing in the morning.' },
  { name: 'Denise K.', town: 'Shorewood', stars: 5, tag: 'Installation', quote: 'Got quotes from three companies for a new furnace and AC. These guys were the only ones who actually measured the house before recommending a size.' },
  { name: 'Marcus B.', town: 'Bolingbrook', stars: 4, tag: 'Maintenance', quote: 'Been on their maintenance plan for three years. Two reminder calls a year and it\'s one less thing to think about.' },
  { name: 'Angela P.', town: 'New Lenox', stars: 5, tag: 'Duct Cleaning', quote: 'Didn\'t realize how much dust was in our ducts until they showed us the before and after. Noticeably less dust in the house since.' },
  { name: 'Ray D.', town: 'Crest Hill', stars: 5, tag: 'Commercial', quote: 'We use them for our restaurant\'s rooftop units. They work around our hours and haven\'t left us down during a dinner rush yet.' },
  { name: 'Kelly W.', town: 'Lockport', stars: 5, tag: 'Water Heater', quote: 'Water heater started leaking on a Saturday morning. Had a new one installed by that afternoon.' },
  { name: 'Vince L.', town: 'Romeoville', stars: 5, tag: 'AC', quote: 'Honest pricing, showed up on time, explained everything before doing any work. Exactly what you want from a repair company.' },
  { name: 'Priya S.', town: 'Naperville', stars: 5, tag: 'Electrical', quote: 'Needed a panel upgrade and new circuits for our home office. They explained the options clearly and finished everything clean and on schedule.' },
]

export const tips = [
  { category: 'Maintenance', title: 'Why Your Furnace Filter Matters More Than You Think', excerpt: 'A clogged filter forces your furnace to work harder and shortens its lifespan.', body: 'A clogged filter restricts airflow, forcing your furnace to work harder and shortening its lifespan. Check it monthly during heating season and replace every 1-3 months depending on filter type and pets in the home.' },
  { category: 'Heating', title: 'The Right Thermostat Setting for an Illinois Winter', excerpt: 'Big swings strain your furnace more than a steady setting does.', body: 'Setting your thermostat to 68°F while you\'re home and a few degrees lower while you\'re asleep or away balances comfort with efficiency, without the strain of large temperature swings on your furnace.' },
  { category: 'Cooling', title: '5 Signs Your AC Needs Attention Before Summer Hits', excerpt: 'Weak airflow and warm spots are early warnings worth checking now.', body: 'Weak airflow, warm spots in the house, ice on the outdoor unit, unusual noises, and a spike in your electric bill are all early warning signs worth having checked before peak summer heat arrives.' },
  { category: 'Maintenance', title: 'How Often Should You Really Get a Tune-Up?', excerpt: 'Once a year per system catches small issues early.', body: 'Most manufacturers recommend a professional tune-up once a year for each system — heating in the fall, cooling in the spring — to catch small issues before they become expensive repairs.' },
  { category: 'Air Quality', title: 'Indoor Air Quality: What\'s Actually Circulating Through Your Home', excerpt: 'Dust, dander, and allergens all pass through your ductwork.', body: 'Dust, pet dander, and seasonal allergens all pass through your ductwork. Regular filter changes, duct cleaning, and proper humidity control all play a role in what you\'re breathing indoors.' },
  { category: 'Water Heaters', title: 'Tank vs. Tankless: What Actually Fits Your Household', excerpt: 'It comes down to upfront cost versus continuous hot water.', body: 'Tankless units save space and provide continuous hot water, but cost more upfront. Larger households with high simultaneous hot water demand sometimes do better with a properly sized tank system.' },
  { category: 'Electrical', title: 'When Flickering Lights Mean More Than a Loose Bulb', excerpt: 'Repeated flicker or breaker trips can point to a real wiring issue.', body: 'Occasional flicker can be a bulb or fixture issue, but repeated dimming, warm outlets, or breakers that keep tripping deserve a professional electrical inspection — especially before adding new equipment or renovating.' },
]

export const values = [
  {
    id: 'honesty',
    icon: '/icons/values-honesty.png?v=3',
    title: 'Honesty',
    desc: 'We tell you what\'s actually wrong and what it actually costs — before we touch anything.',
  },
  {
    id: 'craftsmanship',
    icon: '/icons/values-craftsmanship.png?v=3',
    title: 'Craftsmanship',
    desc: 'Every install and repair is done to the standard we\'d want in our own homes.',
  },
  {
    id: 'punctuality',
    icon: '/icons/values-punctuality.png?v=3',
    title: 'Punctuality',
    desc: 'We show up in the window we give you, and we call if anything changes.',
  },
  {
    id: 'community',
    icon: '/icons/values-community.png?v=3',
    title: 'Community',
    desc: 'We\'re your neighbors in Bolingbrook, not a call center three states away.',
  },
]

export const timeline = [
  { year: 'Founded', text: 'Ruben Barajas builds Year Round Heating and Air Conditioning Inc to serve Bolingbrook homeowners with honest, reliable HVAC work.' },
  { year: 'Growth', text: 'Expand service coverage across Bolingbrook, Romeoville, Plainfield, and nearby communities.' },
  { year: 'Certified', text: 'Earn energy-efficiency installer certification and continue investing in trained technicians.' },
  { year: 'Today', text: 'Still locally owned, serving homes and businesses with HVAC, electrical, install, and emergency service.' },
]

export const team = [
  { name: 'Ruben Barajas', role: 'Owner & President' },
  { name: 'Renee Morales', role: 'Operations Manager' },
  { name: 'Carlos Ibarra', role: 'Lead Technician, NATE-Certified' },
]

export const certs = [
  'NATE Certified Technicians',
  'EPA Certified',
  'BBB Accredited Business',
  'Fully Licensed & Insured in Illinois',
]

export const contactFaq = [
  { q: 'Do you offer financing?', a: 'Yes, we offer financing on approved credit for new installations and major repairs.' },
  { q: 'Is same-day service available?', a: 'In most cases, yes. Call before 2pm for the best chance of same-day scheduling.' },
  { q: 'What\'s your service area?', a: 'We serve the Chicagoland suburbs within about 50 miles of Bolingbrook — including Naperville, Aurora, Joliet, Plainfield, Orland Park, Downers Grove, and surrounding communities.' },
  { q: 'Do you serve both residential and commercial?', a: 'Yes. Every service we offer — HVAC, water heaters, and electrical — is available for homes and businesses.' },
  { q: 'Do repairs come with a warranty?', a: 'All repairs include a 90-day guarantee, and new installations carry full manufacturer warranties.' },
]

export const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Emergency Only' },
  { day: 'Emergency Line', time: '24/7, Every Day' },
]

export const trustBadges = [
  'Licensed & Insured',
  'Residential & Commercial',
  'HVAC + Electrical',
  'Same-Day Service',
]

export const reviewFilters = [
  { id: 'all', label: 'All Reviews' },
  { id: 'ac', label: 'AC', tag: 'AC' },
  { id: 'heating', label: 'Heating', tag: 'Heating' },
  { id: 'electrical', label: 'Electrical', tag: 'Electrical' },
  { id: 'installation', label: 'Installation', tag: 'Installation' },
  { id: 'maintenance', label: 'Maintenance', tag: 'Maintenance' },
  { id: 'commercial', label: 'Commercial', tag: 'Commercial' },
]

export function starString(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

export const seoMap = {
  home: [
    'Year Round Heating and Air Conditioning Inc | Chicagoland HVAC & Electrical',
    'Residential and commercial HVAC and electrical services across Chicagoland suburbs within 50 miles of Bolingbrook, IL. Repair, installation, and 24/7 emergency service. Call (708) 710-8134.',
  ],
  about: [
    'About Us | Year Round Heating and Air Conditioning Inc',
    'Owned by Ruben Barajas — residential and commercial HVAC and electrical company serving Chicagoland suburbs from Bolingbrook, IL.',
  ],
  reviews: [
    'Customer Reviews | Year Round Heating and Air Conditioning Inc',
    'See what Chicagoland homeowners say about our heating and cooling service.',
  ],
  tips: [
    'HVAC Tips & Seasonal Advice | Year Round Heating and Air Conditioning Inc',
    'Practical heating and cooling tips from our Bolingbrook-based technicians serving Chicagoland suburbs.',
  ],
  contact: [
    'Contact Us | Year Round Heating and Air Conditioning Inc',
    'Schedule HVAC service across Chicagoland suburbs within 50 miles. Call (708) 710-8134 or email yearroundhac@gmail.com.',
  ],
  'thank-you': [
    'Thank You | Year Round Heating and Air Conditioning Inc',
    'We received your service request and will call shortly to confirm a time.',
  ],
}
