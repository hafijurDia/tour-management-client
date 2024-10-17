// SwiperSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/effect-fade";
import "./SwipperSlider.css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const SwipperSlider = () => {
  return (
    <section className="w-full relative z-0">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]} // Add Navigation module
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <Fade>
          <SwiperSlide className="">
            <div
              className="slide-content"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url('https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/home1-banner-img1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full lg:w-2/3 py-20 md:py-40 px-10">
                <div className="animated-country flex items-center justify-center">
                  <span className="text-white text-xl pr-2 text-red-800">
                    <CiLocationOn />
                  </span>
                  <span className="text-xl text-white">Bangladesh</span>
                </div>
                <h1 className="animated-title text-4xl lg:text-6xl text-white font-black tracking-widest">
                  Let's trek and venture to a spot.
                </h1>
                <p className="animated-description text-base text-white w-full lg:w-2/3 mx-auto">
                  Life is unpredictable, and we understand that plans might
                  change. Enjoy flexible booking options, so you can reschedule
                  or modify your trip with ease.
                </p>

                <NavLink to="http://localhost:5173/country/bangladesh">
                  <button className="animated-button text-normal text-white bg-green-600 rounded-md py-2 px-5  hover:bg-black hover:scale-105 transition-all duration-500 ease-in-out">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide-content"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url('https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/home1-banner-img2.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full lg:w-2/3 py-20 md:py-40 px-10">
                <div className="animated-country flex items-center justify-center">
                  <span className="text-white text-xl pr-2 text-red-800">
                    <CiLocationOn />
                  </span>
                  <span className="text-xl text-white">Thailand</span>
                </div>
                <h1 className="animated-title text-4xl lg:text-6xl text-white font-black tracking-widest">
                  Discover the hidden gems of the wild.
                </h1>
                <p className="animated-description text-base text-white w-full lg:w-2/3 mx-auto">
                  Explore breathtaking landscapes, from serene forests to
                  majestic mountains, with tailor-made adventures that let you
                  uncover nature’s best-kept secrets.
                </p>
                <NavLink to="http://localhost:5173/country/thailand">
                  <button className="animated-button text-normal text-white bg-green-600 rounded-md py-2 px-5  hover:bg-black hover:scale-105 transition-all duration-500 ease-in-out">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide-content"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url('https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/home1-banner-img4.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full lg:w-2/3 py-20 md:py-40 px-10">
                <div className="animated-country flex items-center justify-center">
                  <span className="text-white text-xl pr-2 text-red-800">
                    <CiLocationOn />
                  </span>
                  <span className="text-xl text-white">Malaysia</span>
                </div>
                <h1 className="animated-title text-4xl lg:text-6xl text-white font-black tracking-widest">
                  Unleash your inner explorer and adventurer
                </h1>
                <p className="animated-description text-base text-white w-full lg:w-2/3 mx-auto">
                  Break free from the routine and immerse yourself in adventures
                  that redefine travel. Whether it’s hiking the tallest peaks or
                  wandering through lush valleys, every moment is an experience.
                </p>
                <NavLink to="http://localhost:5173/country/malaysia">
                  <button className="animated-button text-normal text-white bg-green-600 rounded-md py-2 px-5  hover:bg-black hover:scale-105 transition-all duration-500 ease-in-out">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide-content"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url('https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/home1-banner-img3.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full lg:w-2/3 py-20 md:py-40 px-10">
                <div className="animated-country flex items-center justify-center">
                  <span className="text-white text-xl pr-2 text-red-800">
                    <CiLocationOn />
                  </span>
                  <span className="text-xl text-white">Indonesia</span>
                </div>
                <h1 className="animated-title text-4xl lg:text-6xl text-white font-black tracking-widest">
                  Your adventure starts now and forever.
                </h1>
                <p className="animated-description text-base text-white w-full lg:w-2/3 mx-auto">
                  Get ready for unforgettable journeys with personalized
                  itineraries, ensuring every adventure is packed with
                  excitement, wonder, and flexibility to suit your pace.
                </p>
                <NavLink to="http://localhost:5173/country/indonesia">
                  <button className="animated-button text-normal text-white bg-green-600 rounded-md py-2 px-5 hover:bg-black hover:scale-105 transition-all duration-500 ease-in-out">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        </Fade>
        {/* Add Custom Navigation Arrows */}
        <div className="swiper-button-next">⮞</div>
        <div className="swiper-button-prev">⮜</div>
      </Swiper>
    </section>
  );
};

export default SwipperSlider;
