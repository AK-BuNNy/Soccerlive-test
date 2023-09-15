import React, { useState } from "react";
import styles from "../style";
import { DnArrowPrimary } from "../assets";
import "../index.css";
import { standingsData } from "../constants";

const nav = [
  "Summary",
  "Attack",
  "Defense",
  "Passing",
  "Goal Keeper",
];

const Test = () => {
  const [activeLink, setActiveLink] = useState(nav[0]);

  const handleLinkClick = (nav) => {
    setActiveLink(nav);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
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
      <div className="relative  w-[90%] h-[3px] bg-gray-300 rounded">
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
  );
};

export default Test;

{
  /* <div className="w-full h-[3px] bg-[#F2f2f2]">
        <div
          style={{
            position: "absolute",
            height: "3px",
            backgroundColor: "#161B46",
            width: `${80 / nav.length}%`,
            bottom: "0",
            left: `${nav.indexOf(activeLink) * (100 / nav.length)}%`,
          }}
        ></div>
        </div> */
}
