import PageSubnav from '../components/PageSubnav';

function ContentPage({ page }) {
  return (
    <main>
      <h1>{page.title}</h1>

      <PageSubnav page={page} />
      
      {page.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>

          <p>Content coming soon.</p>
        </section>
      ))}
    </main>
  );
}

export default ContentPage;
