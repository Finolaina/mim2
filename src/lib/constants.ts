import { Sun, Video, Key, DoorOpen, Zap, Radio, Hammer, PaintBucket, Lock, Megaphone, BatteryCharging } from "lucide-react";
import { getAssetPath } from "./utils";

export const SERVICES = [
    {
        slug: "placas-solares",
        title: "Placas Solares",
        shortDesc: "Instalación llaves en mano y gestión de subvenciones.",
        fullDesc: "Reduzca su factura eléctrica hasta un 70% con nuestra instalación de autoconsumo. Nos encargamos de todo el ciclo de vida del proyecto: desde el estudio de viabilidad gratuito y la instalación certificada, hasta la legalización y la gestión integral de subvenciones NextGeneration. Utilizamos paneles Tier-1 con 25 años de garantía de rendimiento.",
        category: "Energía",
        icon: Sun,
        color: "#fbbf24",
        benefits: [
            "Ahorro inmediato en la factura de luz (hasta 70%).",
            "Bonificación del IBI (según municipio, hasta 50%).",
            "Monitorización vía App en tiempo real de producción y consumo.",
            "Baterías virtuales para aprovechar el 100% de los excedentes."
        ],
        faqs: [
            { q: "¿Cuánto tardan en instalarlas?", a: "Para una vivienda unifamiliar, la instalación física suele durar 1-2 días." },
            { q: "¿Gestionan las subvenciones?", a: "Sí, nuestro departamento administrativo tramita todas las ayudas disponibles (NextGen, IRPF, IBI)." },
            { q: "¿Qué garantía tienen los paneles?", a: "Trabajamos con primeras marcas que ofrecen 25 años de garantía de producto y producción." }
        ]
    },
    {
        slug: "cctv",
        title: "CCTV y Videovigilancia",
        shortDesc: "Monitorización 24/7 con acceso remoto seguro.",
        fullDesc: "Sistemas de videovigilancia de alta definición con Inteligencia Artificial para la detección proactiva de intrusos. Proteja su comunidad o empresa con tecnología de visión nocturna a color y análisis de vídeo. Visualice todo desde su móvil con conexiones encriptadas de grado bancario, cumpliendo estrictamente con la LOPD.",
        category: "Seguridad",
        icon: Video,
        color: "#2EE6A6",
        benefits: [
            "Cámaras 4K con visión nocturna a color (ColorVu).",
            "Alertas inteligentes al móvil por cruce de línea o intrusión.",
            "Grabación en la nube o local con encriptación AES.",
            "Integración con Central Receptora de Alarmas (CRA)."
        ],
        faqs: [
            { q: "¿Se puede ver desde el móvil?", a: "Sí, configuramos acceso seguro mediante App en los móviles autorizados." },
            { q: "¿Graban audio?", a: "Por normativa general solo video, salvo excepciones justificadas y debidamente señalizadas." },
            { q: "¿Cumple con la Ley de Protección de Datos?", a: "Absolutamente. Entregamos el cartel homologado y el contrato de confidencialidad necesario." }
        ]
    },
    {
        slug: "control-accesos",
        title: "Control de Accesos",
        shortDesc: "RFID, biometría y lectura de matrículas.",
        fullDesc: "Tenga el control total de quién entra y sale de sus instalaciones. Olvídese de las llaves tradicionales incopiables y pase a la seguridad digital. Instalamos lectores de huella, faciales, teclados y sistemas LPR (lectura de matrículas) para garajes, gestionados desde un software centralizado muy fácil de usar.",
        category: "Seguridad",
        icon: Key,
        color: "#22d3ee",
        benefits: [
            "Eliminación de llaves físicas: acceso por móvil o huella.",
            "Registro histórico de entradas y salidas por usuario.",
            "Baja inmediata de usuarios perdidos/robados sin cambiar cerraduras.",
            "Apertura remota para visitas o paquetería."
        ],
        faqs: [
            { q: "¿Qué pasa si se va la luz?", a: "Nuestros sistemas incluyen baterías de respaldo (SAI) para seguir operando durante cortes." },
            { q: "¿Es difícil de gestionar?", a: "No, ofrecemos un software muy intuitivo o podemos gestionarlo nosotros por usted." }
        ]
    },
    {
        slug: "automatismos",
        title: "Automatismos y Puertas",
        shortDesc: "Puertas de garaje, barreras y mantenimiento.",
        fullDesc: "Instalación, reparación y motorización de todo tipo de puertas: correderas, batientes, seccionales y barreras de paso. Trabajamos con motores de uso intensivo diseñados para comunidades con alto tráfico. Ofrecemos planes de mantenimiento preventivo para cumplir con la normativa de marcado CE y evitar accidentes.",
        category: "Accesos",
        icon: DoorOpen,
        color: "#818cf8",
        benefits: [
            "Motores silenciosos de uso intensivo.",
            "Sistemas de seguridad anti-aplastamiento (fotocélulas y bandas).",
            "Mandos incopiables de alta seguridad (rolling code).",
            "Servicio de urgencia para puertas bloqueadas."
        ],
        faqs: [
            { q: "¿Hacen mantenimiento?", a: "Sí, el mantenimiento preventivo es obligatorio para puertas comunitarias según normativa." },
            { q: "¿Puedo abrir con el móvil?", a: "Sí, instalamos módulos GSM o Bluetooth para abrir la puerta sin mando." }
        ]
    },
    {
        slug: "electricidad",
        title: "Electricidad",
        shortDesc: "Instalaciones, boletines y mantenimiento.",
        fullDesc: "Somos empresa instaladora autorizada en Baja Tensión. Realizamos desde pequeñas reparaciones hasta reformas integrales de cuartos de contadores. Especialistas en iluminación LED inteligente para garajes y zonas comunes que reduce el consumo hasta un 80%. Emitimos boletines (CIE) y certificados para aumentos de potencia.",
        category: "Infraestructura",
        icon: Zap,
        color: "#f472b6",
        benefits: [
            "Iluminación LED con sensores para ahorro máximo.",
            "Legalización de instalaciones y Boletines (CIE).",
            "Reforma de cuartos de contadores a normativa actual.",
            "Detección y reparación de fugas de corriente."
        ],
        faqs: [
            { q: "¿Atendéis urgencias?", a: "Sí, disponemos de servicio 24h para averías críticas que dejen sin suministro." },
            { q: "¿Cuánto se ahorra con LED?", a: "En garajes con sensores, el retorno de inversión suele ser inferior a 18 meses." }
        ]
    },
    {
        slug: "antenizacion",
        title: "Antenas y Telecomunicaciones",
        shortDesc: "TDT, Satélite y redes de datos.",
        fullDesc: "Garantizamos la mejor señal de televisión (TDT y Satélite) para su comunidad. Adaptamos cabeceras al Segundo Dividendo Digital y resolvemos problemas de pixelación. Además, desplegamos redes de Fibra Óptica (GPON) y WIFI comunitario de alta velocidad para edificios de oficinas o residenciales.",
        category: "Infraestructura",
        icon: Radio,
        color: "#a78bfa",
        benefits: [
            "Medición de campo para señal perfecta en todos los vecinos.",
            "Instalación de parabólicas para canales internacionales.",
            "Redes WIFI comunitarias seguras y gestionadas.",
            "Videoporteros de última generación conectados al móvil."
        ],
        faqs: [
            { q: "¿Por qué se pixelan los canales?", a: "Suele deberse a interferencias 4G/5G o equipos de cabecera obsoletos. Lo diagnosticamos gratis." },
            { q: "¿Instalan videoporteros?", a: "Sí, trabajamos con Fermax, Tegui y marcas IP premium." }
        ]
    },
    {
        slug: "puntos-recarga",
        title: "Puntos de Recarga (V.E.)",
        shortDesc: "Cargadores en garajes comunitarios.",
        fullDesc: "Expertos en movilidad eléctrica. Realizamos la preinstalación comunitaria o la instalación individual de su cargador cumpliendo estrictamente la ITC-BT-52. Gestionamos la comunicación al administrador y tramitamos las ayudas del Plan MOVES III (hasta 70% de subvención). Soluciones con balanceo de carga para no contratar más potencia.",
        category: "Energía",
        icon: BatteryCharging,
        color: "#34d399",
        benefits: [
            "Carga inteligente con balanceo dinámico.",
            "Plataforma de gestión de cobros para cargadores compartidos.",
            "Instalación limpia y legalizada con Boletín.",
            "Tramitación integral del Plan MOVES III."
        ],
        faqs: [
            { q: "¿Necesito permiso de la comunidad?", a: "Solo necesita informarles, no pueden negarse si es en su plaza (según Ley de Propiedad Horizontal)." },
            { q: "¿Qué cargador recomendáis?", a: "Depende de su coche y uso, trabajamos con Wallbox, V2C y Orbis." }
        ]
    },
    {
        slug: "cerrajeria",
        title: "Cerrajería Técnica",
        shortDesc: "Amaestramientos y alta seguridad.",
        fullDesc: "Cerrajería profesional enfocada a la seguridad y comodidad. Especialistas en amaestramientos: abra el portal, el garaje, el trastero y su casa con UNA sola llave. Instalamos cerraduras invisibles, bombines antibumping de gama alta y muelles cierrapuertas motorizados para garantizar que la puerta siempre queda cerrada.",
        category: "Seguridad",
        icon: Lock,
        color: "#fb923c",
        benefits: [
            "Amaestramientos complejos (plan de cierre).",
            "Bombines de alta seguridad (Anti-bumping/ganzúa).",
            "Cerraduras electrónicas invisibles desde el exterior.",
            "Muelles motorizados para accesibilidad."
        ],
        faqs: [
            { q: "¿Qué es un amaestramiento?", a: "Es un sistema planificado donde cada usuario tiene una llave que abre solo las puertas que tiene autorizadas." },
            { q: "¿Atendéis urgencias de apertura?", a: "Nuestro servicio se centra en instalaciones y mejoras planificadas, no somos cerrajeros de urgencia 24h convencionales." }
        ]
    },
];

export const TEAM = [
    {
        name: "Roberto Martínez",
        role: "Director Técnico",
        bio: "Ingeniero de Telecomunicaciones con 20 años de experiencia en infraestructuras críticas.",
        image: getAssetPath("/team-1.jpg")
    },
    {
        name: "Ana García",
        role: "Jefa de Proyectos",
        bio: "Especialista en eficiencia energética y gestión de subvenciones NextGeneration.",
        image: getAssetPath("/team-2.jpg")
    },
    {
        name: "Carlos Ruiz",
        role: "Coordinador de Instalaciones",
        bio: "Experto en seguridad electrónica y control de accesos. Certificado por los principales fabricantes.",
        image: getAssetPath("/team-3.jpg")
    }
];

export const CASES = [
    {
        slug: "comunidad-gran-via",
        title: "Rehabilitación Energética Gran Vía",
        category: "Energía",
        desc: "Instalación de 50kW de potencia fotovoltaica y 20 puntos de recarga en garaje comunitario.",
        stats: { savings: "60%", roi: "3 años" },
        image: getAssetPath("/case-1.png")
    },
    {
        slug: "seguridad-parque-logistico",
        title: "Videovigilancia Parque Logístico Sur",
        category: "Seguridad",
        desc: "Despliegue de 40 cámaras térmicas y control de accesos biométrico para 500 empleados.",
        stats: { incidents: "-90%", efficiency: "+25%" },
        image: getAssetPath("/case-2.png")
    },
    {
        slug: "iluminacion-residencial-norte",
        title: "Modernización LED Residencial Norte",
        category: "Iluminación",
        desc: "Sustitución de 500 luminarias por LED inteligente con detección de presencia.",
        stats: { savings: "75%", maintenance: "-90%" },
        image: getAssetPath("/case-3.png")
    }
];

