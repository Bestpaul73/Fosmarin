import { useEffect, useState } from 'react';

import Reveal from './Reveal';

import { useLanguage } from '../i18n/LanguageContext';

function HeroVisual() {
  const { translations } = useLanguage();

  const visual = translations.home.heroVisual;

  const readoutMessages = visual.readoutMessages;

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
        <title id='hero-visual-title'>{visual.title}</title>

        <desc id='hero-visual-description'>{visual.description}</desc>

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
        </defs>

        {/* Water */}
        <rect width='640' height='560' fill='url(#hero-sea)' />

        {/* Surface */}
        <path
          d='M0,40 Q40,25 80,40 T160,40 T240,40 T320,40 T400,40 T480,40 T560,40 T640,40'
          fill='none'
          stroke='var(--hero-surface-line)'
          strokeWidth='2'
        />

        {/* Ship */}
        <g transform='translate(410,60)'>
          <path
            d='M-34,20 L34,20 L24,36 L-24,36 Z'
            fill='var(--hero-panel2)'
            stroke='var(--hero-cyan)'
            strokeWidth='1.4'
          />

          <rect
            x='-4'
            y='-2'
            width='20'
            height='16'
            fill='var(--hero-panel2)'
            stroke='var(--hero-cyan)'
            strokeWidth='1.2'
          />

          <line x1='6' y1='-2' x2='6' y2='-22' stroke='var(--hero-mist)' strokeWidth='1.4' />
        </g>

        {/* Vessel detection line */}
        <line
          x1='410'
          y1='96'
          x2='390'
          y2='425'
          stroke='var(--hero-coral)'
          strokeWidth='1.2'
          strokeDasharray='4 5'
          opacity='0.55'
        />

        {/* Seabed */}
        <path
          d='M0,420 C90,395 150,440 240,415 C330,392 360,430 460,410 C540,394 590,425 640,405 L640,560 L0,560 Z'
          fill='url(#hero-floor)'
        />

        <path
          d='M0,420 C90,395 150,440 240,415 C330,392 360,430 460,410 C540,394 590,425 640,405'
          fill='none'
          stroke='var(--hero-floor-line)'
          strokeWidth='1'
        />

        {/* Dragging anchor */}
        <g transform='translate(180,398)'>
          <path
            d='M0,-16 L0,10 M-11,10 a11,9 0 0 0 22,0'
            fill='none'
            stroke='var(--hero-coral)'
            strokeWidth='2.4'
            strokeLinecap='round'
          />

          <line x1='-8' y1='-10' x2='8' y2='-10' stroke='var(--hero-coral)' strokeWidth='2.4' strokeLinecap='round' />

          <circle cx='0' cy='-18' r='3' fill='none' stroke='var(--hero-coral)' strokeWidth='2' />

          <path
            d='M0,-16 C-30,-4 -46,10 -66,6'
            fill='none'
            stroke='var(--hero-coral)'
            strokeWidth='1.6'
            strokeDasharray='3 4'
            opacity='0.7'
          />
        </g>

        {/* Seismic activity */}
        <g transform='translate(500,432)'>
          <path
            d='M-20,10 L-6,-8 L4,4 L14,-14 L26,6'
            fill='none'
            stroke='var(--hero-amber)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>

        {/* Fibre-optic cable */}
        <path
          id='hero-cable-path'
          d='M10,440 C120,410 160,455 260,428 C350,404 380,438 470,418 C540,402 580,430 630,412'
          fill='none'
          stroke='var(--hero-cable-outer)'
          strokeWidth='7'
          strokeLinecap='round'
        />

        <path
          d='M10,440 C120,410 160,455 260,428 C350,404 380,438 470,418 C540,402 580,430 630,412'
          fill='none'
          stroke='var(--hero-cable-inner)'
          strokeWidth='3'
          strokeLinecap='round'
        />

        {/* Light pulses travelling through the fibre */}
        <circle className='hero-pulse' r='7' fill='url(#hero-pulse-glow)'>
          <animateMotion dur='3.2s' repeatCount='indefinite'>
            <mpath href='#hero-cable-path' />
          </animateMotion>
        </circle>

        <circle className='hero-pulse' r='7' fill='url(#hero-pulse-glow)'>
          <animateMotion dur='3.2s' begin='1.05s' repeatCount='indefinite'>
            <mpath href='#hero-cable-path' />
          </animateMotion>
        </circle>

        <circle className='hero-pulse' r='7' fill='url(#hero-pulse-glow)'>
          <animateMotion dur='3.2s' begin='2.1s' repeatCount='indefinite'>
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

        {/* Threat detection rings */}
        <circle
          className='hero-alert-ring hero-alert-ring--coral'
          cx='180'
          cy='398'
          r='7'
          fill='none'
          stroke='var(--hero-coral)'
          strokeWidth='1.4'
        />

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
