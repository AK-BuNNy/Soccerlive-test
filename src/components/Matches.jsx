import React from "react";
import { RightArrowWh, LeftArrowWh, DownArrowWh } from "../assets";
const Matches = () => {
  return (
    <div className="relative w-[28rem] h-[40rem] bg-primary p-4 border rounded-xl shadow-lg  flex-col ">
      <h1 className="p-4 text-lg [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] text-white text-[24px] font-light">
        Matches
      </h1>
      <div className="absolute gap-8 left-0 right-0 inline-flex p-4 items-center justify-center ">
        <button
          className={`py-3 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <img
            src={LeftArrowWh}
            alt="Bell Icon"
            className="w-3 h-3 mt-[4px] mr-3"
          />

          <span className="font-light font-sans-pro">Previous</span>
        </button>
        <button
          className={`py-3 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <span className="font-light font-sans-pro mr-3">Round 35</span>
          <img src={DownArrowWh} alt="Bell Icon" className="w-3 h-3 mt-[4px]" />
        </button>
        <button
          className={`py-3 px-4 font-poppins flex font-light text-[14px] text-white bg-primarydim hover:bg-[#353B72] rounded-full `}
        >
          <span className="font-light font-sans-pro mr-3">Next</span>
          <img
            src={RightArrowWh}
            alt="Bell Icon"
            className="w-3 h-3 mt-[4px] "
          />
        </button>
      </div>
      <div className="absolute top-[160px] left-0 right-0 w-full p-4 py-5 bg-primarydim">
        <h1 className=" px-4  text-lg [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] text-white text-[18px] font-light">
          <span>14/07/2021</span>
        </h1>
      </div>
    </div>
  );
};

export default Matches;
