import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import aitLogo from '../assets/partners/ait.png';
import melcanoLogo from '../assets/partners/melcano.svg';
import sintelaLogo from '../assets/partners/sintela.png';
import additessLogo from '../assets/partners/additess.jpg';
import forthLogo from '../assets/partners/forth.jpg';
import plocanLogo from '../assets/partners/plocan.png';
import nbgLogo from '../assets/partners/nbg.png';
import kemeaLogo from '../assets/partners/kemea.png';
import canalinkLogo from '../assets/partners/canalink.png';
import laresLogo from '../assets/partners/lares-italia.png';
import globalConnectLogo from '../assets/partners/global-connect.png';
import grnetLogo from '../assets/partners/grnet.png';
import shefaLogo from '../assets/partners/shefa.jpg';

import '../styles/consortium-glance.scss';

const partners = [
  {
    name: 'MELCANO',
    country: 'AT',
    logo: melcanoLogo,
    logoClass: 'consortium-glance-logo--melcano',
  },
  {
    name: 'SINTELA',
    country: 'UK',
    logo: sintelaLogo,
  },
  {
    name: 'ADDITESS',
    country: 'CY',
    logo: additessLogo,
  },
  {
    name: 'FORTH',
    country: 'EL',
    logo: forthLogo,
  },
  {
    name: 'PLOCAN',
    country: 'ES',
    logo: plocanLogo,
  },
  {
    name: 'NBG',
    country: 'AT',
    logo: nbgLogo,
  },
  {
    name: 'KEMEA',
    country: 'EL',
    logo: kemeaLogo,
    logoClass: 'consortium-glance-logo--kemea',
  },
  {
    name: 'CANALINK',
    country: 'ES',
    logo: canalinkLogo,
  },
  {
    name: 'LARES ITALIA',
    country: 'IT',
    logo: laresLogo,
    logoClass: 'consortium-glance-logo--lares',
  },
  {
    name: 'GLOBAL CONNECT',
    country: 'DK',
    logo: globalConnectLogo,
  },
  {
    name: 'GRNET',
    country: 'EL',
    logo: grnetLogo,
  },
  {
    name: 'SHEFA',
    country: 'FO',
    logo: shefaLogo,
  },
];

function ConsortiumGlance({ id }) {
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
              <img src={aitLogo} alt='' />
            </div>

            <h3>AIT Austrian Institute of Technology</h3>

            <p>AIT leads and coordinates the FOSMARIN consortium.</p>

            <span className='consortium-glance-country'>Austria · AT</span>
          </Reveal>

          <Reveal className='consortium-glance-partners'>
            {partners.map((partner) => (
              <article className='consortium-glance-partner' key={partner.name}>
                <div className='consortium-glance-partner-logo'>
                  <img className={partner.logoClass || ''} src={partner.logo} alt='' />
                </div>

                <div className='consortium-glance-partner-meta'>
                  <span>{partner.name}</span>
                  <small>{partner.country}</small>
                </div>
              </article>
            ))}
          </Reveal>
        </div>

        <Reveal className='consortium-glance-footer'>
          <p>
            The full Consortium section will detail each partner, its role in FOSMARIN and its contribution to the
            project.
          </p>

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
