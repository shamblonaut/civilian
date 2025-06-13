import "../styles/Viewport.css";

import CV from "./CV.jsx";

export default function Viewport({ data, toggleCV }) {
  return (
    <div className="viewport">
      <h2 className="section-title">Your Curriculum Vitae</h2>
      <CV data={data} />
      <button type="button" className="cv-toggle" onClick={toggleCV}>
        <p>Edit CV</p>
      </button>
    </div>
  );
}
