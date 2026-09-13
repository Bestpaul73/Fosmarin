import PageHero from '../components/PageHero';
import ThreatsToSubseaCables from '../components/ThreatsToSubseaCables';
import WhyItMatters from '../components/WhyItMatters';
import CurrentGaps from '../components/CurrentGaps';
import WhyActionNeeded from '../components/WhyActionNeeded';
import CostOfInaction from '../components/CostOfInaction';
import PolicyEUActions from '../components/PolicyEUActions';

function Challenge({ page }) {
  return (
    <>
      <PageHero
        eyebrow='The Challenge'
        title='Europe’s subsea infrastructure is critical — and increasingly exposed.'
        intro='Subsea data, power and pipeline infrastructure faces accidental damage, deliberate interference and geological hazards. Disruptions can interrupt essential services, while repairs can be costly and slow — making continuous monitoring and early warning increasingly important.'
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'threats-to-subsea-cables':
            return <ThreatsToSubseaCables id={section.id} key={section.id} />;

          case 'global-context':
            return <WhyItMatters id={section.id} key={section.id} />;

          case 'current-gaps':
            return <CurrentGaps id={section.id} key={section.id} />;

          case 'why-action-is-needed':
            return <WhyActionNeeded id={section.id} key={section.id} />;

          case 'the-cost-of-inaction':
            return <CostOfInaction id={section.id} key={section.id} />;

          case 'policy-and-eu-actions':
            return <PolicyEUActions id={section.id} key={section.id} />;

          default:
            return null;
        }
      })}
    </>
  );
}

export default Challenge;
