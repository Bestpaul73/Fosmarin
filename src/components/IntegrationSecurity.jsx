import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const integrationAreas = [
  {
    label: 'Operators',
    title: 'Operational workflows',
    text: 'FOSMARIN is intended to support the organisations responsible for operating critical subsea infrastructure.',
  },
  {
    label: 'Authorities',
    title: 'Standard Operating Procedures',
    text: 'The project aims to integrate FOAS-derived information into security-authority SOPs.',
  },
  {
    label: 'Europe',
    title: 'CISE integration',
    text: 'Common Information Sharing Environment integration supports information exchange with relevant authorities.',
  },
  {
    label: 'After an incident',
    title: 'Stored evidence',
    text: 'FOAS features can be retained to support post-incident investigation and training.',
  },
];

function IntegrationSecurity({ id }) {
  return (
    <section className='technology-section technology-integration' id={id} aria-labelledby='integration-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>Integration, interoperability & security</p>

          <h2 id='integration-title'>
            Detection only matters when the information reaches the people who can respond.
          </h2>

          <p className='technology-section-intro'>
            FOSMARIN is being developed as more than an isolated sensing instrument. The project connects monitoring
            results with operational processes, information sharing and post-incident investigation.
          </p>
        </Reveal>

        <Reveal className='integration-grid'>
          {integrationAreas.map((area) => (
            <article className='integration-card' key={area.title}>
              <span>{area.label}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='integration-path'>
          <span>FOAS</span>
          <i aria-hidden='true'>→</i>
          <span>FOSMARIN platform</span>
          <i aria-hidden='true'>→</i>
          <span>Operators</span>
          <i aria-hidden='true'>+</i>
          <span>Authorities</span>
        </Reveal>
      </div>
    </section>
  );
}

export default IntegrationSecurity;
