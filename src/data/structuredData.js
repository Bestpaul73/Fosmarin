// One graph connects the project, its website and the current localized page.
// URLs come from the same production origin and canonical URL as Seo.jsx.
export function buildStructuredData({
  siteUrl, canonicalUrl, path, language, title, description,
  projectDescription, languageCodes, isKnownPage,
}) {
  if (!isKnownPage) return null;

  const homeUrl = `${siteUrl}/`;
  const projectId = `${homeUrl}#project`;
  const websiteId = `${homeUrl}#website`;
  const pageType = path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ResearchProject',
        '@id': projectId,
        name: 'FOSMARIN',
        url: homeUrl,
        description: projectDescription,
        // Published in the site's funding section and footer.
        identifier: '101309039',
        email: 'info@fosmarin.eu',
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'FOSMARIN',
        url: homeUrl,
        inLanguage: languageCodes,
        about: { '@id': projectId },
        publisher: { '@id': projectId },
      },
      {
        '@type': pageType,
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: language,
        isPartOf: { '@id': websiteId },
        about: { '@id': projectId },
      },
    ],
  };
}
