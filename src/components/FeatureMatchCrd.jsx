import React from "react";
import { ManCity, ManUnited } from "../assets";
const FeatureMatchCrd = () => {
  return (
    <div className="relative h-[190px] container max-w-[390px] bg-primary p-4 border rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
      <div className=" absolute top-3 left-5 [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-light text-white text-[22px] ">
        <span> Featured Event</span>
      </div>

      <div className="absolute h-[118px] gap-2 w-[358px] bottom-4 bg-white rounded-xl flex flex-col justify-center items-center text-center">
        <div className="flex flex-inline">
          <p className="[font-family:'Source_Sans_Pro',_Helvetica] font-light text-[#767279] text-[16px]">
            {" "}
            <span>April 05</span>, <span>2021</span>
          </p>
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <img src={ManCity} alt="logo1" className="h-[50px]" />
          <div>
            <h3 className=" [font-family:'Source_Sans_Pro-SemiBold',_Helvetica] font-light text-[#3d3644] text-[32px] tracking-[3.20px]">
              <span>1</span>-<span>0</span>
            </h3>
          </div>
          <img src={ManUnited} alt="logo1" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default FeatureMatchCrd;
