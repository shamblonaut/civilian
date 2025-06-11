import "../styles/Navigator.css";

export default function Navigator({
  sections,
  setActiveSection,
  showCV,
  setShowCV,
}) {
  return (
    <nav>
      <div className="sections">
        <h1>Sections</h1>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                onClick={() => {
                  setActiveSection(section);
                  setShowCV(false);
                }}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="cv-reveal"
        type="button"
        disabled={showCV}
        onClick={() => setShowCV(true)}
      >
        View CV
      </button>
    </nav>
  );
}
