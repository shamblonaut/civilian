import "../styles/Viewport.css";

import CV from "./CV.jsx";

export default function Viewport({ data }) {
  return (
    <div className="viewport">
      <h2 className="section-title">Your Curriculum Vitae</h2>
      <CV data={data} />
    </div>
  );
}
