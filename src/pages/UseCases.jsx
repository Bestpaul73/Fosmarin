import PageHero from '../components/PageHero';
import UseCaseSection from '../components/UseCaseSection';

import { useCases } from '../data/useCases';

import '../styles/use-cases.scss';

function UseCases({ page }) {
  return (
    <>
      <PageHero
        eyebrow='Use Cases'
        title='From subsea cables to offshore infrastructure.'
        intro='FOSMARIN explores how Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data can strengthen situational awareness around different forms of critical maritime and subsea infrastructure.'
      />

      {page.sections.map((section, index) => {
        const useCase = useCases[section.id];

        if (!useCase) {
          return null;
        }

        return <UseCaseSection id={section.id} key={section.id} useCase={useCase} reverse={index % 2 !== 0} />;
      })}
    </>
  );
}

export default UseCases;
