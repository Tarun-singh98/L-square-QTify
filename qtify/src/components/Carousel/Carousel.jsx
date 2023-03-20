import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import styles from "./Carousel.module.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data, showData }) {
  return (
    <div className={styles.carousel_main_wrapper}>
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((ele) => {
          return <SwiperSlide key={ele.id}>{showData(ele)}  </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
