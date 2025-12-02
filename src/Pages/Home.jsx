import React, { useContext } from "react";
import Hero from "../Components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AuthContext } from "../context/AuthContext";
import GameCard from "../Components/GameCard";

const faqs = [
  {
    question: "How does GameHub work?",
    answer:
      "GameHub lets you explore thousands of games, view ratings, screenshots, and save favorites. It's a fast and clean gaming dashboard for every gamer.",
  },
  {
    question: "Is GameHub free to use?",
    answer:
      "Yes! GameHub is completely free for browsing games, categories, and game details. Premium features will always remain optional.",
  },
  {
    question: "How do I find trending or popular games?",
    answer:
      "You can explore Trending, Popular, and New Release sections on the homepage to instantly discover new games.",
  },
  {
    question: "Which gaming platforms are supported?",
    answer:
      "GameHub includes games for PC, PlayStation, Xbox, Nintendo, and mobile platforms depending on API availability.",
  },
  {
    question: "Can I save or bookmark my favorite games?",
    answer:
      "Yes! With a simple account login, you can save your favorite games to your personal library.",
  },
];

const Home = () => {
  const { gameData } = useContext(AuthContext);
  const [openIndex, setOpenIndex] = React.useState(null);

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
          className="mySwiper">
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
      <div className="w-11/12 mx-auto">
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

      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold my-15 text-center border-b-2 border-b-[#00a9e7] pb-5">
          FAQ's
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full rounded-xl"
              src="https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000014952/70c58382cbf141504b8933e53befbb5a615d324c64fcb24f514c9ef28772a957"
              alt=""
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold">
              Need help? Find answers here
            </h1>

            <p className="text-sm text-slate-500 mt-2 pb-4">
              Everything you need to know about using GameHub — features,
              accounts, platforms, and more.
            </p>

            {faqs.map((faq, index) => (
              <div
                className="border-b border-info py-4 cursor-pointer"
                key={index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">{faq.question}</h3>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}>
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#2094f3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p
                  className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-10 mt-10">
        <img
          src="https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2020/3/13/hk3rfkvmjl4zx1d9wbze/clash-royale-season-9-meta"
          className="w-full h-full object-cover absolute -z-50 opacity-10"
        />
        <div className="md:grid md:grid-cols-2 max-w-6xl w-10/12 mx-auto  md:mx-auto rounded-xl mt-20">
          <img
            src="https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2020/3/13/hk3rfkvmjl4zx1d9wbze/clash-royale-season-9-meta"
            alt="newsletter"
            className=" w-full max-w-lg rounded-xl"
          />
          <div className="relative flex items-center justify-center">
            <div className="max-md:py-20 px-6 md:px-10 text-center">
              <h1 className="text-3xl font-bold">
                Subscribe to our newsletter
              </h1>
              <p className="mt-4 text-gray-500">
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>
              <form className="mt-8 flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-300"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-[#00a9e7] px-7 py-2 text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
