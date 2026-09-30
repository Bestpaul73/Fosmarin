import PageHero from '../components/PageHero';
import UseCaseSection from '../components/UseCaseSection';

import { useLanguage } from '../i18n/LanguageContext';

import scheme1 from '../assets/scheme1.jpg';

import '../styles/use-cases.scss';

function UseCases({ page }) {
  const { translations } = useLanguage();
  const useCases = translations.useCases;

  return (
    <>
      <PageHero
        eyebrow={useCases.hero.eyebrow}
        title={useCases.hero.title}
        intro={useCases.hero.intro}
      />

      <section className='use-cases-scheme'>
        <div className='use-cases-scheme-inner'>
          <img
            src={scheme1}
            alt={useCases.schemeAlt}
          />
        </div>
      </section>

      {page.sections.map((section, index) => {
        const useCase = useCases.items[section.id];

        if (!useCase) {
          return null;
        }

        return (
          <UseCaseSection
            id={section.id}
            key={section.id}
            useCase={useCase}
            reverse={index % 2 !== 0}
          />
        );
      })}
    </>
  );
}

export default UseCases;
