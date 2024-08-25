import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import control_left from "../../../assets/control_left.png";
import control_right from "../../../assets/control_right.png";
import simf from "../../../assets/simf.png";
import feo from "../../../assets/feo.png";
import yalta from "../../../assets/yalta.png";

const sliderTitles = [
  "Симферополь",
  "Феодосия",
  "Керчь",
  "Ялта",
  "Алушта",
  "Евпатория",
  "Коктебель",
  "Симеиз",
  "Севастополь",
];

const images = [simf, feo, yalta, simf, feo, yalta, simf, feo, yalta];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(100 / 3); // Ширина одного слайда в процентах
  const gap = 14; // Gap между слайдами в пикселях

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= sliderTitles.length - 3) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 1) {
        return sliderTitles.length - 3;
      }
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlideWidth(100 / 3);
      } else {
        setSlideWidth(100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const transformValue = `translateX(calc(-${
        currentIndex * slideWidth
      }% - ${currentIndex * gap}px))`;
      sliderRef.current.style.transition = "transform 0.8s ease";
      sliderRef.current.style.transform = transformValue;

      // Сброс позиции после завершения анимации
      const transitionEndHandler = () => {
        if (currentIndex === sliderTitles.length) {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = `translateX(0)`;
          setCurrentIndex(0);
        } else if (currentIndex === -1) {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = `translateX(calc(-${
            (sliderTitles.length - 1) * slideWidth
          }% - ${(sliderTitles.length - 1) * gap}px))`;
          setCurrentIndex(sliderTitles.length - 1);
        }
      };

      sliderRef.current.addEventListener("transitionend", transitionEndHandler);
      return () => {
        sliderRef.current?.removeEventListener(
          "transitionend",
          transitionEndHandler
        );
      };
    }
  }, [currentIndex, slideWidth]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderContainer} ref={sliderRef}>
          {sliderTitles.map((title, index) => (
            <div
              key={index}
              className={styles.sliderSlide}
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <h2 className={styles.sliderTitle}>{title}</h2>
              <button className={styles.sliderButton_more}>Подробнее</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sliderControls}>
        <button className={styles.sliderButton} onClick={prevSlide}>
          <img src={control_left} alt="" />
        </button>
        <button className={styles.sliderButton} onClick={nextSlide}>
          <img src={control_right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
