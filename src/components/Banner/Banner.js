import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Banner.module.scss";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "https://64276eb346fd35eb7c3fbedd.mockapi.io/banner"
        );
        setSlides(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных баннера", error);
      }
    };
    fetchSlides();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.leftSide}>
        <img src="./img/banner-logo.png" alt="logo" className={styles.logo} />
        {slides.length > 0 && <h2>{slides[currentImageIndex].title}</h2>}
        <h4>Coming Soon!</h4>
        <button className={styles.button}>Let me Know!</button>
      </div>
      <div className={styles.rightSide}>
        {slides.length > 0 && (
          <img
            src={slides[currentImageIndex].imageUrl}
            alt="слайд"
            style={{ width: "75%", height: "auto" }}
          />
        )}
        <button className={styles.sliderButton} onClick={nextImage}>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H14.7143"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="gray"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
