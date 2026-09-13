import Reveal from './Reveal';

import { consortiumCountries, partners } from '../data/partners';

const mapPoints = {
  FO: {
    x: 165,
    y: 72,
  },
  UK: {
    x: 205,
    y: 235,
  },
  DK: {
    x: 350,
    y: 190,
  },
  AT: {
    x: 380,
    y: 330,
  },
  IT: {
    x: 410,
    y: 390,
  },
  ES: {
    x: 230,
    y: 425,
  },
  EL: {
    x: 515,
    y: 425,
  },
  CY: {
    x: 610,
    y: 455,
  },
};

function PartnerMap({ id }) {
  return (
    <section className='consortium-section consortium-map' id={id} aria-labelledby='partner-map-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>Partner map</p>

          <h2 id='partner-map-title'>A European consortium spanning eight countries.</h2>

          <p className='consortium-section-intro'>
            Research organisations, technology providers, operators and authorities across Europe contribute to the
            development and validation of FOSMARIN.
          </p>
        </Reveal>

        <Reveal className='partner-map-layout'>
          <div className='partner-map-visual'>
            <svg
              className='partner-map-svg'
              viewBox='0 0 760 560'
              role='img'
              aria-labelledby='partner-map-svg-title partner-map-svg-desc'
            >
              <title id='partner-map-svg-title'>FOSMARIN partner countries in Europe</title>

              <desc id='partner-map-svg-desc'>
                Schematic map of Europe showing FOSMARIN partners in the Faroe Islands, United Kingdom, Denmark,
                Austria, Italy, Spain, Greece and Cyprus.
              </desc>

              {/* Decorative map grid */}
              <defs>
                <pattern id='partner-map-grid' width='52' height='52' patternUnits='userSpaceOnUse'>
                  <path d='M 52 0 L 0 0 0 52' className='partner-map-grid-line' />
                </pattern>

                <radialGradient id='partner-map-glow' cx='50%' cy='50%' r='50%'>
                  <stop offset='0%' stopColor='var(--map-cyan)' stopOpacity='0.14' />

                  <stop offset='100%' stopColor='var(--map-cyan)' stopOpacity='0' />
                </radialGradient>
              </defs>

              <rect width='760' height='560' fill='url(#partner-map-grid)' />

              <ellipse cx='390' cy='310' rx='300' ry='230' fill='url(#partner-map-glow)' />

              {/* Mainland Europe — deliberately schematic */}
              <path
                className='partner-map-land'
                d='
                  M170 418
                  L145 392
                  L148 354
                  L170 332
                  L194 313
                  L204 281
                  L230 263
                  L250 236
                  L280 227
                  L304 205
                  L332 202
                  L352 216
                  L380 211
                  L409 223
                  L441 221
                  L470 236
                  L500 238
                  L529 259
                  L565 267
                  L586 292
                  L610 304
                  L619 327
                  L599 343
                  L575 342
                  L557 361
                  L535 363
                  L516 382
                  L498 390
                  L486 416
                  L461 422
                  L442 405
                  L420 407
                  L405 388
                  L388 373
                  L367 370
                  L350 387
                  L326 388
                  L310 408
                  L281 414
                  L260 433
                  L224 437
                  L198 430
                  Z
                '
              />

              {/* Scandinavia */}
              <path
                className='partner-map-land'
                d='
                  M338 197
                  L326 168
                  L338 137
                  L360 111
                  L370 76
                  L392 53
                  L411 66
                  L413 99
                  L401 128
                  L407 159
                  L389 184
                  L370 209
                  Z
                '
              />

              {/* United Kingdom */}
              <path
                className='partner-map-land'
                d='
                  M201 270
                  L188 248
                  L192 222
                  L181 201
                  L190 176
                  L205 182
                  L211 205
                  L225 220
                  L219 247
                  Z
                '
              />

              {/* Ireland */}
              <path
                className='partner-map-land partner-map-land--muted'
                d='
                  M166 254
                  L153 237
                  L157 214
                  L171 201
                  L181 217
                  L177 243
                  Z
                '
              />

              {/* Italy */}
              <path
                className='partner-map-land'
                d='
                  M392 364
                  L407 378
                  L414 402
                  L432 418
                  L434 438
                  L450 449
                  L441 458
                  L425 446
                  L416 430
                  L404 421
                  L399 399
                  L384 382
                  Z
                '
              />

              {/* Greece */}
              <path
                className='partner-map-land'
                d='
                  M489 398
                  L507 407
                  L521 425
                  L515 444
                  L498 438
                  L486 422
                  Z
                '
              />

              {/* Cyprus */}
              <path
                className='partner-map-land'
                d='
                  M594 447
                  L619 444
                  L631 451
                  L616 458
                  L596 456
                  Z
                '
              />

              {/* Faroe Islands */}
              <g className='partner-map-islands'>
                <circle cx='159' cy='68' r='4' />
                <circle cx='168' cy='76' r='3' />
                <circle cx='176' cy='67' r='2.5' />
              </g>

              {/* Partner locations */}
              {consortiumCountries.map((country) => {
                const point = mapPoints[country.code];

                const count = partners.filter((partner) => partner.countryCode === country.code).length;

                if (!point) {
                  return null;
                }

                return (
                  <g className='partner-map-marker' key={country.code} transform={`translate(${point.x} ${point.y})`}>
                    <circle className='partner-map-marker-ring' r='13' />

                    <circle className='partner-map-marker-dot' r='5' />

                    <text className='partner-map-marker-code' x='0' y='28' textAnchor='middle'>
                      {country.code}
                    </text>

                    <text className='partner-map-marker-count' x='0' y='42' textAnchor='middle'>
                      {count} {count === 1 ? 'partner' : 'partners'}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className='partner-country-list'>
            {consortiumCountries.map((country) => {
              const countryPartners = partners.filter((partner) => partner.countryCode === country.code);

              return (
                <article key={country.code}>
                  <div>
                    <strong>{country.name}</strong>

                    <span>{country.code}</span>
                  </div>

                  <p>{countryPartners.map((partner) => partner.name).join(' · ')}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PartnerMap;
