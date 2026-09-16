import PageHero from '../components/PageHero';
import SimpleWords from '../components/SimpleWords';
import HowItWorks from '../components/HowItWorks';
import UsingDarkFibre from '../components/UsingDarkFibre';
import MultiParameterMonitoring from '../components/MultiParameterMonitoring';
import PredictiveAnalytics from '../components/PredictiveAnalytics';
import SystemArchitecture from '../components/SystemArchitecture';
import DataProcessingAlgorithms from '../components/DataProcessingAlgorithms';
import IntegrationSecurity from '../components/IntegrationSecurity';

import { useLanguage } from '../i18n/LanguageContext';

function Technology({ page }) {
  const { translations } = useLanguage();
  const technology = translations.technology;

  return (
    <>
      <PageHero
        eyebrow={technology.hero.eyebrow}
        title={technology.hero.title}
        intro={technology.hero.intro}
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'fibre-optic-acoustic-sensing':
            return <SimpleWords id={section.id} key={section.id} />;
          case 'how-it-works':
            return <HowItWorks id={section.id} key={section.id} />;
          case 'using-dark-fibre-in-existing-cables':
            return <UsingDarkFibre id={section.id} key={section.id} />;
          case 'multi-parameter-monitoring':
            return <MultiParameterMonitoring id={section.id} key={section.id} />;
          case 'predictive-analytics-and-ai':
            return <PredictiveAnalytics id={section.id} key={section.id} />;
          case 'system-architecture-and-components':
            return <SystemArchitecture id={section.id} key={section.id} />;
          case 'data-processing-and-algorithms':
            return <DataProcessingAlgorithms id={section.id} key={section.id} />;
          case 'integration-interoperability-and-security':
            return <IntegrationSecurity id={section.id} key={section.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export default Technology;
