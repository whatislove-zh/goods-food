import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swipeData = ["slide1", "slide2", "slide3"];

const Slider = () => {
  return (
    <>
      <Swiper
         pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {swipeData.map((el) => (
          <SwiperSlide key={el}>
            <h2 className="slide-title">Header2</h2>
            <p className="slide-text">text</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
