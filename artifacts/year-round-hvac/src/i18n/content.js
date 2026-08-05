import {
  services as servicesEn,
  testimonials as testimonialsEn,
  tips as tipsEn,
  values as valuesEn,
  timeline as timelineEn,
  team as teamEn,
  certs as certsEn,
  contactFaq as contactFaqEn,
  hours as hoursEn,
  trustBadges as trustBadgesEn,
  reviewFilters as reviewFiltersEn,
  seoMap as seoMapEn,
} from '../data'
import { subServicesById, relatedServiceIds } from '../data/subServices'

const servicesEs = [
  {
    id: 'ac-repair',
    label: 'Reparación de AC',
    short:
      'Diagnóstico rápido y reparaciones el mismo día para casas y negocios con aire caliente, ruidos extraños o sistemas apagados.',
    kicker: 'Reparación de AC residencial y comercial',
    headline: 'Enfriamos rápido cuando el verano de Illinois se pone intenso.',
    sub: 'Desde flujo de aire caliente hasta un sistema que no enciende, nuestros técnicos diagnostican el problema real y lo arreglan bien a la primera — en casas y negocios.',
    signs: [
      'Aire caliente saliendo de las rejillas',
      'El AC corre sin parar pero no enfría',
      'Ruidos de molienda, clic o chirrido',
      'Agua acumulada cerca de la unidad interior',
      'Facturas de luz más altas sin explicación',
      'Termostato bajo pero las habitaciones siguen calientes',
    ],
    included: [
      {
        t: 'Diagnóstico completo del sistema',
        d: 'Revisamos niveles de refrigerante, componentes eléctricos y flujo de aire para ubicar el problema exacto.',
      },
      {
        t: 'Precio por escrito de antemano',
        d: 'Usted aprueba el costo antes de que comience cualquier reparación — sin sorpresas en la factura.',
      },
      {
        t: 'Reparaciones el mismo día',
        d: 'La mayoría de las reparaciones se completan en una sola visita con refacciones que llevamos en la camioneta.',
      },
      {
        t: 'Garantía de reparación de 90 días',
        d: 'Si el mismo problema regresa en 90 días, volvemos y lo arreglamos sin cargo.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Llame o reserve en línea',
        d: 'Cuéntenos qué pasa y programamos un técnico, a menudo el mismo día.',
      },
      {
        n: '02',
        t: 'Diagnóstico en su domicilio',
        d: 'Inspeccionamos su sistema y le explicamos exactamente qué está mal en lenguaje claro.',
      },
      {
        n: '03',
        t: 'Apruebe y reparamos',
        d: 'Usted aprueba la reparación y el precio por adelantado, y volvemos a enfriar el aire.',
      },
    ],
    faq: [
      {
        q: '¿Qué tan rápido pueden llegar?',
        a: 'La mayoría de las llamadas del área de Bolingbrook se programan el mismo día, y ofrecemos prioridad para emergencias sin enfriamiento.',
      },
      {
        q: '¿Reparan todas las marcas de AC?',
        a: 'Sí — nuestros técnicos están capacitados en sistemas Trane, Carrier, Lennox, Rheem, American Standard, York y Bryant.',
      },
      {
        q: '¿Y si mi AC no se puede reparar?',
        a: 'Si una reparación no es rentable, le mostramos opciones honestas de reemplazo sin presión.',
      },
    ],
    ctaHeadline: 'No aguante el calor otro día más.',
  },
  {
    id: 'ac-install',
    label: 'Instalación y reemplazo de AC',
    short:
      'Aire central del tamaño correcto para casas y negocios, instalado y con garantía por nuestros propios equipos.',
    kicker: 'Instalación de AC residencial y comercial',
    headline: 'Un sistema de enfriamiento del tamaño correcto para su propiedad.',
    sub: 'Dimensionamos e instalamos sistemas de aire central con cálculos de carga adecuados para espacios residenciales y comerciales, para que su nuevo AC funcione eficientemente por años.',
    signs: [
      'Su AC tiene 12+ años',
      'Las reparaciones son cada vez más frecuentes y costosas',
      'Su sistema usa refrigerante R-22',
      'Enfriamiento desigual entre habitaciones o zonas',
      'Facturas de energía que suben cada verano',
      'Está renovando, ampliando o actualizando un espacio comercial',
    ],
    included: [
      {
        t: 'Cotización gratis en su domicilio',
        d: 'Medimos su hogar o espacio comercial y revisamos opciones de sistema con precios transparentes.',
      },
      {
        t: 'Cálculo de carga adecuado',
        d: 'Cada sistema se dimensiona según el metraje, el aislamiento y la distribución del edificio — no según el tamaño de la unidad vieja.',
      },
      {
        t: 'Instalación profesional',
        d: 'Nuestros equipos siguen las especificaciones del fabricante y el código local en cada instalación residencial y comercial.',
      },
      {
        t: 'Registro de garantía',
        d: 'Registramos su equipo para proteger la cobertura completa del fabricante.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Evaluación gratis en su domicilio',
        d: 'Evaluamos ductos, aislamiento y necesidades de enfriamiento en su hogar o negocio.',
      },
      {
        n: '02',
        t: 'Elija su sistema',
        d: 'Presentamos opciones por niveles de eficiencia y presupuesto, sin presión.',
      },
      {
        n: '03',
        t: 'Instalación y recorrido',
        d: 'La mayoría de instalaciones terminan en un día; le explicamos el nuevo termostato y el sistema.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto dura la instalación?',
        a: 'La mayoría de los reemplazos de AC residenciales y comerciales ligeros se completan en un solo día, incluyendo la remoción del sistema viejo.',
      },
      {
        q: '¿Ofrecen financiamiento?',
        a: 'Sí, ofrecemos opciones de financiamiento con crédito aprobado para ayudar a distribuir el costo de un sistema nuevo.',
      },
      {
        q: '¿Qué calificación de eficiencia debo elegir?',
        a: 'Comparamos las calificaciones de eficiencia con su presupuesto y uso típico de verano para encontrar el equilibrio correcto entre costo inicial y ahorro a largo plazo.',
      },
    ],
    ctaHeadline: 'Dimensionemos bien su nuevo sistema.',
  },
  {
    id: 'furnace-repair',
    label: 'Reparación de calefacción y furnace',
    short:
      'Diagnósticos con prioridad en seguridad y arreglos en la misma visita para sistemas de calefacción residenciales y comerciales.',
    kicker: 'Reparación de calefacción residencial y comercial',
    headline: 'Calor confiable cuando los inviernos de Illinois se ponen brutales.',
    sub: 'Una calefacción que no enciende en una noche de 10 grados no es solo incómodo — es urgente. Diagnosticamos y reparamos sistemas de gas, eléctricos y calderas para casas y negocios.',
    signs: [
      'Sin calor o la calefacción no enciende',
      'Olor a quemador o llama amarilla en lugar de azul',
      'La calefacción se enciende y apaga en ciclos cortos',
      'Golpes fuertes, estallidos o rattling al arrancar',
      'El termostato pide calor pero no pasa nada',
      'Facturas de gas que suben sin cambio en el uso',
    ],
    included: [
      {
        t: 'Diagnóstico con prioridad en seguridad',
        d: 'Revisamos fugas de gas, intercambiadores agrietados y riesgos de monóxido de carbono antes que nada.',
      },
      {
        t: 'Precio de reparación de antemano',
        d: 'Sabrá el costo antes de que empecemos cualquier trabajo.',
      },
      {
        t: 'Camiones surtidos',
        d: 'Encendedores, sensores y refacciones de soplador comunes van en la camioneta para arreglos en la misma visita.',
      },
      {
        t: 'Prioridad de emergencia sin calor',
        d: 'Las llamadas sin calor pasan al frente del horario, incluso los fines de semana.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Describa el problema',
        d: 'Cuéntenos qué oye, huele o nota y priorizamos la llamada.',
      },
      {
        n: '02',
        t: 'Revisión de seguridad y sistema',
        d: 'Inspeccionamos el intercambiador, el sistema de ignición y las líneas de gas primero por seguridad.',
      },
      {
        n: '03',
        t: 'Reparar y probar',
        d: 'Arreglamos el problema y corremos un ciclo completo de calor antes de irnos para confirmar que se mantiene.',
      },
    ],
    faq: [
      {
        q: '¿Es peligroso un intercambiador agrietado?',
        a: 'Sí — puede filtrar monóxido de carbono a su hogar. Lo revisamos en cada llamada de calefacción y apagamos de inmediato una unidad insegura.',
      },
      {
        q: '¿También trabajan con calderas?',
        a: 'Sí, nuestros técnicos atienden calderas de gas y sistemas hidrónicos además de hornos de aire forzado.',
      },
      {
        q: '¿Pueden venir de noche?',
        a: 'Reservamos horarios de emergencia para llamadas sin calor, incluyendo noches y fines de semana, durante la temporada de invierno.',
      },
    ],
    ctaHeadline: 'No espere en una casa fría.',
  },
  {
    id: 'heating-install',
    label: 'Instalación de calefacción',
    short: 'Hornos, bombas de calor y sistemas dual-fuel para casas y edificios comerciales.',
    kicker: 'Instalación de calefacción residencial y comercial',
    headline: 'Instalaciones de furnace y bomba de calor hechas para inviernos de Illinois.',
    sub: 'Ayudamos a casas y negocios a elegir entre un horno de alta eficiencia, una bomba de calor o un sistema dual-fuel, y lo instalamos para enfrentar los inviernos del Medio Oeste.',
    signs: [
      'Su calefacción tiene 15+ años',
      'Enfrenta una reparación mayor en un sistema viejo',
      'Algunas habitaciones nunca se calientan lo suficiente',
      'Sus facturas de calefacción siguen subiendo',
      'Está cambiando de caldera a aire forzado',
      'Quiere un sistema dual-fuel o bomba de calor más eficiente',
    ],
    included: [
      {
        t: 'Consulta gratuita de calefacción',
        d: 'Revisamos su sistema actual, ductos y quejas de confort antes de recomendar nada.',
      },
      {
        t: 'Equipo del tamaño correcto',
        d: 'Dimensionamiento de furnace y bomba de calor según la pérdida real de calor de su hogar, no reglas generales.',
      },
      {
        t: 'Instalación conforme al código',
        d: 'Ventilación, líneas de gas y trabajo eléctrico completados según el código de Bolingbrook y local.',
      },
      {
        t: 'Recorrido posterior a la instalación',
        d: 'Le mostramos el nuevo termostato, la ubicación del filtro y lo básico de mantenimiento antes de irnos.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Evaluación en el hogar',
        d: 'Evaluamos sus ductos, aislamiento y rendimiento actual de calefacción.',
      },
      {
        n: '02',
        t: 'Comparar sistemas',
        d: 'Furnace, bomba de calor o dual-fuel — explicamos las opciones en términos claros.',
      },
      {
        n: '03',
        t: 'Instalar y probar',
        d: 'Instalación completa y una prueba de ciclo de calor antes de dar por terminado el trabajo.',
      },
    ],
    faq: [
      {
        q: '¿Furnace o bomba de calor — qué es mejor para inviernos de Illinois?',
        a: 'Un furnace de gas de alta eficiencia o un sistema dual-fuel (bomba de calor más respaldo de furnace) funcionan bien en nuestro clima; comparamos costos según su hogar.',
      },
      {
        q: '¿Qué tan disruptiva es una instalación de calefacción?',
        a: 'La mayoría de los reemplazos de calefacción se hacen en un día. Cambios de bomba de calor o ductos pueden tomar más, lo cual detallamos de antemano.',
      },
      {
        q: '¿Un sistema nuevo bajará mi factura de gas?',
        a: 'Los sistemas de calefacción viejos suelen operar muy por debajo de la eficiencia de los modelos nuevos de alta eficiencia, lo que típicamente se nota en sus facturas de gas de invierno.',
      },
    ],
    ctaHeadline: 'Planifiquemos su nuevo sistema de calefacción.',
  },
  {
    id: 'duct-cleaning',
    label: 'Limpieza de ductos de aire',
    short:
      'Eliminamos polvo y residuos de ductos residenciales y comerciales para que el aire fluya como debe.',
    kicker: 'Limpieza de ductos residencial y comercial',
    headline: 'Limpieza de ductos que elimina años de polvo y residuos.',
    sub: 'El polvo, los residuos y los alérgenos se acumulan en los ductos con el tiempo, restringiendo el flujo de aire en casas y negocios. Los limpiamos y revisamos su sistema mientras estamos ahí.',
    signs: [
      'Polvo visible saliendo de las rejillas',
      'Olor a humedad o estancado cuando corre el sistema',
      'Más síntomas de alergia o polvo en el interior',
      'Flujo de aire desigual de habitación a habitación',
      'Mascotas en el hogar o una renovación reciente',
      'Han pasado 3+ años desde su última limpieza',
    ],
    included: [
      {
        t: 'Inspección completa de ductos',
        d: 'Revisamos líneas de suministro y retorno por acumulación, fugas y secciones desconectadas.',
      },
      {
        t: 'Limpieza con aspiradora de alta potencia',
        d: 'Equipo de presión negativa saca los residuos de los ductos, no solo de las rejillas visibles.',
      },
      {
        t: 'Limpieza de rejillas y registros',
        d: 'Cada registro de suministro y retorno se limpia como parte del servicio.',
      },
      {
        t: 'Tratamiento sanitizante opcional',
        d: 'Hay un tratamiento antimicrobiano disponible para casas con moho u olores.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Inspección',
        d: 'Evaluamos sus ductos e identificamos acumulación, fugas o daños.',
      },
      {
        n: '02',
        t: 'Limpiar el sistema',
        d: 'Líneas de suministro, retorno y cada registro se limpian a fondo.',
      },
      {
        n: '03',
        t: 'Revisión final de flujo de aire',
        d: 'Confirmamos que el flujo de aire se restauró en cada habitación antes de terminar.',
      },
    ],
    faq: [
      {
        q: '¿Con qué frecuencia se deben limpiar los ductos?',
        a: 'La mayoría de los hogares se benefician de una limpieza cada 3-5 años, antes si tiene mascotas, alergias o renovó recientemente.',
      },
      {
        q: '¿La limpieza de ductos bajará mi factura de energía?',
        a: 'Ductos más limpios mejoran el flujo de aire, lo que puede aliviar la carga de su sistema, aunque el ahorro varía por hogar.',
      },
      {
        q: '¿Pueden limpiar ductos y dar servicio a mi calefacción en una visita?',
        a: 'Sí, muchos clientes combinan la limpieza de ductos con un ajuste de temporada de calefacción o AC.',
      },
    ],
    ctaHeadline: 'Respire más fácil en su propio hogar.',
  },
  {
    id: 'commercial',
    label: 'HVAC comercial',
    short:
      'Unidades en azotea, sistemas empaquetados y contratos de mantenimiento — con servicio residencial también disponible.',
    kicker: 'Sistemas HVAC comerciales y residenciales',
    headline: 'Manteniendo cómodos y en marcha los negocios — y hogares — de Bolingbrook.',
    sub: 'Las unidades en azotea, sistemas empaquetados y calderas comerciales necesitan un socio que entienda que el tiempo de inactividad cuesta dinero. También atendemos sistemas residenciales, así que una llamada cubre su hogar y su negocio.',
    signs: [
      'Unidad en azotea en ciclos cortos o congelándose',
      'Temperaturas desiguales en el edificio',
      'Costos de servicios que suben sin más uso',
      'El sistema ya pasó su vida útil esperada',
      'Sin contrato de mantenimiento actual',
      'Construcción reciente de inquilino que requiere nuevo zonificado HVAC',
    ],
    included: [
      {
        t: 'Contratos de mantenimiento preventivo',
        d: 'Inspecciones programadas que detectan problemas antes de que causen cierres.',
      },
      {
        t: 'Servicio de unidades en azotea y empaquetadas',
        d: 'Reparación y reemplazo de RTUs, unidades empaquetadas y sistemas split.',
      },
      {
        t: 'Instalación comercial',
        d: 'Dimensionamiento e instalación de equipo nuevo para renovaciones, buildouts y construcción nueva.',
      },
      {
        t: 'Respuesta de emergencia fuera de horario',
        d: 'Respuesta prioritaria para minimizar el tiempo de inactividad de su negocio.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Recorrido del sitio',
        d: 'Evaluamos su equipo actual, patrones de uso y puntos de dolor.',
      },
      {
        n: '02',
        t: 'Propuesta y programación',
        d: 'Recomendamos un plan de servicio o instalación que funcione alrededor de su horario comercial.',
      },
      {
        n: '03',
        t: 'Servicio o instalación',
        d: 'El trabajo se completa con mínima interrupción, a menudo fuera del horario comercial.',
      },
    ],
    faq: [
      {
        q: '¿Ofrecen contratos de mantenimiento para negocios?',
        a: 'Sí, ofrecemos planes de mantenimiento preventivo programados según su equipo y horario de operación.',
      },
      {
        q: '¿Pueden trabajar fuera del horario comercial?',
        a: 'Sí, regularmente programamos instalaciones comerciales y reparaciones mayores después del cierre para no interrumpir operaciones.',
      },
      {
        q: '¿Qué tipos de negocios atienden?',
        a: 'Atendemos oficinas, negocios, restaurantes, almacenes e instalaciones industriales ligeras en Bolingbrook y comunidades cercanas.',
      },
    ],
    ctaHeadline: 'Mantenga su negocio en marcha.',
  },
  {
    id: 'water-heaters',
    label: 'Calentadores de agua',
    short: 'Reparación, reemplazo e instalación de tanque y sin tanque para casas y negocios.',
    kicker: 'Calentadores de agua residenciales y comerciales',
    headline: 'Agua caliente en la que puede confiar, con tanque o sin tanque.',
    sub: 'Desde un tanque con fuga hasta una mejora completa sin tanque, reparamos e instalamos calentadores de agua de gas y eléctricos para casas y negocios.',
    signs: [
      'Sin agua caliente o se acaba rápido',
      'Agua oxidada o descolorida',
      'Agua acumulada alrededor de la base del tanque',
      'Ruidos extraños de golpes o retumbos',
      'El calentador tiene 10+ años',
      'Está considerando cambiar a sin tanque',
    ],
    included: [
      {
        t: 'Reparaciones el mismo día',
        d: 'Encendedores, termopares y elementos calefactores están surtidos para arreglos comunes.',
      },
      {
        t: 'Instalación de tanque y sin tanque',
        d: 'Instalamos unidades estándar de tanque y sistemas sin tanque de alta eficiencia.',
      },
      {
        t: 'Dimensionamiento adecuado',
        d: 'Dimensionado según la demanda real de agua caliente de su hogar, no a ojo.',
      },
      {
        t: 'Ventilación y líneas de gas conformes al código',
        d: 'Todas las instalaciones cumplen el código local de plomería y gas.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Diagnosticar o consultar',
        d: 'Identificamos el problema de reparación o revisamos opciones de tanque vs. sin tanque.',
      },
      {
        n: '02',
        t: 'Recomendar lo adecuado',
        d: 'Dimensionamiento según el tamaño del hogar, el uso y el tipo de combustible.',
      },
      {
        n: '03',
        t: 'Instalar o reparar',
        d: 'La mayoría de los trabajos se completan el mismo día, con una prueba completa del sistema antes de irnos.',
      },
    ],
    faq: [
      {
        q: '¿Vale la pena mejorar a sin tanque?',
        a: 'Las unidades sin tanque dan agua caliente continua y ocupan menos espacio, aunque el costo inicial es mayor que un tanque estándar.',
      },
      {
        q: '¿Cuánto duran típicamente los calentadores de agua?',
        a: 'Los calentadores de tanque generalmente duran 8-12 años; las unidades sin tanque pueden durar 15-20 años con el mantenimiento adecuado.',
      },
      {
        q: '¿También instalan calentadores eléctricos?',
        a: 'Sí, instalamos y reparamos calentadores de agua de gas y eléctricos, de tanque y sin tanque.',
      },
    ],
    ctaHeadline: 'Nunca se quede sin agua caliente otra vez.',
  },
  {
    id: 'electrical',
    label: 'Servicios eléctricos',
    short:
      'Mejoras del tablero, tomacorrientes, iluminación, cableado y diagnóstico eléctrico para casas y negocios.',
    kicker: 'Electricidad residencial y comercial',
    headline: 'Trabajo eléctrico seguro y conforme al código para casas y negocios.',
    sub: 'Desde interruptores que saltan e instalación de tomacorrientes hasta mejoras del tablero e iluminación comercial, nuestros electricistas mantienen su propiedad energizada con seguridad — residencial y comercial.',
    signs: [
      'Interruptores que saltan repetidamente',
      'Luces que parpadean o se atenúan',
      'Tomacorrientes que no funcionan o se sienten calientes',
      'Necesidad de nuevos circuitos, cargador EV o mejora del tablero',
      'Olor a quemado o chispas en tomacorrientes o interruptores',
      'Necesidades eléctricas de iluminación comercial o buildout de inquilino',
    ],
    included: [
      {
        t: 'Diagnóstico eléctrico completo',
        d: 'Diagnosticamos paneles, circuitos y dispositivos para encontrar el problema real — no solo reiniciar un interruptor.',
      },
      {
        t: 'Mejoras del tablero y circuitos',
        d: 'Aumentos seguros de capacidad para renovaciones, equipo nuevo y demanda eléctrica creciente.',
      },
      {
        t: 'Trabajo residencial y comercial',
        d: 'Hogares, oficinas, retail e industriales ligeros con horarios que se adaptan a usted.',
      },
      {
        t: 'Instalación conforme al código',
        d: 'Todo el trabajo sigue el código eléctrico de Illinois con acabados limpios y recorridos claros.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Describa el problema',
        d: 'Cuéntenos qué está fallando o qué necesita instalar en su hogar o negocio.',
      },
      {
        n: '02',
        t: 'Inspeccionar y cotizar',
        d: 'Evaluamos el trabajo en su domicilio y damos precio de antemano antes de empezar.',
      },
      {
        n: '03',
        t: 'Reparar o instalar',
        d: 'Completamos el trabajo con seguridad, lo probamos todo y dejamos el espacio listo para usar.',
      },
    ],
    faq: [
      {
        q: '¿Atienden electricidad residencial y comercial?',
        a: 'Sí — atendemos hogares, oficinas, negocios y propiedades comerciales ligeras en Bolingbrook y comunidades cercanas.',
      },
      {
        q: '¿Pueden mejorar mi tablero eléctrico?',
        a: 'Sí. Evaluamos la carga e instalamos mejoras del tablero que soporten electrodomésticos modernos, equipos HVAC y sistemas de negocio.',
      },
      {
        q: '¿Instalan tomacorrientes, iluminación y circuitos dedicados?',
        a: 'Absolutamente — desde circuitos de cocina y garage hasta iluminación comercial y alimentaciones de equipo.',
      },
    ],
    ctaHeadline: 'Energice su hogar o negocio.',
  },
  {
    id: 'emergency',
    label: 'Servicio de emergencia',
    short:
      'Técnicos de guardia, de día o de noche, para emergencias de HVAC y electricidad en casas y negocios.',
    kicker: 'Emergencia residencial y comercial 24/7',
    headline: 'Sin calor. Sin AC. Sin electricidad. Sin esperar.',
    sub: 'Las emergencias de HVAC y electricidad no esperan el horario comercial, y nosotros tampoco. Nuestros técnicos de guardia responden las 24 horas para casas y negocios.',
    signs: [
      'Sin calor durante temperaturas bajo cero',
      'Sin enfriamiento durante calor extremo de verano',
      'Olor a gas o sospecha de fuga de monóxido de carbono',
      'Agua filtrando de su horno o unidad de AC',
      'Olor a quemado eléctrico, chispas o pérdida total de energía',
      'Falla total del sistema sin aviso en casa o el trabajo',
    ],
    included: [
      {
        t: 'Disponibilidad 24/7/365',
        d: 'Noches, fines de semana y feriados — nuestra línea de guardia siempre se contesta.',
      },
      {
        t: 'Respuesta rápida',
        d: 'Las llamadas de emergencia se priorizan y despachan de inmediato.',
      },
      {
        t: 'Camiones completamente surtidos',
        d: 'Nuestros técnicos llevan refacciones comunes para resolver emergencias en una sola visita cuando es posible.',
      },
      {
        t: 'Precios transparentes de emergencia',
        d: 'Sabrá el costo antes de empezar, incluso fuera de horario.',
      },
    ],
    process: [
      {
        n: '01',
        t: 'Llame ahora',
        d: 'Comuníquese directamente a nuestra línea 24/7, sin rodeos de contestadora.',
      },
      {
        n: '02',
        t: 'Despacho inmediato',
        d: 'Se envía un técnico de guardia de inmediato, priorizado por gravedad.',
      },
      {
        n: '03',
        t: 'Arreglar o estabilizar',
        d: 'Resolvemos el problema en su domicilio o dejamos su hogar o negocio estabilizado con seguridad hasta una reparación completa.',
      },
    ],
    faq: [
      {
        q: '¿Hay cargo extra por servicio fuera de horario?',
        a: 'Hay una tarifa de despacho fuera de horario, que cotizamos de antemano antes de cualquier trabajo.',
      },
      {
        q: '¿Qué cuenta como emergencia?',
        a: 'Sin calor en clima bajo cero, sin enfriamiento en calor extremo, olores a gas, fugas, pérdida de energía y peligros eléctricos cuentan como emergencias para casas y negocios.',
      },
      {
        q: '¿Qué tan rápido responden típicamente?',
        a: 'Las llamadas de emergencia se priorizan sobre la programación rutinaria, con la mayoría de los tiempos de respuesta del área de Bolingbrook bajo dos horas.',
      },
    ],
    ctaHeadline: 'Ya vamos en camino.',
  },
]

const testimonialsEs = [
  {
    name: 'Sarah M.',
    town: 'Plainfield',
    stars: 5,
    tag: 'AC',
    quote:
      'Nuestro AC se apagó en la semana más caliente de julio y tuvieron a alguien en menos de tres horas. Lo arreglaron en el momento y no intentaron vendernos una unidad nueva que no necesitábamos.',
  },
  {
    name: 'Tom R.',
    town: 'Bolingbrook',
    stars: 5,
    tag: 'Heating',
    quote:
      'Se apagó la calefacción a las 11 p.m. en enero. Contestaron, me guiaron para proteger las tuberías y tuvieron un técnico a primera hora de la mañana.',
  },
  {
    name: 'Denise K.',
    town: 'Shorewood',
    stars: 5,
    tag: 'Installation',
    quote:
      'Cotizamos con tres empresas una calefacción y un AC nuevos. Estos fueron los únicos que midieron la casa de verdad antes de recomendar un tamaño.',
  },
  {
    name: 'Marcus B.',
    town: 'Bolingbrook',
    stars: 4,
    tag: 'Maintenance',
    quote:
      'Llevo tres años en su plan de mantenimiento. Dos llamadas de recordatorio al año y es una cosa menos de qué preocuparme.',
  },
  {
    name: 'Angela P.',
    town: 'New Lenox',
    stars: 5,
    tag: 'Duct Cleaning',
    quote:
      'No me di cuenta de cuánto polvo había en nuestros ductos hasta que nos mostraron el antes y después. Notablemente menos polvo en la casa desde entonces.',
  },
  {
    name: 'Ray D.',
    town: 'Crest Hill',
    stars: 5,
    tag: 'Commercial',
    quote:
      'Los usamos para las unidades en azotea de nuestro restaurante. Trabajan alrededor de nuestro horario y aún no nos han dejado sin servicio en una hora de cena.',
  },
  {
    name: 'Kelly W.',
    town: 'Lockport',
    stars: 5,
    tag: 'Water Heater',
    quote:
      'El calentador empezó a filtrar un sábado por la mañana. Tuvieron uno nuevo instalado esa misma tarde.',
  },
  {
    name: 'Vince L.',
    town: 'Romeoville',
    stars: 5,
    tag: 'AC',
    quote:
      'Precios honestos, llegaron a tiempo, explicaron todo antes de hacer cualquier trabajo. Exactamente lo que quieres de una empresa de reparación.',
  },
  {
    name: 'Priya S.',
    town: 'Naperville',
    stars: 5,
    tag: 'Electrical',
    quote:
      'Necesitábamos una mejora del tablero y circuitos nuevos para nuestra oficina en casa. Explicaron las opciones con claridad y terminaron todo limpio y a tiempo.',
  },
]

const tipsEs = [
  {
    category: 'Mantenimiento',
    title: 'Por qué el filtro de su calefacción importa más de lo que cree',
    excerpt: 'Un filtro tapado obliga a su calefacción a trabajar más y acorta su vida útil.',
    body: 'Un filtro tapado restringe el flujo de aire, obliga a su calefacción a trabajar más y acorta su vida útil. Revíselo mensualmente durante la temporada de calefacción y reemplácelo cada 1-3 meses según el tipo de filtro y las mascotas en el hogar.',
  },
  {
    category: 'Calefacción',
    title: 'La temperatura correcta del termostato para un invierno en Illinois',
    excerpt: 'Los cambios bruscos esfuerzan más su horno que una temperatura estable.',
    body: 'Poner el termostato a 68°F mientras está en casa y unos grados menos mientras duerme o está fuera equilibra confort con eficiencia, sin el esfuerzo de grandes cambios de temperatura en su calefacción.',
  },
  {
    category: 'Enfriamiento',
    title: '5 señales de que su AC necesita atención antes del verano',
    excerpt: 'Flujo de aire débil y zonas calientes son advertencias tempranas que vale la pena revisar ahora.',
    body: 'Flujo de aire débil, zonas calientes en la casa, hielo en la unidad exterior, ruidos inusuales y un aumento en su factura eléctrica son señales de advertencia temprana que vale la pena revisar antes de que llegue el calor pico del verano.',
  },
  {
    category: 'Mantenimiento',
    title: '¿Con qué frecuencia debe realmente hacer un ajuste?',
    excerpt: 'Una vez al año por sistema detecta problemas pequeños a tiempo.',
    body: 'La mayoría de los fabricantes recomiendan un ajuste profesional una vez al año por cada sistema — calefacción en otoño, enfriamiento en primavera — para detectar problemas pequeños antes de que se conviertan en reparaciones costosas.',
  },
  {
    category: 'Calidad del aire',
    title: 'Calidad del aire interior: qué circula realmente por su hogar',
    excerpt: 'Polvo, caspa y alérgenos pasan por sus ductos.',
    body: 'El polvo, la caspa de mascotas y los alérgenos de temporada pasan por sus ductos. Cambios regulares de filtro, limpieza de ductos y control adecuado de humedad juegan un papel en lo que respira en el interior.',
  },
  {
    category: 'Calentadores de agua',
    title: 'Tanque vs. sin tanque: qué realmente le conviene a su hogar',
    excerpt: 'Se trata del costo inicial versus agua caliente continua.',
    body: 'Las unidades sin tanque ahorran espacio y dan agua caliente continua, pero cuestan más al inicio. Casas más grandes con alta demanda simultánea de agua caliente a veces les va mejor con un sistema de tanque bien dimensionado.',
  },
  {
    category: 'Electricidad',
    title: 'Cuando las luces que parpadean significan más que un foco flojo',
    excerpt: 'Parpadeos repetidos o interruptores que saltan pueden indicar un problema real de cableado.',
    body: 'Un parpadeo ocasional puede ser un foco o un accesorio, pero atenuación repetida, tomacorrientes calientes o interruptores que siguen saltando merecen una inspección eléctrica profesional — especialmente antes de agregar equipo nuevo o renovar.',
  },
]

const valuesEs = [
  {
    id: 'honesty',
    icon: '/icons/values-honesty.png?v=3',
    title: 'Honestidad',
    desc: 'Le decimos qué está mal de verdad y cuánto cuesta de verdad — antes de tocar nada.',
  },
  {
    id: 'craftsmanship',
    icon: '/icons/values-craftsmanship.png?v=3',
    title: 'Oficio',
    desc: 'Cada instalación y reparación se hace al estándar que quisiéramos en nuestros propios hogares.',
  },
  {
    id: 'punctuality',
    icon: '/icons/values-punctuality.png?v=3',
    title: 'Puntualidad',
    desc: 'Llegamos en la ventana que le damos, y llamamos si algo cambia.',
  },
  {
    id: 'community',
    icon: '/icons/values-community.png?v=3',
    title: 'Comunidad',
    desc: 'Somos sus vecinos en Bolingbrook, no un call center a tres estados de distancia.',
  },
]

const timelineEs = [
  {
    year: 'Fundación',
    text: 'Ruben Barajas crea Year Round Heating and Air Conditioning Inc para servir a propietarios de Bolingbrook con trabajo HVAC honesto y confiable.',
  },
  {
    year: 'Crecimiento',
    text: 'Amplía la cobertura de servicio en Bolingbrook, Romeoville, Plainfield y comunidades cercanas.',
  },
  {
    year: 'Certificados',
    text: 'Obtiene certificación de instalador de eficiencia energética y sigue invirtiendo en técnicos capacitados.',
  },
  {
    year: 'Hoy',
    text: 'Todavía de propiedad local, sirviendo casas y negocios con HVAC, electricidad, instalación y servicio de emergencia.',
  },
]

const teamEs = [
  { name: 'Ruben Barajas', role: 'Propietario y presidente' },
  { name: 'Renee Morales', role: 'Gerente de operaciones' },
  { name: 'Carlos Ibarra', role: 'Técnico principal, certificado NATE' },
]

const certsEs = [
  'Técnicos certificados NATE',
  'Certificado EPA',
  'Negocio acreditado BBB',
  'Con licencia y seguro vigentes y seguro en Illinois',
]

const contactFaqEs = [
  {
    q: '¿Ofrecen financiamiento?',
    a: 'Sí, ofrecemos financiamiento con crédito aprobado para instalaciones nuevas y reparaciones mayores.',
  },
  {
    q: '¿Hay servicio el mismo día?',
    a: 'En la mayoría de los casos, sí. Llame antes de las 2 p.m. para la mejor oportunidad de cita el mismo día.',
  },
  {
    q: '¿Cuál es su área de servicio?',
    a: 'Servimos los suburbios de Chicagoland hasta unas 50 millas de Bolingbrook — incluyendo Naperville, Aurora, Joliet, Plainfield, Orland Park, Downers Grove y comunidades cercanas.',
  },
  {
    q: '¿Atienden residencial y comercial?',
    a: 'Sí. Cada servicio que ofrecemos — HVAC, calentadores de agua y electricidad — está disponible para casas y negocios.',
  },
  {
    q: '¿Las reparaciones tienen garantía?',
    a: 'Todas las reparaciones incluyen una garantía de 90 días, y las instalaciones nuevas llevan garantías completas del fabricante.',
  },
]

const hoursEs = [
  { day: 'Lunes – Viernes', time: '7:00 AM – 7:00 PM' },
  { day: 'Sábado', time: '8:00 AM – 4:00 PM' },
  { day: 'Domingo', time: 'Solo emergencias' },
  { day: 'Línea de emergencia', time: '24/7, todos los días' },
]

const trustBadgesEs = [
  'Con licencia y seguro',
  'Residencial y comercial',
  'HVAC + electricidad',
  'Servicio el mismo día',
]

const reviewFiltersEs = [
  { id: 'all', label: 'Todas las reseñas' },
  { id: 'ac', label: 'AC', tag: 'AC' },
  { id: 'heating', label: 'Calefacción', tag: 'Heating' },
  { id: 'electrical', label: 'Electricidad', tag: 'Electrical' },
  { id: 'installation', label: 'Instalación', tag: 'Installation' },
  { id: 'maintenance', label: 'Mantenimiento', tag: 'Maintenance' },
  { id: 'commercial', label: 'Comercial', tag: 'Commercial' },
]

const tagLabelsEs = {
  AC: 'AC',
  Heating: 'Calefacción',
  Installation: 'Instalación',
  Maintenance: 'Mantenimiento',
  'Duct Cleaning': 'Limpieza de ductos',
  Commercial: 'Comercial',
  'Water Heater': 'Calentador de agua',
  Electrical: 'Electricidad',
}

const seoMapEs = {
  home: [
    'Year Round Heating and Air Conditioning Inc | HVAC y electricidad en Chicagoland',
    'Servicios residenciales y comerciales de HVAC y electricidad en los suburbios de Chicagoland hasta 50 millas de Bolingbrook, IL. Reparación, instalación y emergencia 24/7. Llame al (708) 710-8134.',
  ],
  about: [
    'Sobre nosotros | Year Round Heating and Air Conditioning Inc',
    'Dirigida por Ruben Barajas — empresa residencial y comercial de HVAC y electricidad que sirve a los suburbios de Chicagoland desde Bolingbrook, IL.',
  ],
  reviews: [
    'Reseñas de clientes | Year Round Heating and Air Conditioning Inc',
    'Vea lo que dicen los propietarios de Chicagoland sobre nuestro servicio de calefacción y enfriamiento.',
  ],
  tips: [
    'Consejos HVAC y de temporada | Year Round Heating and Air Conditioning Inc',
    'Consejos prácticos de calefacción y enfriamiento de nuestros técnicos con base en Bolingbrook, sirviendo los suburbios de Chicagoland.',
  ],
  contact: [
    'Contáctenos | Year Round Heating and Air Conditioning Inc',
    'Agende servicio HVAC en los suburbios de Chicagoland hasta 50 millas. Llame al (708) 710-8134 o escriba a yearroundhac@gmail.com.',
  ],
  'thank-you': [
    'Gracias | Year Round Heating and Air Conditioning Inc',
    'Recibimos su solicitud de servicio y le hablamos en breve para confirmar la hora.',
  ],
}

function withSubIcons(subs) {
  return (subs || []).map((sub) => ({
    ...sub,
    icon: `/icons/sub-${sub.id}.png?v=5`,
  }))
}

function mergeServices(lang) {
  const locale = lang === 'es' ? 'es' : 'en'
  const subMap = subServicesById[locale] || subServicesById.en

  if (lang !== 'es') {
    return servicesEn.map((s) => ({
      ...s,
      markets: ['Residential', 'Commercial'],
      subServices: withSubIcons(subMap[s.id]),
      relatedIds: relatedServiceIds[s.id] || [],
    }))
  }
  return servicesEn.map((en) => {
    const es = servicesEs.find((s) => s.id === en.id) || {}
    return {
      ...en,
      ...es,
      badge: en.badge,
      icon: en.icon,
      image: en.image,
      markets: ['Residencial', 'Comercial'],
      subServices: withSubIcons(subMap[en.id]),
      relatedIds: relatedServiceIds[en.id] || [],
    }
  })
}

export function getLocalizedContent(lang) {
  const isEs = lang === 'es'
  return {
    services: mergeServices(lang),
    testimonials: isEs ? testimonialsEs : testimonialsEn,
    tips: isEs ? tipsEs : tipsEn,
    values: isEs ? valuesEs : valuesEn,
    timeline: isEs ? timelineEs : timelineEn,
    team: isEs ? teamEs : teamEn,
    certs: isEs ? certsEs : certsEn,
    contactFaq: isEs ? contactFaqEs : contactFaqEn,
    hours: isEs ? hoursEs : hoursEn,
    trustBadges: isEs ? trustBadgesEs : trustBadgesEn,
    reviewFilters: isEs ? reviewFiltersEs : reviewFiltersEn,
    seoMap: isEs ? seoMapEs : seoMapEn,
    tagLabel: (tag) => (isEs ? tagLabelsEs[tag] || tag : tag),
  }
}

export function interpolate(template, vars = {}) {
  return String(template || '').replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] != null ? String(vars[key]) : `{${key}}`,
  )
}
