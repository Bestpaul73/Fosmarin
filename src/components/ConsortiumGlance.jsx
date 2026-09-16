import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import {
  coordinator,
  partners,
} from '../data/partners';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/consortium-glance.scss';

function ConsortiumGlance({ id }) {
  const {
    translations,
    getLocalizedPath,
  } = useLanguage();

  const content =
    translations.about.consortiumGlance;

  const otherPartners =
    partners.filter(
      (partner) =>
        !partner.coordinator
    );

  return (
    <section
      className='consortium-glance'
      id={id}
      aria-labelledby='consortium-glance-title'
    >
      <div className='consortium-glance-inner'>
        <Reveal
          as='header'
          className='consortium-glance-header'
        >
          <div className='consortium-glance-heading'>
            <p className='consortium-glance-eyebrow'>
              {content.eyebrow}
            </p>

            <h2 id='consortium-glance-title'>
              {content.title}
            </h2>

            <p className='consortium-glance-intro'>
              {content.intro}
            </p>
          </div>

          <div
            className='consortium-glance-stats'
            aria-label={content.statsLabel}
          >
            <div>
              <strong>
                13
              </strong>

              <span>
                {content.partners}
              </span>
            </div>

            <div>
              <strong>
                8
              </strong>

              <span>
                {content.countries}
              </span>
            </div>
          </div>
        </Reveal>

        <div className='consortium-glance-content'>
          <Reveal className='consortium-glance-coordinator'>
            <span className='consortium-glance-label'>
              {content.coordinator}
            </span>

            <div className='consortium-glance-coordinator-logo'>
              <img
                src={coordinator.logo}
                alt=''
              />
            </div>

            <h3>
              AIT Austrian Institute of Technology
            </h3>

            <p>
              {content.coordinatorDescription}
            </p>

            <span className='consortium-glance-country'>
              {content.coordinatorCountry}
            </span>
          </Reveal>

          <Reveal className='consortium-glance-partners'>
            {otherPartners.map(
              (partner) => (
                <article
                  className='consortium-glance-partner'
                  key={partner.name}
                >
                  <div className='consortium-glance-partner-logo'>
                    <img
                      className={
                        partner.logoClass ||
                        ''
                      }
                      src={partner.logo}
                      alt=''
                    />
                  </div>

                  <div className='consortium-glance-partner-meta'>
                    <span>
                      {partner.name}
                    </span>

                    <small>
                      {
                        partner.countryCode
                      }
                    </small>
                  </div>
                </article>
              )
            )}
          </Reveal>
        </div>

        <Reveal className='consortium-glance-footer'>
          <p>
            {content.footer}
          </p>

          <Link
            className='consortium-glance-link'
            to={getLocalizedPath(
              '/consortium#partners'
            )}
          >
            {content.linkLabel}

            <span aria-hidden='true'>
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default ConsortiumGlance;
