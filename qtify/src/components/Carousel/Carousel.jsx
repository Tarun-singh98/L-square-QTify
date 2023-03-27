import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import styles from "./Carousel.module.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data, showData }) {
  return (
    <div className={styles.carousel_main_wrapper}>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <CarouselLeftNavigation />
        {data.map((ele) => {
          return (
            <SwiperSlide className={styles.swiper} key={ele.id}>
              {showData(ele)}{" "}
            </SwiperSlide>
          );
        })}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}

export default Carousel;
