import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  return (
    <div
      className={styles.CarouselRightNavigation_wrapper}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <img
        src={require("../../../assets/RightArrow.png")}
        alt="Right navigation icon"
      />
    </div>
  );
};

export default CarouselRightNavigation;
