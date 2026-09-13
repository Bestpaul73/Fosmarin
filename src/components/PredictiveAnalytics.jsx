import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const analyticsStages = [
  {
    time: 'Past',
    question: 'What happened?',
    title: 'Analysis',
  },
  {
    time: 'Now',
    question: 'What is happening?',
    title: 'Monitoring',
  },
  {
    time: 'Next',
    question: 'What could happen?',
    title: 'Prediction',
  },
];

const capabilities = ['Classification', 'Identification', 'Tracking', 'Behaviour analysis', 'Threat prediction'];

function PredictiveAnalytics({ id }) {
  return (
    <section className='technology-section technology-predictive' id={id} aria-labelledby='predictive-analytics-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>Predictive analytics & AI</p>

          <h2 id='predictive-analytics-title'>
            The goal is not only to detect an incident — but to recognise risk before damage occurs.
          </h2>

          <p className='technology-section-intro'>
            FOSMARIN combines signal processing, data analytics and external information to move from observation
            towards classification, tracking, behaviour analysis and prediction.
          </p>
        </Reveal>

        <Reveal className='analytics-timeline'>
          {analyticsStages.map((stage) => (
            <article className='analytics-stage' key={stage.time}>
              <span>{stage.time}</span>
              <strong>{stage.question}</strong>
              <small>{stage.title}</small>
            </article>
          ))}
        </Reveal>

        <Reveal className='predictive-layout'>
          <div className='predictive-copy'>
            <span className='technology-label'>Predictive layer</span>

            <h3>Turn complex signal patterns into decision support.</h3>

            <p>
              A threat may develop over time. By analysing FOAS signals together with contextual data, FOSMARIN aims to
              flag risks early enough for an operator or authority to respond.
            </p>
          </div>

          <ul className='capability-list'>
            {capabilities.map((capability) => (
              <li key={capability}>
                <span aria-hidden='true'>+</span>
                {capability}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default PredictiveAnalytics;
