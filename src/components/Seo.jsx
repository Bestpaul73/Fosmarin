import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../i18n/LanguageContext';

import { localizePath, stripLanguagePrefix } from '../i18n/languages';

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
  },
};

const OG_LOCALES = {
  en: 'en_GB',
  de: 'de_DE',
  es: 'es_ES',
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
      content: OG_LOCALES[language],
    });

    setLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    document.head.querySelectorAll('link[rel="alternate"][data-fosmarin-hreflang="true"]').forEach((element) => {
      element.remove();
    });

    ['en', 'de', 'es'].forEach((languageCode) => {
      const alternate = document.createElement('link');

      alternate.setAttribute('rel', 'alternate');

      alternate.setAttribute('hreflang', languageCode);

      alternate.setAttribute('href', `${siteUrl}${localizePath(path, languageCode)}`);

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
