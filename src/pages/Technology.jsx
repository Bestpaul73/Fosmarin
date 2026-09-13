import PageHero from '../components/PageHero';
import SimpleWords from '../components/SimpleWords';
import HowItWorks from '../components/HowItWorks';

function Technology({ page }) {
  return (
    <>
      <PageHero
        eyebrow='Technology'
        title='Turning existing fibre into a continuous sensing network.'
        intro='Fibre Optic Acoustic Sensing (FOAS) uses laser pulses and backscattered light to detect tiny vibrations along existing fibre-optic cables. FOSMARIN combines these signals with predictive analytics and external data to identify critical events and support real-time situational awareness.'
      />

      {page.sections.map((section) => {
        if (
          section.id ===
          'fibre-optic-acoustic-sensing'
        ) {
          return (
            <div
              id={section.id}
              key={section.id}
            >
              <SimpleWords />
            </div>
          );
        }

        if (section.id === 'how-it-works') {
          return (
            <div
              id={section.id}
              key={section.id}
            >
              <HowItWorks />
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

export default Technology;