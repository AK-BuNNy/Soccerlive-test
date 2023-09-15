import React from "react";
import { Player1, Player2, ManCity, ManUnited } from "../assets";
import {playerData }from "../constants"

function TopPlayers() {
  return (
    <div className="container max-w-[392px]">
      <div className="w-[28rem] h-[40rem] shadow-lg bg-white rounded-lg p-6 relative scroll-container">
        <h1 className="p-4 text-[24px] font-semibold">Top Players</h1>
        {playerData.map((player, index) => (
          <div
            key={index}
            className="bg-gray-100 w-full h-[6rem] mt-4 rounded-lg flex flex-row relative "
          >
            <img
              src={player.playerImage}
              alt={player.playerName}
              className="w-[6rem] h-[6rem]"
            />
            <div className="p-4 flex flex-col">
              <h1 className="text-lg font-semibold">{player.playerName}</h1>
              <div className="flex flex-row items-center">
                <img src={player.clubImage} alt="" className="h-[1.5rem]" />
                <p className="text-md px-2">{player.position}</p>
              </div>
            </div>
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
              <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 w-10 h-8 rounded-lg items-cen">
                <p className="text-white text-center">{player.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPlayers;
