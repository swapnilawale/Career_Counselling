import React, { useEffect, useState } from "react";
//import "../styles/RevealSteps.css";

const RevealSteps = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const revealSteps = () => {
      const steps = document.querySelectorAll(".step");
      steps.forEach((step, index) => {
        const stepPosition = step.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (stepPosition < windowHeight * 0.85 && !visibleSteps.includes(index)) {
          setVisibleSteps((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", revealSteps);
    revealSteps();

    return () => window.removeEventListener("scroll", revealSteps);
  }, [visibleSteps]);

  return (
    <div className="steps-container">
      <div className={`step ${visibleSteps.includes(0) ? "visible" : ""}`}>Step 1</div>
      <div className={`step ${visibleSteps.includes(1) ? "visible" : ""}`}>Step 2</div>
      <div className={`step ${visibleSteps.includes(2) ? "visible" : ""}`}>Step 3</div>
    </div>
  );
};

export default RevealSteps;
