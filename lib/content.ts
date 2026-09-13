import type { FindingCategory, FindingStatus, ReviewPriority, SiteStatus, ProviderStatus } from "./demo-data";

export type Locale = "es" | "en";

export type Content = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  header: {
    nav: { label: string; href: string }[];
    cta: string;
    langLabel: string;
    langSwitch: { label: string; href: string };
  };
  hero: {
    kicker: string;
    headline: string;
    sub: string;
    subSecondary: string;
    microcopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  flow: {
    title: string;
    colLeft: string;
    colRight: string;
    hint: string;
    controlsLabel: string;
    relatedLabelSource: string;
    relatedLabelOutput: string;
    exampleTag: string;
    sources: {
      id: string;
      label: string;
      desc: string;
      controls: string[];
      example: string;
      outputs: string[];
    }[];
    outputs: {
      id: string;
      label: string;
      desc: string;
      controls: string[];
      example: string;
      sources: string[];
    }[];
  };
  trust: { title: string; body: string }[];
  problem: {
    kicker: string;
    headlineA: string;
    headlineB: string;
    paragraphs: string[];
  };
  pains: { title: string; body: string }[];
  areas: {
    kicker: string;
    headline: string;
    sub: string;
    note: string;
    items: {
      badge: string;
      name: string;
      desc: string;
      capabilities: string[];
      note?: string;
      cta: string;
    }[];
  };
  smallStart: {
    kicker: string;
    headline: string;
    text: string;
    receivesLabel: string;
    items: { label: string; text: string; receives: string[] }[];
    cta: string;
  };
  kpiSection: {
    kicker: string;
    headline: string;
    text: string;
    ctaLabel: string;
    accordionTitle: string;
    labels: { whatItMeasures: string; calculation: string; example: string };
    items: {
      title: string;
      value: string;
      context?: string;
      delta?: string;
      deltaTone?: "positive" | "warning";
      summary: string;
      glossary?: { term: string; body: string };
      whatItMeasures: string;
      calculation: string[];
      calcNote?: string;
      secondaryCalculation?: { label: string; lines: string[] }[];
      example?: string[];
      explanationNote?: string;
    }[];
  };
  demo: {
    kicker: string;
    headline: string;
    intro: string;
    dataCut: string;
    syntheticLabel: string;
    studyLabel: string;
    tabs: { study: string; sites: string; providers: string; findings: string };
    kpis: {
      forms: { label: string; sub: string };
      queries: { label: string; sub: string };
      sites: { label: string; sub: string };
      deliveries: { label: string; sub: string };
    };
    definitionsToggle: string;
    definitionsLabels: {
      whatItMeasures: string;
      howCalculated: string;
      source: string;
      howToInterpret: string;
    };
    definitions: {
      term: string;
      whatItMeasures: string;
      howCalculated: string;
      source: string;
      howToInterpret: string;
    }[];
    panels: {
      bySite: { title: string; subtitle: string };
      trend: { title: string };
      findings: string;
    };
    siteChart: {
      legendReview: string;
      legendOk: string;
      thresholdLabel: string;
      thresholdNote: string;
      countUnit: string;
      rateUnit: string;
    };
    trendChart: {
      currentLabel: string;
      deltaLabel: string;
      weekLabel: string;
      axisLabel: string;
    };
    sites: {
      tableHeaders: string[];
      status: Record<SiteStatus, string>;
      mobileLabels: {
        participants: string;
        forms: string;
        lag: string;
        queries: string;
        discrepancies: string;
      };
    };
    providers: {
      tableHeaders: string[];
      status: Record<ProviderStatus, string>;
      items: Record<string, { name: string; dataType: string }>;
      mobileLabels: { dataType: string; lastDelivery: string; status: string };
      note: string;
    };
    findings: {
      tableHeaders: string[];
      priority: Record<ReviewPriority, string>;
      category: Record<FindingCategory, string>;
      status: Record<FindingStatus, string>;
      priorityNote: string;
      items: Record<
        string,
        { source: string; description: string; compact: string }
      >;
    };
    meetingQuestions: {
      title: string;
      items: { context: string; question: string }[];
      glossary: { term: string; body: string };
    };
  };
  scientificDemo: {
    kicker: string;
    headline: string;
    questionLabel: string;
    question: string;
    stats: { value: string; label: string }[];
    columns: { title: string; items: string[] }[];
    illustrativeLabel: string;
    note: string;
  };
  howItWorks: {
    kicker: string;
    headline: string;
    steps: { title: string; body: string }[];
    note: string;
  };
  techAI: {
    headline: string;
    labelTech: string;
    labelHuman: string;
    paragraphs: string[];
  };
  whoItsFor: {
    headline: string;
    intro: string;
    profiles: { title: string; body: string }[];
  };
  complement: {
    kicker: string;
    headline: string;
    text: string;
    cards: {
      title: string;
      body: string;
      items: string[];
      cta?: string;
    }[];
    note: { lead: string; body: string };
  };
  resources: {
    kicker: string;
    headline: string;
    body: string;
    badge: string;
    items: { title: string; body: string }[];
  };
  faq: {
    kicker: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    kicker: string;
    headline: string;
    body: string;
    cta: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    links: { label: string; href: string }[];
    copyright: string;
  };
};

export const content: Record<Locale, Content> = {
  es: {
    htmlLang: "es",
    meta: {
      title: "Therapeutics Data | Inteligencia científica, clínica y de datos",
      description:
        "Therapeutics Data ayuda a equipos de biotecnología a analizar evidencia científica, estudiar el panorama clínico y competitivo, revisar datos de sus estudios y preparar documentación científica.",
    },
    header: {
      nav: [
        { label: "Servicios", href: "#solutions" },
        { label: "Cómo trabajamos", href: "#how-it-works" },
        { label: "Para quién", href: "#who" },
        { label: "Recursos", href: "#resources" },
      ],
      cta: "Cuéntanos qué necesitas resolver",
      langLabel: "Español",
      langSwitch: { label: "English", href: "/" },
    },
    hero: {
      kicker: "PARA EQUIPOS DE BIOTECNOLOGÍA",
      headline: "Entiende mejor la evidencia y los datos de tu estudio.",
      sub: "Therapeutics Data ayuda a equipos de biotecnología a analizar evidencia científica, estudiar el panorama clínico y competitivo, revisar datos y reportes de sus estudios y preparar documentación científica.",
      subSecondary:
        "Puedes empezar con una pregunta, un reporte o un archivo concreto. No necesitas implementar una plataforma ni iniciar un proyecto de meses.",
      microcopy: "Proyectos definidos. Entregables claros. Trabajo científico y analítico revisado por personas.",
      ctaPrimary: "Cuéntanos qué necesitas resolver",
      ctaSecondary: "Ver servicios",
    },
    flow: {
      title: "DE LA INFORMACIÓN A RESPUESTAS MÁS CLARAS",
      colLeft: "INFORMACIÓN",
      colRight: "RESPUESTAS MÁS CLARAS",
      hint: "Elige una fuente o una respuesta para ver el detalle.",
      controlsLabel: "Qué hacemos",
      relatedLabelSource: "Se refleja en",
      relatedLabelOutput: "Alimentado por",
      exampleTag: "Ilustrativo",
      sources: [
        {
          id: "publications",
          label: "Publicaciones científicas",
          desc: "Artículos y estudios publicados sobre una enfermedad, un mecanismo o un tratamiento.",
          controls: ["Busca", "Analiza"],
          example: "18 publicaciones relevantes identificadas para una vía terapéutica.",
          outputs: ["evidence", "competitors"],
        },
        {
          id: "trials",
          label: "Ensayos clínicos",
          desc: "Estudios registrados, propios o de otros programas, en curso o completados.",
          controls: ["Busca", "Compara"],
          example: "12 ensayos activos identificados para la misma indicación.",
          outputs: ["evidence", "competitors", "kpi"],
        },
        {
          id: "studyData",
          label: "Datos del estudio",
          desc: "Formularios, visitas y resultados generados por tu propio ensayo.",
          controls: ["Organiza", "Analiza"],
          example: "94% de formularios esperados completos en el corte más reciente.",
          outputs: ["kpi", "findings"],
        },
        {
          id: "providerReports",
          label: "Reportes de proveedores",
          desc: "Informes periódicos entregados por proveedores externos que ejecutan parte del estudio, como laboratorios o la organización que dirige el ensayo.",
          controls: ["Organiza", "Compara"],
          example: "Un proveedor entrega su reporte con varios días de retraso frente al calendario acordado.",
          outputs: ["findings", "documentation"],
        },
        {
          id: "internalData",
          label: "Datos internos",
          desc: "Archivos, hojas de cálculo y documentos que ya maneja tu equipo.",
          controls: ["Organiza", "Analiza"],
          example: "Un archivo interno cambia de estructura frente a la entrega anterior.",
          outputs: ["findings", "documentation"],
        },
      ],
      outputs: [
        {
          id: "evidence",
          label: "Evidencia",
          desc: "Qué muestran los estudios disponibles sobre una pregunta científica concreta.",
          controls: ["Busca", "Analiza"],
          example: "Resumen de evidencia con limitaciones y preguntas abiertas.",
          sources: ["publications", "trials"],
        },
        {
          id: "competitors",
          label: "Competidores",
          desc: "Qué programas están desarrollando otras compañías y cómo se diferencian.",
          controls: ["Busca", "Compara"],
          example: "5 programas competidores identificados para la misma vía terapéutica.",
          sources: ["publications", "trials"],
        },
        {
          id: "kpi",
          label: "KPI",
          desc: "Indicadores que muestran cómo evoluciona la calidad y el avance del estudio.",
          controls: ["Organiza", "Analiza"],
          example: "4 indicadores actualizados en el corte más reciente.",
          sources: ["trials", "studyData"],
        },
        {
          id: "findings",
          label: "Hallazgos",
          desc: "Puntos concretos que conviene revisar antes de la próxima reunión.",
          controls: ["Analiza", "Compara"],
          example: "3 hallazgos prioritarios identificados en el último corte.",
          sources: ["studyData", "providerReports", "internalData"],
        },
        {
          id: "documentation",
          label: "Documentación",
          desc: "Resúmenes, tablas y borradores listos para tu equipo o para un proceso regulatorio.",
          controls: ["Organiza", "Analiza"],
          example: "Borrador de resumen de evidencia listo para revisión interna.",
          sources: ["providerReports", "internalData"],
        },
      ],
    },
    trust: [
      {
        title: "Proyectos definidos",
        body: "Cada trabajo empieza con un alcance y un entregable claros, no con una suscripción abierta.",
      },
      {
        title: "Revisión humana",
        body: "La tecnología acelera el trabajo; una persona revisa cada análisis antes de entregarlo.",
      },
      {
        title: "Sin implementar una plataforma",
        body: "Empieza con una pregunta, un reporte o un archivo. No necesitas adoptar un nuevo sistema.",
      },
    ],
    problem: {
      kicker: "El problema",
      headlineA: "Cuando la evidencia, los datos y los reportes están dispersos,",
      headlineB: "mantener una visión clara consume demasiado tiempo.",
      paragraphs: [
        "Una compañía de biotecnología puede necesitar revisar publicaciones, entender qué están haciendo otros programas, preparar un ensayo clínico, interpretar reportes de proveedores y analizar nuevas entregas de datos, a menudo al mismo tiempo.",
        "Therapeutics Data toma problemas concretos y los convierte en trabajos definidos que aportan capacidad adicional sin obligar al equipo a implementar otra plataforma o ampliar inmediatamente su estructura interna.",
      ],
    },
    pains: [
      {
        title: "Evidencia dispersa",
        body: "Publicaciones, ensayos y reportes de proveedores viven en sitios distintos y hay que revisarlos uno por uno.",
      },
      {
        title: "Revisión manual",
        body: "El equipo termina combinando búsquedas, archivos y hojas de cálculo para responder preguntas que deberían ser rápidas.",
      },
      {
        title: "Poco tiempo interno",
        body: "Investigar, analizar y dar seguimiento a todo compite con el resto del trabajo científico y clínico del equipo.",
      },
    ],
    areas: {
      kicker: "SERVICIOS",
      headline: "Tres áreas donde podemos ayudar a tu equipo.",
      sub: "Elige el área que más se acerca al problema que tienes hoy. Cada proyecto se define antes de empezar.",
      note: "El alcance de cada servicio se define contigo antes de compartir cualquier dato o documento.",
      items: [
        {
          badge: "EVIDENCIA CIENTÍFICA",
          name: "Evidencia y panorama competitivo",
          desc: "Entiende qué se sabe, qué están estudiando otros equipos y dónde siguen existiendo preguntas.",
          capabilities: ["Evidencia científica", "Ensayos y competidores", "Endpoints y biomarcadores"],
          cta: "Ver análisis científico",
        },
        {
          badge: "ESTUDIOS CLÍNICOS",
          name: "Preparación y seguimiento del estudio",
          desc: "Obtén una lectura más clara del entorno del ensayo, sus indicadores y la información que recibes de proveedores.",
          capabilities: ["Viabilidad y reclutamiento", "KPI y datos del estudio", "Reportes de la CRO"],
          note: "También disponible como seguimiento periódico.",
          cta: "Ver apoyo para estudios clínicos",
        },
        {
          badge: "DATOS Y DOCUMENTACIÓN",
          name: "Análisis y documentación científica",
          desc: "Revisa datos, analiza resultados y prepara documentación científica con un proceso claro y trazable.",
          capabilities: ["Entregas de datos", "Datos preclínicos", "Documentación científica"],
          cta: "Ver análisis y documentación",
        },
      ],
    },
    smallStart: {
      kicker: "UNA FORMA SENCILLA DE EMPEZAR",
      headline: "No necesitas contratar un proyecto grande para trabajar con nosotros.",
      text: "Muchos trabajos pueden comenzar con una sola pregunta, un reporte, un conjunto de publicaciones o una entrega de datos.",
      receivesLabel: "Recibes",
      items: [
        {
          label: "Tienes una pregunta científica.",
          text: "Nos compartes el tema que necesitas investigar.",
          receives: ["Evidencia relevante", "Principales estudios", "Limitaciones", "Competidores y referencias"],
        },
        {
          label: "Necesitas entender qué está ocurriendo en una indicación.",
          text: "Nos compartes la indicación o el área que te interesa.",
          receives: ["Estudios activos", "Competidores", "Fases y poblaciones", "Endpoints y tendencias relevantes"],
        },
        {
          label: "Tienes el último reporte de tu CRO.",
          text: "Nos compartes el documento que acabas de recibir.",
          receives: [
            "KPI (indicadores clave de desempeño) principales",
            "Cambios",
            "Puntos que merecen atención",
            "Preguntas para la próxima reunión",
          ],
        },
        {
          label: "Acabas de recibir un archivo nuevo.",
          text: "Nos compartes el archivo tal como lo recibiste.",
          receives: ["Control de estructura", "Duplicados", "Valores faltantes", "Cambios y posibles inconsistencias"],
        },
      ],
      cta: "Cuéntanos tu problema",
    },
    kpiSection: {
      kicker: "KPI DEL ESTUDIO",
      headline: "Indicadores claros, cálculos transparentes.",
      text: "Cada KPI tiene una definición, una fuente y una regla de cálculo clara para que el equipo pueda entender qué está cambiando y cómo interpretar el resultado.",
      ctaLabel: "Cómo se calcula",
      accordionTitle: "¿Cómo se calculan estos indicadores?",
      labels: { whatItMeasures: "Qué mide", calculation: "Cálculo", example: "Ejemplo" },
      items: [
        {
          title: "Formularios completos",
          value: "94 %",
          context: "940 de 1.000 formularios esperados",
          delta: "↑ 2,1 pts",
          deltaTone: "positive",
          summary: "Proporción de formularios esperados que ya están completos.",
          whatItMeasures:
            "El porcentaje de formularios que deberían estar disponibles hasta una fecha determinada y que ya se encuentran completos.",
          calculation: ["formularios completos ÷ formularios esperados × 100"],
          example: ["940 ÷ 1.000 × 100 = 94 %"],
        },
        {
          title: "Consultas >14 días",
          value: "39",
          context: "consultas todavía abiertas",
          delta: "↑ 4",
          deltaTone: "warning",
          summary: "Consultas que llevan abiertas más de 14 días sin resolverse.",
          glossary: {
            term: "consulta de datos",
            body: "Una consulta de datos es una pregunta formal que se genera cuando un dato falta, parece inconsistente o necesita aclaración.",
          },
          whatItMeasures: "Cuántas consultas continúan abiertas más de 14 días después de su creación.",
          calculation: ["fecha de corte − fecha de creación"],
          calcNote: "Si supera los 14 días, se incluye en el indicador.",
          secondaryCalculation: [
            { label: "Para comparar centros:", lines: ["consultas abiertas >14 días ÷ formularios evaluados × 100"] },
          ],
        },
        {
          title: "Retraso mediano",
          value: "2,4 días",
          delta: "↑ 0,6 días",
          deltaTone: "warning",
          summary: "Tiempo típico entre la visita y el registro del dato.",
          whatItMeasures:
            "Cuánto tiempo suele transcurrir entre una visita del participante y el registro de los datos correspondientes.",
          calculation: ["Mediana de días entre la fecha de visita y la primera entrada correspondiente."],
          explanationNote:
            "Utilizamos la mediana porque representa mejor el comportamiento habitual cuando existen algunos casos con retrasos extremos.",
        },
        {
          title: "Discrepancias",
          value: "2,0 %",
          context: "8 de 400 registros comparados",
          summary: "Registros que deberían coincidir entre dos fuentes y no coinciden.",
          whatItMeasures:
            "Registros que deberían coincidir entre dos fuentes —por ejemplo, laboratorio y base clínica— pero presentan diferencias que necesitan revisión.",
          calculation: ["registros con discrepancias abiertas ÷ registros comparados × 100"],
        },
      ],
    },
    demo: {
      kicker: "EJEMPLO DE ENTREGA",
      headline: "De un conjunto de datos a una pregunta concreta que el equipo puede revisar.",
      intro:
        "Este ejemplo utiliza datos sintéticos —datos creados únicamente para demostración— y muestra cómo podemos resumir KPI del estudio, comparar centros, revisar proveedores y señalar cambios que merecen atención.",
      dataCut: "Corte: 28 ago 2026",
      syntheticLabel: "Datos sintéticos de demostración",
      studyLabel: "Estudio Fase II",
      tabs: { study: "Estudio", sites: "Centros", providers: "Proveedores", findings: "Hallazgos" },
      kpis: {
        forms: { label: "Formularios esperados completos", sub: "+2,1 puntos vs. corte anterior" },
        queries: { label: "Consultas de datos abiertas >14 días", sub: "4 nuevas desde el último corte" },
        sites: { label: "Centros con hallazgos prioritarios", sub: "2 con pendientes de alta prioridad" },
        deliveries: { label: "Entregas recibidas a tiempo", sub: "1 proveedor con entrega retrasada" },
      },
      definitionsToggle: "Cómo interpretamos los indicadores",
      definitionsLabels: {
        whatItMeasures: "Qué mide",
        howCalculated: "Cómo se calcula",
        source: "De dónde sale",
        howToInterpret: "Cómo se interpreta",
      },
      definitions: [
        {
          term: "Formularios esperados completos",
          whatItMeasures: "Qué porcentaje de los formularios que deberían existir hasta la fecha de corte ya están completos.",
          howCalculated:
            "Formularios completos ÷ formularios esperados × 100, considerando participantes y visitas ocurridas hasta el corte.",
          source: "Sistema principal de captura de datos del estudio.",
          howToInterpret: "Un valor bajo puede indicar retraso en el registro, no necesariamente un problema con el participante.",
        },
        {
          term: "Consultas de datos abiertas >14 días",
          whatItMeasures: "Cuántas consultas de datos continúan abiertas más de 14 días después de su creación.",
          howCalculated: "Se cuentan las consultas cuya fecha de corte menos fecha de creación supera 14 días.",
          source: "Registro de consultas de datos del sistema clínico y de los proveedores.",
          howToInterpret:
            "Un aumento sostenido suele señalar que un centro o proveedor necesita apoyo adicional para resolver pendientes.",
        },
        {
          term: "Retraso de entrada",
          whatItMeasures: "Cuánto tiempo suele transcurrir entre una visita y el registro de los datos correspondientes.",
          howCalculated: "Mediana de días entre la fecha de visita y la primera entrada registrada.",
          source: "Fechas de visita y de entrada del sistema clínico.",
          howToInterpret: "Se usa la mediana, no el promedio, porque representa mejor el comportamiento habitual del centro.",
        },
        {
          term: "Discrepancia entre fuentes",
          whatItMeasures: "Diferencias entre dos fuentes que deberían coincidir y no coinciden.",
          howCalculated: "Registros con discrepancias abiertas ÷ registros comparados × 100.",
          source: "Comparación entre el sistema clínico y una fuente externa, por ejemplo el laboratorio.",
          howToInterpret: "No indica quién tiene el dato correcto, solo que existe una diferencia que alguien debe revisar.",
        },
        {
          term: "Tasa por 100 formularios evaluados",
          whatItMeasures: "Una forma de comparar centros con distinto volumen de participantes.",
          howCalculated: "Consultas abiertas >14 días ÷ formularios evaluados × 100.",
          source: "Los mismos datos utilizados para el indicador de consultas abiertas.",
          howToInterpret: "Permite comparar un centro pequeño con uno grande sin que el tamaño distorsione la comparación.",
        },
      ],
      panels: {
        bySite: {
          title: "Centros con más consultas abiertas >14 días",
          subtitle: "Conteo absoluto y tasa por 100 formularios esperados",
        },
        trend: { title: "Evolución de consultas abiertas >14 días (12 semanas)" },
        findings: "Hallazgos prioritarios",
      },
      siteChart: {
        legendReview: "Requiere revisión",
        legendOk: "Dentro del rango esperado",
        thresholdLabel: "Umbral: 10",
        thresholdNote:
          "Requiere revisión = ≥10 consultas abiertas >14 días o tasa elevada en relación con el volumen del centro.",
        countUnit: "consultas abiertas >14 días",
        rateUnit: "/100",
      },
      trendChart: {
        currentLabel: "actualmente",
        deltaLabel: "vs. corte anterior",
        weekLabel: "Semana",
        axisLabel: "Consultas abiertas",
      },
      sites: {
        tableHeaders: [
          "Centro",
          "Participantes activos",
          "Formularios completos",
          "Retraso de entrada",
          "Consultas >14 días",
          "Discrepancias entre fuentes",
          "Estado",
        ],
        status: { review: "Revisar", watch: "Observar", stable: "Estable" },
        mobileLabels: {
          participants: "participantes activos",
          forms: "formularios completos",
          lag: "días de retraso mediano",
          queries: "consultas >14 días",
          discrepancies: "discrepancias entre fuentes",
        },
      },
      providers: {
        tableHeaders: ["Proveedor", "Tipo de datos", "Última entrega", "Estado"],
        status: { onTime: "A tiempo", late: "Retrasada", pending: "Pendiente" },
        items: {
          lab: { name: "Laboratorio central", dataType: "Resultados de laboratorio" },
          cro: { name: "CRO", dataType: "Reporte mensual del estudio" },
          imaging: { name: "Proveedor de imágenes", dataType: "Lecturas de imagen" },
          epro: { name: "Proveedor de cuestionarios electrónicos", dataType: "Respuestas de participantes" },
        },
        mobileLabels: { dataType: "tipo de datos", lastDelivery: "última entrega", status: "estado" },
        note: "Ejemplo ilustrativo de seguimiento de entregas. Los proveedores y las fechas son sintéticos.",
      },
      findings: {
        tableHeaders: [
          "ID",
          "Prioridad",
          "Categoría",
          "Centro",
          "Participante",
          "Antigüedad",
          "Estado",
        ],
        priority: { high: "Alta", medium: "Media", low: "Baja" },
        category: {
          completeness: "Completitud",
          consistency: "Consistencia",
          chronology: "Cronología",
          reconciliation: "Reconciliación",
          agedQuery: "Consulta de datos envejecida",
        },
        status: { open: "Abierto", inReview: "En revisión" },
        priorityNote:
          "Las prioridades del demo representan prioridad de revisión de datos, no gravedad médica.",
        items: {
          "TD-F-001": {
            source: "Laboratorio + base clínica",
            description: "Fecha de muestra de laboratorio no coincide con la fecha registrada en la base clínica.",
            compact: "Participante 045 — fecha de laboratorio no coincide con la base clínica",
          },
          "TD-F-002": {
            source: "Base clínica",
            description: "12 formularios esperados permanecen pendientes.",
            compact: "Centro 03 — 12 formularios esperados pendientes",
          },
          "TD-F-003": {
            source: "Base clínica",
            description: "Fecha de evaluación registrada antes de la visita correspondiente.",
            compact: "Centro 11 — fecha de evaluación registrada antes de la visita",
          },
          "TD-F-004": {
            source: "Archivo externo + base clínica",
            description: "Registro externo pendiente de conciliación.",
            compact: "Centro 02 — reconciliación con archivo externo pendiente",
          },
          "TD-F-005": {
            source: "Base clínica",
            description: "Consulta de datos abierta durante 21 días sin respuesta del centro.",
            compact: "Centro 11 — consulta de datos abierta hace 21 días sin respuesta",
          },
        },
      },
      meetingQuestions: {
        title: "Del indicador a una pregunta concreta",
        items: [
          {
            context: "Centro 07",
            question:
              "Las consultas abiertas durante más de 14 días aumentaron desde el último corte. ¿Existe un plan para reducir este acumulado?",
          },
          {
            context: "Centro 03",
            question:
              "El tiempo habitual de entrada de datos aumentó de 1,8 a 4,2 días. ¿Hubo algún cambio operativo que lo explique?",
          },
          {
            context: "Laboratorio",
            question: "Cinco registros continúan pendientes de conciliación con la base clínica. ¿Cuándo se espera resolverlos?",
          },
        ],
        glossary: {
          term: "Conciliar",
          body: "Conciliar significa comparar dos fuentes que deberían contener información compatible y resolver las diferencias.",
        },
      },
    },
    scientificDemo: {
      kicker: "EJEMPLO DE ANÁLISIS CIENTÍFICO",
      headline: "Una pregunta puede convertirse en un mapa estructurado de la evidencia.",
      questionLabel: "Pregunta",
      question: "¿Qué evidencia clínica existe para una determinada vía terapéutica en una indicación?",
      stats: [
        { value: "27", label: "publicaciones relevantes" },
        { value: "12", label: "ensayos identificados" },
        { value: "5", label: "programas clínicos activos" },
        { value: "3", label: "tipos principales de endpoints" },
      ],
      columns: [
        {
          title: "Lo que parece consistente",
          items: [
            "Varios estudios coinciden en la magnitud del efecto observado en la población principal.",
            "La vía terapéutica muestra un perfil de seguridad similar entre los programas identificados.",
          ],
        },
        {
          title: "Lo que sigue siendo incierto",
          items: [
            "No está claro si el efecto se mantiene en poblaciones con comorbilidades relevantes.",
            "Los datos de seguimiento a largo plazo todavía son limitados.",
          ],
        },
        {
          title: "Estudios que merece la pena revisar",
          items: [
            "Un ensayo de fase II con el diseño más comparable al programa propio.",
            "Una revisión sistemática reciente sobre la misma vía terapéutica.",
          ],
        },
      ],
      illustrativeLabel: "Ejemplo ilustrativo",
      note: "Los números y las conclusiones de este ejemplo son ilustrativos. No representan un análisis real ni compañías reales.",
    },
    howItWorks: {
      kicker: "Cómo trabajamos",
      headline: "De una pregunta concreta a un entregable útil.",
      steps: [
        {
          title: "Nos cuentas qué necesitas resolver",
          body: "Puede ser una pregunta científica, un reporte, un protocolo o un archivo de datos.",
        },
        {
          title: "Definimos el alcance",
          body: "Acordamos qué analizaremos, qué información necesitamos y qué recibirás.",
        },
        {
          title: "Investigamos y analizamos",
          body: "Combinamos revisión científica, análisis de datos y herramientas desarrolladas internamente.",
        },
        {
          title: "Recibes un resultado que puedes revisar",
          body: "Entregamos conclusiones, datos de soporte, referencias y las limitaciones relevantes.",
        },
      ],
      note: "Si el proyecto requiere experiencia regulatoria, estadística o clínica especializada, incorporamos al profesional adecuado.",
    },
    techAI: {
      headline: "Tecnología para trabajar mejor, revisión humana para entregar con criterio.",
      labelTech: "Tecnología",
      labelHuman: "Revisión humana",
      paragraphs: [
        "Utilizamos automatización e inteligencia artificial para acelerar tareas como búsqueda, clasificación, comparación de documentos y control de datos.",
        "Los resultados que entregamos se revisan antes de llegar al cliente. La tecnología nos ayuda a trabajar con mayor rapidez; no sustituye la evaluación científica.",
      ],
    },
    whoItsFor: {
      headline: "Para equipos de biotecnología que necesitan capacidad adicional en momentos concretos del desarrollo.",
      intro: "Therapeutics Data puede complementar equipos científicos, clínicos, de datos o desarrollo cuando necesitan investigar una pregunta, analizar información, preparar un estudio o revisar documentación sin asumir un proyecto de transformación tecnológica.",
      profiles: [
        {
          title: "Biotecnología preclínica",
          body: "Evidencia, competidores, análisis de datos, publicaciones y preparación para la transición hacia clínica.",
        },
        {
          title: "Equipos preparando un estudio clínico",
          body: "Panorama clínico, viabilidad, reclutamiento, KPI, datos y documentación.",
        },
        {
          title: "Equipos con ensayos en marcha",
          body: "Revisión de reportes, seguimiento de indicadores, control de entregas y análisis de proveedores.",
        },
      ],
    },
    complement: {
      kicker: "CÓMO COMPLEMENTAMOS TU EQUIPO",
      headline: "Análisis, documentación y experiencia adicional cuando el proyecto lo necesita.",
      text: "Trabajamos con un alcance definido y adaptamos el equipo al tipo de proyecto. Podemos encargarnos directamente del análisis científico, los datos y la documentación, e incorporar especialistas cuando una tarea requiere experiencia específica.",
      cards: [
        {
          title: "Redacción científica",
          body: "Convertimos resultados, evidencia y análisis en materiales científicos claros y estructurados para revisión, publicación o comunicación interna.",
          items: [
            "Manuscritos",
            "Resúmenes científicos",
            "Posters",
            "Revisiones de literatura",
            "Presentaciones científicas",
            "Informes técnicos",
          ],
          cta: "Consultar un proyecto de redacción",
        },
        {
          title: "Apoyo documental regulatorio",
          body: "Apoyamos las partes científicas y documentales de trabajos regulatorios mediante búsqueda, síntesis, organización y revisión de evidencia.",
          items: [
            "Búsqueda y síntesis de evidencia",
            "Antecedentes científicos",
            "Tablas y resúmenes",
            "Revisión de consistencia",
            "Comparación entre versiones",
            "Apoyo en preparación de borradores",
          ],
          cta: "Ver apoyo documental",
        },
        {
          title: "Especialistas cuando el proyecto lo requiere",
          body: "Algunas tareas necesitan experiencia específica. En esos casos podemos trabajar junto a profesionales especializados según el alcance del proyecto.",
          items: [
            "Asuntos regulatorios",
            "Bioestadística",
            "Gestión de datos clínicos",
            "Operaciones clínicas",
            "Farmacovigilancia",
            "Experiencia en áreas terapéuticas específicas",
          ],
        },
      ],
      note: {
        lead: "Nuestro alcance es claro:",
        body: "Therapeutics Data no sustituye una CRO (organización de investigación contratada), un equipo médico ni una función regulatoria especializada. Cuando un trabajo requiere esa experiencia, incorporamos al profesional adecuado.",
      },
    },
    resources: {
      kicker: "RECURSOS",
      headline: "Investigación y desarrollo clínico, explicados de forma clara y práctica.",
      body: "Estamos construyendo una biblioteca práctica para entender cómo se generan, revisan y utilizan los datos y la evidencia en biotecnología.",
      badge: "Próximamente",
      items: [
        {
          title: "Cómo interpretar un ensayo clínico",
          body: "Qué mirar primero cuando revisas los resultados de un estudio publicado.",
        },
        {
          title: "Qué es una CRO",
          body: "Qué hace una organización de investigación contratada dentro de un ensayo clínico.",
        },
        {
          title: "Qué significa un endpoint",
          body: "Qué es exactamente la medida que se usa para evaluar el resultado de un estudio.",
        },
        {
          title: "Cómo leer un reporte mensual de un estudio",
          body: "Qué secciones conviene revisar primero en un reporte periódico del estudio.",
        },
        {
          title: "Qué KPI debería revisar una compañía pequeña",
          body: "Qué indicadores aportan más valor cuando el equipo y el presupuesto son pequeños.",
        },
        {
          title: "Qué es una entrega de datos",
          body: "Qué implica recibir y validar un nuevo conjunto de datos de un proveedor.",
        },
        {
          title: "Cómo evaluar evidencia científica",
          body: "Cómo distinguir evidencia sólida de evidencia preliminar.",
        },
        {
          title: "Diferencia entre resultados preclínicos y clínicos",
          body: "Qué cambia entre un resultado obtenido en laboratorio y uno obtenido en personas.",
        },
      ],
    },
    faq: {
      kicker: "PREGUNTAS FRECUENTES",
      headline: "Lo que suele preguntarse antes de empezar.",
      items: [
        {
          q: "¿Qué tipo de compañía trabaja con Therapeutics Data?",
          a: "Trabajamos con compañías y equipos de biotecnología que necesitan apoyo puntual o recurrente en investigación científica, análisis de datos, estudios clínicos o documentación. El tamaño de la organización no es un requisito.",
        },
        {
          q: "¿Necesito tener un ensayo clínico en marcha?",
          a: "No. También trabajamos con compañías preclínicas o que están preparando su primer estudio.",
        },
        {
          q: "¿Therapeutics Data es una CRO?",
          a: "No. Una organización de investigación contratada, conocida como CRO, ayuda a ejecutar diferentes actividades de un ensayo clínico. Therapeutics Data se enfoca en análisis científico, datos, inteligencia clínica y documentación.",
        },
        {
          q: "¿Utilizan inteligencia artificial?",
          a: "Sí, cuando ayuda a realizar tareas de forma más eficiente. Los análisis y documentos entregados se revisan antes de ser enviados al cliente.",
        },
        {
          q: "¿Pueden hacer un proyecto pequeño?",
          a: "Sí. Muchos proyectos están diseñados para comenzar con una pregunta, un reporte o un conjunto de datos específico.",
        },
        {
          q: "¿Pueden trabajar con nuestra CRO actual?",
          a: "Sí. Nuestro trabajo puede complementar la información que ya recibes de tu CRO o de otros proveedores.",
        },
        {
          q: "¿Realizan consultoría regulatoria?",
          a: "Podemos apoyar investigación, análisis y redacción científica relacionada con documentación regulatoria. Cuando el trabajo requiere una decisión regulatoria especializada, incorporamos profesionales con experiencia específica.",
        },
      ],
    },
    finalCta: {
      kicker: "CUÉNTANOS EL PROBLEMA",
      headline: "Empieza por la pregunta que hoy está consumiendo tiempo de tu equipo.",
      body: "Puede ser una revisión de evidencia, un análisis competitivo, un reporte de la CRO, una entrega de datos o un documento científico. Cuéntanos qué necesitas resolver y te diremos si podemos ayudarte y cuál sería el alcance.",
      cta: "Contarnos el proyecto",
      secondary: "Ver servicios",
    },
    footer: {
      tagline: "Inteligencia científica, clínica y de datos para compañías de biotecnología.",
      links: [
        { label: "Servicios", href: "#solutions" },
        { label: "Cómo trabajamos", href: "#how-it-works" },
        { label: "Recursos", href: "#resources" },
        { label: "Privacidad", href: "#" },
        { label: "Términos", href: "#" },
        { label: "Contacto", href: "mailto:info@therapeuticsdata.com" },
      ],
      copyright: "© 2026 Therapeutics Data. Todos los derechos reservados.",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "Therapeutics Data | Scientific, Clinical & Data Intelligence",
      description:
        "Therapeutics Data helps biotech teams analyze scientific evidence, study the clinical and competitive landscape, review study data, and prepare scientific documentation.",
    },
    header: {
      nav: [
        { label: "Services", href: "#solutions" },
        { label: "How we work", href: "#how-it-works" },
        { label: "Who it's for", href: "#who" },
        { label: "Resources", href: "#resources" },
      ],
      cta: "Tell us what you need to solve",
      langLabel: "English",
      langSwitch: { label: "Español", href: "/es" },
    },
    hero: {
      kicker: "FOR BIOTECH TEAMS",
      headline: "Understand your study evidence and data more clearly.",
      sub: "Therapeutics Data helps biotech teams analyze scientific evidence, study the clinical and competitive landscape, review study data and reports, and prepare scientific documentation.",
      subSecondary:
        "You can start with a single question, a report, or a specific file. No need to roll out a platform or kick off a months-long project.",
      microcopy: "Defined projects. Clear deliverables. Scientific and analytical work reviewed by people.",
      ctaPrimary: "Tell us what you need to solve",
      ctaSecondary: "See services",
    },
    flow: {
      title: "FROM INFORMATION TO CLEARER ANSWERS",
      colLeft: "INFORMATION",
      colRight: "CLEARER ANSWERS",
      hint: "Pick a source or an answer to see the detail.",
      controlsLabel: "What we do",
      relatedLabelSource: "Feeds into",
      relatedLabelOutput: "Fed by",
      exampleTag: "Illustrative",
      sources: [
        {
          id: "publications",
          label: "Scientific publications",
          desc: "Published articles and studies about a disease, mechanism, or treatment.",
          controls: ["Search", "Analyze"],
          example: "18 relevant publications identified for a therapeutic pathway.",
          outputs: ["evidence", "competitors"],
        },
        {
          id: "trials",
          label: "Clinical trials",
          desc: "Registered studies, your own or other programs', ongoing or completed.",
          controls: ["Search", "Compare"],
          example: "12 active trials identified for the same indication.",
          outputs: ["evidence", "competitors", "kpi"],
        },
        {
          id: "studyData",
          label: "Study data",
          desc: "Forms, visits, and results generated by your own trial.",
          controls: ["Organize", "Analyze"],
          example: "94% of expected forms complete as of the latest cut.",
          outputs: ["kpi", "findings"],
        },
        {
          id: "providerReports",
          label: "Provider reports",
          desc: "Periodic reports delivered by outside providers who run part of the study — labs or the organization leading the trial.",
          controls: ["Organize", "Compare"],
          example: "A provider delivers its report several days behind the agreed schedule.",
          outputs: ["findings", "documentation"],
        },
        {
          id: "internalData",
          label: "Internal data",
          desc: "Files, spreadsheets, and documents your team already manages.",
          controls: ["Organize", "Analyze"],
          example: "An internal file changes structure compared with the prior delivery.",
          outputs: ["findings", "documentation"],
        },
      ],
      outputs: [
        {
          id: "evidence",
          label: "Evidence",
          desc: "What the available studies show about a specific scientific question.",
          controls: ["Search", "Analyze"],
          example: "Evidence summary with limitations and open questions.",
          sources: ["publications", "trials"],
        },
        {
          id: "competitors",
          label: "Competitors",
          desc: "What programs other companies are developing and how they differ.",
          controls: ["Search", "Compare"],
          example: "5 competing programs identified for the same therapeutic pathway.",
          sources: ["publications", "trials"],
        },
        {
          id: "kpi",
          label: "KPI",
          desc: "Indicators that show how the study's quality and progress are evolving.",
          controls: ["Organize", "Analyze"],
          example: "4 indicators updated as of the latest cut.",
          sources: ["trials", "studyData"],
        },
        {
          id: "findings",
          label: "Findings",
          desc: "Concrete points worth reviewing before the next meeting.",
          controls: ["Analyze", "Compare"],
          example: "3 priority findings identified in the latest cut.",
          sources: ["studyData", "providerReports", "internalData"],
        },
        {
          id: "documentation",
          label: "Documentation",
          desc: "Summaries, tables, and drafts ready for your team or a regulatory process.",
          controls: ["Organize", "Analyze"],
          example: "Evidence summary draft ready for internal review.",
          sources: ["providerReports", "internalData"],
        },
      ],
    },
    trust: [
      {
        title: "Defined projects",
        body: "Every engagement starts with a clear scope and deliverable, not an open-ended subscription.",
      },
      {
        title: "Human review",
        body: "Technology speeds up the work; a person reviews every analysis before it's delivered.",
      },
      {
        title: "No platform to roll out",
        body: "Start with a question, a report, or a file. No need to adopt a new system.",
      },
    ],
    problem: {
      kicker: "The problem",
      headlineA: "When evidence, data, and reports are scattered,",
      headlineB: "keeping a clear view takes too much time.",
      paragraphs: [
        "A biotech company may need to review publications, understand what other programs are doing, prepare a clinical trial, interpret provider reports, and analyze new data deliveries — often at the same time.",
        "Therapeutics Data takes concrete problems and turns them into defined engagements that add capacity without requiring the team to roll out a new platform or immediately grow its internal structure.",
      ],
    },
    pains: [
      {
        title: "Scattered evidence",
        body: "Publications, trials, and provider reports live in different places, and someone has to go through them one by one.",
      },
      {
        title: "Manual review",
        body: "The team ends up combining searches, files, and spreadsheets to answer questions that should be quick.",
      },
      {
        title: "Little internal time",
        body: "Researching, analyzing, and following up on all of it competes with the team's other scientific and clinical work.",
      },
    ],
    areas: {
      kicker: "SERVICES",
      headline: "Three areas where we can help your team.",
      sub: "Pick the area closest to the problem you have today. Every project is scoped before we start.",
      note: "Each service's scope is defined with you before any data or document is shared.",
      items: [
        {
          badge: "Scientific Intelligence",
          name: "Evidence and competitive landscape",
          desc: "Understand what's known, what other teams are studying, and where questions remain open.",
          capabilities: ["Scientific evidence", "Trials and competitors", "Endpoints and biomarkers"],
          cta: "View scientific analysis",
        },
        {
          badge: "Clinical Trial Intelligence",
          name: "Study preparation and oversight",
          desc: "Get a clearer read on the trial environment, its indicators, and the information you receive from providers.",
          capabilities: ["Feasibility and recruitment", "KPIs and study data", "CRO reporting"],
          note: "Also available as ongoing tracking.",
          cta: "View clinical study support",
        },
        {
          badge: "Data & Documentation",
          name: "Analysis and scientific documentation",
          desc: "Review data, analyze results, and prepare scientific documentation with a clear, traceable process.",
          capabilities: ["Data deliveries", "Preclinical data", "Scientific documentation"],
          cta: "View analysis and documentation",
        },
      ],
    },
    smallStart: {
      kicker: "AN EASY WAY TO START",
      headline: "You don't need to commission a big project to work with us.",
      text: "Many engagements can start with a single question, a report, a set of publications, or a data delivery.",
      receivesLabel: "You get",
      items: [
        {
          label: "You have a scientific question.",
          text: "You share the topic you need researched.",
          receives: ["Relevant evidence", "Key studies", "Limitations", "Competitors and references"],
        },
        {
          label: "You need to understand what's happening in an indication.",
          text: "You share the indication or therapeutic area you're interested in.",
          receives: ["Active studies", "Competitors", "Phases and populations", "Relevant endpoints and trends"],
        },
        {
          label: "You have your CRO's latest report.",
          text: "You share the document you just received.",
          receives: [
            "Key KPIs (key performance indicators)",
            "Changes",
            "Points worth flagging",
            "Questions for the next meeting",
          ],
        },
        {
          label: "You just received a new file.",
          text: "You share the file exactly as you received it.",
          receives: ["Structure check", "Duplicates", "Missing values", "Changes and possible inconsistencies"],
        },
      ],
      cta: "Tell us your problem",
    },
    kpiSection: {
      kicker: "STUDY KPIs",
      headline: "Clear indicators, transparent calculations.",
      text: "Each KPI has a definition, a source, and a clear calculation rule so the team can understand what's changing and how to interpret the result.",
      ctaLabel: "How it's calculated",
      accordionTitle: "How are these indicators calculated?",
      labels: { whatItMeasures: "What it measures", calculation: "Calculation", example: "Example" },
      items: [
        {
          title: "Forms completed",
          value: "94%",
          context: "940 of 1,000 expected forms",
          delta: "↑ 2.1 pts",
          deltaTone: "positive",
          summary: "Share of expected forms that are already complete.",
          whatItMeasures: "The percentage of forms that should be available by a given date and are already complete.",
          calculation: ["forms complete ÷ forms expected × 100"],
          example: ["940 ÷ 1,000 × 100 = 94%"],
        },
        {
          title: "Queries >14 days",
          value: "39",
          context: "queries still open",
          delta: "↑ 4",
          deltaTone: "warning",
          summary: "Queries that have been open for more than 14 days.",
          glossary: {
            term: "data query",
            body: "A data query is a formal question raised when a data point is missing, looks inconsistent, or needs clarification.",
          },
          whatItMeasures: "How many queries remain open more than 14 days after they were created.",
          calculation: ["cutoff date − creation date"],
          calcNote: "If it exceeds 14 days, it's included in the indicator.",
          secondaryCalculation: [
            { label: "To compare sites:", lines: ["queries open >14 days ÷ forms evaluated × 100"] },
          ],
        },
        {
          title: "Median lag",
          value: "2.4 days",
          delta: "↑ 0.6 days",
          deltaTone: "warning",
          summary: "Typical time between a visit and its data entry.",
          whatItMeasures:
            "How long it typically takes between a participant's visit and the corresponding data being entered.",
          calculation: ["Median number of days between the visit date and the first matching entry."],
          explanationNote:
            "We use the median because it better represents typical behavior when a few cases have extreme delays.",
        },
        {
          title: "Discrepancies",
          value: "2.0%",
          context: "8 of 400 records compared",
          summary: "Records that should match between two sources but don't.",
          whatItMeasures:
            "Records that should match between two sources — for example, lab and clinical database — but show differences that need review.",
          calculation: ["records with open discrepancies ÷ records compared × 100"],
        },
      ],
    },
    demo: {
      kicker: "SAMPLE DELIVERABLE",
      headline: "From a dataset to a concrete question the team can review.",
      intro:
        "This example uses synthetic data — created purely for demonstration — and shows how we can summarize study KPIs, compare sites, review providers, and flag changes that need attention.",
      dataCut: "Data cut: Aug 28, 2026",
      syntheticLabel: "Synthetic demo data",
      studyLabel: "Phase II Study",
      tabs: { study: "Study", sites: "Sites", providers: "Providers", findings: "Findings" },
      kpis: {
        forms: { label: "Expected forms completed", sub: "+2.1 pts vs. previous cut" },
        queries: { label: "Open data queries >14 days", sub: "4 new since the last cut" },
        sites: { label: "Sites with priority findings", sub: "2 with high-priority items" },
        deliveries: { label: "Deliveries received on time", sub: "1 provider with a late delivery" },
      },
      definitionsToggle: "How we interpret the indicators",
      definitionsLabels: {
        whatItMeasures: "What it measures",
        howCalculated: "How it's calculated",
        source: "Where it comes from",
        howToInterpret: "How to interpret it",
      },
      definitions: [
        {
          term: "Expected forms completed",
          whatItMeasures: "What percentage of the forms that should exist as of the data cut are already complete.",
          howCalculated:
            "Forms complete ÷ forms expected × 100, counting participants and visits that occurred up to the cut.",
          source: "The study's primary data capture system.",
          howToInterpret: "A low value can indicate an entry lag, not necessarily a problem with the participant.",
        },
        {
          term: "Open data queries >14 days",
          whatItMeasures: "How many data queries remain open more than 14 days after they were created.",
          howCalculated: "Queries where cutoff date minus creation date exceeds 14 days are counted.",
          source: "The data query log from the clinical system and from providers.",
          howToInterpret: "A sustained increase often signals that a site or provider needs extra support resolving items.",
        },
        {
          term: "Entry lag",
          whatItMeasures: "How long it typically takes between a visit and the corresponding data being entered.",
          howCalculated: "Median number of days between the visit date and the first recorded entry.",
          source: "Visit and entry dates from the clinical system.",
          howToInterpret: "We use the median, not the average, because it better represents the site's typical behavior.",
        },
        {
          term: "Cross-source discrepancy",
          whatItMeasures: "Differences between two sources that should match and don't.",
          howCalculated: "Records with open discrepancies ÷ records compared × 100.",
          source: "Comparison between the clinical system and an external source, such as the lab.",
          howToInterpret: "It doesn't indicate which source is correct — only that there's a difference someone needs to review.",
        },
        {
          term: "Rate per 100 forms evaluated",
          whatItMeasures: "A way to compare sites with different participant volumes.",
          howCalculated: "Queries open >14 days ÷ forms evaluated × 100.",
          source: "The same data used for the open-queries indicator.",
          howToInterpret: "It lets you compare a small site with a large one without size distorting the comparison.",
        },
      ],
      panels: {
        bySite: {
          title: "Sites with the most queries open >14 days",
          subtitle: "Absolute count and rate per 100 expected forms",
        },
        trend: { title: "Open queries >14 days, 12-week trend" },
        findings: "Priority findings",
      },
      siteChart: {
        legendReview: "Needs review",
        legendOk: "Within expected range",
        thresholdLabel: "Threshold: 10",
        thresholdNote:
          "Flagged for review = ≥10 queries open >14 days, or a high rate relative to the site's volume.",
        countUnit: "queries open >14 days",
        rateUnit: "/100",
      },
      trendChart: {
        currentLabel: "currently",
        deltaLabel: "vs. previous cut",
        weekLabel: "Week",
        axisLabel: "Open queries",
      },
      sites: {
        tableHeaders: [
          "Site",
          "Active participants",
          "Forms complete",
          "Entry lag",
          "Queries >14 days",
          "Cross-source discrepancies",
          "Status",
        ],
        status: { review: "Review", watch: "Watch", stable: "Stable" },
        mobileLabels: {
          participants: "active participants",
          forms: "forms complete",
          lag: "days median lag",
          queries: "queries >14 days",
          discrepancies: "cross-source discrepancies",
        },
      },
      providers: {
        tableHeaders: ["Provider", "Data type", "Last delivery", "Status"],
        status: { onTime: "On time", late: "Late", pending: "Pending" },
        items: {
          lab: { name: "Central laboratory", dataType: "Lab results" },
          cro: { name: "CRO", dataType: "Monthly study report" },
          imaging: { name: "Imaging provider", dataType: "Imaging reads" },
          epro: { name: "Electronic questionnaire provider", dataType: "Participant-reported responses" },
        },
        mobileLabels: { dataType: "data type", lastDelivery: "last delivery", status: "status" },
        note: "Illustrative delivery-tracking example. Providers and dates are synthetic.",
      },
      findings: {
        tableHeaders: ["ID", "Priority", "Category", "Site", "Participant", "Age", "Status"],
        priority: { high: "High", medium: "Medium", low: "Low" },
        category: {
          completeness: "Completeness",
          consistency: "Consistency",
          chronology: "Chronology",
          reconciliation: "Reconciliation",
          agedQuery: "Aged data query",
        },
        status: { open: "Open", inReview: "In review" },
        priorityNote: "Demo priorities represent data review priority, not medical severity.",
        items: {
          "TD-F-001": {
            source: "Laboratory + clinical database",
            description: "Lab sample date does not match the date recorded in the clinical database.",
            compact: "Participant 045 — lab date doesn't match the clinical database",
          },
          "TD-F-002": {
            source: "Clinical database",
            description: "12 expected forms remain outstanding.",
            compact: "Site 03 — 12 expected forms outstanding",
          },
          "TD-F-003": {
            source: "Clinical database",
            description: "Assessment date recorded before the corresponding visit.",
            compact: "Site 11 — assessment date recorded before the visit",
          },
          "TD-F-004": {
            source: "External file + clinical database",
            description: "External record pending reconciliation.",
            compact: "Site 02 — pending reconciliation with an external file",
          },
          "TD-F-005": {
            source: "Clinical database",
            description: "Data query open for 21 days without a response from the site.",
            compact: "Site 11 — data query open for 21 days without a response",
          },
        },
      },
      meetingQuestions: {
        title: "From indicator to a concrete question",
        items: [
          {
            context: "Site 07",
            question: "Queries open for more than 14 days increased since the last cut. Is there a plan to bring this backlog down?",
          },
          {
            context: "Site 03",
            question: "Typical data entry lag increased from 1.8 to 4.2 days. Was there an operational change that explains it?",
          },
          {
            context: "Laboratory",
            question: "Five records are still pending reconciliation with the clinical database. When are they expected to be resolved?",
          },
        ],
        glossary: {
          term: "Reconcile",
          body: "To reconcile means comparing two sources that should contain compatible information and resolving the differences.",
        },
      },
    },
    scientificDemo: {
      kicker: "SCIENTIFIC ANALYSIS EXAMPLE",
      headline: "A question can become a structured map of the evidence.",
      questionLabel: "Question",
      question: "What clinical evidence exists for a given therapeutic pathway in an indication?",
      stats: [
        { value: "27", label: "relevant publications" },
        { value: "12", label: "trials identified" },
        { value: "5", label: "active clinical programs" },
        { value: "3", label: "main endpoint types" },
      ],
      columns: [
        {
          title: "What looks consistent",
          items: [
            "Several studies agree on the size of the effect observed in the main population.",
            "The pathway shows a similar safety profile across the identified programs.",
          ],
        },
        {
          title: "What remains uncertain",
          items: [
            "It's unclear whether the effect holds in populations with relevant comorbidities.",
            "Long-term follow-up data is still limited.",
          ],
        },
        {
          title: "Studies worth reviewing",
          items: [
            "A Phase II trial with the design most comparable to your own program.",
            "A recent systematic review on the same therapeutic pathway.",
          ],
        },
      ],
      illustrativeLabel: "Illustrative example",
      note: "The numbers and conclusions in this example are illustrative. They don't represent a real analysis or real companies.",
    },
    howItWorks: {
      kicker: "How we work",
      headline: "From a concrete question to a useful deliverable.",
      steps: [
        {
          title: "You tell us what you need to solve",
          body: "It can be a scientific question, a report, a protocol, or a data file.",
        },
        {
          title: "We scope the work",
          body: "We agree on what we'll analyze, what information we need, and what you'll receive.",
        },
        {
          title: "We research and analyze",
          body: "We combine scientific review, data analysis, and tools we've built in-house.",
        },
        {
          title: "You get a result you can review",
          body: "We deliver conclusions, supporting data, references, and the relevant limitations.",
        },
      ],
      note: "If the project requires specialized regulatory, statistical, or clinical expertise, we bring in the right professional.",
    },
    techAI: {
      headline: "Technology that helps us work faster, human review that delivers with judgment.",
      labelTech: "Technology",
      labelHuman: "Human review",
      paragraphs: [
        "We use automation and artificial intelligence to speed up tasks like search, classification, document comparison, and data control.",
        "Everything we deliver is reviewed before it reaches the client. Technology helps us work faster — it doesn't replace scientific judgment.",
      ],
    },
    whoItsFor: {
      headline: "For biotech teams that need extra capacity at specific points in development.",
      intro: "Therapeutics Data can complement scientific, clinical, data, or development teams when they need to research a question, analyze information, prepare a study, or review documentation without taking on a technology transformation project.",
      profiles: [
        {
          title: "Preclinical biotech",
          body: "Evidence, competitors, data analysis, publications, and preparation for the transition into clinical development.",
        },
        {
          title: "Teams preparing a clinical study",
          body: "Clinical landscape, feasibility, recruitment, KPIs, data, and documentation.",
        },
        {
          title: "Teams with trials underway",
          body: "Report review, indicator tracking, delivery control, and provider analysis.",
        },
      ],
    },
    complement: {
      kicker: "HOW WE COMPLEMENT YOUR TEAM",
      headline: "Analysis, documentation, and additional expertise when the project requires it.",
      text: "We work with a defined scope and adapt the team to the type of project. We can handle scientific analysis, data, and documentation directly, and bring in specialists when a task needs specific expertise.",
      cards: [
        {
          title: "Scientific writing",
          body: "We turn results, evidence, and analysis into clear, well-structured scientific materials for review, publication, or internal communication.",
          items: [
            "Manuscripts",
            "Scientific abstracts",
            "Posters",
            "Literature reviews",
            "Scientific presentations",
            "Technical reports",
          ],
          cta: "Discuss a writing project",
        },
        {
          title: "Regulatory documentation support",
          body: "We support the scientific and documentary parts of regulatory work through evidence search, synthesis, organization, and review.",
          items: [
            "Evidence search and synthesis",
            "Scientific background",
            "Tables and summaries",
            "Consistency review",
            "Version comparison",
            "Drafting support",
          ],
          cta: "See documentation support",
        },
        {
          title: "Specialists when the project requires them",
          body: "Some tasks need specific expertise. In those cases, we can work alongside specialized professionals based on the project's scope.",
          items: [
            "Regulatory affairs",
            "Biostatistics",
            "Clinical data management",
            "Clinical operations",
            "Pharmacovigilance",
            "Expertise in specific therapeutic areas",
          ],
        },
      ],
      note: {
        lead: "We work with a clear scope:",
        body: "Therapeutics Data does not replace a CRO (a contract research organization), the study medical team, or a specialized regulatory function. When a project requires that expertise, we involve appropriately qualified professionals.",
      },
    },
    resources: {
      kicker: "RESOURCES",
      headline: "Clinical research and development, explained clearly and practically.",
      body: "We're building a practical library to help explain how clinical data and evidence are generated, reviewed, and used in biotech.",
      badge: "Coming soon",
      items: [
        {
          title: "How to read a clinical trial",
          body: "What to look at first when you review a published study's results.",
        },
        {
          title: "What is a CRO",
          body: "What a contract research organization does within a clinical trial.",
        },
        {
          title: "What an endpoint actually means",
          body: "What exactly the measure used to evaluate a study's outcome is.",
        },
        {
          title: "How to read a study's monthly report",
          body: "Which sections are worth reviewing first in a periodic study report.",
        },
        {
          title: "What KPIs a small company should track",
          body: "Which indicators matter most when the team and the budget are small.",
        },
        {
          title: "What a data delivery is",
          body: "What's involved in receiving and validating a new dataset from a provider.",
        },
        {
          title: "How to evaluate scientific evidence",
          body: "How to tell solid evidence apart from preliminary evidence.",
        },
        {
          title: "Preclinical vs. clinical results",
          body: "What changes between a result obtained in the lab and one obtained in people.",
        },
      ],
    },
    faq: {
      kicker: "FREQUENTLY ASKED QUESTIONS",
      headline: "What people usually ask before getting started.",
      items: [
        {
          q: "What kind of company works with Therapeutics Data?",
          a: "We work with biotech companies and teams that need one-off or ongoing support in scientific research, data analysis, clinical studies, or documentation. The size of the organization isn't a requirement.",
        },
        {
          q: "Do I need to have a clinical trial underway?",
          a: "No. We also work with preclinical companies or those preparing their first study.",
        },
        {
          q: "Is Therapeutics Data a CRO?",
          a: "No. A contract research organization, known as a CRO, helps carry out various activities within a clinical trial. Therapeutics Data focuses on scientific analysis, data, clinical intelligence, and documentation.",
        },
        {
          q: "Do you use artificial intelligence?",
          a: "Yes, when it helps get work done more efficiently. Every analysis and document is reviewed before it's sent to the client.",
        },
        {
          q: "Can you take on a small project?",
          a: "Yes. Many projects are designed to start with a single question, a report, or a specific dataset.",
        },
        {
          q: "Can you work alongside our current CRO?",
          a: "Yes. Our work can complement the information you already receive from your CRO or other providers.",
        },
        {
          q: "Do you provide regulatory consulting?",
          a: "We can support research, analysis, and scientific writing related to regulatory documentation. When the work requires a specialized regulatory decision, we bring in professionals with specific expertise.",
        },
      ],
    },
    finalCta: {
      kicker: "TELL US THE PROBLEM",
      headline: "Start with the question that's eating up your team's time today.",
      body: "It could be an evidence review, a competitive analysis, a CRO report, a data delivery, or a scientific document. Tell us what you need to solve and we'll tell you if we can help and what the scope would look like.",
      cta: "Tell us about the project",
      secondary: "See services",
    },
    footer: {
      tagline: "Scientific, clinical, and data intelligence for biotech.",
      links: [
        { label: "Services", href: "#solutions" },
        { label: "How we work", href: "#how-it-works" },
        { label: "Resources", href: "#resources" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Contact", href: "mailto:info@therapeuticsdata.com" },
      ],
      copyright: "© 2026 Therapeutics Data. All rights reserved.",
    },
  },
};
