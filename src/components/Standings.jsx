import React from "react";
import { ManUnited, ManCity } from "../assets";
import {standingsData} from "../constants";


function Standings() {
  return (
    <div className="w-full h-[42rem] shadow-lg rounded-lg  relative ">
      <div className="p-6 flex flex-row bg-white justify-between ">
        <h2 className="font-poppins text-[18px] text-indigo-950">Standings</h2>
        <div className="flex space-x-4 text-md gap-10 ">
          <a href="" className=" border-primary  hover:border-b-[2px]">
            Overall
          </a>
          <a href="" className=" border-primary  hover:border-b-[2px]">
            Home
          </a>
          <a href="" className=" border-primary  hover:border-b-[2px]">
            Away
          </a>
        </div>
      </div>
      <div className="absolute w-full h-[36rem] px-4  scroll-container">
        <table className="relative w-full  flex-col">
          <thead className="sticky top-0 w-full ">
            <tr className="text-[14px] font-poppins bg-white  text-neutral-600">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Team</th>
              <th className="p-2 text-center">Played</th>
              <th className="p-2 text-center">Won</th>
              <th className="p-2 text-center">Drawn</th>
              <th className="p-2 text-center">Lost</th>
              <th className="p-2 text-center">Goals</th>
              <th className="p-2 text-center">Points</th>
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
}

export default Standings;
