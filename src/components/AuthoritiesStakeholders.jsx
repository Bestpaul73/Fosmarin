import Reveal from './Reveal';

import { partners } from '../data/partners';

const stakeholderGroups = [
  {
    label: 'Authority',
    roles: ['Authority'],
    text: 'Public-authority expertise helps connect project results with security, civil-protection and operational requirements.',
  },
  {
    label: 'Operators',
    roles: ['Operator', 'Operator, Research Partner'],
    text: 'Infrastructure operators contribute operational environments, real-world requirements and practical validation.',
  },
  {
    label: 'Training',
    roles: ['Training'],
    text: 'Training expertise supports the transfer of project knowledge into practical procedures and end-user capability.',
  },
];

function AuthoritiesStakeholders({ id }) {
  return (
    <section
      className='consortium-section consortium-stakeholders'
      id={id}
      aria-labelledby='authorities-stakeholders-title'
    >
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>Authorities & stakeholders</p>

          <h2 id='authorities-stakeholders-title'>
            Technology is developed around the organisations that ultimately need to use it.
          </h2>

          <p className='consortium-section-intro'>
            FOSMARIN is intended to support infrastructure operators and relevant security authorities, with project
            results contributing to operational procedures, information sharing and post-incident investigation.
          </p>
        </Reveal>

        <Reveal className='stakeholder-grid'>
          {stakeholderGroups.map((group) => {
            const groupPartners = partners.filter((partner) => group.roles.includes(partner.role));

            return (
              <article className='stakeholder-card' key={group.label}>
                <span>{group.label}</span>

                <p>{group.text}</p>

                <ul>
                  {groupPartners.map((partner) => (
                    <li key={partner.name}>{partner.name}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Reveal>

        <Reveal className='stakeholder-flow'>
          <div>
            <strong>FOAS data</strong>
            <span>Detection & evidence</span>
          </div>

          <i aria-hidden='true'>→</i>

          <div>
            <strong>FOSMARIN</strong>
            <span>Analysis & decision support</span>
          </div>

          <i aria-hidden='true'>→</i>

          <div>
            <strong>Operators & authorities</strong>
            <span>SOP · CISE · Investigation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AuthoritiesStakeholders;
