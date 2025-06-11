import "../styles/Navigator.css";

export default function Navigator({
  sections,
  setActiveSection,
  setData,
  showCV,
  setShowCV,
  loadExample,
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

      <div className="app-actions">
        <button className="load-example" type="button" onClick={loadExample}>
          Load Example
        </button>
        <button className="cv-clear" type="button" onClick={() => setData({})}>
          Clear CV
        </button>
        <button
          className="cv-reveal"
          type="button"
          disabled={showCV}
          onClick={() => setShowCV(true)}
        >
          View CV
        </button>
      </div>
    </nav>
  );
}
