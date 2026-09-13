import Reveal from './Reveal';
import '../styles/project-objectives.scss';

const objectives = [
  {
    number: '01',
    title: 'Improve maritime surveillance',
    text: 'Track vessels and detect critical events using Fibre Optic Acoustic Sensing (FOAS), strengthening situational awareness around subsea infrastructure.',
  },
  {
    number: '02',
    title: 'Connect operators and security authorities',
    text: 'Support effective communication between critical infrastructure operators and relevant security authorities so information can reach the people responsible for response and resilience.',
  },
  {
    number: '03',
    title: 'Support investigation and training',
    text: 'Record FOAS data for post-incident investigation and provide material that can support end-user training and operational preparedness.',
  },
];

function ProjectObjectives({ id }) {
  return (
    <section className='project-objectives' id={id} aria-labelledby='project-objectives-title'>
      <div className='project-objectives-inner'>
        <Reveal as='header' className='project-objectives-header'>
          <p className='project-objectives-eyebrow'>Project objectives</p>

          <h2 id='project-objectives-title'>From sensing events to supporting real-world action.</h2>

          <p className='project-objectives-intro'>
            FOSMARIN is designed not only to detect what is happening around subsea infrastructure, but also to turn
            that information into useful operational knowledge for operators and security authorities.
          </p>
        </Reveal>

        <Reveal className='project-objectives-grid'>
          {objectives.map((objective) => (
            <article className='project-objective' key={objective.number}>
              <span className='project-objective-number'>{objective.number}</span>

              <h3>{objective.title}</h3>

              <p>{objective.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='project-objectives-outcome'>
          <span>Expected outcome</span>

          <p>
            Develop, test and deploy a system that strengthens subsea resilience and security, supports the
            uninterrupted flow of resources, energy and information, and gives operators and authorities practical tools
            for protecting European connectivity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectObjectives;
