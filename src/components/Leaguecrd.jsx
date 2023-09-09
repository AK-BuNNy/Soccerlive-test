import React, { useState } from "react";
import { Pcard, PLlogo, Goal, Court, FlagEngland, Arrowdown } from "../assets";
import styles from "../style";
const Leaguecrd = () => {
  // Sample data for the card
  const leagueName = "Premier League";
  const leagueLogo = PLlogo; // Replace with the actual logo URL
  const countryName = "England";
  const flagIcon = FlagEngland;
  const totalMatches = 45;
  const totalGoals = 1032;
  const totalFoulCards = 653;

  // Sample years for the dropdown

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2022-2023"); // Initialize with the default year

  const years = [
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023", // Add more years as needed
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="relative w-[800px] h-[190px]  p-4 border border-gray-300 rounded-md shadow-[0px_4px_12px_#8686861a] bg-white flex flex-col justify-center items-center text-center">
      <div className="p-2">
        {/*Leauge Logo, Countryname , conuntrylogo, flag */}
        <img
          className="absolute flex w-[44px] h-[56px] top-5 left-5"
          alt="G"
          src={leagueLogo}
        />
        <div className={`${styles.flexStart} w-auto h-[59px]`}>
          <div className="absolute  top-6 lg:left-[80px] [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-semibold text-[#4b0033] text-[30px] tracking-[0] leading-[normal]">
            <h2> {leagueName} </h2>
          </div>
          <div className="absolute  top-[55px] left-[120px] [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-semibold text-[#63596b] text-[16px] tracking-[0] leading-[normal]">
            <h2>{countryName}</h2>
          </div>
          <img
            className="absolute  h-[18px] top-[55px] left-[83px]"
            alt="Group"
            src={flagIcon}
          />
        </div>
        {/* Matches, Goals, Cards */}
        <div className="items-center gap-[50px] left-5 top-[110px] inline-flex absolute">
          <div className="inline-flex top-[110px] left-[70px] items-center gap-[12px] ">
            <img
              className="relative w-[56px] h-[56px]"
              alt="Group"
              src={Court}
            />
            <div className="inline-flex flex-col items-center relative ">
              <div className="relative w-fit [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-semibold text-[#63596b] text-[14px] tracking-[0] leading-[normal]">
                <h3>Matches</h3>
                <div className="relative pr-px text-[34px]">
                  <h3>{totalMatches}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex top-[110px] left-[70px] items-center gap-[12px] ">
            <img
              className="relative w-[56px] h-[56px]"
              alt="Group"
              src={Court}
            />
            <div className="inline-flex flex-col items-center relative ">
              <div className="relative w-fit [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-semibold text-[#63596b] text-[14px] tracking-[0] leading-[normal]">
                <h3>Goals</h3>
                <div className="relative pr-px text-[34px]">
                  <h3>{totalGoals}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex top-[110px] left-[70px] items-center gap-[12px] ">
            <img
              className="relative w-[56px] h-[56px]"
              alt="Group"
              src={Pcard}
            />
            <div className="inline-flex flex-col items-center relative ">
              <div className="relative w-fit [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-semibold text-[#63596b] text-[14px] tracking-[0] leading-[normal]">
                <h3>Cards</h3>
                <div className="relative pr-px text-[34px]">
                  <h3>{totalFoulCards}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-20 top-8 inline-block text-left">
          <div onMouseEnter={toggleDropdown}>
            <span className="rounded-md flex shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center rounded-full w-full px-4 py-2 text-sm font-medium text-gray-700 bg-[#F6F6F6] border  hover:bg-gray-200"
              >
                {selectedYear}
                <img src={Arrowdown} className="mt-2 ml-2 " />
              </button>
            </span>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              onClick={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <div className="py-1" role="none">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                      selectedYear === year ? "bg-gray-200" : ""
                    }`}
                    role="menuitem"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaguecrd;
