function PageSubnav({ page }) {
  return (
    <nav>
      {page.sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.title}
        </a>
      ))}
    </nav>
  );
}

export default PageSubnav;
