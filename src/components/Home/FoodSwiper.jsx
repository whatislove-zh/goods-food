// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { selectFoodInfo } from "../../store/features/getFoodSlice";

export default function FoodSwiper() {
  const { status, error, list } = useSelector(selectFoodInfo);

  return (
    <>
      {status === "loading" && <div> Loading... </div>}
      {status === "rejected" && <div> {error.message} </div>}
      {status === "received" && (
        <>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {list.map((food) => (
              <SwiperSlide
                key={food.id}
                style={{ height: "250px", background: "grey" }}
              >
                {food.name}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}
