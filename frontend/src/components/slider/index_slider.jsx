import { useState } from "react";
import "./style_slider.css";
import Chevron from "../chevron/index_chevron";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  if (!length) return null;

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % length);
  };

  const goToPrev = () => {
    setCurrentIndex((index) => (index - 1 + length) % length);
  };

  return (
    <div className="slider">
      <img
        className="slider-image"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {length > 1 && (
        <>
          <button className="slider-btn prev" onClick={goToPrev}>
            <Chevron direction="left" className="chevron-slider" />
          </button>

          <button className="slider-btn next" onClick={goToNext}>
            <Chevron direction="right" className="chevron-slider" />
          </button>

          <div className="slider-counter">
            {currentIndex + 1}/{length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
