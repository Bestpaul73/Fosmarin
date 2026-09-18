import Reveal from './Reveal';
import { partners } from '../data/partners';
import { useLanguage } from '../i18n/LanguageContext';

function PartnersSection({ id }) {
  const { translations } = useLanguage();
  const copy = translations.consortium;

  return (
    <section className='consortium-section consortium-partners' id={id} aria-labelledby='consortium-partners-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.partners.eyebrow}</p>

          <h2 id='consortium-partners-title'>{copy.partners.title}</h2>

          <p className='consortium-section-intro'>{copy.partners.intro}</p>
        </Reveal>

        <Reveal className='partner-grid'>
          {partners.map((partner) => (
            <a
              className={`partner-card ${partner.coordinator ? 'partner-card--coordinator' : ''}`}
              href={partner.website}
              key={partner.name}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${partner.name} — ${partner.legalName}`}
            >
              {partner.coordinator && <span className='partner-coordinator-badge'>{copy.partners.coordinator}</span>}

              <div className='partner-card-logo'>
                <img className={partner.logoClass || ''} src={partner.logo} alt='' />
              </div>

              <div className='partner-card-content'>
                <div className='partner-card-heading'>
                  <h3>{partner.name}</h3>

                  <span>{partner.countryCode}</span>
                </div>

                <p className='partner-card-role'>{copy.partnerRoles[partner.role] || partner.role}</p>

                <p className='partner-card-legal'>{partner.legalName}</p>

                <small>{copy.countries[partner.country] || partner.country}</small>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default PartnersSection;
