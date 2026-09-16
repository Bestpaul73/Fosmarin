import Reveal from './Reveal';

import europeMap from '../assets/europe-map.svg';

import { consortiumCountries, partners } from '../data/partners';
import { useLanguage } from '../i18n/LanguageContext';

const mapPositions = {
  FO: { x: 27.16, y: 25 },
  UK: { x: 34.33, y: 43.75 },
  DK: { x: 52.24, y: 40 },
  AT: { x: 58.36, y: 61 },
  IT: { x: 55.97, y: 73 },
  ES: { x: 31.79, y: 79 },
  EL: { x: 70.15, y: 82.25 },
  CY: { x: 87.16, y: 92.25 },
};

function PartnerMap({ id }) {
  const { translations } = useLanguage();
  const copy = translations.consortium;

  return (
    <section className='consortium-section consortium-map' id={id} aria-labelledby='partner-map-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.partnerMap.eyebrow}</p>
          <h2 id='partner-map-title'>{copy.partnerMap.title}</h2>
          <p className='consortium-section-intro'>{copy.partnerMap.intro}</p>
        </Reveal>

        <Reveal className='partner-map-layout'>
          <div className='partner-map-visual' aria-hidden='true'>
            <div className='partner-map-canvas'>
              <img className='partner-map-image' src={europeMap} alt='' />

              {consortiumCountries.map((country) => {
                const position = mapPositions[country.code];
                const count = partners.filter((partner) => partner.countryCode === country.code).length;

                if (!position) {
                  return null;
                }

                return (
                  <div
                    className='partner-map-marker'
                    key={country.code}
                    style={{
                      '--point-x': `${position.x}%`,
                      '--point-y': `${position.y}%`,
                    }}
                  >
                    <span className='partner-map-marker-ring'>
                      <span className='partner-map-marker-dot' />
                    </span>

                    <strong>{country.code}</strong>

                    <small>
                      {count} {count === 1 ? copy.partnerMap.partner : copy.partnerMap.partners}
                    </small>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='partner-country-list'>
            {consortiumCountries.map((country) => {
              const countryPartners = partners.filter((partner) => partner.countryCode === country.code);

              return (
                <article key={country.code}>
                  <div>
                    <strong>{copy.countries[country.name] || country.name}</strong>
                    <span>{country.code}</span>
                  </div>

                  <p>{countryPartners.map((partner) => partner.name).join(' · ')}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PartnerMap;
