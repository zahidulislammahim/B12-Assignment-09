import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const { gameData } = useContext(AuthContext);

  return (
    <div className="w-full max-w-screen mx-auto -mt-8 space-y-2">
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[...gameData].reverse().map((game) => (
          <SwiperSlide key={game.id}>
            <div className=" overflow-hidden shadow-lg">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-14 object-cover opacity-20 md:h-35 lg:h-60"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        dir="rtl"
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {gameData.map((game) => (
          <SwiperSlide key={game.id}>
            <div className=" overflow-hidden shadow-lg">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-14 object-cover opacity-20 md:h-35 lg:h-60"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[...gameData]
          .sort(() => Math.random() - 0.5)
          .map((game) => (
            <SwiperSlide key={game.id}>
              <div className=" overflow-hidden shadow-lg">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-15 object-cover opacity-20 md:h-45 lg:h-70"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        dir="rtl"
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[...gameData]
          .sort(() => Math.random() - 0.5)
          .map((game) => (
            <SwiperSlide key={game.id}>
              <div className=" overflow-hidden shadow-lg">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-14 object-cover opacity-20 md:h-35 lg:h-60"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[...gameData]
          .sort(() => Math.random() - 0.5)
          .map((game) => (
            <SwiperSlide key={game.id}>
              <div className=" overflow-hidden shadow-lg">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-14 object-cover opacity-20 md:h-35 lg:h-60"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
