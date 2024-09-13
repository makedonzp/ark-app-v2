import React, { useState, useEffect, useRef } from "react";
import styles from "./ApartmentsSlider.module.css";
import control_left from "../../../../assets/control_left.webp";
import control_right from "../../../../assets/control_right.webp";

const ApartmentsSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= data.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return data.length - 1;
      }
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    if (sliderRef.current) {
      const transformValue = `translateX(calc(-${currentIndex * 100}%))`;
      sliderRef.current.style.transition = "transform 0.8s ease";
      sliderRef.current.style.transform = transformValue;
    }
  }, [currentIndex, data]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  if (data.length === 0) {
    return <div>Нет доступных изображений</div>;
  }

  return (
    <div
      className={styles.slider}
      role="region"
      aria-label="Слайдер изображений квартиры"
    >
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderContainer}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {data.map((image, index) => (
            <div
              key={index}
              className={styles.sliderSlide}
              style={{ backgroundImage: `url(${image})` }}
              aria-label={`Изображение ${index + 1} из ${data.length}`}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.sliderControls}>
        <button
          className={styles.sliderButton}
          onClick={prevSlide}
          aria-label="Предыдущее изображение"
          tabIndex={0}
        >
          <img src={control_left} alt="Предыдущий" />
        </button>
        <button
          className={styles.sliderButton}
          onClick={nextSlide}
          aria-label="Следующее изображение"
          tabIndex={0}
        >
          <img src={control_right} alt="Следующий" />
        </button>
      </div>
    </div>
  );
};

export default ApartmentsSlider;
