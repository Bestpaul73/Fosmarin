import { navigation } from './navigation';

export function normalizeText(value = '') {
  return String(value)
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();
}

function collectStrings(value) {
  if (typeof value === 'string') {
    return [value];
  }

  if (typeof value === 'number') {
    return [String(value)];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectStrings(item));
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap((item) => collectStrings(item));
  }

  return [];
}

function getPageContent(pagePath, translations) {
  switch (pagePath) {
    case '/about':
      return translations.about?.hero;

    case '/challenge':
      return translations.challenge?.hero;

    case '/use-cases':
      return translations.useCases?.hero;

    case '/technology':
      return translations.technology?.hero;

    case '/consortium':
      return translations.consortium?.hero;

    case '/news':
      return translations.news?.hero;

    case '/resources':
      return translations.resourcesPage?.hero;

    case '/contact':
      return translations.contact?.hero;

    default:
      return null;
  }
}

function getSectionContent(pagePath, sectionId, translations) {
  switch (pagePath) {
    case '/about': {
      const sectionMap = {
        'project-overview': translations.about?.overview,

        'mission-and-vision': translations.about?.missionVision,

        objectives: translations.about?.objectives,

        impact: translations.about?.impact,

        'eu-funding': translations.about?.euFunding,

        'consortium-at-a-glance': translations.about?.consortiumGlance,
      };

      return sectionMap[sectionId];
    }

    case '/challenge': {
      const sectionMap = {
        'threats-to-subsea-cables': translations.challenge?.threats,

        'global-context': translations.challenge?.globalContext,

        'current-gaps': translations.challenge?.gaps,

        'why-action-is-needed': translations.challenge?.action,

        'the-cost-of-inaction': translations.challenge?.cost,

        'policy-and-eu-actions': translations.challenge?.policy,
      };

      return sectionMap[sectionId];
    }

    case '/use-cases':
      return translations.useCases?.items?.[sectionId];

    case '/technology': {
      const sectionMap = {
        'fibre-optic-acoustic-sensing': translations.technology?.simpleWords,

        'how-it-works': translations.technology?.howItWorks,

        'using-dark-fibre-in-existing-cables': translations.technology?.darkFibre,

        'multi-parameter-monitoring': translations.technology?.multi,

        'predictive-analytics-and-ai': translations.technology?.predictive,

        'system-architecture-and-components': translations.technology?.architecture,

        'data-processing-and-algorithms': translations.technology?.processing,

        'integration-interoperability-and-security': translations.technology?.integration,
      };

      return sectionMap[sectionId];
    }

    case '/consortium': {
      const sectionMap = {
        partners: translations.consortium?.partners,

        'partner-map': translations.consortium?.partnerMap,

        'roles-and-contributions': translations.consortium?.roles,

        'advisory-board': translations.consortium?.advisory,

        'authorities-and-stakeholders': translations.consortium?.stakeholders,
      };

      return sectionMap[sectionId];
    }

    case '/news': {
      const sectionMap = {
        'latest-news': translations.home?.latestNews,

        events: translations.news?.events,

        'press-releases': translations.common?.underConstruction,

        'media-gallery': translations.common?.underConstruction,

        webinars: translations.common?.underConstruction,
      };

      return sectionMap[sectionId];
    }

    case '/resources': {
      if (sectionId === 'presentations') {
        return translations.resourcesPage?.presentations;
      }

      return translations.resourcesPage?.sections?.[sectionId];
    }

    case '/contact': {
      const sectionMap = {
        'contact-form': translations.contact?.form,

        'get-in-touch': translations.contact?.details,

        'social-media-links': translations.contact?.social,
      };

      return sectionMap[sectionId];
    }

    default:
      return null;
  }
}

function createSearchText(...values) {
  const strings = values.flatMap((value) => collectStrings(value));

  return normalizeText(strings.join(' '));
}

function createSearchFragments(value) {
  return collectStrings(value)
    .map((string) => string.trim())
    .filter(Boolean);
}

function createSnippet(fragment, matchIndex, queryLength) {
  const maxLength = 180;

  if (fragment.length <= maxLength) {
    return fragment;
  }

  const contextBefore = 70;

  let start = Math.max(0, matchIndex - contextBefore);

  let end = Math.min(fragment.length, start + maxLength);

  if (end === fragment.length) {
    start = Math.max(0, end - maxLength);
  }

  if (matchIndex + queryLength > end) {
    end = Math.min(fragment.length, matchIndex + queryLength + 70);

    start = Math.max(0, end - maxLength);
  }

  let snippet = fragment.slice(start, end);

  if (start > 0) {
    const firstSpace = snippet.indexOf(' ');

    if (firstSpace !== -1) {
      snippet = snippet.slice(firstSpace + 1);
    }

    snippet = `...${snippet}`;
  }

  if (end < fragment.length) {
    const lastSpace = snippet.lastIndexOf(' ');

    if (lastSpace !== -1) {
      snippet = snippet.slice(0, lastSpace);
    }

    snippet = `${snippet}...`;
  }

  return snippet;
}

export function getResultSnippets(item, normalizedQuery, maxSnippets = 3) {
  if (!normalizedQuery) {
    return [];
  }

  const snippets = [];

  const seenSnippets = new Set();

  for (const fragment of item.searchFragments) {
    const normalizedFragment = normalizeText(fragment);

    let searchFrom = 0;

    while (searchFrom < normalizedFragment.length) {
      const matchIndex = normalizedFragment.indexOf(normalizedQuery, searchFrom);

      if (matchIndex === -1) {
        break;
      }

      const snippet = createSnippet(fragment, matchIndex, normalizedQuery.length);

      const normalizedSnippet = normalizeText(snippet);

      if (!seenSnippets.has(normalizedSnippet)) {
        snippets.push(snippet);

        seenSnippets.add(normalizedSnippet);
      }

      if (snippets.length >= maxSnippets) {
        return snippets;
      }

      searchFrom = matchIndex + normalizedQuery.length;
    }
  }

  return snippets;
}

export function buildSearchItems(translations, getLocalizedPath) {
  return navigation.flatMap((page) => {
    const translatedPage = translations.navigation?.[page.path];

    const pageTitle = translatedPage?.title ?? page.title;

    const pageContent = getPageContent(page.path, translations);

    const pageItem = {
      id: `page-${page.path}`,
      type: 'page',
      title: pageTitle,
      parentTitle: '',
      path: getLocalizedPath(page.path),

      searchText: createSearchText(pageTitle, pageContent),

      searchFragments: createSearchFragments(pageContent),
    };

    const sectionItems = page.sections.map((section) => {
      const sectionTitle = translatedPage?.sections?.[section.id] ?? section.title;

      const sectionContent = getSectionContent(page.path, section.id, translations);

      return {
        id: `section-${page.path}-${section.id}`,

        type: 'section',

        title: sectionTitle,

        parentTitle: pageTitle,

        path: getLocalizedPath(`${page.path}#${section.id}`),

        searchText: createSearchText(pageTitle, sectionTitle, sectionContent),

        searchFragments: createSearchFragments(sectionContent),
      };
    });

    return [pageItem, ...sectionItems];
  });
}
