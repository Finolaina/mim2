import { Sun, Video, Key, DoorOpen, Zap, Radio, Hammer, PaintBucket, Lock, Megaphone, BatteryCharging } from "lucide-react";

export const SERVICES = [
    {
        slug: "placas-solares",
        title: "Placas Solares",
        shortDesc: "Instalación llaves en mano y gestión de subvenciones.",
        fullDesc: "Reduzca su factura eléctrica hasta un 70% con nuestra instalación de autoconsumo. Nos encargamos de todo: estudio, instalación, legalización y subvenciones. Paneles Tier-1 con 25 años de garantía.",
        category: "Energía",
        icon: Sun,
        color: "#fbbf24",
        benefits: [
            "Ahorro inmediato en la factura de luz.",
            "Bonificación del IBI (según municipio).",
            "Monitorización vía App en tiempo real.",
            "Gestión integral de permisos y subvenciones NextGeneration."
        ],
        faqs: [
            { q: "¿Cuánto tardan en instalarlas?", a: "Para una vivienda unifamiliar, la instalación física suele durar 1-2 días." },
            { q: "¿Gestionan las subvenciones?", a: "Sí, nuestro departamento administrativo tramita todas las ayudas disponibles." }
        ]
    },
    {
        slug: "cctv",
        title: "CCTV y Videovigilancia",
        shortDesc: "Monitorización 24/7 con acceso remoto seguro.",
        fullDesc: "Sistemas de videovigilancia de alta definición con Inteligencia Artificial para detección de intrusos. Visualice su comunidad o empresa desde el móvil, cumpliendo estrictamente con la LOPD.",
        category: "Seguridad",
        icon: Video,
        color: "#2EE6A6",
        benefits: [
            "Cámaras con visión nocturna y detección térmica.",
            "Grabación en nube o local con encriptación.",
            "Aviso inmediato a policía (con CRA conectada).",
            "Cumplimiento total de normativa de privacidad."
        ],
        faqs: [
            { q: "¿Se puede ver desde el móvil?", a: "Sí, configuramos acceso seguro en los móviles autorizados." },
            { q: "¿Graban audio?", a: "Por normativa general solo video, salvo excepciones justificadas y señalizadas." }
        ]
    },
    {
        slug: "control-accesos",
        title: "Control de Accesos",
        shortDesc: "RFID, biometría y lectura de matrículas.",
        fullDesc: "Gestione quién entra y sale de sus instalaciones. Desde llaves magnéticas incopiables hasta lectura de matrículas para garajes y reconocimiento facial para zonas restringidas.",
        category: "Seguridad",
        icon: Key,
        color: "#22d3ee",
        benefits: [
            "Eliminación de llaves físicas tradicionales.",
            "Registro de entradas y salidas.",
            "Baja inmediata de usuarios perdidos/robados.",
            "Apertura remota vía Smartphone."
        ],
        faqs: [
            { q: "¿Qué pasa si se va la luz?", a: "Nuestros sistemas incluyen baterías de respaldo (SAI) para seguir operando." }
        ]
    },
    {
        slug: "automatismos",
        title: "Automatismos y Puertas",
        shortDesc: "Puertas de garaje, barreras y mantenimiento.",
        fullDesc: "Instalación y reparación de motores para todo tipo de puertas: correderas, batientes, seccionales. Mantenimiento preventivo para evitar que su garaje se quede bloqueado.",
        category: "Accesos",
        icon: DoorOpen,
        color: "#818cf8",
        benefits: [
            "Motores silenciosos de alta durabilidad.",
            "Sistemas de seguridad anti-aplastamiento.",
            "Mandos incopiables de alta seguridad.",
            "Servicio de urgencia para puertas bloqueadas."
        ],
        faqs: [
            { q: "¿Hacen mantenimiento?", a: "Sí, disponemos de contratos mensuales preventivos obligatorios por normativa en comunidades." }
        ]
    },
    {
        slug: "electricidad",
        title: "Electricidad",
        shortDesc: "Instalaciones, boletines y mantenimiento.",
        fullDesc: "Electricistas autorizados para averías, reformas de cuartos de contadores, iluminación LED y certificados (Boletines). Atendemos urgencias 24h.",
        category: "Infraestructura",
        icon: Zap,
        color: "#f472b6",
        benefits: [
            "Ahorro energético con iluminación LED.",
            "Legalización de instalaciones (Boletines).",
            "Reforma de cuartos de contadores a normativa.",
            "Detección de fugas y averías."
        ],
        faqs: [
            { q: "¿Atendéis urgencias?", a: "Sí, tenemos equipo de guardia para averías críticas." }
        ]
    },
    {
        slug: "antenizacion",
        title: "Antenas y Telecomunicaciones",
        shortDesc: "TDT, Satélite y redes de datos.",
        fullDesc: "Adaptación al Segundo Dividendo Digital, instalación de parabólicas comunitarias y redes de fibra óptica/WIFI para comunidades y oficinas.",
        category: "Infraestructura",
        icon: Radio,
        color: "#a78bfa",
        benefits: [
            "Señal perfecta en todos los vecinos.",
            "Canales internacionales vía satélite.",
            "Redes WIFI comunitarias seguras.",
            "Porteros y videoporteros de última generación."
        ],
        faqs: []
    },
    {
        slug: "puntos-recarga",
        title: "Puntos de Recarga Vehículo Eléctrico",
        shortDesc: "Cargadores en garajes comunitarios.",
        fullDesc: "Instalamos su cargador de coche eléctrico cumpliendo la normativa ITC-BT-52. Nos encargamos de la comunicación al administrador y la legalización.",
        category: "Energía",
        icon: BatteryCharging,
        color: "#34d399",
        benefits: [
            "Carga rápida e inteligente.",
            "Gestión de usuarios y cobros (si es compartido).",
            "Instalación limpia y certificada.",
            "Ayudas MOVES III."
        ],
        faqs: []
    },
    {
        slug: "cerrajeria",
        title: "Cerrajería",
        shortDesc: "Amaestramientos y cerraduras de seguridad.",
        fullDesc: "Servicio de cerrajería profesional. Amaestramiento de bombines para que abra todas sus puertas con una sola llave. Cerraduras electrónicas e invisibles.",
        category: "Seguridad",
        icon: Lock,
        color: "#fb923c",
        benefits: [],
        faqs: []
    },
];

export const TEAM = [
    {
        name: "Roberto Martínez",
        role: "Director Técnico",
        bio: "Ingeniero de Telecomunicaciones con 20 años de experiencia en infraestructuras críticas.",
        image: "/team-1.jpg" // Placeholder
    },
    {
        name: "Ana García",
        role: "Jefa de Proyectos",
        bio: "Especialista en eficiencia energética y gestión de subvenciones NextGeneration.",
        image: "/team-2.jpg"
    },
    {
        name: "Carlos Ruiz",
        role: "Coordinador de Instalaciones",
        bio: "Experto en seguridad electrónica y control de accesos. Certificado por los principales fabricantes.",
        image: "/team-3.jpg"
    }
];

export const CASES = [
    {
        slug: "comunidad-gran-via",
        title: "Rehabilitación Energética Gran Vía",
        category: "Energía",
        desc: "Instalación de 50kW de potencia fotovoltaica y 20 puntos de recarga en garaje comunitario.",
        stats: { savings: "60%", roi: "3 años" },
        image: "/case-1.jpg"
    },
    {
        slug: "seguridad-parque-logistico",
        title: "Videovigilancia Parque Logístico Sur",
        category: "Seguridad",
        desc: "Despliegue de 40 cámaras térmicas y control de accesos biométrico para 500 empleados.",
        stats: { incidents: "-90%", efficiency: "+25%" },
        image: "/case-2.jpg"
    },
    {
        slug: "iluminacion-residencial-norte",
        title: "Modernización LED Residencial Norte",
        category: "Iluminación",
        desc: "Sustitución de 500 luminarias por LED inteligente con detección de presencia.",
        stats: { savings: "75%", maintenance: "-90%" },
        image: "/case-3.jpg"
    }
];
