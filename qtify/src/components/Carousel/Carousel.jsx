import React, { useEffect , useRef} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import styles from "./Carousel.module.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  console.log(data);
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

function Carousel({ data, showData }) {
  return (
    <div className={styles.carousel_main_wrapper}>
      <Swiper
        spaceBetween={27}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        {data.map((ele) => {
          return (
            <SwiperSlide className={styles.swiper} key={ele.id}>
              {showData(ele)}
            </SwiperSlide>
          );
        })}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}

export default Carousel;
