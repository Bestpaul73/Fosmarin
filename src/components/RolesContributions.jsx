import Reveal from './Reveal';

import { partners } from '../data/partners';
import { useLanguage } from '../i18n/LanguageContext';

function RolesContributions({ id }) {
  const { translations } = useLanguage();
  const copy = translations.consortium;

  return (
    <section className='consortium-section consortium-roles' id={id} aria-labelledby='roles-contributions-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.roles.eyebrow}</p>
          <h2 id='roles-contributions-title'>{copy.roles.title}</h2>
          <p className='consortium-section-intro'>{copy.roles.intro}</p>
        </Reveal>

        <Reveal className='consortium-role-grid'>
          {copy.roles.groups.map((group, index) => {
            const groupPartners = partners.filter((partner) => group.roles.includes(partner.role));

            return (
              <article className='consortium-role-card' key={group.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.title}</h3>

                <ul>
                  {groupPartners.map((partner) => (
                    <li key={partner.name}>
                      <strong>{partner.name}</strong>
                      <small>{copy.partnerRoles[partner.role] || partner.role}</small>
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
