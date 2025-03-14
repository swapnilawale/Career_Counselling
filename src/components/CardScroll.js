import React, { useEffect } from "react";
//import "../styles/CardScroll.css";

const CardScroll = () => {
  useEffect(() => {
    function handleScroll() {
      document.querySelectorAll(".card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const scaleFactor = Math.max(0.8, 1 - (rect.top / window.innerHeight) * 0.2);

        card.querySelector(".card__inner").style.transform = `scale(${scaleFactor})`;
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="card-container">
      <div className="card"><div className="card__inner">Card 1</div></div>
      <div className="card"><div className="card__inner">Card 2</div></div>
      <div className="card"><div className="card__inner">Card 3</div></div>
    </div>
  );
};

export default CardScroll;
