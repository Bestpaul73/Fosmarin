import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import { coordinator, partners } from '../data/partners';

import '../styles/consortium-glance.scss';

function ConsortiumGlance({ id }) {
  const otherPartners = partners.filter((partner) => !partner.coordinator);

  return (
    <section className='consortium-glance' id={id} aria-labelledby='consortium-glance-title'>
      <div className='consortium-glance-inner'>
        <Reveal as='header' className='consortium-glance-header'>
          <div className='consortium-glance-heading'>
            <p className='consortium-glance-eyebrow'>Consortium at a glance</p>

            <h2 id='consortium-glance-title'>Expertise across technology, research and maritime operations.</h2>

            <p className='consortium-glance-intro'>
              FOSMARIN brings together the range of expertise required for resilient subsea infrastructure — from
              fibre-optic sensing and system integration to operators, researchers, training organisations and maritime
              authorities.
            </p>
          </div>

          <div className='consortium-glance-stats' aria-label='Consortium statistics'>
            <div>
              <strong>13</strong>
              <span>Partners</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Countries</span>
            </div>
          </div>
        </Reveal>

        <div className='consortium-glance-content'>
          <Reveal className='consortium-glance-coordinator'>
            <span className='consortium-glance-label'>Coordinator</span>

            <div className='consortium-glance-coordinator-logo'>
              <img src={coordinator.logo} alt='' />
            </div>

            <h3>AIT Austrian Institute of Technology</h3>

            <p>AIT leads and coordinates the FOSMARIN consortium.</p>

            <span className='consortium-glance-country'>Austria · AT</span>
          </Reveal>

          <Reveal className='consortium-glance-partners'>
            {otherPartners.map((partner) => (
              <article className='consortium-glance-partner' key={partner.name}>
                <div className='consortium-glance-partner-logo'>
                  <img className={partner.logoClass || ''} src={partner.logo} alt='' />
                </div>

                <div className='consortium-glance-partner-meta'>
                  <span>{partner.name}</span>
                  <small>{partner.countryCode}</small>
                </div>
              </article>
            ))}
          </Reveal>
        </div>

        <Reveal className='consortium-glance-footer'>
          <p>Explore every consortium partner, its role in FOSMARIN and the expertise it contributes to the project.</p>

          <Link className='consortium-glance-link' to='/consortium#partners'>
            Explore the consortium
            <span aria-hidden='true'>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default ConsortiumGlance;
