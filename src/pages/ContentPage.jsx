import UnderConstructionNotice from '../components/UnderConstructionNotice';

import { clientInputSections } from '../data/clientInputSections';

function ContentPage({ page }) {
  return (
    <div className='content-page'>
      <h1>{page.title}</h1>

      {page.sections.map((section) => {
        const needsClientInput = clientInputSections.has(section.id);

        return (
          <section key={section.id} id={section.id}>
            <h2>{section.title}</h2>

            {needsClientInput ? (
              <UnderConstructionNotice
                title={`${section.title} is under construction`}
                text='Content for this section will be added when the relevant project material is provided or confirmed by the client.'
              />
            ) : (
              <p>Content coming soon.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default ContentPage;
