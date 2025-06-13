import { Save, ArrowDownFromLine, Book, Trash } from "lucide-react";
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
  saveCV,
  loadCV,
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

                  // Navigate to selected section
                  setActiveSection(section);

                  // Close CV page if open
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
        {(checkCVValidity() || showCV) && (
          <button type="button" className="cv-toggle" onClick={toggleCV}>
            <p>{showCV ? "Edit CV" : "View CV"}</p>
          </button>
        )}

        <div className="grid-actions">
          <button
            className="save-cv"
            type="button"
            onClick={() => {
              saveCV();
              setMenuHidden(true);
            }}
          >
            <Save className="icon" />
            <p>Save</p>
          </button>
          <button
            className="load-cv"
            type="button"
            onClick={() => {
              loadCV();
              setMenuHidden(true);
            }}
          >
            <ArrowDownFromLine className="icon" />
            <p>Load</p>
          </button>
          <button
            className="load-example"
            type="button"
            onClick={() => {
              loadExample();
              setMenuHidden(true);
            }}
          >
            <Book className="icon" />
            <p>Example</p>
          </button>
          <button
            className="cv-clear"
            type="button"
            onClick={() => {
              clearCV();
              setMenuHidden(true);
            }}
          >
            <Trash className="icon" />
            <p>Clear</p>
          </button>
        </div>
      </div>
    </>
  );
}
