import Reveal from './Reveal';
import '../styles/project-impact.scss';

const impactAreas = [
  {
    level: 'High impact',
    audience: 'Operators · Regulators · Governments',
    title: 'A blueprint for stronger subsea resilience',
    text: 'FOSMARIN is designed to leave operators, regulators and authorities with practical know-how that can influence technology choices, operational procedures, policy and future cable design long after the project ends.',
    deliveredThrough: 'Project whitepapers, stakeholder workshops and policy recommendations.',
  },
  {
    level: 'High impact',
    audience: 'Scientific community',
    title: 'Open data for the next generation of prediction tools',
    text: 'Ten high-quality FOAS datasets will give researchers real-world material for developing and testing new vessel-tracking, classification and threat-prediction methods.',
    deliveredThrough:
      'Ten published FOAS datasets covering generated threat scenarios and long-term installation data paired with reference AIS information.',
  },
  {
    level: 'Medium–high impact',
    audience: 'Society & public trust',
    title: 'Fewer disruptions to the infrastructure people rely on',
    text: 'If deployed at scale, the FOSMARIN approach could reduce disruptions to critical subsea infrastructure while helping rebuild confidence in Europe’s ability to protect essential maritime connections.',
    deliveredThrough: 'Open project communication through the website, social media and press releases.',
  },
];

function ProjectImpact({ id }) {
  return (
    <section className='project-impact' id={id} aria-labelledby='project-impact-title'>
      <div className='project-impact-inner'>
        <Reveal as='header' className='project-impact-header'>
          <p className='project-impact-eyebrow'>Impact</p>

          <h2 id='project-impact-title'>What FOSMARIN leaves behind.</h2>

          <p className='project-impact-intro'>
            Beyond real-time alerts, FOSMARIN is designed to create lasting value across operations, policy, research
            and society — strengthening how Europe understands and protects its subsea infrastructure.
          </p>
        </Reveal>

        <Reveal className='project-impact-grid'>
          {impactAreas.map((area) => (
            <article className='project-impact-card' key={area.audience}>
              <div className='project-impact-meta'>
                <span className='project-impact-level'>{area.level}</span>

                <span className='project-impact-audience'>{area.audience}</span>
              </div>

              <h3>{area.title}</h3>

              <p className='project-impact-text'>{area.text}</p>

              <div className='project-impact-delivery'>
                <span>Delivered through</span>

                <p>{area.deliveredThrough}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectImpact;
