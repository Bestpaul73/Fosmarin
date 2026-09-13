import PageHero from '../components/PageHero';
import WhyItMatters from '../components/WhyItMatters';

function Challenge({ page }) {
  return (
    <>
      <PageHero
        eyebrow='The Challenge'
        title='Europe’s subsea infrastructure is critical — and increasingly exposed.'
        intro='Subsea data, power and pipeline infrastructure faces accidental damage, deliberate interference and geological hazards. Disruptions can interrupt essential services, while repairs can be costly and slow — making continuous monitoring and early warning increasingly important.'
      />

      {page.sections.map((section) => {
        if (section.id === 'global-context') {
          return (
            <div
              id={section.id}
              key={section.id}
            >
              <WhyItMatters />
            </div>
          );
        }

        return (
          <section
            key={section.id}
            id={section.id}
          >
            <h2>{section.title}</h2>

            <p>Content coming soon.</p>
          </section>
        );
      })}
    </>
  );
}

export default Challenge;