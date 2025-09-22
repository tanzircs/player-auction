import React, { use } from 'react';
import groupImg from "../assets/Group.png";

const AvailablePlayers = ({ playersPromise }) => {

    const PlayerData = use(playersPromise);
    console.log(PlayerData);

  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      {PlayerData.map((player) => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto font-sans ">
          <img
            className="w-full h-56 object-cover object-center"
            src={player.image}
            alt="Virat Kohli"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found";
            }}
          />
          <div className="p-5">
            <div className="flex items-center space-x-3">
              {/* <UserIcon /> */}
              <img className="h-[20px]" src={groupImg} alt="" />
              <h1 className="text-2xl font-bold text-gray-800">{player.name}</h1>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-2">
                {/* <FlagIcon /> */}
                <p className="text-gray-500 text-sm">{player.country}</p>
              </div>
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                All-Rounder
              </span>
            </div>

            <div className="mt-5 text-sm text-gray-600">
              {/* Rating */}
              <div className="flex justify-between items-center py-1">
                <span className="font-bold text-gray-700">Rating</span>
                <span className="text-right flex items-center space-x-1">
                  <span>⭐</span>
                  <span>4.9 / 5</span>
                </span>
              </div>

              {/* Batting */}
              <div className="flex justify-between items-center py-1">
                <span className="font-bold text-gray-700">Batting</span>
                <span className="text-right">Right-Hand-Bat</span>
              </div>

              {/* Bowling */}
              <div className="flex justify-between items-center py-1">
                <span className="font-bold text-gray-700">Bowling</span>
                <span className="text-right">Right-Arm Medium</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <p className="text-xl font-bold text-gray-900">
                $ <span>{player.price}</span>
              </p>
              <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                Choose Player
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;