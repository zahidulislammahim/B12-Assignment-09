import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import HeroSlider from "./HeroSlider";
import { Link } from "react-router";

const Hero = () => {
  const { gameData } = useContext(AuthContext);

  const levels = [1, 3, 5, 7, 5, 3, 1];

  let currentIndex = 0;
  const pyramidRows = levels.map((count) => {
    const row = gameData.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return row;
  });

  return (
    <div className="flex flex-col items-center p-8 -space-y-10 bg-hero relative ">
      <div className="absolute z-0">
        {/* background */}
        <HeroSlider></HeroSlider>
      </div>
      <div className="flex flex-col items-center pt-2  -space-y-10 ">
        {pyramidRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center -space-x-10  relative z-0"
          >
            {row.map((game, index) => (
              <Link to="/game-details" state={{game}} key={index}>
                <img
                key={game.id || index}
                src={game.coverPhoto}
                alt={game.title}
                title={game.title}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-8 hover:-translate-x-8  hover:z-10 
              w-23 sm:w-48 md:w-40 lg:w-70 
              h-18 sm:h-32 md:h-33 lg:h-50"
              />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
