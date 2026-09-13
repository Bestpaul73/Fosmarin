import Reveal from './Reveal';
import '../styles/challenge-sections.scss';

const policyItems = [
  {
    year: '2022',
    type: 'EU analysis',
    title: 'Security threats to undersea communications cables and infrastructure',
    reference: 'PE 702.557 · June 2022',
    text: 'An in-depth analysis from the Directorate General for External Policies of the Union identifying natural and human-made, accidental and intentional threats to undersea infrastructure.',
  },
  {
    year: '2024',
    type: 'Commission Recommendation',
    title: 'Secure and Resilient Submarine Cable Infrastructure',
    reference: '26 February 2024',
    text: 'Calls for stronger protection of submarine cable infrastructure, including the investigation and use of measures for detecting and preventing threats.',
  },
  {
    year: '2025',
    type: 'EU Action Plan',
    title: 'Action Plan on Cable Security',
    reference: '21 February 2025',
    text: 'Further strengthens the European approach to reducing disruptive incidents and increasing resilience against malicious activity.',
  },
];

function PolicyEUActions({ id }) {
  return (
    <section className='challenge-section challenge-policy' id={id} aria-labelledby='policy-eu-actions-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>Policy & EU actions</p>

          <h2 id='policy-eu-actions-title'>Subsea infrastructure protection is already a European policy priority.</h2>

          <p className='challenge-section-intro'>
            European policy has increasingly recognised the need to understand threats, strengthen prevention and
            improve the resilience of submarine cable infrastructure.
          </p>
        </Reveal>

        <Reveal className='policy-timeline'>
          {policyItems.map((item) => (
            <article className='policy-item' key={item.year}>
              <div className='policy-year'>{item.year}</div>

              <div className='policy-content'>
                <div className='policy-meta'>
                  <span>{item.type}</span>
                  <small>{item.reference}</small>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default PolicyEUActions;
