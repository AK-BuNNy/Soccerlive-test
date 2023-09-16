import React from "react";
import { RightArrowWh, LeftArrowWh, DownArrowWh,ManCity,
ManUnited, footballPitchBackground} from "../assets";



const PositionCard = () => {
  return (
    <div className="relative w-[392px] h-[45rem] bg-white p-4 border rounded-xl shadow-lg  ">
      <div className="flex justify-between">
      <h1 className="uppercase font-bold text-[18px]">team of the week</h1>
      <button
          className={`py-2 px-4 font-poppins flex font-light text-[14px] text-black bg-slate-200 hover:bg-slate-400 rounded-full  `}
        >
          <span className="font-light font-sans-pro b mr-3">Round 35</span>
          <img src={DownArrowWh} alt="Arrow head Down" className="w-[10px] mt-1.5" />
        </button>
      </div>
      <div className="py-2">
        <img src={footballPitchBackground} alt="" />
      </div>
    </div>
  );
};

export default PositionCard;