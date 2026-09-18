import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../i18n/LanguageContext';

import { languages, localizePath, stripLanguagePrefix } from '../i18n/languages';

const SITE_NAME = 'FOSMARIN';

const SEO = {
  '/': {
    en: {
      title: 'FOSMARIN | Resilient Subsea Infrastructure Monitoring',
      description:
        'FOSMARIN develops Fibre Optic Acoustic Sensing, AI and predictive monitoring technologies to improve the resilience of subsea critical infrastructure.',
    },
    de: {
      title: 'FOSMARIN | Resiliente Überwachung maritimer Infrastruktur',
      description:
        'FOSMARIN entwickelt Fibre Optic Acoustic Sensing, KI und vorausschauende Überwachung für eine widerstandsfähigere kritische Unterwasserinfrastruktur.',
    },
    es: {
      title: 'FOSMARIN | Monitorización resiliente de infraestructuras submarinas',
      description:
        'FOSMARIN desarrolla Fibre Optic Acoustic Sensing, IA y monitorización predictiva para mejorar la resiliencia de las infraestructuras submarinas críticas.',
    },
    da: {
      title: 'FOSMARIN | Robust overvågning af undersøisk infrastruktur',
      description:
        'FOSMARIN udvikler Fibre Optic Acoustic Sensing, AI og prædiktiv overvågning for at styrke robustheden af kritisk undersøisk infrastruktur.',
    },
    sv: {
      title: 'FOSMARIN | Robust övervakning av undervattensinfrastruktur',
      description:
        'FOSMARIN utvecklar Fibre Optic Acoustic Sensing, AI och prediktiv övervakning för att stärka motståndskraften hos kritisk undervattensinfrastruktur.',
    },
    el: {
      title: 'FOSMARIN | Ανθεκτική παρακολούθηση υποθαλάσσιων υποδομών',
      description:
        'Το FOSMARIN αναπτύσσει Fibre Optic Acoustic Sensing, ΤΝ και προγνωστική παρακολούθηση για την ενίσχυση της ανθεκτικότητας κρίσιμων υποθαλάσσιων υποδομών.',
    },
    it: {
      title: 'FOSMARIN | Monitoraggio resiliente delle infrastrutture sottomarine',
      description:
        'FOSMARIN sviluppa Fibre Optic Acoustic Sensing, IA e monitoraggio predittivo per migliorare la resilienza delle infrastrutture sottomarine critiche.',
    },
  },

  '/about': {
    en: {
      title: 'About FOSMARIN | Mission, Objectives and Impact',
      description:
        'Learn about the FOSMARIN project, its mission, objectives, expected impact, EU funding and European consortium.',
    },
    de: {
      title: 'Über FOSMARIN | Mission, Ziele und Wirkung',
      description:
        'Erfahren Sie mehr über das FOSMARIN-Projekt, seine Mission, Ziele, erwartete Wirkung, EU-Förderung und das europäische Konsortium.',
    },
    es: {
      title: 'Sobre FOSMARIN | Misión, objetivos e impacto',
      description:
        'Conozca el proyecto FOSMARIN, su misión, objetivos, impacto previsto, financiación de la UE y consorcio europeo.',
    },
    da: {
      title: 'Om FOSMARIN | Mission, mål og effekt',
      description:
        'Læs om FOSMARIN-projektet, dets mission, mål, forventede effekt, EU-finansiering og europæiske konsortium.',
    },
    sv: {
      title: 'Om FOSMARIN | Mission, mål och effekt',
      description:
        'Läs om FOSMARIN-projektet, dess mission, mål, förväntade effekt, EU-finansiering och europeiska konsortium.',
    },
    el: {
      title: 'Σχετικά με το FOSMARIN | Αποστολή, στόχοι και αντίκτυπος',
      description:
        'Μάθετε για το έργο FOSMARIN, την αποστολή, τους στόχους, τον αναμενόμενο αντίκτυπο, τη χρηματοδότηση της ΕΕ και το ευρωπαϊκό κονσόρτσιουμ.',
    },
    it: {
      title: 'Informazioni su FOSMARIN | Missione, obiettivi e impatto',
      description:
        'Scopri il progetto FOSMARIN, la sua missione, gli obiettivi, l’impatto previsto, il finanziamento UE e il consorzio europeo.',
    },
  },

  '/challenge': {
    en: {
      title: 'The Challenge | Protecting Subsea Cables | FOSMARIN',
      description:
        'Explore the threats facing subsea cables, current monitoring gaps, the cost of disruption and the need for more predictive infrastructure protection.',
    },
    de: {
      title: 'Die Herausforderung | Schutz von Unterseekabeln | FOSMARIN',
      description:
        'Erfahren Sie mehr über Risiken für Unterseekabel, bestehende Überwachungslücken, Ausfallkosten und den Bedarf an vorausschauendem Schutz.',
    },
    es: {
      title: 'El desafío | Protección de cables submarinos | FOSMARIN',
      description:
        'Conozca las amenazas a los cables submarinos, las limitaciones actuales de vigilancia, los costes de las interrupciones y la necesidad de protección predictiva.',
    },
    da: {
      title: 'Udfordringen | Beskyttelse af undersøiske kabler | FOSMARIN',
      description:
        'Udforsk trusler mod undersøiske kabler, nuværende overvågningsmangler, omkostninger ved afbrydelser og behovet for mere prædiktiv beskyttelse.',
    },
    sv: {
      title: 'Utmaningen | Skydd av undervattenskablar | FOSMARIN',
      description:
        'Utforska hot mot undervattenskablar, nuvarande övervakningsbrister, kostnader för avbrott och behovet av mer prediktivt skydd.',
    },
    el: {
      title: 'Η πρόκληση | Προστασία υποθαλάσσιων καλωδίων | FOSMARIN',
      description:
        'Εξερευνήστε τις απειλές για τα υποθαλάσσια καλώδια, τα υφιστάμενα κενά παρακολούθησης, το κόστος των διακοπών και την ανάγκη για πιο προγνωστική προστασία.',
    },
    it: {
      title: 'La sfida | Protezione dei cavi sottomarini | FOSMARIN',
      description:
        'Esplora le minacce ai cavi sottomarini, le lacune attuali nel monitoraggio, i costi delle interruzioni e la necessità di una protezione più predittiva.',
    },
  },

  '/use-cases': {
    en: {
      title: 'Use Cases | Subsea Infrastructure Monitoring | FOSMARIN',
      description:
        'Explore FOSMARIN use cases for telecom and power cables, offshore wind, pipelines, ports, shallow waters and maritime safety.',
    },
    de: {
      title: 'Anwendungsfälle | Überwachung maritimer Infrastruktur | FOSMARIN',
      description:
        'Entdecken Sie FOSMARIN-Anwendungen für Telekommunikations- und Stromkabel, Offshore-Wind, Pipelines, Häfen und maritime Sicherheit.',
    },
    es: {
      title: 'Casos de uso | Monitorización de infraestructuras submarinas | FOSMARIN',
      description:
        'Explore aplicaciones de FOSMARIN para cables de telecomunicaciones y energía, eólica marina, tuberías, puertos y seguridad marítima.',
    },
    da: {
      title: 'Anvendelsesscenarier | Overvågning af undersøisk infrastruktur | FOSMARIN',
      description:
        'Udforsk FOSMARIN-anvendelser for telekommunikations- og elkabler, havvind, rørledninger, havne, lavt vand og maritim sikkerhed.',
    },
    sv: {
      title: 'Användningsfall | Övervakning av undervattensinfrastruktur | FOSMARIN',
      description:
        'Utforska FOSMARIN-användningar för telekommunikations- och elkablar, havsbaserad vindkraft, rörledningar, hamnar, grunt vatten och maritim säkerhet.',
    },
    el: {
      title: 'Περιπτώσεις χρήσης | Παρακολούθηση υποθαλάσσιων υποδομών | FOSMARIN',
      description:
        'Εξερευνήστε εφαρμογές FOSMARIN για τηλεπικοινωνιακά και ηλεκτρικά καλώδια, υπεράκτια αιολικά, αγωγούς, λιμένες, ρηχά ύδατα και θαλάσσια ασφάλεια.',
    },
    it: {
      title: 'Casi d’uso | Monitoraggio delle infrastrutture sottomarine | FOSMARIN',
      description:
        'Esplora i casi d’uso FOSMARIN per cavi di telecomunicazione ed energia, eolico offshore, condotte, porti, acque basse e sicurezza marittima.',
    },
  },

  '/technology': {
    en: {
      title: 'Technology | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Discover how FOSMARIN combines Fibre Optic Acoustic Sensing, dark fibre, multi-parameter monitoring, AI and predictive analytics.',
    },
    de: {
      title: 'Technologie | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Entdecken Sie, wie FOSMARIN Fibre Optic Acoustic Sensing, unbeschaltete Glasfasern, Multi-Parameter-Monitoring, KI und prädiktive Analytik kombiniert.',
    },
    es: {
      title: 'Tecnología | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Descubra cómo FOSMARIN combina Fibre Optic Acoustic Sensing, fibra oscura, monitorización multiparámetro, IA y análisis predictivo.',
    },
    da: {
      title: 'Teknologi | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Se hvordan FOSMARIN kombinerer Fibre Optic Acoustic Sensing, mørk fiber, multiparameter-overvågning, AI og prædiktiv analyse.',
    },
    sv: {
      title: 'Teknik | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Se hur FOSMARIN kombinerar Fibre Optic Acoustic Sensing, mörk fiber, flerparameterövervakning, AI och prediktiv analys.',
    },
    el: {
      title: 'Τεχνολογία | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Δείτε πώς το FOSMARIN συνδυάζει Fibre Optic Acoustic Sensing, σκοτεινή ίνα, παρακολούθηση πολλαπλών παραμέτρων, ΤΝ και προγνωστική ανάλυση.',
    },
    it: {
      title: 'Tecnologia | Fibre Optic Acoustic Sensing | FOSMARIN',
      description:
        'Scopri come FOSMARIN combina Fibre Optic Acoustic Sensing, fibra spenta, monitoraggio multiparametrico, IA e analisi predittiva.',
    },
  },

  '/consortium': {
    en: {
      title: 'Consortium | FOSMARIN Partners Across Europe',
      description:
        'Meet the FOSMARIN consortium bringing together technology providers, researchers, infrastructure operators and public authorities across Europe.',
    },
    de: {
      title: 'Konsortium | FOSMARIN-Partner in Europa',
      description:
        'Lernen Sie das FOSMARIN-Konsortium aus Technologieanbietern, Forschungseinrichtungen, Infrastrukturbetreibern und Behörden in Europa kennen.',
    },
    es: {
      title: 'Consorcio | Socios de FOSMARIN en Europa',
      description:
        'Conozca el consorcio FOSMARIN, que reúne proveedores tecnológicos, investigadores, operadores de infraestructuras y autoridades públicas europeas.',
    },
    da: {
      title: 'Konsortium | FOSMARIN-partnere i Europa',
      description:
        'Mød FOSMARIN-konsortiet, som samler teknologileverandører, forskere, infrastrukturoperatører og offentlige myndigheder i hele Europa.',
    },
    sv: {
      title: 'Konsortium | FOSMARIN-partner i Europa',
      description:
        'Möt FOSMARIN-konsortiet som samlar teknikleverantörer, forskare, infrastrukturoperatörer och offentliga myndigheter i hela Europa.',
    },
    el: {
      title: 'Κονσόρτσιουμ | Εταίροι FOSMARIN στην Ευρώπη',
      description:
        'Γνωρίστε το κονσόρτσιουμ FOSMARIN που συγκεντρώνει παρόχους τεχνολογίας, ερευνητές, φορείς υποδομών και δημόσιες αρχές σε όλη την Ευρώπη.',
    },
    it: {
      title: 'Consorzio | Partner FOSMARIN in Europa',
      description:
        'Scopri il consorzio FOSMARIN che riunisce fornitori di tecnologia, ricercatori, operatori di infrastrutture e autorità pubbliche in tutta Europa.',
    },
  },

  '/news': {
    en: {
      title: 'News & Events | FOSMARIN',
      description:
        'Follow FOSMARIN news, events, press releases, webinars and project updates on resilient subsea infrastructure monitoring.',
    },
    de: {
      title: 'Neuigkeiten & Veranstaltungen | FOSMARIN',
      description:
        'Verfolgen Sie Neuigkeiten, Veranstaltungen, Pressemitteilungen, Webinare und Projektupdates von FOSMARIN.',
    },
    es: {
      title: 'Noticias y eventos | FOSMARIN',
      description:
        'Siga las noticias, eventos, comunicados de prensa, seminarios web y novedades del proyecto FOSMARIN.',
    },
    da: {
      title: 'Nyheder og begivenheder | FOSMARIN',
      description:
        'Følg FOSMARIN-nyheder, begivenheder, pressemeddelelser, webinarer og projektopdateringer om robust overvågning af undersøisk infrastruktur.',
    },
    sv: {
      title: 'Nyheter och evenemang | FOSMARIN',
      description:
        'Följ FOSMARIN-nyheter, evenemang, pressmeddelanden, webbinarier och projektuppdateringar om robust övervakning av undervattensinfrastruktur.',
    },
    el: {
      title: 'Νέα και εκδηλώσεις | FOSMARIN',
      description:
        'Παρακολουθήστε νέα, εκδηλώσεις, δελτία Τύπου, διαδικτυακά σεμινάρια και ενημερώσεις του FOSMARIN για ανθεκτική παρακολούθηση υποθαλάσσιων υποδομών.',
    },
    it: {
      title: 'Notizie ed eventi | FOSMARIN',
      description:
        'Segui notizie, eventi, comunicati stampa, webinar e aggiornamenti FOSMARIN sul monitoraggio resiliente delle infrastrutture sottomarine.',
    },
  },

  '/resources': {
    en: {
      title: 'Resources | Publications and Project Materials | FOSMARIN',
      description:
        'Access FOSMARIN publications, deliverables, reports, presentations, videos, brochures, newsletters and project resources.',
    },
    de: {
      title: 'Ressourcen | Publikationen und Projektmaterialien | FOSMARIN',
      description:
        'Finden Sie FOSMARIN-Publikationen, Berichte, Präsentationen, Videos, Broschüren, Newsletter und weitere Projektressourcen.',
    },
    es: {
      title: 'Recursos | Publicaciones y materiales del proyecto | FOSMARIN',
      description:
        'Acceda a publicaciones, entregables, informes, presentaciones, vídeos, folletos, boletines y otros recursos de FOSMARIN.',
    },
    da: {
      title: 'Ressourcer | Publikationer og projektmateriale | FOSMARIN',
      description:
        'Få adgang til FOSMARIN-publikationer, leverancer, rapporter, præsentationer, videoer, brochurer, nyhedsbreve og andre projektressourcer.',
    },
    sv: {
      title: 'Resurser | Publikationer och projektmaterial | FOSMARIN',
      description:
        'Ta del av FOSMARIN-publikationer, leveranser, rapporter, presentationer, videor, broschyrer, nyhetsbrev och andra projektresurser.',
    },
    el: {
      title: 'Πόροι | Δημοσιεύσεις και υλικό έργου | FOSMARIN',
      description:
        'Αποκτήστε πρόσβαση σε δημοσιεύσεις, παραδοτέα, αναφορές, παρουσιάσεις, βίντεο, φυλλάδια, ενημερωτικά δελτία και άλλους πόρους του FOSMARIN.',
    },
    it: {
      title: 'Risorse | Pubblicazioni e materiali del progetto | FOSMARIN',
      description:
        'Accedi a pubblicazioni, deliverable, rapporti, presentazioni, video, brochure, newsletter e altre risorse del progetto FOSMARIN.',
    },
  },

  '/contact': {
    en: {
      title: 'Contact FOSMARIN',
      description:
        'Contact the FOSMARIN consortium about the project, collaboration, research, pilot activities, events and project information.',
    },
    de: {
      title: 'Kontakt | FOSMARIN',
      description:
        'Kontaktieren Sie das FOSMARIN-Konsortium zu Projektinformationen, Zusammenarbeit, Forschung, Pilotaktivitäten und Veranstaltungen.',
    },
    es: {
      title: 'Contacto | FOSMARIN',
      description:
        'Contacte con el consorcio FOSMARIN para obtener información sobre el proyecto, colaboración, investigación, pilotos y eventos.',
    },
    da: {
      title: 'Kontakt | FOSMARIN',
      description:
        'Kontakt FOSMARIN-konsortiet om projektet, samarbejde, forskning, pilotaktiviteter, begivenheder og projektinformation.',
    },
    sv: {
      title: 'Kontakt | FOSMARIN',
      description:
        'Kontakta FOSMARIN-konsortiet om projektet, samarbete, forskning, pilotaktiviteter, evenemang och projektinformation.',
    },
    el: {
      title: 'Επικοινωνία | FOSMARIN',
      description:
        'Επικοινωνήστε με το κονσόρτσιουμ FOSMARIN για το έργο, συνεργασίες, έρευνα, πιλοτικές δραστηριότητες, εκδηλώσεις και πληροφορίες έργου.',
    },
    it: {
      title: 'Contatti | FOSMARIN',
      description:
        'Contatta il consorzio FOSMARIN per informazioni sul progetto, collaborazione, ricerca, attività pilota ed eventi.',
    },
  },
};

const OG_LOCALES = {
  en: 'en_GB',
  de: 'de_DE',
  es: 'es_ES',
  da: 'da_DK',
  sv: 'sv_SE',
  el: 'el_GR',
  it: 'it_IT',
};

function normalizePath(pathname) {
  const basePath = stripLanguagePrefix(pathname);

  if (basePath !== '/' && basePath.endsWith('/')) {
    return basePath.slice(0, -1);
  }

  return basePath;
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');

    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  element.setAttribute('data-fosmarin-seo', 'true');
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');

    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  element.setAttribute('data-fosmarin-seo', 'true');
}

function Seo() {
  const location = useLocation();

  const { language } = useLanguage();

  useEffect(() => {
    const path = normalizePath(location.pathname);

    const pageSeo = SEO[path] ?? SEO['/'];

    const content = pageSeo[language] ?? pageSeo.en;

    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, '');

    const canonicalPath = localizePath(path, language);

    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = content.title;

    setMeta('meta[name="description"]', {
      name: 'description',
      content: content.description,
    });

    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: content.title,
    });

    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: content.description,
    });

    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    setMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    });

    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    setMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: OG_LOCALES[language] ?? OG_LOCALES.en,
    });

    setLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    document.head.querySelectorAll('link[rel="alternate"][data-fosmarin-hreflang="true"]').forEach((element) => {
      element.remove();
    });

    languages.forEach(({ code }) => {
      const alternate = document.createElement('link');

      alternate.setAttribute('rel', 'alternate');

      alternate.setAttribute('hreflang', code);

      alternate.setAttribute('href', `${siteUrl}${localizePath(path, code)}`);

      alternate.setAttribute('data-fosmarin-hreflang', 'true');

      document.head.appendChild(alternate);
    });

    const xDefault = document.createElement('link');

    xDefault.setAttribute('rel', 'alternate');

    xDefault.setAttribute('hreflang', 'x-default');

    xDefault.setAttribute('href', `${siteUrl}${localizePath(path, 'en')}`);

    xDefault.setAttribute('data-fosmarin-hreflang', 'true');

    document.head.appendChild(xDefault);
  }, [language, location.pathname]);

  return null;
}

export default Seo;
