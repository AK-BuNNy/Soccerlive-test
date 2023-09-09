import React from "react";
import { ManUnited, ManCity } from "../assets";

const standingsData = [
  {
    rank: 1,
    img: ManCity,
    team: "Manchester City",
    played: 21,
    won: 21,
    drawn: 21,
    lost: 21,
    goals: 21,
    points: 62,
  },
  {
    rank: 2,
    img: ManUnited,
    team: "Manchester united",
    played: 21,
    won: 21,
    drawn: 21,
    lost: 21,
    goals: 21,
    points: 62,
  },
];

function Standings() {
  return (
    <div className="w-full h-[42rem] shadow-lg rounded-lg">
      <div className="p-6 flex flex-row justify-between">
        <p className="font-poppins text-[18px] text-indigo-950">Standings</p>
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
      <div className="p-4">
        <table className="w-full   border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-[14px] font-poppins text-neutral-600">
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
              <tr key={index} className="bg-white hover:bg-gray-100">
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
