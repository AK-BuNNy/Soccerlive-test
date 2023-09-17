import React, { useState } from "react";
import styles from "../style";
import {DnArrowPrimary } from "../assets";
import '../index.css';
import {standingsData} from "../constants";

const nav = ["Summary", "Attack", "Defense", "Passing", "Goal Keeper", "Detailed"];

const PlayerStat = () => {
  const [activeLink, setActiveLink] = useState(nav[0]);

  const handleLinkClick = (nav) => {
    setActiveLink(nav);
  };

  return (
    <div className="relative container font-sans max-w-[800px] h-[40rem] border rounded-md bg-white ">
      <div className="flex flex-row justify-between p-6">
        <h2 className="font-semibold text-[22px] text-indigo-950">Player Statistics</h2>
        <div className="flex flex-row justify-between items-center gap-2">
          <h3 className="font-normal text-[#63596b] text-[14px] items-center">Accumulation</h3>
          <button className="py-2 px-4 flex font-light text-[14px] text-primary bg-[#f6f6f6] hover:bg-[#dddd] rounded-full">
            <span className="font-light mr-3">all</span>
            <img src={DnArrowPrimary} alt="Arrow head Down" className="w-[10px] mt-1.5" />
          </button>
        </div>
      </div>
      <div className="relative w-full flex max-w-[650px] flex-col items-center">
      <div className="flex px-6 sm:flex-row justify-between w-full">
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
      <div className="relative  w-[88%] h-[3px] bg-gray-300 rounded">
        <div
          style={{
            position: "absolute",
            height: "3px",
            backgroundColor: "#161B46",
            width: `${80 / nav.length}%`, // Equal width for the active underline
            bottom: "0",
            left: `${(nav.indexOf(activeLink) * (100 / nav.length)) + ((5 / nav.length)*nav.indexOf(activeLink))}%`,
            transition: "left 0.3s ease",
            borderRadius: "20px",
          }}
        ></div>
      </div>
      </div>
      <div className="absolute w-full top-[10rem] h-[29rem] px-4  scroll-container">
        <table className="relative w-full  flex-col">
          <thead className="sticky top-0 w-full ">
            <tr className="text-[14px]  font-normal bg-white  text-[#767379]">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-center">Goals</th>
              <th className="p-2 text-center">Succ. drribles</th>
              <th className="p-2 text-center">Tackles</th>
              <th className="p-2 text-center">Assists</th>
              <th className="p-2 text-center">Acc. Passes%</th>
              <th className="p-2 text-center">Rating</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((data, index) => (
              <tr key={index} className={`${
                index % 2 === 0
                  ? " bg-gray-100"
                  : ` bg-white`
              } hover:bg-gray-500`}>
                <td className="p-2">{data.rank}</td>
                <td className="p-2 text-left flex ">
                  {" "}
                  <img src={data.img} className="h-8 w-8 mx-2 " alt="" />{" "}
                  {data.team}
                </td>
                <td className="p-2 text-center">{data.played}</td>
                <td className="p-2 text-center">{data.won}</td>
                <td className="p-2 text-center">{data.drawn}</td>
                <td className="p-2 text-center">{data.lost}</td>
                <td className="p-2 text-center">{data.goals}</td>
                <td className="p-2 text-center">{data.points}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PlayerStat;
