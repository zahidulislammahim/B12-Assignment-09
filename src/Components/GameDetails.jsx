import React from "react";
import { Link, useLocation } from "react-router";

const GameDetails = () => {
  const location = useLocation();
  const { game } = location.state || {};
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark group/design-root overflow-x-hidden">
      <title>{game.title}</title>

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2  text-sm md:mx-5 md:mb-0 mb-5">
              <Link to="/" className="text-info hover:underline">
                Home
              </Link>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <Link
                to="/games"
                className="text-info hover:underline"
                href="#">
                All Game
              </Link>
              <span className="text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-700  dark:text-gray-200 font-medium">
                {game.title}
              </span>
            </div>
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[400px]:rounded-xl min-h-80 md:min-h-100"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url(${game.coverPhoto})`,
                  }}>
                  <div className="flex p-6">
                    <h1 className="text-white tracking-tight text-[36px] font-bold leading-tight">
                      {game.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Game Details
            </h2>

            <div className="p-4 grid grid-cols-1 md:grid-cols-[25%_1fr] gap-x-6">
              <div className="col-span-full grid grid-cols-subgrid border-t border-t-[#3c3c53] py-4">
                <p className="text-[#9d9db8] text-sm font-normal leading-normal">
                  Category
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  {game.category}
                </p>
              </div>

              <div className="col-span-full grid grid-cols-subgrid border-t border-t-[#3c3c53] py-4">
                <p className="text-[#9d9db8] text-sm font-normal leading-normal">
                  Developer
                </p>
                <a
                  href="#"
                  className="text-white text-sm font-normal leading-normal hover:text-primary transition-colors">
                  {game.developer}
                </a>
              </div>

              <div className="col-span-full grid grid-cols-subgrid border-t border-t-[#3c3c53] py-4">
                <p className="text-[#9d9db8] text-sm font-normal leading-normal">
                  Rating
                </p>
                <div className="flex items-center">
                  <p className="text-white text-sm font-normal leading-normal ml-2">
                    {game.ratings}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-4 py-3">
              <a
                href={game.downloadLink}
                target="_blanck"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors">
                <span className="truncate">Download</span>
              </a>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Description
            </h2>

            <div className="px-4 pb-5">
              <p className="text-[#9d9db8] text-sm font-normal leading-relaxed">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
