// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function FoodSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height:"250px", background:"grey"}}>Slide 6</SwiperSlide>
        
      </Swiper>
    </>
  );
}
