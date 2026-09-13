
function ContentPage({ page }) {
  return (
    <div className='content-page'>
      <h1>{page.title}</h1>


      {page.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>

          <p>Content coming soon.</p>
        </section>
      ))}
    </div>
  );
}

export default ContentPage;