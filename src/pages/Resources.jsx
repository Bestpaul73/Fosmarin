import PageHero from '../components/PageHero';
import ResourceSection from '../components/ResourceSection';
import PresentationsSection from '../components/PresentationsSection';

import { resourceContent } from '../data/resources';

import '../styles/resources-page.scss';

function Resources({ page }) {
  return (
    <>
      <PageHero
        eyebrow='Resources'
        title='Project knowledge, outputs and public material.'
        intro='Access FOSMARIN publications, deliverables, reports, presentations and communication material as they become available throughout the project.'
      />

      {page.sections.map((section) => {
        if (section.id === 'presentations') {
          return <PresentationsSection id={section.id} key={section.id} />;
        }

        const content = resourceContent[section.id];

        return (
          <ResourceSection
            id={section.id}
            key={section.id}
            title={section.title}
            intro={content?.intro}
            underConstruction
          />
        );
      })}
    </>
  );
}

export default Resources;
