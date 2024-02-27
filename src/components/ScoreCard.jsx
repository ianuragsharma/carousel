import React from "react";

const ScoreCard = ({ item }) => {
  const {
    heading,
    typeofMatch,
    team1,
    team2,
    team1Score,
    team2Score,
    winningStatus,
  } = item;
  return (
    <div className=" h-full rounded-md flex flex-col">
      <div className="p-4">
        <div className="flex text-sm">
          <p>{heading}</p>
          <p className="bg-red-500 ml-auto px-2 text-white rounded-md">
            {typeofMatch}
          </p>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="w-1/2">{team1}</div>
          <div className="w-1/2 text-right">{team1Score}</div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">{team2}</div>
          <div className="w-1/2 text-right">{team2Score}</div>
        </div>
        <p className="mt-6 text-blue-500">{winningStatus}</p>
      </div>

      <div className="flex py-2 font-light pr-4 rounded-b-md  mt-auto bg-gray-300">
        <p className="ml-auto ">Schedule</p>
      </div>
    </div>
  );
};

export default ScoreCard;
