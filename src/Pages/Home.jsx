import React, { useContext } from "react";
import Hero from "../Components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AuthContext } from "../context/AuthContext";
import GameCard from "../Components/GameCard";

const Home = () => {
  const { gameData } = useContext(AuthContext);

  return (
    <div className=" text-white min-h-screen ">
      <Hero />

      <div className="w-11/12 mx-auto my-10 ">
        <h2 className="text-2xl md:text-3xl font-bold my-10 text-center border-b-2 border-b-[#00a9e7] pb-5 lg:mt-22">
          Featured Games
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {gameData.slice(5, 10).map((game) => (
            <SwiperSlide key={game.id}>
              <div className="overflow-hidden rounded-xl shadow-lg relative group">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center p-3">
                  <h3 className="text-2xl font-semibold text-center opacity-90 group-hover:opacity-100">
                    {game.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* top rated game */}
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold my-15 text-center border-b-2 border-b-[#00a9e7] pb-5">
          Top Rated Games
        </h2>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {[...gameData]
              .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)) 
              .slice(0, 2)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            {[...gameData]
              .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)) 
              .slice(2, 6)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 max-w-6xl w-10/12 mx-auto  md:mx-auto rounded-xl mt-20">
        <img
          src="https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2020/3/13/hk3rfkvmjl4zx1d9wbze/clash-royale-season-9-meta"
          alt="newsletter"
          className=" w-full max-w-lg rounded-xl"
        />
        <div className="relative flex items-center justify-center">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h1 className="text-3xl font-bold">Subscribe to our newsletter</h1>
            <p className="mt-4 text-gray-500">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form className="mt-8 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-300"
              />
              <button
                type="submit"
                className="rounded-r-md bg-[#00a9e7] px-7 py-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
