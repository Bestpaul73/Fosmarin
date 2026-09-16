import Reveal from './Reveal';

import euFundedImage from '../assets/eu-funded.png';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/eu-funding.scss';

function EUFunding({ id }) {
  const {
    translations,
  } = useLanguage();

  const funding =
    translations.about.euFunding;

  return (
    <section
      className='eu-funding'
      id={id}
      aria-labelledby='eu-funding-title'
    >
      <div className='eu-funding-inner'>
        <Reveal className='eu-funding-main'>
          <div className='eu-funding-content'>
            <p className='eu-funding-eyebrow'>
              {funding.eyebrow}
            </p>

            <h2 id='eu-funding-title'>
              {funding.title}
            </h2>

            <p className='eu-funding-intro'>
              {funding.intro}
            </p>

            <dl className='eu-funding-facts'>
              {funding.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>
                    {fact.label}
                  </dt>

                  <dd>
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className='eu-funding-visual'>
            <img
              src={euFundedImage}
              alt={funding.logoAlt}
            />
          </div>
        </Reveal>

        <Reveal className='eu-funding-disclaimer'>
          <p>
            {funding.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default EUFunding;
