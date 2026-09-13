import Reveal from './Reveal';
import '../styles/mission-vision.scss';

function MissionIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='12' r='5' />
      <circle className='mission-vision-icon-dot' cx='12' cy='12' r='1.6' />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
      <path d='M2 12c2.5-5 6.5-8 10-8s7.5 3 10 8c-2.5 5-6.5 8-10 8s-7.5-3-10-8Z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function MissionVision({ id }) {
  return (
    <section className='mission-vision' id={id} aria-labelledby='mission-vision-title'>
      <div className='mission-vision-inner'>
        <Reveal as='header' className='mission-vision-header'>
          <p className='mission-vision-eyebrow'>Mission & Vision</p>

          <h2 id='mission-vision-title'>Why FOSMARIN exists — and where it&apos;s heading.</h2>
        </Reveal>

        <Reveal className='mission-vision-grid'>
          <article className='mission-vision-card'>
            <div className='mission-vision-icon'>
              <MissionIcon />
            </div>

            <h3>Mission</h3>

            <p>
              FOSMARIN strengthens the preparedness, response and recovery capacity of Europe&apos;s subsea cable
              operators and authorities by turning the fibre already in the ground into a continuous monitoring and
              threat-assessment layer — using Fibre Optic Acoustic Sensing (FOAS) and predictive analytics to detect
              anchor drags, seismic activity and vessel-related threats in real time, and to give operators the forecast
              and decision-support tools needed to protect critical infrastructure.
            </p>
          </article>

          <article className='mission-vision-card'>
            <div className='mission-vision-icon'>
              <VisionIcon />
            </div>

            <h3>Vision</h3>

            <p>
              A Europe where large-scale disruption to subsea data and energy infrastructure is rare, quickly detected,
              and quickly recovered from — because every cable route carries its own built-in early-warning system,
              feeding interdependency maps, forecasting tools, and post-incident investigation data back to the
              operators, national authorities, and EU coordination bodies responsible for critical infrastructure
              resilience.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default MissionVision;
