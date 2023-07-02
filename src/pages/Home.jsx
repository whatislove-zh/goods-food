import FoodSwiper from "../components/Home/FoodSwiper";
import Hero from "../components/Home/Hero"

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="home-wrapper">
          <FoodSwiper />
          <Hero />
        </div>
      </div>
    </section>
  );
}
