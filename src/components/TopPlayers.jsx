import React from "react";
import { Player1, Player2, ManCity, ManUnited } from "../assets";
const playerData = [
  {
    playerImage: Player1,
    playerName: "Nathan Ake",
    clubImage: ManCity,
    rating: 9.1,
    position: "midfielder",
  },
  {
    playerImage: Player2,
    playerName: "Bruno Fernades",
    clubImage: ManUnited,
    rating: 8.7,
    position: "midfielder",
  },
];

function TopPlayers() {
  return (
    <div class="container  ">
      <div className="w-[28rem] h-[40rem] shadow-lg rounded-lg p-6 relative ">
        <h1 className="p-4 text-lg font-semibold">Top Players</h1>
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
