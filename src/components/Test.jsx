import React, { useState, useEffect } from "react";

const Test = ({ TeamAPercentage, TeamBPercentage }) => {
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  useEffect(() => {
    if (TeamAPercentage >= 0 && TeamAPercentage <= 100) {
      setLeftWidth(TeamAPercentage);
    }

    if (TeamBPercentage >= 0 && TeamBPercentage <= 100) {
      setRightWidth(TeamBPercentage);
    }
  }, [TeamAPercentage, TeamBPercentage]);

  const spacePercentage = 100 - TeamAPercentage - TeamBPercentage;

  return (
    <div className=" flex flex-col justify-between items-center h-[5rem]">
      <div className="text-[1rem] font-bold text-primary">Shots on Goal</div>
      <div className="relative grid grid-cols-3 w-[98%] bg-slate-500">
        <div className="absolute bottom-1 left-0 transform -translate-x-1/2 text-[14px] text-primary font-semibold">
          {TeamAPercentage}
        </div>
        <div className="absolute bottom-1 left-full transform -translate-x-1/2 text-[14px] text-primary font-semibold">
          {TeamBPercentage}
        </div>
        <div className="absolute justify-self-center w-[90%] bottom-0 h-6 bg-[#b3b3b3] rounded-full">
          <div
            className="absolute bottom-0 right-1/2 h-6 bg-primary rounded-l-full"
            style={{ width: `${leftWidth / 2}%` }}
          ></div>
          <div
            className="absolute bottom-0  left-1/2 h-6 bg-[#15BE65] rounded-r-full"
            style={{ width: `${rightWidth / 2}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
