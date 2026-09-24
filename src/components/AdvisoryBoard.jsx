import Reveal from './Reveal';

import { advisoryBoardMembers } from '../data/advisoryBoard';

import { useLanguage } from '../i18n/LanguageContext';

function AdvisoryBoard({ id }) {
  const { translations } = useLanguage();

  const copy = translations.consortium.advisory;

  return (
    <section className='consortium-section consortium-advisory' id={id} aria-labelledby='advisory-board-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.eyebrow}</p>

          <h2 id='advisory-board-title'>{copy.title}</h2>
        </Reveal>

        <div className='consortium-role-grid'>
          {advisoryBoardMembers.map((member, memberIndex) => (
            <Reveal as='article' id={`advisory-${member.slug}`} className='consortium-role-card' key={member.name}>
              <span>{String(memberIndex + 1).padStart(2, '0')}</span>

              <h3>{member.name}</h3>

              <ul>
                {member.roles.map((role, roleIndex) => (
                  <li key={`${member.name}-${roleIndex}`}>
                    <strong>{role.jobTitle}</strong>

                    <small>
                      {role.institution}

                      {role.country && ` · ${role.country}`}
                    </small>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
