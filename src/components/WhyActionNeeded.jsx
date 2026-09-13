import Reveal from './Reveal';
import '../styles/challenge-sections.scss';

const actionSteps = [
  {
    number: '01',
    title: 'Monitor',
    text: 'Maintain continuous visibility around critical subsea infrastructure.',
  },
  {
    number: '02',
    title: 'Diagnose',
    text: 'Understand operating conditions and infrastructure status in real time.',
  },
  {
    number: '03',
    title: 'Predict',
    text: 'Identify potential threats before they develop into damaging incidents.',
  },
  {
    number: '04',
    title: 'Maintain',
    text: 'Provide information that can support timely maintenance and reduce losses caused by failures.',
  },
];

function WhyActionNeeded({ id }) {
  return (
    <section className='challenge-section challenge-action' id={id} aria-labelledby='why-action-needed-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>Why action is needed</p>

          <h2 id='why-action-needed-title'>Protection has to begin before a cable is damaged.</h2>

          <p className='challenge-section-intro'>
            Monitoring systems can do more than confirm that a failure has already occurred. They can support real-time
            diagnosis, threat prediction and maintenance decisions — helping operators protect continuity of service.
          </p>
        </Reveal>

        <Reveal className='action-flow'>
          {actionSteps.map((step, index) => (
            <article className='action-step' key={step.number}>
              <div className='action-step-top'>
                <span>{step.number}</span>

                {index < actionSteps.length - 1 && (
                  <span className='action-step-arrow' aria-hidden='true'>
                    →
                  </span>
                )}
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='action-outcome'>
          <div className='action-outcome-marker'>Continuous service</div>

          <p>
            Reliable, permanent and seamless monitoring is a key part of reducing the risk that accidental, intentional
            or geological events interrupt crucial public services.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyActionNeeded;
