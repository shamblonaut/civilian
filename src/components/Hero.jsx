import "../styles/Hero.css";

import { ChevronRight } from "lucide-react";

export default function Hero({ setShowHero }) {
  return (
    <>
      <header>
        <img src="/cv.svg" alt="Civilian Logo" />
        <h1>CIVILIAN</h1>
      </header>
      <div className="hero">
        <div>
          <p>Take your career to the</p>
          <p className="hero-decorative">NEXT LEVEL</p>
          <p>with an eye-catching CV</p>
        </div>
        <button onClick={() => setShowHero(false)}>
          Get Started <ChevronRight />
        </button>
      </div>
    </>
  );
}
