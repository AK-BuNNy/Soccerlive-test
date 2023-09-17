import React, { useState, useEffect } from "react";
import {
  RightArrowWh,
  LeftArrowWh,
  DownArrowWh,
  ManCity,
  ManUnited,
} from "../assets";
import { matches } from "../constants";
import { WinPercentageBar } from ".";

const data = [
  {
    title: 'Shots on Goal',
    TeamAScore: 8, 
    TeamBScore: 7, 
    leftWidth: 60, 
    rightWidth: 40, 
  },
  {
    title: 'Shots off Goal',
    TeamAScore: 5, 
    TeamBScore: 5, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Shots insidebox',
    TeamAScore: 5, 
    TeamBScore: 5, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Shots outsidebox',
    TeamAScore: 9, 
    TeamBScore: 10, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Shots on Goal',
    TeamAScore: 8, 
    TeamBScore: 7, 
    leftWidth: 60, 
    rightWidth: 40, 
  },
  {
    title: 'Shots off Goal',
    TeamAScore: 5, 
    TeamBScore: 5, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Shots insidebox',
    TeamAScore: 5, 
    TeamBScore: 5, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Shots outsidebox',
    TeamAScore: 9, 
    TeamBScore: 10, 
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
  {
    title: 'Total Shots',
    TeamAScore: 6, 
    TeamBScore: 6,
    leftWidth: 45, 
    rightWidth: 55, 
  },
];

function StatisticDiv({ title, TeamAScore, TeamBScore, leftWidth, rightWidth }) {
  return (
    <div className="flex flex-col w-[22rem] px-6 mt-4 justify-between items-center h-[3rem]">
      <div className="text-[14px] font-bold text-primary">{title}</div>
      <div className="relative grid grid-cols-3 w-[100%] bg-slate-500">
        <div className="absolute bottom-[-4px] left-0 transform -translate-x-1/2 text-[14px] text-primary font-semibold">
          {TeamAScore}
        </div>
        <div className="absolute bottom-[-4px] left-full transform -translate-x-1/2 text-[14px] text-primary font-semibold">
          {TeamBScore}
        </div>
        <div className="absolute justify-self-center w-[90%] bottom-0 h-2 bg-[#b3b3b3] rounded-full">
          <div
            className="absolute bottom-0 right-1/2 h-2 bg-primary rounded-l-full"
            style={{ width: `${leftWidth / 2}%` }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 h-2 bg-[#15BE65] rounded-r-full"
            style={{ width: `${rightWidth / 2}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

const nav = ["Match Details", "Lineups", "Standings"];

const StatCard = () => {

  const [activeLink, setActiveLink] = useState(nav[0]);

  const handleLinkClick = (nav) => {
    setActiveLink(nav);
  };

  useEffect(() => {
    // You can add logic here if needed
  }, []);

  return (
    <div className="relative container flex flex-col items-center min-w-[21rem] w-[392px] h-[45rem] bg-white p-2 border rounded-xl shadow-lg scroll-container">
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
          <img className=" h-[3.5rem]" src={ManCity} alt="Man United" />
          <span className="text-lg mt-2 font-semibold text-primary ">
            Man City
          </span>
        </div>
      </div>
      <div className="absolute top-[10rem] text-[1.125rem] font-semibold text-primary">
        Winning Percentage?
      </div>
      <div className="absolute top-[12rem] w-full px-6 mt-4">
        <WinPercentageBar leftPercentage={46} rightPercentage={20} />
      </div>
      <div className="absolute mt-7 top-[16rem] w-full flex flex-col items-center">
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
        <div className=" w-[90%] h-[3px] bg-gray-300 rounded">
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
      <div className="absolute top-[22.5rem] w-full px-7">
        <div className="items-start font-semibold text-[18px] text-primary">Statistics</div>
        <div className="container mt-6 bg-gray-200 w-full h-[3.5625rem] rounded-md flex flex-row justify-between pt-3 px-8">
          <div>logo1</div>
          <div>logo2</div>
        </div>
      </div>
      <div className="absolute top-[30rem]">
      {data.map((item, index) => (
        <StatisticDiv
          key={index}
          title={item.title}
          TeamAScore={item.TeamAScore}
          TeamBScore={item.TeamBScore}
          leftWidth={item.leftWidth}
          rightWidth={item.rightWidth}
        />
      ))}
    </div>
    <div className="absolute top-[97rem] w-full px-7">
        <div className="items-start font-semibold text-[18px] text-primary">Head to Head</div>
        <div className="container mt-6 bg-gray-200 w-full h-[4.46806rem] rounded-md flex flex-row justify-between pt-3 px-8">
          <div>logo1</div>
          <div>logo2</div>
        </div>
        <div className="container mt-3 bg-gray-200 w-full h-[4.46806rem] rounded-md flex flex-row justify-between pt-3 px-8">
          <div>logo1</div>
          <div>logo2</div>
        </div>
        <div className="container mt-3 bg-gray-200 w-full h-[4.46806rem] rounded-md flex flex-row justify-between pt-3 px-8">
          <div>logo1</div>
          <div>logo2</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
