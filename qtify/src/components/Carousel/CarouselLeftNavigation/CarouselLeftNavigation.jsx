import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.CarouselLeftNavigation_wrapper}>
      <img
        src={require("../../../assets/LeftArrow.png")}
        alt="Left navigation icon"
        onClick={() => {
          swiper.slidePrev();
        }}
      />
    </div>
  );
};

export default CarouselLeftNavigation;
