import Reveal from './Reveal';

function GetInTouchSection({ id }) {
  return (
    <section className='contact-section contact-details-section' id={id} aria-labelledby='get-in-touch-title'>
      <div className='contact-inner'>
        <Reveal as='header' className='contact-section-header'>
          <p className='contact-eyebrow'>Get in touch</p>

          <h2 id='get-in-touch-title'>Contact the project directly.</h2>

          <p className='contact-section-intro'>
            For general project enquiries, collaboration opportunities or media-related questions, contact the FOSMARIN
            consortium by email.
          </p>
        </Reveal>

        <Reveal className='contact-details-grid'>
          <article className='contact-detail-card'>
            <span>Email</span>

            <h3>General enquiries</h3>

            <a href='mailto:info@fosmarin.eu'>info@fosmarin.eu</a>

            <p>General project, collaboration and communication enquiries.</p>
          </article>

          <article className='contact-detail-card'>
            <span>Website</span>

            <h3>FOSMARIN online</h3>

            <a href='/'>www.fosmarin.eu</a>

            <p>Project information, updates, resources and public outputs.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default GetInTouchSection;
