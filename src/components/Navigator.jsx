export default function Navigator({
  sections,
  setActiveSection,
  showCV,
  setShowCV,
}) {
  return (
    <nav>
      <ul className="sections">
        {sections.map((section) => (
          <a
            href="#"
            key={section.id}
            onClick={() => {
              setActiveSection(section);
              setShowCV(false);
            }}
          >
            {section.title}
          </a>
        ))}
      </ul>
      {!showCV && (
        <button type="button" onClick={() => setShowCV(true)}>
          View CV
        </button>
      )}
    </nav>
  );
}
