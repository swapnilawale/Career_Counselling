import React, { useState } from "react";
//import "../styles/Slider.css";

const Slider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const expandBox = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="slider-container">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`slider-box ${expandedIndex === index ? "expanded" : ""}`}
          onClick={() => expandBox(index)}
        >
          Box {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Slider;
