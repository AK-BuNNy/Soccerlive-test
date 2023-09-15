import React, { useState, useEffect } from "react";

const WinPercentageBar = ({leftPercentage, rightPercentage}) => {
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  useEffect(() => {
    if (leftPercentage >= 0 && leftPercentage <= 100) {
      setLeftWidth(leftPercentage);
    }

    if (rightPercentage >= 0 && rightPercentage <= 100) {
      setRightWidth(rightPercentage);
    }
  }, [leftPercentage, rightPercentage]);

  const spacePercentage = 100 - leftPercentage - rightPercentage;

  return (
    <div className="relative h-14">
      <div className="absolute w-full bottom-0 h-6 rounded-lg">
        <div
          className="absolute bottom-0 left-0 h-6 bg-primary rounded-l-full"
          style={{ width: `${leftWidth}%` }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[14px] text-primary font-semibold">
            {leftPercentage}%
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 h-6 bg-[#15BE65] rounded-r-full"
          style={{ width: `${rightWidth}%` }}
        >
        </div>
        <div
          className="absolute bottom-0 h-6 bg-[#b3b3b3]"
          style={{ width: `${spacePercentage}%`, left: `${leftWidth}%` }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[14px] text-[#b3b3b3] font-semibold">
            {spacePercentage}%
          </div>
        </div>
        {/* Thin vertical lines */}
        <div
          className="absolute top-0 h-[40px] w-[0.8px] bg-primary"
          style={{ left: `${leftWidth}%`, right: `${rightWidth}%` }}
        >
        </div>
        <div
          className="absolute bottom-0 h-[40px] w-[0.8px] bg-primary"
          style={{ left: `${leftWidth}%`, right: `${rightWidth}%` }}
        >
        </div>
        <div
          className="absolute top-0 h-[40px] w-[0.8px] bg-[#15BE65]"
          style={{ right: `${rightWidth}%` }}
        >
        </div>
        <div
          className="absolute bottom-0 h-[40px] w-[0.8px] bg-[#15BE65]"
          style={{ right: `${rightWidth}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default WinPercentageBar;
