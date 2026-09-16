const es = {
  navigation: {
    '/about': {
      title: 'Sobre FOSMARIN',
      sections: {
        'project-overview':
          'Descripción del proyecto',
        'mission-and-vision':
          'Misión y visión',
        objectives: 'Objetivos',
        impact: 'Impacto',
        'eu-funding':
          'Financiación de la UE',
        'consortium-at-a-glance':
          'El consorcio de un vistazo',
      },
    },

    '/challenge': {
      title: 'El desafío',
      sections: {
        'threats-to-subsea-cables':
          'Amenazas a los cables submarinos',
        'global-context':
          'Contexto global',
        'current-gaps':
          'Carencias actuales',
        'why-action-is-needed':
          'Por qué es necesario actuar',
        'the-cost-of-inaction':
          'El coste de no actuar',
        'policy-and-eu-actions':
          'Políticas y acciones de la UE',
      },
    },

    '/use-cases': {
      title: 'Casos de uso',
      sections: {
        'telecom-cables-protection':
          'Protección de cables de telecomunicaciones',
        'power-cables-monitoring':
          'Monitorización de cables eléctricos',
        'offshore-wind-farms':
          'Parques eólicos marinos',
        'pipelines-monitoring':
          'Monitorización de tuberías',
        'ports-and-harbours': 'Puertos',
        'shallow-water-monitoring':
          'Monitorización de aguas poco profundas',
        'search-and-rescue-support':
          'Apoyo a búsqueda y rescate',
      },
    },

    '/technology': {
      title: 'Tecnología',
      sections: {
        'fibre-optic-acoustic-sensing':
          'Detección acústica por fibra óptica (FOAS)',
        'how-it-works': 'Cómo funciona',
        'using-dark-fibre-in-existing-cables':
          'Uso de fibra oscura en cables existentes',
        'multi-parameter-monitoring':
          'Monitorización multiparámetro',
        'predictive-analytics-and-ai':
          'Analítica predictiva e IA',
        'system-architecture-and-components':
          'Arquitectura y componentes del sistema',
        'data-processing-and-algorithms':
          'Procesamiento de datos y algoritmos',
        'integration-interoperability-and-security':
          'Integración, interoperabilidad y seguridad',
      },
    },

    '/consortium': {
      title: 'Consorcio',
      sections: {
        partners: 'Socios',
        'partner-map': 'Mapa de socios',
        'roles-and-contributions':
          'Funciones y contribuciones',
        'advisory-board':
          'Consejo asesor',
        'authorities-and-stakeholders':
          'Autoridades y partes interesadas',
      },
    },

    '/news': {
      title: 'Noticias y eventos',
      sections: {
        'latest-news':
          'Últimas noticias',
        events: 'Eventos',
        'press-releases':
          'Comunicados de prensa',
        'media-gallery':
          'Galería multimedia',
        webinars: 'Seminarios web',
      },
    },

    '/resources': {
      title: 'Recursos',
      sections: {
        publications: 'Publicaciones',
        deliverables: 'Entregables',
        reports: 'Informes',
        presentations: 'Presentaciones',
        videos: 'Vídeos',
        brochures: 'Folletos',
        newsletter: 'Boletín',
        faqs: 'Preguntas frecuentes',
      },
    },

    '/contact': {
      title: 'Contacto',
      sections: {
        'contact-form':
          'Formulario de contacto',
        'get-in-touch':
          'Póngase en contacto',
        'social-media-links':
          'Redes sociales',
      },
    },
  },

  header: {
    primaryNavigation:
      'Navegación principal',
    toggleNavigation:
      'Abrir o cerrar la navegación',
    selectLanguage:
      'Seleccionar idioma',
    languageMenu: 'Idioma',
    sections: 'secciones',
    switchLanguageTo:
      'Cambiar idioma a',
  },

  footer: {
    about: 'Sobre FOSMARIN',
    quickLinks: 'Enlaces rápidos',
    resources: 'Recursos',
    followUs: 'Síguenos',
    contact: 'Contacto',

    aboutNavigation:
      'Navegación del pie sobre FOSMARIN',
    quickLinksNavigation:
      'Enlaces rápidos del pie de página',
    resourcesNavigation:
      'Navegación de recursos del pie de página',

    euLogoAlt:
      'Financiado por la Unión Europea',

    grant:
      'El proyecto está financiado por la UE en virtud del acuerdo de subvención 101309039 — FOSMARIN — HORIZON-CL3-2025-01.',

    disclaimer:
      'Las opiniones expresadas pertenecen exclusivamente a sus autores y no reflejan necesariamente las de la Unión Europea o la Agencia Ejecutiva Europea de Investigación. Ni la Unión Europea ni la Agencia Ejecutiva Europea de Investigación pueden ser consideradas responsables de ellas.',

    copyright:
      '© 2026 CONSORCIO FOSMARIN',

    tagline:
      'FOAS · ANALÍTICA PREDICTIVA · RESILIENCIA DE INFRAESTRUCTURAS SUBMARINAS',
  },

  home: {
    hero: {
      eyebrow:
        'Financiado por la UE · Resiliencia de infraestructuras submarinas',

      titleBefore:
        'Un hilo de fibra óptica en el fondo marino ahora puede ',

      titleEmphasis: 'oír',

      titleAfter:
        ' todo lo que ocurre sobre él.',

      lead:
        'FOSMARIN transforma los cables submarinos de fibra óptica existentes en miles de puntos virtuales de escucha submarina. Mediante detección acústica por fibra óptica (FOAS) y analítica predictiva, permite detectar movimientos de embarcaciones, amenazas de anclas, actividad sísmica y otros eventos críticos a lo largo de la ruta del cable.',

      primaryAction: 'Ver cómo funciona',
      secondaryAction:
        'Misión del proyecto',

      statsLabel:
        'Principales cifras del proyecto',

      stats: [
        {
          value: '≈1 m',
          label:
            'Resolución de detección',
        },
        {
          value: '<1 s',
          label:
            'Latencia de detección',
        },
        {
          value: '0',
          label:
            'Nuevo hardware en el fondo marino',
        },
      ],
    },

    heroVisual: {
      readoutMessages: [
        'SEÑAL · NORMAL',
        'EMBARCACIÓN DETECTADA · 4,2 km',
        'ARRASTRE DE ANCLA · MARCADO',
        'EVENTO SÍSMICO · REGISTRADO',
        'SEÑAL · NORMAL',
      ],

      title:
        'Monitorización FOSMARIN de fibra óptica submarina',

      description:
        'Ilustración de un cable submarino de fibra óptica que detecta una embarcación, un ancla arrastrada y actividad sísmica.',
    },

    pillars: {
      eyebrow:
        'Pilares clave del proyecto',

      title:
        'Cinco prioridades para un futuro submarino más resiliente.',

      intro:
        'FOSMARIN combina detección, analítica y resiliencia operativa en un único enfoque para proteger las infraestructuras marítimas críticas de Europa.',

      items: [
        {
          number: '01',
          title:
            'Proteger los cables submarinos',
          text:
            'Detectar actividad de embarcaciones, amenazas de anclas, eventos geológicos y otros riesgos antes de que provoquen grandes interrupciones.',
          link: '/challenge',
          linkLabel:
            'Explorar el desafío',
        },
        {
          number: '02',
          title:
            'Tecnología FOAS avanzada',
          text:
            'Convertir los cables de fibra óptica existentes en redes continuas de detección sin añadir nuevo hardware al fondo marino.',
          link: '/technology',
          linkLabel:
            'Explorar la tecnología',
        },
        {
          number: '03',
          title:
            'IA y analítica predictiva',
          text:
            'Combinar señales acústicas con análisis inteligente y datos externos para identificar eventos, reducir falsas alarmas y facilitar una actuación más temprana.',
          link:
            '/technology#predictive-analytics-and-ai',
          linkLabel:
            'Ver analítica predictiva',
        },
        {
          number: '04',
          title:
            'Infraestructuras resilientes',
          text:
            'Proporcionar a operadores y autoridades una mejor conciencia situacional, apoyo a la toma de decisiones y herramientas de preparación, respuesta y recuperación.',
          link: '/about#impact',
          linkLabel:
            'Ver el impacto del proyecto',
        },
        {
          number: '05',
          title:
            'Un futuro marítimo más sólido',
          text:
            'Desarrollar conocimiento, conjuntos de datos, prácticas operativas y tecnología capaces de reforzar la infraestructura submarina europea más allá del propio proyecto.',
          link: '/about#objectives',
          linkLabel:
            'Explorar los objetivos',
        },
      ],
    },

    latestNews: {
      eyebrow:
        'Últimas noticias',

      title:
        'Sigue a FOSMARIN en el inicio del proyecto.',

      readUpdate:
        'Leer actualización',

      items: {
        'fosmarin-project-launch-2026': {
          category:
            'Lanzamiento del proyecto',
          status: 'Próximamente',
          dateLabel: '01 oct 2026',

          title:
            'Anuncio oficial del inicio del proyecto FOSMARIN',

          excerpt:
            'El anuncio oficial del inicio de FOSMARIN está previsto durante Atlantic Convergence 2026 en Lisboa, Portugal.',

          location:
            'Lisboa · Portugal',
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: 'Sobre FOSMARIN',
      title:
        'Un proyecto europeo para unas infraestructuras submarinas más seguras y resilientes.',
      intro:
        'FOSMARIN es una iniciativa financiada por la UE que desarrolla y valida un sistema en tiempo real de monitorización y evaluación de amenazas para infraestructuras submarinas, combinando detección acústica por fibra óptica (FOAS), analítica predictiva y fuentes de datos externas.',
    },

    overview: {
      eyebrow:
        'Descripción del proyecto',
      title:
        'La fibra existente pasa a formar parte del sistema de protección.',
      intro:
        'FOSMARIN desarrolla, prueba y demuestra un sistema que utiliza la infraestructura submarina de fibra óptica existente como una capa continua de detección, sin añadir nuevo hardware al fondo marino.',
      paragraphs: [
        'Mediante detección acústica por fibra óptica (FOAS), es posible detectar y analizar pequeñas vibraciones a lo largo de un cable para identificar movimientos de embarcaciones, amenazas de anclas, actividad sísmica y otros eventos críticos.',
        'FOSMARIN combina estos datos de detección con analítica predictiva y fuentes externas de información como AIS, ayudando a operadores y autoridades de seguridad a obtener una imagen más clara de lo que sucede alrededor de las infraestructuras submarinas críticas.',
        'El proyecto va más allá de la investigación de laboratorio: se registrarán datos FOAS en dos emplazamientos de prueba antes de demostrar el sistema desarrollado sobre infraestructuras de terceros en un entorno real.',
      ],
      facts: [
        { label: 'Número de proyecto', value: '101309039' },
        { label: 'Convocatoria', value: 'HORIZON-CL3-2025-01' },
        { label: 'Tema', value: 'HORIZON-CL3-2025-01-INFRA-01' },
        { label: 'Tipo de acción', value: 'HORIZON Innovation Action' },
        { label: 'Duración', value: '36 meses' },
        { label: 'Periodo del proyecto', value: '1 oct 2026 — 30 sep 2029' },
      ],
      outputs: [
        {
          number: '01',
          title:
            'Desarrollar y validar el sistema',
          text:
            'Combinar detección acústica por fibra óptica (FOAS), analítica predictiva y datos externos para mejorar el conocimiento situacional alrededor de las infraestructuras submarinas.',
        },
        {
          number: '02',
          title:
            'Probarlo en condiciones reales',
          text:
            'Registrar datos FOAS en dos emplazamientos de prueba y demostrar posteriormente el sistema FOSMARIN sobre infraestructuras de terceros en un entorno real.',
        },
        {
          number: '03',
          title:
            'Convertir los resultados en conocimiento duradero',
          text:
            'Apoyar el uso operativo, la investigación posterior a incidentes y futuros desarrollos mediante datos compartidos, experiencia práctica y documentos técnicos del proyecto.',
        },
      ],
    },

    missionVision: {
      eyebrow: 'Misión y visión',
      title:
        'Por qué existe FOSMARIN y hacia dónde se dirige.',
      missionTitle: 'Misión',
      missionText:
        'FOSMARIN refuerza la capacidad de preparación, respuesta y recuperación de los operadores europeos de cables submarinos y de las autoridades, convirtiendo la fibra ya instalada en una capa continua de monitorización y evaluación de amenazas. Mediante detección acústica por fibra óptica (FOAS) y analítica predictiva, permite detectar en tiempo real arrastres de anclas, actividad sísmica y amenazas relacionadas con embarcaciones, además de proporcionar herramientas de previsión y apoyo a la toma de decisiones para proteger las infraestructuras críticas.',
      visionTitle: 'Visión',
      visionText:
        'Una Europa en la que las grandes interrupciones de las infraestructuras submarinas de datos y energía sean poco frecuentes, se detecten rápidamente y puedan recuperarse con rapidez, porque cada ruta de cable disponga de su propio sistema integrado de alerta temprana, alimentando mapas de interdependencias, herramientas de previsión y datos para investigaciones posteriores a incidentes destinados a operadores, autoridades nacionales y organismos de coordinación de la UE responsables de la resiliencia de las infraestructuras críticas.',
    },

    objectives: {
      eyebrow:
        'Objetivos del proyecto',
      title:
        'De detectar eventos a apoyar actuaciones reales.',
      intro:
        'FOSMARIN está diseñado no solo para detectar lo que sucede alrededor de las infraestructuras submarinas, sino también para convertir esa información en conocimiento operativo útil para operadores y autoridades de seguridad.',
      items: [
        {
          number: '01',
          title:
            'Mejorar la vigilancia marítima',
          text:
            'Seguir embarcaciones y detectar eventos críticos mediante detección acústica por fibra óptica (FOAS), reforzando el conocimiento situacional alrededor de las infraestructuras submarinas.',
        },
        {
          number: '02',
          title:
            'Conectar operadores y autoridades de seguridad',
          text:
            'Facilitar una comunicación eficaz entre los operadores de infraestructuras críticas y las autoridades de seguridad pertinentes para que la información llegue a quienes son responsables de la respuesta y la resiliencia.',
        },
        {
          number: '03',
          title:
            'Apoyar la investigación y la formación',
          text:
            'Registrar datos FOAS para investigaciones posteriores a incidentes y proporcionar material que pueda apoyar la formación de usuarios finales y la preparación operativa.',
        },
      ],
      outcomeLabel:
        'Resultado esperado',
      outcomeText:
        'Desarrollar, probar y desplegar un sistema que refuerce la resiliencia y la seguridad submarinas, favorezca el flujo ininterrumpido de recursos, energía e información y proporcione a operadores y autoridades herramientas prácticas para proteger la conectividad europea.',
    },

    impact: {
      eyebrow: 'Impacto',
      title: 'Lo que FOSMARIN dejará tras de sí.',
      intro:
        'Más allá de las alertas en tiempo real, FOSMARIN está diseñado para generar valor duradero en las operaciones, las políticas, la investigación y la sociedad, reforzando la forma en que Europa comprende y protege sus infraestructuras submarinas.',
      deliveredThrough: 'A través de',
      areas: [
        {
          level: 'Alto impacto',
          audience: 'Operadores · Reguladores · Gobiernos',
          title:
            'Una referencia para una mayor resiliencia submarina',
          text:
            'FOSMARIN pretende dejar a operadores, reguladores y autoridades conocimientos prácticos capaces de influir en las decisiones tecnológicas, los procedimientos operativos, las políticas y el futuro diseño de cables mucho después de que finalice el proyecto.',
          delivery:
            'Documentos técnicos del proyecto, talleres con partes interesadas y recomendaciones de política.',
        },
        {
          level: 'Alto impacto',
          audience: 'Comunidad científica',
          title:
            'Datos abiertos para la próxima generación de herramientas predictivas',
          text:
            'Diez conjuntos de datos FOAS de alta calidad proporcionarán a los investigadores material del mundo real para desarrollar y probar nuevos métodos de seguimiento de embarcaciones, clasificación y predicción de amenazas.',
          delivery:
            'Diez conjuntos de datos FOAS publicados que cubren escenarios de amenaza generados y datos de instalaciones a largo plazo, acompañados de información AIS de referencia.',
        },
        {
          level: 'Impacto medio-alto',
          audience: 'Sociedad y confianza pública',
          title:
            'Menos interrupciones en las infraestructuras de las que depende la sociedad',
          text:
            'Si se despliega a gran escala, el enfoque FOSMARIN podría reducir las interrupciones de infraestructuras submarinas críticas y ayudar a reforzar la confianza en la capacidad de Europa para proteger conexiones marítimas esenciales.',
          delivery:
            'Comunicación abierta del proyecto a través del sitio web, redes sociales y comunicados de prensa.',
        },
      ],
    },

    euFunding: {
      eyebrow: 'Financiación de la UE',
      title: 'Financiado por la Unión Europea.',
      intro:
        'FOSMARIN está financiado por la Unión Europea en virtud del Acuerdo de Subvención n.º 101309039 como parte de HORIZON-CL3-2025-01.',
      facts: [
        {
          label: 'Acuerdo de subvención',
          value: '101309039 — FOSMARIN',
        },
        {
          label: 'Programa',
          value: 'HORIZON-CL3-2025-01',
        },
        {
          label: 'Forma de subvención',
          value: 'Basada en presupuesto',
        },
        {
          label: 'Modalidad de subvención',
          value: 'Subvención de acción',
        },
      ],
      logoAlt:
        'Financiado por la Unión Europea',
      disclaimer:
        'Las opiniones expresadas pertenecen exclusivamente a sus autores y no reflejan necesariamente las de la Unión Europea o la Agencia Ejecutiva Europea de Investigación. Ni la Unión Europea ni la Agencia Ejecutiva Europea de Investigación pueden ser consideradas responsables de ellas.',
    },

    consortiumGlance: {
      eyebrow: 'El consorcio de un vistazo',
      title:
        'Experiencia en tecnología, investigación y operaciones marítimas.',
      intro:
        'FOSMARIN reúne la experiencia necesaria para unas infraestructuras submarinas resilientes: desde detección por fibra óptica e integración de sistemas hasta operadores, investigadores, organizaciones de formación y autoridades marítimas.',
      statsLabel: 'Estadísticas del consorcio',
      partners: 'Socios',
      countries: 'Países',
      coordinator: 'Coordinador',
      coordinatorDescription:
        'AIT lidera y coordina el consorcio FOSMARIN.',
      coordinatorCountry: 'Austria · AT',
      footer:
        'Descubre todos los socios del consorcio, su función en FOSMARIN y la experiencia que aportan al proyecto.',
      linkLabel: 'Explorar el consorcio',
    },
  },

  common: {
    "underConstruction": {
      "label": "Se requiere información del cliente",
      "defaultTitle": "Contenido en preparación",
      "defaultText": "El contenido detallado de esta sección está pendiente de información del cliente.",
      "contentSuffix": "— contenido en preparación",
      "projectMaterial": "El contenido se añadirá cuando el material del proyecto esté disponible y aprobado para su publicación.",
      "resources": "Los recursos se añadirán a medida que los resultados del proyecto estén disponibles o sean aprobados para su publicación."
    }
  },

  challenge: {
    "hero": {
      "eyebrow": "El desafío",
      "title": "La infraestructura submarina de Europa es crítica y está cada vez más expuesta.",
      "intro": "Las infraestructuras submarinas de datos, energía y tuberías se enfrentan a daños accidentales, interferencias deliberadas y riesgos geológicos. Las interrupciones pueden afectar a servicios esenciales, mientras que las reparaciones pueden ser costosas y lentas, lo que hace cada vez más importantes la monitorización continua y la alerta temprana."
    },
    "threats": {
      "eyebrow": "Amenazas a los cables submarinos",
      "title": "Las infraestructuras críticas se enfrentan a amenazas tanto naturales como derivadas de la actividad humana.",
      "intro": "Los cables submarinos y las infraestructuras relacionadas pueden verse afectados por eventos geológicos, degradación a largo plazo, actividad marítima accidental e interferencias deliberadas. FOSMARIN contempla una amplia gama de escenarios que pueden dañar la infraestructura o indicar actividad sospechosa en sus proximidades.",
      "naturalLabel": "Natural",
      "humanLabel": "Actividad humana",
      "naturalTitle": "Factores naturales y ambientales",
      "naturalIntro": "Eventos y procesos que pueden dañar o degradar la infraestructura submarina sin intervención humana directa.",
      "humanTitle": "Actividad marítima y humana",
      "humanIntro": "Actividad accidental e interferencias deliberadas que pueden poner en riesgo cables y otros activos submarinos.",
      "riskLabels": {
        "Low": "Bajo",
        "Medium": "Medio",
        "High": "Alto"
      },
      "natural": [
        {
          "title": "Actividad sísmica",
          "risk": "Medium"
        },
        {
          "title": "Deslizamiento submarino",
          "risk": "Medium"
        },
        {
          "title": "Arrastre por corrientes submarinas",
          "risk": "High"
        },
        {
          "title": "Mordedura de tiburón u otro animal",
          "risk": "Low"
        },
        {
          "title": "Degradación del cable",
          "risk": "High"
        }
      ],
      "human": [
        {
          "title": "Caída de ancla",
          "risk": "High"
        },
        {
          "title": "Pesca de arrastre",
          "risk": "High"
        },
        {
          "title": "Buceadores junto al cable / sabotaje",
          "risk": "Low"
        },
        {
          "title": "Trabajos en el fondo marino y dragado",
          "risk": "Low"
        },
        {
          "title": "Permanencia sospechosa cerca de la infraestructura",
          "risk": "Medium"
        },
        {
          "title": "Explosivos submarinos / sabotaje",
          "risk": "Medium"
        },
        {
          "title": "Submarino no tripulado / sabotaje con ROV",
          "risk": "Medium"
        }
      ],
      "sourceLabel": "Modelo de amenazas",
      "sourceText": "Los niveles de riesgo mostrados siguen la evaluación de amenazas incluida en el material de la propuesta FOSMARIN."
    },
    "globalContext": {
      "eyebrow": "Contexto global",
      "title": "Las arterias digitales y energéticas de Europa recorren el fondo marino, casi sin vigilancia.",
      "intro": "Más del 95 % de los datos intercontinentales y una proporción creciente de la energía marina de Europa circulan por cables submarinos. Recorren miles de kilómetros de fondo oceánico que nadie puede vigilar de forma continua — hasta ahora.",
      "stats": [
        {
          "value": "1,4 M km",
          "text": "de cable submarino en servicio en todo el mundo, transportando casi todo el tráfico de datos intercontinental"
        },
        {
          "value": "150+",
          "text": "fallos de cable notificados cada año por anclas, pesca de arrastre y riesgos naturales"
        },
        {
          "value": "Minutos",
          "text": "puede tardar un ancla arrastrada en seccionar un cable después de entrar en contacto"
        },
        {
          "value": "1 fibra",
          "text": "ya instalada es todo lo que necesita FOSMARIN; no se requiere nuevo hardware submarino"
        }
      ]
    },
    "gaps": {
      "eyebrow": "Carencias actuales",
      "title": "La vigilancia existente deja partes importantes de la situación sin observar.",
      "intro": "La conciencia situacional marítima suele depender hoy de varios sistemas que trabajan conjuntamente. Cada uno aporta información útil, pero también tiene limitaciones, especialmente cuando el evento ocurre bajo la superficie.",
      "items": [
        {
          "number": "01",
          "system": "Radar",
          "limitation": "Útil para conocer la actividad en superficie, pero la cobertura está limitada por el alcance."
        },
        {
          "number": "02",
          "system": "AIS",
          "limitation": "La notificación no es completa y, por sí sola, no puede ofrecer una imagen total."
        },
        {
          "number": "03",
          "system": "Cámaras costeras",
          "limitation": "La vigilancia visual está limitada de forma inherente por el alcance y la línea de visión."
        },
        {
          "number": "04",
          "system": "Satélites",
          "limitation": "La monitorización por satélite puede introducir retrasos entre la observación y la respuesta operativa."
        },
        {
          "number": "05",
          "system": "Sonoboyas",
          "limitation": "Teóricamente pueden detectar actividad submarina, pero su despliegue y mantenimiento son complejos y su uso civil es poco habitual."
        }
      ],
      "calloutLabel": "Capa que falta",
      "calloutText": "El radar, el AIS, las cámaras y los satélites no pueden detectar de forma fiable actividad submarina ni eventos complejos cerca de infraestructuras submarinas. FOSMARIN estudia FOAS como una capa adicional de detección que complemente estas fuentes existentes."
    },
    "action": {
      "eyebrow": "Por qué es necesario actuar",
      "title": "La protección debe comenzar antes de que un cable resulte dañado.",
      "intro": "Los sistemas de monitorización pueden hacer más que confirmar que ya se ha producido un fallo. Pueden apoyar el diagnóstico en tiempo real, la predicción de amenazas y las decisiones de mantenimiento, ayudando a los operadores a proteger la continuidad del servicio.",
      "steps": [
        {
          "number": "01",
          "title": "Monitorizar",
          "text": "Mantener una visibilidad continua alrededor de infraestructuras submarinas críticas."
        },
        {
          "number": "02",
          "title": "Diagnosticar",
          "text": "Comprender en tiempo real las condiciones operativas y el estado de la infraestructura."
        },
        {
          "number": "03",
          "title": "Predecir",
          "text": "Identificar amenazas potenciales antes de que evolucionen hasta convertirse en incidentes dañinos."
        },
        {
          "number": "04",
          "title": "Mantener",
          "text": "Proporcionar información que ayude a realizar un mantenimiento oportuno y reducir las pérdidas causadas por fallos."
        }
      ],
      "outcomeLabel": "Servicio continuo",
      "outcomeText": "Una monitorización fiable, permanente y continua es clave para reducir el riesgo de que eventos accidentales, intencionados o geológicos interrumpan servicios públicos esenciales."
    },
    "cost": {
      "eyebrow": "El coste de no actuar",
      "title": "Un solo incidente puede implicar semanas de reparación y grandes pérdidas económicas.",
      "intro": "Los daños en la infraestructura submarina no son únicamente un problema técnico. Las reparaciones pueden durar semanas o meses, mientras que el coste global de una interrupción puede superar ampliamente el de la reparación física.",
      "scenarios": [
        {
          "type": "Cables eléctricos",
          "facts": [
            {
              "value": "€10M–€100M",
              "label": "Coste típico de reparación"
            },
            {
              "value": "≈50 días",
              "label": "Tiempo de reparación"
            },
            {
              "value": "€250M",
              "label": "Coste total estimado de la interrupción"
            }
          ]
        },
        {
          "type": "Cables de telecomunicaciones",
          "facts": [
            {
              "value": "≈15 días",
              "label": "Tiempo de reparación"
            },
            {
              "value": "€500M",
              "label": "Coste total estimado de la interrupción"
            }
          ]
        },
        {
          "type": "Tuberías",
          "facts": [
            {
              "value": "≈6 meses",
              "label": "Tiempo de reparación"
            },
            {
              "value": "€10B",
              "label": "Coste total estimado de la interrupción"
            }
          ]
        }
      ],
      "sourceLabel": "Nota sobre la fuente",
      "sourceText": "Las cifras proceden del borrador de contenidos del sitio web FOSMARIN facilitado por el cliente, que cita al International Cable Protection Committee para las estimaciones de reparación de cables submarinos."
    },
    "policy": {
      "eyebrow": "Políticas y acciones de la UE",
      "title": "La protección de la infraestructura submarina ya es una prioridad política europea.",
      "intro": "La política europea reconoce cada vez más la necesidad de comprender las amenazas, reforzar la prevención y mejorar la resiliencia de las infraestructuras de cables submarinos.",
      "items": [
        {
          "year": "2022",
          "type": "Análisis de la UE",
          "title": "Amenazas de seguridad para los cables e infraestructuras de comunicaciones submarinas",
          "reference": "PE 702.557 · junio de 2022",
          "text": "Análisis detallado de la Dirección General de Políticas Exteriores de la Unión que identifica amenazas naturales y humanas, accidentales e intencionadas para la infraestructura submarina."
        },
        {
          "year": "2024",
          "type": "Recomendación de la Comisión",
          "title": "Infraestructura de cables submarinos segura y resiliente",
          "reference": "26 de febrero de 2024",
          "text": "Solicita reforzar la protección de las infraestructuras de cables submarinos, incluida la investigación y utilización de medidas para detectar y prevenir amenazas."
        },
        {
          "year": "2025",
          "type": "Plan de Acción de la UE",
          "title": "Plan de Acción sobre la Seguridad de los Cables",
          "reference": "21 de febrero de 2025",
          "text": "Refuerza aún más el enfoque europeo para reducir incidentes disruptivos y aumentar la resiliencia frente a actividades maliciosas."
        }
      ]
    }
  },

  useCases: {
    "hero": {
      "eyebrow": "Casos de uso",
      "title": "Desde cables submarinos hasta infraestructuras marinas.",
      "intro": "FOSMARIN estudia cómo la detección acústica por fibra óptica (FOAS), la analítica predictiva y los datos externos pueden reforzar la conciencia situacional alrededor de distintos tipos de infraestructuras marítimas y submarinas críticas."
    },
    "topics": "temas",
    "clientInputText": "Este caso de uso forma parte de la estructura aprobada del sitio web de FOSMARIN. El contenido detallado del proyecto se añadirá cuando sea proporcionado o confirmado por el cliente.",
    "items": {
      "telecom-cables-protection": {
        "eyebrow": "Protección de cables de telecomunicaciones",
        "number": "01",
        "title": "Proteger las rutas de fibra que transportan comunicaciones críticas.",
        "intro": "Los cables de telecomunicaciones pueden estar expuestos a anclas, actividad pesquera, interferencias de terceros y cambios en el estado del cable. FOAS puede proporcionar una vigilancia continua a lo largo de la ruta de fibra monitorizada.",
        "tags": [
          "Anclas y arrastre",
          "Actividad pesquera",
          "Interferencias de terceros",
          "Estado del cable"
        ],
        "points": [
          {
            "title": "Detectar actividad cerca del cable",
            "text": "Los movimientos de embarcaciones y las perturbaciones mecánicas pueden generar patrones de vibración visibles en los datos FOAS."
          },
          {
            "title": "Monitorizar la ruta de forma continua",
            "text": "La fibra existente puede proporcionar una capa de detección a lo largo del cable, sin depender únicamente de observaciones en superficie."
          },
          {
            "title": "Facilitar una respuesta más temprana",
            "text": "La detección y la analítica predictiva pueden ayudar a los operadores a evaluar riesgos en evolución antes de que se produzcan daños."
          }
        ]
      },
      "power-cables-monitoring": {
        "eyebrow": "Monitorización de cables eléctricos",
        "number": "02",
        "title": "Vigilancia continua alrededor de conexiones eléctricas submarinas críticas.",
        "intro": "El material de FOSMARIN identifica los cables eléctricos submarinos de alta y media tensión como infraestructuras que pueden beneficiarse de la detección por fibra óptica y la monitorización continua.",
        "tags": [
          "Cables AT y MT",
          "Movimiento del cable",
          "Amenazas externas",
          "Conciencia operativa"
        ],
        "points": [
          {
            "title": "Observar el entorno del cable",
            "text": "FOAS puede detectar vibraciones asociadas a actividades que tienen lugar cerca de una ruta submarina monitorizada."
          },
          {
            "title": "Reconocer eventos mecánicos",
            "text": "El movimiento y la vibración del cable, así como las interferencias externas, pueden generar patrones de señal medibles y diferenciados."
          },
          {
            "title": "Reducir el riesgo de interrupción",
            "text": "Una detección más temprana puede apoyar decisiones de mantenimiento y operación antes de que un evento evolucione hasta convertirse en un fallo."
          }
        ]
      },
      "offshore-wind-farms": {
        "eyebrow": "Parques eólicos marinos",
        "number": "03",
        "title": "Extender la detección por fibra a la infraestructura energética marina.",
        "intro": "El material técnico de FOSMARIN incluye infraestructuras marinas e interconexiones de aerogeneradores entre los entornos donde la detección por fibra puede aportar conciencia situacional adicional.",
        "tags": [
          "Infraestructura marina",
          "Interconexiones eólicas",
          "Cables submarinos",
          "Monitorización continua"
        ],
        "points": [
          {
            "title": "Monitorizar conexiones de cables",
            "text": "La fibra asociada a infraestructuras marinas puede proporcionar una ruta continua de detección a lo largo de conexiones críticas."
          },
          {
            "title": "Detectar actividad próxima",
            "text": "La actividad en el agua y las perturbaciones mecánicas pueden detectarse por su efecto sobre la fibra."
          },
          {
            "title": "Añadir contexto operativo",
            "text": "La información FOAS puede combinarse con fuentes externas para mejorar la vigilancia alrededor de activos marinos."
          }
        ]
      },
      "pipelines-monitoring": {
        "eyebrow": "Monitorización de tuberías",
        "number": "04",
        "title": "Apoyar la conciencia situacional alrededor de tuberías submarinas.",
        "intro": "FOSMARIN pretende detectar y predecir amenazas no solo para cables de datos y energía, sino también para otras infraestructuras submarinas críticas, incluidas las tuberías.",
        "tags": [
          "Tuberías",
          "Actividad de terceros",
          "Detección de amenazas",
          "Monitorización predictiva"
        ],
        "points": [
          {
            "title": "Observar amenazas próximas",
            "text": "La detección por fibra puede aportar información sobre actividades que ocurren cerca de infraestructuras submarinas críticas."
          },
          {
            "title": "Combinar detección y contexto",
            "text": "Los datos FOAS pueden fusionarse con fuentes como AIS para comprender mejor la actividad marítima detectada."
          },
          {
            "title": "Apoyar la resiliencia",
            "text": "La monitorización continua puede reforzar la prevención, la respuesta a incidentes y la investigación posterior."
          }
        ]
      },
      "ports-and-harbours": {
        "eyebrow": "Puertos",
        "number": "05",
        "title": "Un área de uso prevista para FOSMARIN que requiere más información del cliente.",
        "intro": "Puertos forma parte de la estructura web aprobada, pero el material del proyecto disponible todavía no define el escenario FOSMARIN específico, el modelo de despliegue ni la actividad de validación para este caso de uso.",
        "status": "client-input"
      },
      "shallow-water-monitoring": {
        "eyebrow": "Monitorización de aguas poco profundas",
        "number": "06",
        "title": "Monitorizar entornos de cables donde el fondo marino está especialmente expuesto.",
        "intro": "El material técnico identifica explícitamente la monitorización de aguas poco profundas y zonas de bajamar como una aplicación de FOAS, incluidas áreas donde la infraestructura submarina puede estar expuesta a cambios ambientales y actividad humana.",
        "tags": [
          "Aguas poco profundas",
          "Bajamar",
          "Fondo marino expuesto",
          "Monitorización de cables"
        ],
        "points": [
          {
            "title": "Observar áreas expuestas",
            "text": "Las rutas poco profundas pueden verse afectadas por cambios de profundidad y una mayor interacción con actividades costeras y de superficie."
          },
          {
            "title": "Detectar perturbaciones mecánicas",
            "text": "FOAS puede identificar vibraciones y movimiento a lo largo de la ruta de fibra monitorizada."
          },
          {
            "title": "Mantener vigilancia continua",
            "text": "La misma fibra puede proporcionar monitorización continua sin instalar una cadena independiente de sensores submarinos."
          }
        ]
      },
      "search-and-rescue-support": {
        "eyebrow": "Apoyo a búsqueda y rescate",
        "number": "07",
        "title": "Un área de uso prevista para FOSMARIN que requiere más información del cliente.",
        "intro": "El apoyo a búsqueda y rescate está incluido en la estructura web aprobada, pero los documentos del proyecto disponibles no describen actualmente la funcionalidad FOSMARIN prevista, el flujo operativo ni el escenario de validación.",
        "status": "client-input"
      }
    }
  },

  technology: {
    "hero": {
      "eyebrow": "Tecnología",
      "title": "Convertir la fibra existente en una red continua de detección.",
      "intro": "FOSMARIN utiliza detección acústica por fibra óptica (FOAS), procesamiento de señales, datos externos y analítica predictiva para detectar, comprender y evaluar la actividad alrededor de infraestructuras submarinas críticas."
    },
    "simpleWords": {
      "badge": "En palabras sencillas",
      "title": "Imagina una cuerda de guitarra muy, muy larga tendida en el fondo del mar.",
      "paragraphs": [
        "Si la pulsas en cualquier punto — incluso a cientos de kilómetros — el sonido recorre toda la cuerda. FOSMARIN escucha esa cuerda en cada metro, todo el tiempo.",
        "La «cuerda» es un cable que ya está allí, transportando datos de internet de forma silenciosa. FOSMARIN envía un diminuto destello de luz láser por él y escucha el eco.",
        "Cualquier cosa que haga vibrar el cable — un barco, un ancla arrastrada o incluso un movimiento del terreno — cambia ese eco. Un ordenador determina al instante qué produjo el sonido, dónde ocurrió y cuánto debe preocuparnos."
      ],
      "visualTitle": "Detección por fibra ilustrada como una cuerda vibrante",
      "visualDescription": "Dos extremos conectados por una fibra larga con una señal animada que viaja entre ellos."
    },
    "howItWorks": {
      "eyebrow": "Cómo funciona",
      "title": "De un destello de luz a una alerta en tiempo real, en cuatro pasos.",
      "intro": "Esto es detección acústica por fibra óptica (FOAS): la misma fibra de vidrio que transporta datos se convierte, a lo largo de toda su longitud, en una línea continua de puntos de escucha separados por pocos metros.",
      "steps": [
        {
          "number": "01",
          "title": "Un láser envía pequeños pulsos por la fibra",
          "text": "Cada pocos metros, un destello de luz recorre el cable y una pequeña parte se refleja de vuelta, como un eco extremadamente rápido."
        },
        {
          "number": "02",
          "title": "Las vibraciones cambian el eco",
          "text": "El motor de un barco, un ancla arrastrada o un desplazamiento sísmico hacen vibrar ligeramente la fibra, lo suficiente para cambiar el patrón de la luz reflejada."
        },
        {
          "number": "03",
          "title": "Aparecen miles de micrófonos virtuales",
          "text": "El software convierte cada metro de fibra en su propio punto de escucha, de modo que un solo hilo de vidrio se transforma a la vez en miles de «oídos» submarinos."
        },
        {
          "number": "04",
          "title": "La analítica predictiva distingue las amenazas",
          "text": "Un modelo de IA compara la huella de cada sonido con lo normal para ese tramo del fondo marino y marca amenazas reales en menos de un segundo, reduciendo falsas alarmas."
        }
      ]
    },
    "darkFibre": {
      "eyebrow": "Uso de fibra oscura",
      "title": "Los cables existentes pasan a formar parte del sistema de detección.",
      "intro": "FOSMARIN está diseñado para utilizar fibra óptica disponible en infraestructuras submarinas existentes. En lugar de desplegar una nueva red de sensores en el fondo marino, un interrogador envía luz por la fibra y observa cómo cambia la señal de retorno.",
      "onshore": "En tierra",
      "interrogator": "Interrogador FOAS",
      "subsea": "Bajo el mar",
      "existingCable": "Cable de fibra existente",
      "benefits": [
        {
          "number": "01",
          "title": "Infraestructura existente",
          "text": "FOSMARIN utiliza fibra ya instalada dentro de sistemas de cables submarinos."
        },
        {
          "number": "02",
          "title": "Sin nuevo hardware en el fondo marino",
          "text": "La capacidad de detección se obtiene de la propia fibra, en lugar de instalar una nueva cadena de sensores submarinos."
        },
        {
          "number": "03",
          "title": "Cobertura de largo alcance",
          "text": "Un interrogador FOAS puede monitorizar grandes áreas a lo largo del cable desde un extremo accesible."
        }
      ],
      "highlightLabel": "nuevo hardware de detección submarina",
      "highlightText": "El proyecto aprovecha infraestructura de fibra que ya está desplegada."
    },
    "multi": {
      "eyebrow": "Monitorización multiparámetro",
      "title": "Un mismo evento puede comprenderse mediante varias capas de información.",
      "intro": "FOSMARIN no depende de un único valor de señal. Las mediciones FOAS pueden transformarse en características de señal e información de mayor nivel y después combinarse con fuentes externas de referencia para construir una imagen operativa más útil.",
      "layers": [
        {
          "label": "Señal bruta",
          "title": "Tasa de deformación",
          "text": "La fibra responde a perturbaciones mecánicas y vibraciones a lo largo del cable."
        },
        {
          "label": "Características de señal",
          "title": "Energía espectral",
          "text": "La señal puede analizarse en el dominio de la frecuencia para revelar patrones característicos."
        },
        {
          "label": "Información derivada",
          "title": "Características de alto nivel",
          "text": "La información FOAS procesada ofrece una descripción más rica de la actividad detectada."
        },
        {
          "label": "Contexto externo",
          "title": "Datos de referencia",
          "text": "Fuentes como AIS pueden aportar identidad, posición y movimiento de embarcaciones."
        }
      ],
      "flowLabel": "Fusión de datos",
      "flowText": "Varias características de señal y el contexto externo pueden combinarse antes de la clasificación, el seguimiento y la predicción."
    },
    "predictive": {
      "eyebrow": "Analítica predictiva e IA",
      "title": "El objetivo no es solo detectar un incidente, sino reconocer el riesgo antes de que se produzcan daños.",
      "intro": "FOSMARIN combina procesamiento de señales, analítica de datos e información externa para pasar de la observación a la clasificación, el seguimiento, el análisis de comportamiento y la predicción.",
      "stages": [
        {
          "time": "Pasado",
          "question": "¿Qué ocurrió?",
          "title": "Análisis"
        },
        {
          "time": "Ahora",
          "question": "¿Qué está ocurriendo?",
          "title": "Monitorización"
        },
        {
          "time": "Después",
          "question": "¿Qué podría ocurrir?",
          "title": "Predicción"
        }
      ],
      "label": "Capa predictiva",
      "copyTitle": "Convertir patrones complejos de señal en apoyo a la toma de decisiones.",
      "copyText": "Una amenaza puede evolucionar con el tiempo. Analizando las señales FOAS junto con datos de contexto, FOSMARIN pretende señalar riesgos con suficiente antelación para que un operador o una autoridad pueda responder.",
      "capabilities": [
        "Clasificación",
        "Identificación",
        "Seguimiento",
        "Análisis de comportamiento",
        "Predicción de amenazas"
      ]
    },
    "architecture": {
      "eyebrow": "Arquitectura y componentes del sistema",
      "title": "De una vibración en el fondo marino a información sobre la que un operador puede actuar.",
      "intro": "FOSMARIN conecta detección por fibra, procesamiento, información contextual y analítica predictiva en una única cadena operativa.",
      "ariaLabel": "Flujo de procesamiento del sistema FOSMARIN",
      "items": [
        {
          "number": "01",
          "title": "Fibra submarina",
          "text": "La infraestructura de fibra óptica existente actúa como medio de detección."
        },
        {
          "number": "02",
          "title": "Interrogador FOAS",
          "text": "Se transmiten pulsos láser por la fibra y se mide la luz que regresa."
        },
        {
          "number": "03",
          "title": "Procesamiento de señal",
          "text": "Las mediciones brutas se transforman en características acústicas y de señal útiles."
        },
        {
          "number": "04",
          "title": "Fusión de datos",
          "text": "La información FOAS se combina con fuentes externas como AIS."
        },
        {
          "number": "05",
          "title": "Analítica",
          "text": "Los algoritmos clasifican, identifican, siguen y evalúan la actividad detectada."
        },
        {
          "number": "06",
          "title": "Interfaz operativa",
          "text": "Los resultados se entregan a los operadores y a las autoridades pertinentes."
        }
      ]
    },
    "processing": {
      "eyebrow": "Procesamiento de datos y algoritmos",
      "title": "Las mediciones brutas de la fibra se convierten en información operativa estructurada.",
      "intro": "El resultado útil de FOAS se crea mediante una cadena de procesamiento: las mediciones se transforman, correlacionan e interpretan para que los eventos puedan clasificarse y seguirse en lugar de presentarse únicamente como señal bruta.",
      "stages": [
        {
          "number": "01",
          "title": "Adquirir",
          "text": "Se recogen mediciones FOAS continuas a lo largo de la fibra monitorizada."
        },
        {
          "number": "02",
          "title": "Extraer",
          "text": "El procesamiento de señal obtiene características útiles como información espectral y características de mayor nivel."
        },
        {
          "number": "03",
          "title": "Fusionar",
          "text": "La información FOAS se correlaciona con fuentes de referencia y datos externos."
        },
        {
          "number": "04",
          "title": "Clasificar",
          "text": "Los algoritmos distinguen actividades relevantes y tipos de eventos."
        },
        {
          "number": "05",
          "title": "Seguir",
          "text": "La actividad detectada puede seguirse a lo largo del tiempo y del área monitorizada."
        },
        {
          "number": "06",
          "title": "Predecir",
          "text": "El análisis de comportamiento apoya la evaluación de riesgos y la alerta predictiva."
        }
      ],
      "highlightLabel": "conjuntos de datos FOAS previstos",
      "highlightText": "FOSMARIN prevé publicar conjuntos de datos procedentes de escenarios de amenaza generados y monitorización a largo plazo para apoyar futuras investigaciones sobre seguimiento, clasificación y predicción."
    },
    "integration": {
      "eyebrow": "Integración, interoperabilidad y seguridad",
      "title": "La detección solo importa cuando la información llega a quienes pueden responder.",
      "intro": "FOSMARIN se desarrolla como algo más que un instrumento de detección aislado. El proyecto conecta los resultados de monitorización con procesos operativos, intercambio de información e investigación posterior a incidentes.",
      "areas": [
        {
          "label": "Operadores",
          "title": "Flujos operativos",
          "text": "FOSMARIN está destinado a apoyar a las organizaciones responsables de operar infraestructuras submarinas críticas."
        },
        {
          "label": "Autoridades",
          "title": "Procedimientos Operativos Estándar",
          "text": "El proyecto pretende integrar la información derivada de FOAS en los SOP de las autoridades de seguridad."
        },
        {
          "label": "Europa",
          "title": "Integración CISE",
          "text": "La integración con el Common Information Sharing Environment facilita el intercambio de información con las autoridades pertinentes."
        },
        {
          "label": "Después de un incidente",
          "title": "Evidencias almacenadas",
          "text": "Las características FOAS pueden conservarse para apoyar la investigación posterior a incidentes y la formación."
        }
      ],
      "path": [
        "FOAS",
        "Plataforma FOSMARIN",
        "Operadores",
        "Autoridades"
      ]
    }
  },

  consortium: {
    "hero": {
      "eyebrow": "Consorcio",
      "title": "Experiencia europea en detección, investigación, infraestructura y seguridad marítima.",
      "intro": "FOSMARIN reúne a 13 organizaciones de ocho países, combinando tecnología de fibra óptica, ciencia de datos, integración de sistemas, operación de infraestructuras, investigación, formación y experiencia de autoridades públicas."
    },
    "partners": {
      "eyebrow": "Socios",
      "title": "13 organizaciones que reúnen tecnología, investigación, infraestructuras y autoridades públicas.",
      "intro": "FOSMARIN combina la experiencia necesaria para desarrollar, probar y validar un sistema práctico de monitorización submarina, desde detección por fibra óptica y ciencia de datos hasta operación de infraestructuras, integración y formación.",
      "coordinator": "Coordinador"
    },
    "partnerMap": {
      "eyebrow": "Mapa de socios",
      "title": "Un consorcio europeo presente en ocho países.",
      "intro": "Organizaciones de investigación, proveedores tecnológicos, operadores y autoridades de toda Europa contribuyen al desarrollo y validación de FOSMARIN.",
      "partner": "socio",
      "partners": "socios"
    },
    "roles": {
      "eyebrow": "Funciones y contribuciones",
      "title": "Capacidades diferentes, conectadas mediante un único sistema operativo.",
      "intro": "El consorcio combina desarrollo, integración, investigación, infraestructuras reales, experiencia de autoridades públicas y formación.",
      "groups": [
        {
          "title": "Coordinación y tecnología",
          "roles": [
            "Coordinator, Technology Development",
            "Technology Provider",
            "Industry Partner"
          ]
        },
        {
          "title": "Integración de sistemas",
          "roles": [
            "System Integration",
            "System Integrator"
          ]
        },
        {
          "title": "Investigación y validación",
          "roles": [
            "Research Partner",
            "Operator, Research Partner"
          ]
        },
        {
          "title": "Operación, autoridades y formación",
          "roles": [
            "Operator",
            "Authority",
            "Training"
          ]
        }
      ]
    },
    "advisory": {
      "eyebrow": "Consejo asesor",
      "title": "Experiencia externa que apoya al proyecto.",
      "noticeTitle": "El contenido del Consejo asesor está en preparación",
      "noticeText": "El Consejo asesor forma parte de la estructura aprobada del sitio web de FOSMARIN. La información sobre sus miembros se añadirá cuando sea proporcionada o confirmada por el cliente."
    },
    "stakeholders": {
      "eyebrow": "Autoridades y partes interesadas",
      "title": "La tecnología se desarrolla pensando en las organizaciones que finalmente tendrán que utilizarla.",
      "intro": "FOSMARIN está destinado a apoyar a operadores de infraestructuras y autoridades de seguridad pertinentes, con resultados del proyecto que contribuyan a procedimientos operativos, intercambio de información e investigación posterior a incidentes.",
      "groups": [
        {
          "label": "Autoridad",
          "roles": [
            "Authority"
          ],
          "text": "La experiencia de las autoridades públicas ayuda a conectar los resultados del proyecto con requisitos de seguridad, protección civil y operación."
        },
        {
          "label": "Operadores",
          "roles": [
            "Operator",
            "Operator, Research Partner"
          ],
          "text": "Los operadores de infraestructuras aportan entornos operativos, requisitos reales y validación práctica."
        },
        {
          "label": "Formación",
          "roles": [
            "Training"
          ],
          "text": "La experiencia formativa ayuda a trasladar el conocimiento del proyecto a procedimientos prácticos y capacidades de los usuarios finales."
        }
      ],
      "flow": [
        {
          "strong": "Datos FOAS",
          "text": "Detección y evidencias"
        },
        {
          "strong": "FOSMARIN",
          "text": "Análisis y apoyo a decisiones"
        },
        {
          "strong": "Operadores y autoridades",
          "text": "SOP · CISE · Investigación"
        }
      ]
    },
    "partnerRoles": {
      "Coordinator, Technology Development": "Coordinación, desarrollo tecnológico",
      "Technology Provider": "Proveedor tecnológico",
      "Industry Partner": "Socio industrial",
      "System Integration": "Integración de sistemas",
      "System Integrator": "Integrador de sistemas",
      "Research Partner": "Socio de investigación",
      "Operator, Research Partner": "Operador, socio de investigación",
      "Operator": "Operador",
      "Authority": "Autoridad",
      "Training": "Formación"
    },
    "countries": {
      "Austria": "Austria",
      "United Kingdom": "Reino Unido",
      "Cyprus": "Chipre",
      "Greece": "Grecia",
      "Spain": "España",
      "Italy": "Italia",
      "Denmark": "Dinamarca",
      "Faroe Islands": "Islas Feroe"
    }
  },

  news: {
    "hero": {
      "eyebrow": "Noticias y eventos",
      "title": "Sigue a FOSMARIN a medida que avanza el proyecto.",
      "intro": "Actualizaciones del proyecto, eventos, comunicados de prensa y contenidos multimedia de FOSMARIN documentarán el progreso desde el lanzamiento hasta el desarrollo, la validación y la demostración."
    },
    "events": {
      "eyebrow": "Eventos",
      "title": "Encuentra a FOSMARIN en los eventos del proyecto.",
      "intro": "Sigue lanzamientos, conferencias y eventos públicos mientras FOSMARIN avanza desde el desarrollo hasta la validación y la demostración.",
      "item": {
        "type": "Evento del proyecto",
        "status": "Próximamente",
        "dateLabel": "01 oct 2026",
        "title": "Atlantic Convergence 2026",
        "text": "FOSMARIN tiene previsto anunciar oficialmente el inicio del proyecto en Atlantic Convergence 2026.",
        "location": "Lisboa · Portugal"
      }
    }
  },

  resourcesPage: {
    "hero": {
      "eyebrow": "Recursos",
      "title": "Conocimiento del proyecto, resultados y material público.",
      "intro": "Accede a publicaciones, entregables, informes, presentaciones y material de comunicación de FOSMARIN a medida que estén disponibles durante el proyecto."
    },
    "sections": {
      "publications": {
        "intro": "Publicaciones científicas y resultados de investigación producidos en el proyecto FOSMARIN."
      },
      "deliverables": {
        "intro": "Los entregables públicos del proyecto estarán disponibles aquí a medida que se completen y sean aprobados para su publicación."
      },
      "reports": {
        "intro": "Informes del proyecto, resultados técnicos y documentación pública relevante."
      },
      "videos": {
        "intro": "Material audiovisual que documenta actividades, demostraciones y resultados de FOSMARIN."
      },
      "brochures": {
        "intro": "Folletos del proyecto y material de comunicación para partes interesadas y público general."
      },
      "newsletter": {
        "intro": "Actualizaciones del proyecto FOSMARIN y avances seleccionados a través de futuros boletines."
      },
      "faqs": {
        "intro": "Respuestas a preguntas frecuentes sobre FOSMARIN, la tecnología FOAS y la protección de infraestructuras submarinas."
      }
    },
    "presentations": {
      "eyebrow": "Presentaciones",
      "title": "Presentaciones del proyecto y material técnico.",
      "intro": "El material de presentación de FOSMARIN se está preparando para su publicación a medida que avanza el proyecto.",
      "status": "Descarga pública pendiente de confirmación",
      "publication": "Publicación",
      "publicationText": "Los enlaces de descarga pública se añadirán cuando el material correspondiente haya sido aprobado para su publicación.",
      "items": [
        {
          "id": "fosmarin-project-presentation",
          "type": "Presentación del proyecto",
          "title": "Presentación del proyecto FOSMARIN",
          "description": "Material de presentación sobre el concepto FOSMARIN, los desafíos de la infraestructura submarina, la tecnología FOAS y la estructura del consorcio."
        },
        {
          "id": "fosmarin-technical-figures",
          "type": "Material técnico",
          "title": "Figuras técnicas de FOSMARIN",
          "description": "Diagramas y figuras técnicas que ilustran el enfoque de detección propuesto, la arquitectura del sistema y el contexto del proyecto."
        }
      ]
    }
  },

  contact: {
    "hero": {
      "eyebrow": "Contacto",
      "title": "Ponte en contacto con el proyecto FOSMARIN.",
      "intro": "Contacta con el consorcio FOSMARIN para obtener información sobre el proyecto, oportunidades de colaboración, consultas de medios u otras cuestiones relacionadas con el proyecto."
    },
    "form": {
      "eyebrow": "Formulario de contacto",
      "title": "Envíanos un mensaje.",
      "intro": "Utiliza el siguiente formulario para contactar con el consorcio FOSMARIN. Los campos obligatorios están marcados con un asterisco.",
      "labels": {
        "name": "Nombre",
        "email": "Correo electrónico",
        "organisation": "Organización",
        "subject": "Asunto",
        "message": "Mensaje"
      },
      "errors": {
        "name": "Introduce tu nombre.",
        "email": "Introduce tu dirección de correo electrónico.",
        "emailInvalid": "Introduce una dirección de correo electrónico válida.",
        "subject": "Introduce un asunto.",
        "message": "Introduce tu mensaje."
      },
      "note": "El envío del formulario se conectará al servicio de correo o backend seleccionado por el proyecto antes del lanzamiento.",
      "button": "Enviar mensaje",
      "success": "El formulario se ha validado correctamente. La entrega final de mensajes se habilitará antes del lanzamiento."
    },
    "details": {
      "eyebrow": "Póngase en contacto",
      "title": "Contacta directamente con el proyecto.",
      "intro": "Para consultas generales sobre el proyecto, oportunidades de colaboración o preguntas relacionadas con medios, contacta con el consorcio FOSMARIN por correo electrónico.",
      "emailLabel": "Correo electrónico",
      "emailTitle": "Consultas generales",
      "emailText": "Consultas generales sobre el proyecto, colaboración y comunicación.",
      "websiteLabel": "Sitio web",
      "websiteTitle": "FOSMARIN en línea",
      "websiteText": "Información del proyecto, actualizaciones, recursos y resultados públicos."
    },
    "social": {
      "eyebrow": "Redes sociales",
      "title": "Sigue a FOSMARIN en línea.",
      "intro": "Los canales oficiales del proyecto en redes sociales se añadirán cuando el cliente confirme las cuentas y URL correspondientes.",
      "noticeTitle": "Los enlaces de redes sociales están en preparación",
      "noticeText": "Los enlaces oficiales de LinkedIn, X y YouTube se añadirán cuando el cliente confirme las cuentas del proyecto."
    }
  }
};

export default es;
