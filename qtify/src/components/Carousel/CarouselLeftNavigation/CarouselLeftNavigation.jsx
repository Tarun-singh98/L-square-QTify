import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  return (
    <div
      className={styles.CarouselLeftNavigation_wrapper}
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <img
        src={require("../../../assets/LeftArrow.png")}
        alt="Left navigation icon"
      />
    </div>
  );
};

export default CarouselLeftNavigation;
