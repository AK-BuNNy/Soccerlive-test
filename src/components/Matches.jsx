import React from "react";
import { RightArrowWh, LeftArrowWh, DownArrowWh,ManCity,
  ManUnited, } from "../assets";
import {matches} from "../constants"

const Matches = () => {
  return (
    <div className="relative w-[392px] h-[45rem] bg-primary p-4 border rounded-xl shadow-lg  ">
      <h1 className="py-2  [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] text-white text-[22px]">
        Matches
      </h1>
      <div className="absolute gap-4 left-0 right-0 inline-flex p-4 items-center justify-between ">
        <button
          className={`py-2 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <img
            src={LeftArrowWh}
            alt="arrowheadleft"
            className="h-3 mt-[4px] mr-2"
          />

          <span className="font-light font-sans-pro">Previous</span>
        </button>
        <button
          className={`py-2 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <span className="font-light font-sans-pro mr-3">Round 35</span>
          <img src={DownArrowWh} alt="Arrow head Down" className="w-[10px] mt-1.5" />
        </button>
        <button
          className={`py-2 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <span className="font-light font-sans-pro mr-3">Next</span>
          <img
            src={RightArrowWh}
            alt="Arrow head Right"
            className="w-3 h-3 mt-[4px] "
          />
        </button>
      </div>
      <div className="absolute top-[140px] right-0 h-[35.5rem] hidden-scrollbar">
      {matches.map((dateItem) => (
        <div key={dateItem.Date}>
          <div className="w-full p-4 py-5 bg-primarydim">
            <h1 className=" px-4  text-lg [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] text-white text-[18px] font-light">
              <span>{dateItem.Date}</span>
            </h1>
          </div>
            <ul className="mb-5">
              {dateItem.Matches.map((match) => (
              <li key={match.MatchID}>
                <div className=" relative bg-white h-[6rem] mt-5 mx-4 rounded-lg grid grid-cols-3 content-center">
                  <div className="flex justify-between ">
                    <img className="w-12 h-12" src={match.homeLogoSrc} alt="" />
                    <div className="text-center flex flex-row gap-3 ml-8 text-[34px]">
                      <h1 className="font-semibold">{match.homeScore}</h1>
                      <h1 className="text-lg text-neutral-500 mt-3">FT</h1>
                      <h1 className="font-semibold">{match.awayScore}</h1>
                    </div>
                    <img className="w-12 h-12 ml-12" src={match.awayLogoSrc} alt="" />
                  </div>
                  <div>
                    <div className="flex flex-row mt-12  gap-[56px] ml-[-74px] ">
                        <span className="font-bold">{match.homeTeam}</span>
                        <h2>vs</h2>
                        <span className="font-bold">{match.awayTeam}</span>
                    </div>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;