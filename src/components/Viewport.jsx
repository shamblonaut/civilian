import "../styles/Viewport.css";

import CV from "./CV.jsx";

export default function Viewport({ data }) {
  return (
    <div className="viewport">
      <CV data={data} />
    </div>
  );
}
