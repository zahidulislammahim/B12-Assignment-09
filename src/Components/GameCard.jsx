import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  
  return (
    <Link to="/game-details" state={{game}}>
      <div className="overflow-hidden rounded-xl  relative group backdrop-blur-md   shadow-[0_0_40px_1px_#00a9e7]">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-start justify-end  p-5">
          <div className="flex top-5 right-5 absolute bg-[#00a9e7] py-3 pr-3 pl-4 rounded-full items-center">
            <FaPlay size={30} />
          </div>
          <h3 className="text-2xl md:text-4xl  font-semibold  opacity-90 group-hover:opacity-100 mb-2">
            {game.title}
          </h3>
          <div className="flex gap-5">
            <p className="bg-[#00a9e7] px-5 rounded-full">{game.category}</p>
            <p className="bg-[#00a9e7] px-5 rounded-full">{game.ratings}</p>
          </div>
          <p className="text-gray-300 mt-2 ">
            {game.description.slice(0 - 50)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
