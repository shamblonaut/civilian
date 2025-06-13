import "../styles/Navigator.css";

export default function Navigator({
  sections,
  setActiveSection,
  showCV,
  setShowCV,
  checkCVValidity,
  toggleCV,
  loadExample,
  clearCV,
  menuHidden,
  setMenuHidden,
}) {
  return (
    <>
      <nav className={`sections ${menuHidden && "vertical-hidden"}`}>
        <h1>Sections</h1>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                onClick={() => {
                  setMenuHidden(true);

                  if (!checkCVValidity(true, false, true)) {
                    return;
                  }

                  setActiveSection(section);
                  setShowCV(false);
                }}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`app-actions ${menuHidden && "vertical-hidden"}`}>
        <button
          className="load-example"
          type="button"
          onClick={() => {
            loadExample();
            setMenuHidden(true);
          }}
        >
          Load Example
        </button>
        <button
          className="cv-clear"
          type="button"
          onClick={() => {
            clearCV();
            setMenuHidden(true);
          }}
        >
          Clear CV
        </button>
        {(checkCVValidity() || showCV) && (
          <button type="button" className="cv-toggle" onClick={toggleCV}>
            <p>{showCV ? "Edit CV" : "View CV"}</p>
          </button>
        )}
      </div>
    </>
  );
}
