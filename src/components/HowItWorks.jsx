import Reveal from './Reveal';
import '../styles/how-it-works.scss';

const steps = [
  {
    number: '01',
    title: 'A laser sends tiny pulses down the fibre',
    text: 'Every few metres, a flash of light travels along the cable and reflects tiny amounts of itself back home, like a very fast echo.',
    icon: (
      <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
        <path d='M4 22h14' />
        <path d='M22 22 L34 14 M22 22 L34 30' />
        <circle cx='34' cy='14' r='3' />
        <circle cx='34' cy='30' r='3' />
        <circle cx='4' cy='22' r='3' />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Vibrations change the echo',
    text: "A ship's engine, a dragging anchor or a seismic shift all shake the fibre a tiny amount — enough to change the pattern of light bouncing back.",
    icon: (
      <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
        <path d='M6 30c4-14 8-14 12 0s8 14 12 0 8-14 12 0' />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Thousands of virtual microphones appear',
    text: 'Software turns every metre of fibre into its own listening point — so one strand of glass becomes thousands of underwater "ears" at once.',
    icon: (
      <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
        <path className='how-it-works-icon-line' d='M6 22h32' />

        <circle cx='10' cy='22' r='2.4' />
        <circle cx='18' cy='22' r='2.4' />
        <circle cx='26' cy='22' r='2.4' />
        <circle cx='34' cy='22' r='2.4' />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Predictive analytics tells threats apart',
    text: "An AI model compares each sound's fingerprint to what's normal for that stretch of seabed, and flags real threats in under a second — cutting false alarms.",
    icon: (
      <svg viewBox='0 0 44 44' aria-hidden='true' focusable='false'>
        <rect x='6' y='8' width='32' height='24' rx='3' />

        <path className='how-it-works-icon-accent' d='M12 26l6-8 5 5 9-11' />
      </svg>
    ),
  },
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

function HowItWorks() {
  return (
    <section className='how-it-works' aria-labelledby='how-it-works-title'>
      <div className='how-it-works-inner'>
        <Reveal as='header' className='how-it-works-header'>
          <p className='how-it-works-eyebrow'>How it works</p>

          <h2 id='how-it-works-title'>From a flash of light to a real-time alert — in four steps.</h2>

          <p className='how-it-works-intro'>
            This is Fibre Optic Acoustic Sensing (FOAS): the same glass fibre that carries your data becomes a
            continuous line of listening points, every few metres, along its entire length.
          </p>
        </Reveal>

        <Reveal className='how-it-works-steps'>
          {steps.map((step, index) => (
            <article className='how-it-works-step' key={step.number}>
              <span className='how-it-works-number'>{step.number}</span>

              <div className='how-it-works-icon'>{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < steps.length - 1 && <StepArrow />}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorks;
