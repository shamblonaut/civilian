import "../styles/Hero.css";

import { ChevronRight } from "lucide-react";

export default function Hero({ setExist }) {
  return (
    <div className="hero">
      <div>
        <p>Take your career to the</p>
        <p className="hero-decorative">NEXT LEVEL</p>
        <p>with an eye-catching CV</p>
      </div>
      <button>
        Get Started <ChevronRight />
      </button>
    </div>
  );
}
