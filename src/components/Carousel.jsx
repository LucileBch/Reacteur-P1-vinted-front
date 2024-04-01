// ---------- CAROUSEL Component ----------
// Packages Imports
import { useState } from "react";
import { useMemo } from "react";

// Assets Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Carousel.css";

const Carousel = ({ pictures, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSlide = useMemo(
    () => pictures[currentIndex].secure_url,
    [currentIndex, pictures]
  );

  return (
    <div className="offer__carousel">
      {pictures.length > 1 && (
        <div className="carousel__icons">
          <FontAwesomeIcon
            className="carousel__icons--left"
            icon="angle-left"
            onClick={goToPrevious}
          />
          <FontAwesomeIcon
            className="carousel__icons--right"
            icon="angle-right"
            onClick={goToNext}
          />
        </div>
      )}

      <div className="carousel__image">
        <img src={currentSlide} alt={data.product_name} />
        <span className="slider-index">
          {currentIndex + 1} / {pictures.length}
        </span>
      </div>
    </div>
  );
};

// Export component
export default Carousel;
