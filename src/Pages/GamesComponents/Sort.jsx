import React from "react";

const Sort = ({ setSortOrder }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Top Reatings");

  const ratingOption = ["High To low", "Low To High"];

  const handleSelect = (option) => {
    setSelected(option);
    setSortOrder(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col   text-sm relative z-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 pr-2 py-2 border rounded font-bold text-[#00a9e7] border-[#00a9e7] shadow-sm hover:bg-[#00a9e7] focus:outline-none hover:text-black"
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 inline float-right transition-transform duration-200 stroke-current ${
            isOpen ? "rotate-0" : "-rotate-90 "
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#00a9e7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full border border-[#00a9e7] rounded shadow-md mt-1 bg-[#00a9e798] z-1">
          {ratingOption.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-[#00a9e7] hover:text-black cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
