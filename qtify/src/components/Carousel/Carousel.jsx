import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Carousel({ data, showData }) {
  return (
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((ele) => {
          return <SwiperSlide key={ele.id}>{showData(ele)}</SwiperSlide>;
        })}
      </Swiper>
  );
}

export default Carousel;
