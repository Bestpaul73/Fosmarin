import { Fragment } from 'react';

import Reveal from './Reveal';

import { partners } from '../data/partners';
import { useLanguage } from '../i18n/LanguageContext';

function AuthoritiesStakeholders({ id }) {
  const { translations } = useLanguage();
  const copy = translations.consortium.stakeholders;

  return (
    <section
      className='consortium-section consortium-stakeholders'
      id={id}
      aria-labelledby='authorities-stakeholders-title'
    >
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.eyebrow}</p>
          <h2 id='authorities-stakeholders-title'>{copy.title}</h2>
          <p className='consortium-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='stakeholder-grid'>
          {copy.groups.map((group) => {
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
          {copy.flow.map((item, index) => (
            <Fragment key={item.strong}>
              <div>
                <strong>{item.strong}</strong>
                <span>{item.text}</span>
              </div>

              {index < copy.flow.length - 1 && <i aria-hidden='true'>→</i>}
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default AuthoritiesStakeholders;
