import PageHero from '../components/PageHero';
import PartnersSection from '../components/PartnersSection';
import PartnerMap from '../components/PartnerMap';
import RolesContributions from '../components/RolesContributions';
import AdvisoryBoard from '../components/AdvisoryBoard';
import AuthoritiesStakeholders from '../components/AuthoritiesStakeholders';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/consortium-page.scss';

function Consortium({ page }) {
  const { translations } = useLanguage();
  const consortium = translations.consortium;

  return (
    <>
      <PageHero
        eyebrow={consortium.hero.eyebrow}
        title={consortium.hero.title}
        intro={consortium.hero.intro}
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'partners':
            return <PartnersSection id={section.id} key={section.id} />;
          case 'partner-map':
            return <PartnerMap id={section.id} key={section.id} />;
          case 'roles-and-contributions':
            return <RolesContributions id={section.id} key={section.id} />;
          case 'advisory-board':
            return <AdvisoryBoard id={section.id} key={section.id} />;
          case 'authorities-and-stakeholders':
            return <AuthoritiesStakeholders id={section.id} key={section.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export default Consortium;
