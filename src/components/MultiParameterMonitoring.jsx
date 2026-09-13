import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const signalLayers = [
  {
    label: 'Raw signal',
    title: 'Strain rate',
    text: 'The fibre responds to mechanical disturbances and vibration along the cable.',
  },
  {
    label: 'Signal features',
    title: 'Spectral energy',
    text: 'The signal can be analysed in the frequency domain to reveal characteristic patterns.',
  },
  {
    label: 'Derived information',
    title: 'Higher-level features',
    text: 'Processed FOAS information provides a richer description of detected activity.',
  },
  {
    label: 'External context',
    title: 'Reference data',
    text: 'Sources such as AIS can add vessel identity, position and movement context.',
  },
];

function MultiParameterMonitoring({ id }) {
  return (
    <section className='technology-section technology-multi' id={id} aria-labelledby='multi-parameter-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>Multi-parameter monitoring</p>

          <h2 id='multi-parameter-title'>One event can be understood through several layers of information.</h2>

          <p className='technology-section-intro'>
            FOSMARIN does not rely on a single signal value. FOAS measurements can be transformed into signal features
            and higher-level information, then combined with external reference sources to build a more useful
            operational picture.
          </p>
        </Reveal>

        <Reveal className='signal-layers'>
          {signalLayers.map((layer, index) => (
            <article className='signal-layer' key={layer.title}>
              <span className='signal-layer-index'>{String(index + 1).padStart(2, '0')}</span>

              <div>
                <small>{layer.label}</small>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-flow-note'>
          <span>Data fusion</span>

          <p>
            Multiple signal features and external context can be combined before classification, tracking and
            prediction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default MultiParameterMonitoring;
