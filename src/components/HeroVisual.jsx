import { useEffect, useState } from 'react';

import { useLanguage } from '../i18n/LanguageContext';

import Reveal from './Reveal';

function HeroVisual() {
  const { translations } = useLanguage();

  const heroVisual = translations.home.heroVisual;
  const readoutMessages = heroVisual.readoutMessages;

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setMessageIndex(0);
  }, [readoutMessages]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMessageIndex((currentIndex) => (currentIndex + 1) % readoutMessages.length);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [readoutMessages]);

  return (
    <Reveal className='hero-visual'>
      <span className='hero-readout' aria-hidden='true'>
        {readoutMessages[messageIndex]}
      </span>

      <svg viewBox='0 0 640 560' role='img' aria-labelledby='hero-visual-title hero-visual-description'>
        <title id='hero-visual-title'>{heroVisual.title}</title>

        <desc id='hero-visual-description'>{heroVisual.description}</desc>

        <defs>
          <linearGradient id='hero-sea' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='var(--hero-sea-top)' />

            <stop offset='55%' stopColor='var(--hero-deep)' />

            <stop offset='100%' stopColor='var(--hero-abyss)' />
          </linearGradient>

          <linearGradient id='hero-floor' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='var(--hero-floor-top)' />

            <stop offset='100%' stopColor='var(--hero-floor-bottom)' />
          </linearGradient>

          <radialGradient id='hero-pulse-glow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='var(--hero-cyan)' stopOpacity='0.95' />

            <stop offset='100%' stopColor='var(--hero-cyan)' stopOpacity='0' />
          </radialGradient>

          <clipPath id='hero-surface-clip'>
            <rect x='0' y='0' width='640' height='210' />
          </clipPath>
        </defs>

        {/* Water */}
        <rect width='640' height='560' fill='url(#hero-sea)' fillOpacity='0.84' />

        {/* Animated surface — 50px below original position */}
        <g transform='translate(0,50)' clipPath='url(#hero-surface-clip)' aria-hidden='true'>
          {/* Upper wave */}
          <g opacity='0.98'>
            <path
              d='M-144,82
                 Q-108,70 -72,82
                 T0,82
                 T72,82
                 T144,82
                 T216,82
                 T288,82
                 T360,82
                 T432,82
                 T504,82
                 T576,82
                 T648,82
                 T720,82
                 T792,82'
              fill='none'
              stroke='var(--hero-surface-line)'
              strokeWidth='2.4'
            />

            <animateTransform
              attributeName='transform'
              type='translate'
              from='0 0'
              to='-144 0'
              dur='8.5s'
              repeatCount='indefinite'
            />
          </g>

          {/* Lower wave */}
          <g opacity='0.62'>
            <path
              d='M-144,88
                 Q-108,78 -72,88
                 T0,88
                 T72,88
                 T144,88
                 T216,88
                 T288,88
                 T360,88
                 T432,88
                 T504,88
                 T576,88
                 T648,88
                 T720,88
                 T792,88'
              fill='none'
              stroke='var(--hero-surface-line)'
              strokeWidth='1.9'
            />

            <animateTransform
              attributeName='transform'
              type='translate'
              from='-144 0'
              to='0 0'
              dur='6s'
              repeatCount='indefinite'
            />
          </g>
        </g>

        {/* Ship — 50px below original position */}
        <g transform='translate(280,126)'>
          <g>
            <animateTransform
              attributeName='transform'
              type='rotate'
              values='-2.4 0 0; 2.4 0 0; -2.4 0 0'
              keyTimes='0; 0.5; 1'
              dur='4.2s'
              calcMode='spline'
              keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'
              repeatCount='indefinite'
            />

            <g transform='translate(-130,-54)'>
              {/* Hull */}
              <path
                d='M0,48
                   L226,48
                   L260,42
                   L248,66
                   L20,66
                   Z'
                fill='var(--hero-panel2)'
                stroke='var(--hero-cyan)'
                strokeWidth='1.7'
                strokeLinejoin='round'
              />

              {/* Deck line */}
              <path d='M14,48 L232,48' fill='none' stroke='var(--hero-cyan)' strokeWidth='1.2' opacity='0.9' />

              {/* Funnel */}
              <path
                d='M22,20
                   L36,20
                   L34,46
                   L20,46
                   Z'
                fill='var(--hero-panel2)'
                stroke='var(--hero-cyan)'
                strokeWidth='1.3'
                strokeLinejoin='round'
              />

              {/* Bridge */}
              <path
                d='M42,16
                   L82,16
                   L88,48
                   L36,48
                   Z'
                fill='var(--hero-panel2)'
                stroke='var(--hero-cyan)'
                strokeWidth='1.4'
                strokeLinejoin='round'
              />

              {/* Bridge windows */}
              <rect x='50' y='22' width='9' height='5' rx='1' fill='var(--hero-cyan)' opacity='0.82' />

              <rect x='63' y='22' width='9' height='5' rx='1' fill='var(--hero-cyan)' opacity='0.82' />

              {/* Mast */}
              <line x1='63' y1='16' x2='63' y2='-2' stroke='var(--hero-mist)' strokeWidth='1.4' />

              <line x1='57' y1='6' x2='70' y2='6' stroke='var(--hero-mist)' strokeWidth='1' />

              {/* Containers */}
              <g fill='var(--hero-panel2)' stroke='var(--hero-cyan)' strokeWidth='1.1'>
                <rect x='98' y='16' width='30' height='10' rx='1.5' />
                <rect x='130' y='16' width='30' height='10' rx='1.5' />
                <rect x='162' y='16' width='30' height='10' rx='1.5' />
                <rect x='194' y='16' width='30' height='10' rx='1.5' />
                <rect x='98' y='28' width='30' height='10' rx='1.5' />
                <rect x='130' y='28' width='30' height='10' rx='1.5' />
                <rect x='162' y='28' width='30' height='10' rx='1.5' />
                <rect x='194' y='28' width='30' height='10' rx='1.5' />
                <rect x='98' y='40' width='30' height='8' rx='1.5' />
                <rect x='130' y='40' width='30' height='8' rx='1.5' />
                <rect x='162' y='40' width='30' height='8' rx='1.5' />
                <rect x='194' y='40' width='30' height='8' rx='1.5' />
              </g>

              {/* Hawse hole */}
              <circle cx='242' cy='55' r='4' fill='none' stroke='var(--hero-cyan)' strokeWidth='1.8' />
            </g>
          </g>
        </g>

        {/* Anchor chain — smooth curve, attached to hawse hole */}
        <path
          d='M391.94,122.31
             C378,215 315,338 195,384'
          fill='none'
          stroke='var(--hero-coral)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeDasharray='2.5 6'
          opacity='0.9'
        >
          <animate
            attributeName='d'
            values='
              M391.94,122.31
              C378,215 315,338 195,384;

              M391.86,131.69
              C376,224 323,344 201,388;

              M391.94,122.31
              C378,215 315,338 195,384
            '
            keyTimes='0; 0.5; 1'
            dur='4.2s'
            calcMode='spline'
            keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'
            repeatCount='indefinite'
          />
        </path>

        {/* Seabed */}
        <path
          d='M0,420
             C90,395 150,440 240,415
             C330,392 360,430 460,410
             C540,394 590,425 640,405
             L640,560
             L0,560
             Z'
          fill='url(#hero-floor)'
          fillOpacity='0.9'
        />

        <path
          d='M0,420
             C90,395 150,440 240,415
             C330,392 360,430 460,410
             C540,394 590,425 640,405'
          fill='none'
          stroke='var(--hero-floor-line)'
          strokeWidth='1'
        />

        {/* Dragging anchor */}
        <g transform='translate(180,398)'>
          <g>
            <path
              d='M0,-16
                 L0,10
                 M-11,10
                 a11,9 0 0 0 22,0'
              fill='none'
              stroke='var(--hero-coral)'
              strokeWidth='2.4'
              strokeLinecap='round'
            />

            <line x1='-8' y1='-10' x2='8' y2='-10' stroke='var(--hero-coral)' strokeWidth='2.4' strokeLinecap='round' />

            <circle cx='0' cy='-18' r='3' fill='none' stroke='var(--hero-coral)' strokeWidth='2' />

            <animateTransform
              attributeName='transform'
              type='rotate'
              values='30 0 12; 44 0 12; 30 0 12'
              keyTimes='0; 0.5; 1'
              dur='4.2s'
              calcMode='spline'
              keySplines='0.42 0 0.58 1; 0.42 0 0.58 1'
              repeatCount='indefinite'
            />
          </g>
        </g>

        {/* Seismic activity */}
        <g transform='translate(500,432)'>
          <g className='hero-seismic-marker'>
            <path
              d='M-20,10
                 L-6,-8
                 L4,4
                 L14,-14
                 L26,6'
              fill='none'
              stroke='var(--hero-amber)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </g>

        {/* Fibre-optic cable */}
        <path
          id='hero-cable-path'
          d='M10,440
             C120,410 160,455 260,428
             C350,404 380,438 470,418
             C540,402 580,430 630,412'
          fill='none'
          stroke='var(--hero-cable-outer)'
          strokeWidth='7'
          strokeLinecap='round'
        />

        <path
          d='M10,440
             C120,410 160,455 260,428
             C350,404 380,438 470,418
             C540,402 580,430 630,412'
          fill='none'
          stroke='var(--hero-cable-inner)'
          strokeWidth='3'
          strokeLinecap='round'
        />

        {/* Light pulses travelling through the fibre */}
        <circle className='hero-pulse' r='7' fill='url(#hero-pulse-glow)'>
          <animateMotion dur='3.8s' repeatCount='indefinite'>
            <mpath href='#hero-cable-path' />
          </animateMotion>
        </circle>

        <circle className='hero-pulse' r='7' fill='url(#hero-pulse-glow)'>
          <animateMotion dur='3.8s' begin='1.9s' repeatCount='indefinite'>
            <mpath href='#hero-cable-path' />
          </animateMotion>
        </circle>

        {/* FOAS sensing points */}
        <g className='hero-sensors'>
          <circle cx='70' cy='429' r='2.4' />
          <circle cx='150' cy='438' r='2.4' />
          <circle cx='230' cy='431' r='2.4' />
          <circle cx='310' cy='415' r='2.4' />

          <circle className='hero-sensor hero-sensor--alert' cx='390' cy='429' r='2.8' />

          <circle cx='450' cy='420' r='2.4' />

          <circle className='hero-sensor hero-sensor--warning' cx='530' cy='410' r='2.8' />

          <circle cx='600' cy='415' r='2.4' />
        </g>

        {/* Anchor detection ring */}
        <circle
          className='hero-alert-ring hero-alert-ring--coral'
          cx='180'
          cy='410'
          r='7'
          fill='none'
          stroke='var(--hero-coral)'
          strokeWidth='1.4'
        />

        {/* Seismic detection ring */}
        <circle
          className='hero-alert-ring hero-alert-ring--amber'
          cx='500'
          cy='432'
          r='7'
          fill='none'
          stroke='var(--hero-amber)'
          strokeWidth='1.4'
        />
      </svg>
    </Reveal>
  );
}

export default HeroVisual;
