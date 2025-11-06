import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import GameCard from "../Components/GameCard";
import SearchBar from "./GamesComponents/SearchBar";
import Sort from "./GamesComponents/Sort";

const Games = () => {
  const { gameData } = use(AuthContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const term = search.trim().toLocaleLowerCase();

  const filteredgames = gameData.filter((game) =>
    game.title.toLocaleLowerCase().includes(term)
  );
  const sortedGames = [...filteredgames].sort((a, b) => {
    if (sortOrder === "High To low") {
      return b.ratings - a.ratings;
    } else if (sortOrder === "Low To High") {
      return a.ratings - b.ratings;
    } else {
      return 0;
    }
  });

  return (
    <div className="w-11/12 mx-auto">
      <title>Games</title>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold my-15 text-center border-b-2 border-b-[#00a9e7] pb-5">
          All Games{" "}
          <span className="text-gray-500 text-lg">
            ({filteredgames.length})
          </span>
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row  gap-5 justify-between items-center mb-15">
        <Sort
          filteredgames={filteredgames}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        ></Sort>
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        {sortedGames.length > 0 ? (
          sortedGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <div className="col-span-full">
            <div className="flex flex-col ">
              <section className="flex-1 ">
                <div className="px-0 md:px-10 lg:px-10 max-w-7xl mx-auto w-full text-center mt-10 items-center flex flex-col stify-center">
                  <h1 className="text-2xl lg:text-4xl md:text-4xl mt-10 mb-2  font-bold">
                    OPPS!! Game NOT FOUND
                  </h1>
                  <p>
                    The Game you are requesting is not found on our system.
                    please try another Game
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
