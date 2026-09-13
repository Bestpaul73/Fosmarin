import Reveal from './Reveal';
import '../styles/project-overview.scss';

const projectFacts = [
  {
    label: 'Project number',
    value: '101309039',
  },
  {
    label: 'Call',
    value: 'HORIZON-CL3-2025-01',
  },
  {
    label: 'Topic',
    value: 'HORIZON-CL3-2025-01-INFRA-01',
  },
  {
    label: 'Type of action',
    value: 'HORIZON Innovation Action',
  },
  {
    label: 'Duration',
    value: '36 months',
  },
  {
    label: 'Project period',
    value: '1 Oct 2026 — 30 Sep 2029',
  },
];

const projectOutputs = [
  {
    number: '01',
    title: 'Develop and validate the system',
    text: 'Combine Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data to improve situational awareness around subsea infrastructure.',
  },
  {
    number: '02',
    title: 'Test it in real conditions',
    text: 'Record FOAS data at two test sites and later demonstrate the FOSMARIN system on third-party infrastructure in a real-life environment.',
  },
  {
    number: '03',
    title: 'Turn results into lasting knowledge',
    text: 'Support operational use, post-incident investigation and future developments through shared data, practical know-how and project whitepapers.',
  },
];

function ProjectOverview({ id }) {
  return (
    <section
      className='project-overview'
      id={id}
      aria-labelledby='project-overview-title'
    >
      <div className='project-overview-inner'>
        <Reveal
          as='header'
          className='project-overview-header'
        >
          <p className='project-overview-eyebrow'>
            Project overview
          </p>

          <h2 id='project-overview-title'>
            Existing fibre becomes part of the protection system.
          </h2>

          <p className='project-overview-intro'>
            FOSMARIN develops, tests and demonstrates a system
            that uses existing subsea fibre-optic infrastructure
            as a continuous sensing layer — without adding new
            hardware to the seabed.
          </p>
        </Reveal>

        <div className='project-overview-main'>
          <Reveal className='project-overview-copy'>
            <p>
              Using Fibre Optic Acoustic Sensing (FOAS), tiny
              vibrations along a cable can be detected and
              analysed to identify vessel movements, anchor
              threats, seismic activity and other critical
              events.
            </p>

            <p>
              FOSMARIN combines this sensing data with predictive
              analytics and external information sources such as
              AIS, helping operators and security authorities
              build a clearer picture of what is happening around
              critical subsea infrastructure.
            </p>

            <p>
              The project moves beyond laboratory research:
              FOAS data will be recorded at two test sites before
              the developed system is demonstrated on third-party
              infrastructure in a real-life environment.
            </p>
          </Reveal>

          <Reveal className='project-overview-facts'>
            {projectFacts.map((fact) => (
              <div
                className='project-overview-fact'
                key={fact.label}
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className='project-overview-outputs'>
          {projectOutputs.map((output) => (
            <article
              className='project-overview-output'
              key={output.number}
            >
              <span className='project-overview-number'>
                {output.number}
              </span>

              <div>
                <h3>{output.title}</h3>
                <p>{output.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectOverview;