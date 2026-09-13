import PageHero from '../components/PageHero';
import PartnersSection from '../components/PartnersSection';
import PartnerMap from '../components/PartnerMap';
import RolesContributions from '../components/RolesContributions';
import AdvisoryBoard from '../components/AdvisoryBoard';
import AuthoritiesStakeholders from '../components/AuthoritiesStakeholders';

import '../styles/consortium-page.scss';

function Consortium({ page }) {
  return (
    <>
      <PageHero
        eyebrow='Consortium'
        title='European expertise across sensing, research, infrastructure and maritime security.'
        intro='FOSMARIN brings together 13 organisations from eight countries, combining fibre-optic technology, data science, system integration, infrastructure operation, research, training and public-authority expertise.'
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
