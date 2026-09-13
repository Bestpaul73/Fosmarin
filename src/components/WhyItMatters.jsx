import Reveal from './Reveal';
import '../styles/why-it-matters.scss';

const impactStats = [
  {
    value: 'Data',
    text: 'Subsea telecommunication infrastructure supports essential information flows and public services.',
  },
  {
    value: 'Energy',
    text: 'Subsea power infrastructure is critical to maintaining reliable energy connections.',
  },
  {
    value: 'Pipelines',
    text: 'Subsea pipelines are another class of critical infrastructure exposed to maritime and natural threats.',
  },
  {
    value: 'Continuous',
    text: 'Reliable, permanent and seamless monitoring is essential for maintaining continuity of service.',
  },
];

function WhyItMatters({ id }) {
  return (
    <section className='why-it-matters' id={id} aria-labelledby='why-it-matters-title'>
      <div className='why-it-matters-inner'>
        <Reveal as='header' className='why-it-matters-header'>
          <p className='why-it-matters-eyebrow'>Global context</p>

          <h2 id='why-it-matters-title'>Subsea infrastructure carries services that cannot simply stop.</h2>

          <p className='why-it-matters-intro'>
            Data cables, power links and pipelines form part of the infrastructure on which modern economies and public
            services depend. Damage can interrupt these services, while much of the infrastructure remains difficult to
            observe continuously using conventional maritime surveillance alone.
          </p>
        </Reveal>

        <Reveal className='why-it-matters-grid'>
          {impactStats.map((stat) => (
            <article className='why-it-matters-card' key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default WhyItMatters;
