import PageHero from '../components/PageHero';
import ResourceSection from '../components/ResourceSection';
import PresentationsSection from '../components/PresentationsSection';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/resources-page.scss';

function Resources({ page }) {
  const { translations } = useLanguage();
  const resources = translations.resourcesPage;
  const navSections = translations.navigation['/resources'].sections;

  return (
    <>
      <PageHero
        eyebrow={resources.hero.eyebrow}
        title={resources.hero.title}
        intro={resources.hero.intro}
      />

      {page.sections.map((section) => {
        if (section.id === 'presentations') {
          return <PresentationsSection id={section.id} key={section.id} />;
        }

        return (
          <ResourceSection
            id={section.id}
            key={section.id}
            title={navSections[section.id]}
            intro={resources.sections[section.id]?.intro}
            underConstruction
          />
        );
      })}
    </>
  );
}

export default Resources;
