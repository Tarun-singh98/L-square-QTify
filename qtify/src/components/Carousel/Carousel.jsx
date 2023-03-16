import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Carousel({ data, showData }) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{showData(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
