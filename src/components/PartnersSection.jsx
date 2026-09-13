import Reveal from './Reveal';

import { partners } from '../data/partners';

function PartnersSection({ id }) {
  return (
    <section className='consortium-section consortium-partners' id={id} aria-labelledby='consortium-partners-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>Partners</p>

          <h2 id='consortium-partners-title'>
            13 organisations bringing together technology, research, infrastructure and public authorities.
          </h2>

          <p className='consortium-section-intro'>
            FOSMARIN combines the expertise required to develop, test and validate a practical subsea monitoring system
            — from fibre-optic sensing and data science to infrastructure operation, integration and training.
          </p>
        </Reveal>

        <Reveal className='partner-grid'>
          {partners.map((partner) => (
            <article
              className={`partner-card ${partner.coordinator ? 'partner-card--coordinator' : ''}`}
              key={partner.name}
            >
              {partner.coordinator && <span className='partner-coordinator-badge'>Coordinator</span>}

              <div className='partner-card-logo'>
                <img className={partner.logoClass || ''} src={partner.logo} alt='' />
              </div>

              <div className='partner-card-content'>
                <div className='partner-card-heading'>
                  <h3>{partner.name}</h3>

                  <span>{partner.countryCode}</span>
                </div>

                <p className='partner-card-role'>{partner.role}</p>

                <p className='partner-card-legal'>{partner.legalName}</p>

                <small>{partner.country}</small>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default PartnersSection;
