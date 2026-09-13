import Reveal from './Reveal';
import euFundedImage from '../assets/eu-funded.png';
import '../styles/eu-funding.scss';

function EUFunding({ id }) {
  return (
    <section className='eu-funding' id={id} aria-labelledby='eu-funding-title'>
      <div className='eu-funding-inner'>
        <Reveal className='eu-funding-main'>
          <div className='eu-funding-content'>
            <p className='eu-funding-eyebrow'>EU Funding</p>

            <h2 id='eu-funding-title'>Funded by the European Union.</h2>

            <p className='eu-funding-intro'>
              FOSMARIN is funded by the European Union under Grant Agreement No. 101309039 as part of
              HORIZON-CL3-2025-01.
            </p>

            <dl className='eu-funding-facts'>
              <div>
                <dt>Grant agreement</dt>
                <dd>101309039 — FOSMARIN</dd>
              </div>

              <div>
                <dt>Programme</dt>
                <dd>HORIZON-CL3-2025-01</dd>
              </div>

              <div>
                <dt>Grant form</dt>
                <dd>Budget-based</dd>
              </div>

              <div>
                <dt>Grant mode</dt>
                <dd>Action grant</dd>
              </div>
            </dl>
          </div>

          <div className='eu-funding-visual'>
            <img src={euFundedImage} alt='Funded by the European Union' />
          </div>
        </Reveal>

        <Reveal className='eu-funding-disclaimer'>
          <p>
            Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of
            the European Union or European Research Executive Agency. Neither the European Union nor the European
            Research Executive Agency can be held responsible for them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default EUFunding;
