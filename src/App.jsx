import { useState } from "react";
import "./styles/App.css";

import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <div className="logotype">💼 CIVILIAN</div>
      <div className="content">
        <Hero />
      </div>
    </>
  );
}

export default App;
