import Reveal from './Reveal';

import { partners } from '../data/partners';

const roleGroups = [
  {
    title: 'Coordination & technology',
    roles: ['Coordinator, Technology Development', 'Technology Provider', 'Industry Partner'],
  },
  {
    title: 'System integration',
    roles: ['System Integration', 'System Integrator'],
  },
  {
    title: 'Research & validation',
    roles: ['Research Partner', 'Operator, Research Partner'],
  },
  {
    title: 'Operations, authority & training',
    roles: ['Operator', 'Authority', 'Training'],
  },
];

function RolesContributions({ id }) {
  return (
    <section className='consortium-section consortium-roles' id={id} aria-labelledby='roles-contributions-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>Roles & contributions</p>

          <h2 id='roles-contributions-title'>Different capabilities, connected through one operational system.</h2>

          <p className='consortium-section-intro'>
            The consortium combines development, integration, research, real-world infrastructure, public-authority
            expertise and training.
          </p>
        </Reveal>

        <Reveal className='consortium-role-grid'>
          {roleGroups.map((group, index) => {
            const groupPartners = partners.filter((partner) => group.roles.includes(partner.role));

            return (
              <article className='consortium-role-card' key={group.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>

                <h3>{group.title}</h3>

                <ul>
                  {groupPartners.map((partner) => (
                    <li key={partner.name}>
                      <strong>{partner.name}</strong>

                      <small>{partner.role}</small>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default RolesContributions;
