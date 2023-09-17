import React from "react";
import {
  RightArrowWh,
  LeftArrowWh,
  DownArrowWh,
  ManCity,
  ManUnited,
} from "../assets";
import { matches } from "../constants";

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
          <img
            src={DownArrowWh}
            alt="Arrow head Down"
            className="w-[10px] mt-1.5"
          />
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
      <div className="absolute right-0 top-[140px] h-[35.5rem] w-full hidden-scrollbar">
        {matches.map((dateItem) => (
          <div key={dateItem.Date} className="flex flex-col items-center justify-center" >
            <div className=" w-full p-4 py-5 bg-primarydim">
              <h1 className=" px-4  text-lg text-white text-[18px] font-light">
                <span>{dateItem.Date}</span>
              </h1>
            </div>
            <ul className="w-[90%]">
              {dateItem.Matches.map((match) => (
                <li key={match.MatchID}>
                  <div className=" bg-white h-[6rem] my-5 w-full rounded-lg flex justify-center items-center">
                    <div className="col-span-1 justify-self-center flex flex-col items-center">
                      <img
                        className="w-12 h-12"
                        src={match.homeLogoSrc}
                        alt=""
                      />
                      <span className="text-lg mt-2 font-semibold text-primary ">
                        {match.homeTeam}
                      </span>
                    </div>
                    <div className="col-span-1 justify-self-center">
                      <div className=" flex flex-row gap-1 ">
                        <h2 className="  text-primary font-sans text-[40px] font-bold">{match.homeScore}</h2>
                        <h2 classname="text-[20px]">FT</h2>
                        <h2 className="  text-primary font-sans text-[40px] font-bold">{match.awayScore}</h2>
                      </div>
                      <h3 className="text-center font-semibold text-[#949292]">
                        vs
                      </h3>
                    </div>
                    <div className="col-span-1 justify-self-center flex flex-col items-center">
                      <img
                        className="w-12 h-12 ml-12"
                        src={match.awayLogoSrc}
                        alt=""
                      />
                      <span className="text-lg mt-2 font-semibold text-primary ">
                        {match.awayTeam}
                      </span>
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

{/* <div className="  h-[10rem] mt-5 mx-1 w-full  grid grid-cols-3  ">
  <div className="col-span-1 justify-self-center flex flex-col items-center">
    <img className="w-12 h-12" src={match.homeLogoSrc} alt="" />
    <span className="text-lg mt-2 font-semibold text-primary ">
      {match.homeTeam}
    </span>
  </div>
  <div className="col-span-1 justify-self-center">
    <div className=" flex flex-row gap-1 text-primary font-sans text-[40px] font-bold">
      <h2>{match.homeScore}</h2>
      <h2>vs</h2>
      <h2>{match.awayScore}</h2>
    </div>
    <h3 className="text-center font-semibold text-[#949292]">FT</h3>
  </div>
  <div className="col-span-1 justify-self-center flex flex-col items-center">
    <img className="w-12 h-12 ml-12" src={match.awayLogoSrc} alt="" />
    <span className="text-lg mt-2 font-semibold text-primary ">
      {match.awayTeam}
    </span>
  </div>
</div> */}
