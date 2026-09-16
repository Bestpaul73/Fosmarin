import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/how-it-works.scss';

const icons = [
  (
    <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
      <path d='M4 22h14' />
      <path d='M22 22 L34 14 M22 22 L34 30' />
      <circle cx='34' cy='14' r='3' />
      <circle cx='34' cy='30' r='3' />
      <circle cx='4' cy='22' r='3' />
    </svg>
  ),
  (
    <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
      <path d='M6 30c4-14 8-14 12 0s8 14 12 0 8-14 12 0' />
    </svg>
  ),
  (
    <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
      <path className='how-it-works-icon-line' d='M6 22h32' />
      <circle cx='10' cy='22' r='2.4' />
      <circle cx='18' cy='22' r='2.4' />
      <circle cx='26' cy='22' r='2.4' />
      <circle cx='34' cy='22' r='2.4' />
    </svg>
  ),
  (
    <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
      <rect x='6' y='8' width='32' height='24' rx='3' />
      <path className='how-it-works-icon-accent' d='M12 26l6-8 5 5 9-11' />
    </svg>
  ),
];

function StepArrow() {
  return (
    <div className='how-it-works-arrow' aria-hidden='true'>
      <svg viewBox='0 0 12 12' focusable='false'>
        <path d='M2 6h8M6 2l4 4-4 4' />
      </svg>
    </div>
  );
}

function HowItWorks({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.howItWorks;

  return (
    <section className='how-it-works' id={id} aria-labelledby='how-it-works-title'>
      <div className='how-it-works-inner'>
        <Reveal as='header' className='how-it-works-header'>
          <p className='how-it-works-eyebrow'>{copy.eyebrow}</p>
          <h2 id='how-it-works-title'>{copy.title}</h2>
          <p className='how-it-works-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='how-it-works-steps'>
          {copy.steps.map((step, index) => (
            <article className='how-it-works-step' key={step.number}>
              <span className='how-it-works-number'>{step.number}</span>
              <div className='how-it-works-icon'>{icons[index]}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < copy.steps.length - 1 && <StepArrow />}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorks;
