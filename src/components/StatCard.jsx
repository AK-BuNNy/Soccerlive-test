import React, { useState } from "react";
import {
  RightArrowWh,
  LeftArrowWh,
  DownArrowWh,
  ManCity,
  ManUnited,
} from "../assets";
import { matches } from "../constants";
import { WinPercentageBar } from ".";

const nav = ["Match Details", "Lineups", "Standings"];

const StatCard = () => {
  const [activeLink, setActiveLink] = useState(nav[0]);

  const handleLinkClick = (nav) => {
    setActiveLink(nav);
  };

  return (
    <div className="relative container flex flex-col items-center min-w-[21rem] w-[392px] h-[45rem] bg-white p-2 border rounded-xl shadow-lg  ">
      <div className="  h-[10rem] mt-5 mx-1 w-full  grid grid-cols-3  ">
        <div className="col-span-1 justify-self-center flex flex-col items-center">
          <img className=" h-[3.5rem]" src={ManUnited} alt="Man United" />
          <span className="text-lg mt-2 font-semibold text-primary ">
            Man United
          </span>
        </div>
        <div className="col-span-1 justify-self-center">
          <div className=" flex flex-row gap-1 text-primary font-sans text-[40px] font-bold">
            <span>0</span>
            <h2>-</h2>
            <span>1</span>
          </div>
          <h3 className="text-center font-semibold text-[#949292]">FT</h3>
        </div>
        <div className="col-span-1 justify-self-center flex flex-col items-center">
          <img className=" h-[3.5rem]" src={ManUnited} alt="Man United" />
          <span className="text-lg mt-2 font-semibold text-primary ">
            Man United
          </span>
        </div>
      </div>
      <div className="absolute top-[10rem] text-[1.125rem] font-bold text-primary">
        Winning Percentage?
      </div>
      <div className="w-full px-3 mt-4">
        <WinPercentageBar leftPercentage={46} rightPercentage={20} />
      </div>
      <div className="relative mt-7 w-full flex flex-col items-center">
        <div className="flex sm:flex-row justify-between w-full">
          {nav.map((navItem, index) => (
            <div
              key={index}
              className={`cursor-pointer py-3 text-[12px] text-center transform transition-transform ${
                activeLink === navItem ? "font-bold" : ""
              }`}
              onClick={() => handleLinkClick(navItem)}
              style={{
                flex: `1 ${100 / nav.length}%`, // Equal width for all links
              }}
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="relative  w-[90%] h-[3px] bg-gray-300 rounded">
          <div
            style={{
              position: "absolute",
              height: "3px",
              backgroundColor: "#161B46",
              width: `${80 / nav.length}%`, // Equal width for the active underline
              bottom: "0",
              left: `${
                nav.indexOf(activeLink) * (100 / nav.length) +
                (10 / nav.length) * nav.indexOf(activeLink)
              }%`,
              transition: "left 0.3s ease",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>
      <div className="text-lg mt-5 font-semibold text-[#161b46] self-start mb-4 ml-5">
        Statistics
      </div>
      <div className="flex justify-center w-full h-[4rem] bg-[#f6f6f6] rounded ">
        <div className=" flex gap-20  items-center rounded">
          <div className="flex flex-row gap-2">
            <img
              src={ManUnited}
              className="w-8"
            />
            <div className=" font-semibold text-[#161b46] ">
              Liverpool
            </div>
          </div>
          <div className="flex flex-row  gap-2">
            <div className=" font-semibold text-[#161b46] ">
              Man United
            </div>
            <img
              src={ManUnited}
              className="w-7 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
