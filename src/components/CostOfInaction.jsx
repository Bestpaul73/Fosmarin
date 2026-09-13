import Reveal from './Reveal';
import '../styles/challenge-sections.scss';

const costScenarios = [
  {
    type: 'Power cables',
    facts: [
      {
        value: '€10M–€100M',
        label: 'Typical repair cost',
      },
      {
        value: '≈50 days',
        label: 'Repair time',
      },
      {
        value: '€250M',
        label: 'Estimated total outage cost',
      },
    ],
  },
  {
    type: 'Telecommunication cables',
    facts: [
      {
        value: '≈15 days',
        label: 'Repair time',
      },
      {
        value: '€500M',
        label: 'Estimated total outage cost',
      },
    ],
  },
  {
    type: 'Pipelines',
    facts: [
      {
        value: '≈6 months',
        label: 'Repair time',
      },
      {
        value: '€10B',
        label: 'Estimated total outage cost',
      },
    ],
  },
];

function CostOfInaction({ id }) {
  return (
    <section className='challenge-section challenge-cost' id={id} aria-labelledby='cost-of-inaction-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>The cost of inaction</p>

          <h2 id='cost-of-inaction-title'>A single incident can mean weeks of repair and major economic loss.</h2>

          <p className='challenge-section-intro'>
            Damage to subsea infrastructure is not only a technical problem. Repairs can take weeks or months, while the
            wider cost of an outage can greatly exceed the physical repair itself.
          </p>
        </Reveal>

        <Reveal className='cost-grid'>
          {costScenarios.map((scenario) => (
            <article className='cost-card' key={scenario.type}>
              <h3>{scenario.type}</h3>

              <dl>
                {scenario.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </Reveal>

        <Reveal className='challenge-source-note challenge-source-note--cost'>
          <span>Source note</span>

          <p>
            Figures are reproduced from the client&apos;s FOSMARIN website content draft, which cites the International
            Cable Protection Committee for submarine cable repair estimates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default CostOfInaction;
