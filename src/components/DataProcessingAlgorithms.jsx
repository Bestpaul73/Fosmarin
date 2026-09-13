import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const processingStages = [
  {
    number: '01',
    title: 'Acquire',
    text: 'Continuous FOAS measurements are collected along the monitored fibre.',
  },
  {
    number: '02',
    title: 'Extract',
    text: 'Signal processing derives useful characteristics such as spectral information and higher-level features.',
  },
  {
    number: '03',
    title: 'Fuse',
    text: 'FOAS information is correlated with reference and external data sources.',
  },
  {
    number: '04',
    title: 'Classify',
    text: 'Algorithms distinguish relevant activities and event types.',
  },
  {
    number: '05',
    title: 'Track',
    text: 'Detected activity can be followed over time and along the monitored area.',
  },
  {
    number: '06',
    title: 'Predict',
    text: 'Behaviour analysis supports risk assessment and predictive warning.',
  },
];

function DataProcessingAlgorithms({ id }) {
  return (
    <section className='technology-section technology-processing' id={id} aria-labelledby='data-processing-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>Data processing & algorithms</p>

          <h2 id='data-processing-title'>Raw fibre measurements become structured operational information.</h2>

          <p className='technology-section-intro'>
            The useful output of FOAS is created through a processing chain: measurements are transformed, correlated
            and interpreted so that events can be classified and tracked rather than presented as raw signal alone.
          </p>
        </Reveal>

        <Reveal className='processing-grid'>
          {processingStages.map((stage) => (
            <article className='processing-card' key={stage.number}>
              <span>{stage.number}</span>

              <h3>{stage.title}</h3>

              <p>{stage.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-highlight technology-highlight--data'>
          <strong>10</strong>

          <div>
            <span>planned FOAS datasets</span>

            <p>
              FOSMARIN plans to release datasets from generated threat scenarios and long-term monitoring to support
              future tracking, classification and prediction research.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DataProcessingAlgorithms;
