import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';

function AdvisoryBoard({ id }) {
  return (
    <section className='consortium-section consortium-advisory' id={id} aria-labelledby='advisory-board-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>Advisory board</p>

          <h2 id='advisory-board-title'>External expertise supporting the project.</h2>
        </Reveal>

        <Reveal>
          <UnderConstructionNotice
            title='Advisory Board content is under construction'
            text='The Advisory Board is part of the approved FOSMARIN website structure. Member information will be added when it is provided or confirmed by the client.'
          />
        </Reveal>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
