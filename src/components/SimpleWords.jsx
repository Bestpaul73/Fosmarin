import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/simple-words.scss';

function SimpleWords({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.simpleWords;

  return (
    <section className='simple-words' id={id}>
      <div className='simple-words-inner'>
        <Reveal className='simple-words-panel'>
          <div className='simple-words-copy'>
            <p className='simple-words-badge'>{copy.badge}</p>
            <h2>{copy.title}</h2>
            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className='simple-words-visual'>
            <svg viewBox='0 0 400 320' role='img' aria-labelledby='simple-words-title simple-words-description'>
              <title id='simple-words-title'>{copy.visualTitle}</title>
              <desc id='simple-words-description'>{copy.visualDescription}</desc>

              <defs>
                <linearGradient id='simple-words-cup-gradient' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='var(--simple-cup-top)' />
                  <stop offset='100%' stopColor='var(--simple-cup-bottom)' />
                </linearGradient>
              </defs>

              <path
                id='simple-words-path'
                d='M50,260 C140,180 260,180 350,80'
                fill='none'
                stroke='var(--simple-cyan)'
                strokeWidth='3'
                strokeLinecap='round'
                strokeDasharray='2 10'
              />

              <g transform='translate(50,260)'>
                <path
                  d='M-26,-6 L26,-6 L18,30 L-18,30 Z'
                  fill='url(#simple-words-cup-gradient)'
                  stroke='var(--simple-cyan)'
                  strokeWidth='1.5'
                />
                <ellipse cx='0' cy='-6' rx='26' ry='7' fill='var(--simple-deep)' stroke='var(--simple-cyan)' strokeWidth='1.5' />
              </g>

              <g transform='translate(350,80)'>
                <path
                  d='M-26,-6 L26,-6 L18,30 L-18,30 Z'
                  fill='url(#simple-words-cup-gradient)'
                  stroke='var(--simple-cyan)'
                  strokeWidth='1.5'
                />
                <ellipse cx='0' cy='-6' rx='26' ry='7' fill='var(--simple-deep)' stroke='var(--simple-cyan)' strokeWidth='1.5' />
              </g>

              <g className='simple-words-animation' stroke='var(--simple-cyan)' strokeWidth='2' strokeLinecap='round'>
                <path d='M95,225 l-6,-6 M95,225 l6,6'>
                  <animate attributeName='opacity' values='0.2;1;0.2' dur='1.8s' repeatCount='indefinite' />
                </path>
                <path d='M160,195 l-6,-6 M160,195 l6,6'>
                  <animate attributeName='opacity' values='1;0.2;1' dur='1.6s' repeatCount='indefinite' />
                </path>
                <path d='M230,168 l-6,-6 M230,168 l6,6'>
                  <animate attributeName='opacity' values='0.2;1;0.2' dur='2.1s' repeatCount='indefinite' />
                </path>
                <path d='M295,125 l-6,-6 M295,125 l6,6'>
                  <animate attributeName='opacity' values='1;0.2;1' dur='1.4s' repeatCount='indefinite' />
                </path>
              </g>

              <circle className='simple-words-animation' r='5' fill='var(--simple-cyan)'>
                <animateMotion dur='2.6s' repeatCount='indefinite'>
                  <mpath href='#simple-words-path' />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SimpleWords;
