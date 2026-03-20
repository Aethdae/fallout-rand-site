//@ts-nocheck
import { useState } from "react";

const headerClasses =
  "bg-gray-200 border-4 border-black rounded-lg flex items-start justify-center text-black p-4";
const randCardClasses =
  "p-1 w-[80%] outline-2 w-fit bg-gray-900 outline-white rounded-lg cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160";
const karmaCardClasses =
  "p-1 outline-2 flex w-fit h-fit items-center justify-center outline-black rounded-lg cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160";

export default function RandClass({ randomized }) {
  {
    return (
      (randomized.challenges.length > 0 ||
        randomized.karma != "" ||
        randomized.special.length > 0 ||
        randomized.skills.length > 0) && (
        <section className="text-white gap-2 flex flex-col w-[95vw] md:w-[70vw] lg:w-[60vw] bg-gray-700/40 border-4 border-gray-800 rounded-2xl h-[36vh] p-2 md:h-[30vh] lg:h-[20vh]">
          <div className={headerClasses}>
            <p>Random Class</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {randomized.challenges.length != 0 && (
              <RandChall randObj={randomized} />
            )}
            {randomized.karma != "" && <RandKarma randObj={randomized} />}
            {randomized.skills.length != 0 && (
              <RandSkills randObj={randomized} />
            )}
            {randomized.special.length != 0 && (
              <RandSpecial randObj={randomized} />
            )}
          </div>
        </section>
      )
    );
  }
}

function RandChall({ randObj }) {
  return (
    randObj.challenges.length > 0 && (
      <div className="flex gap-3 flex-col items-center">
        <div className={randCardClasses}>{randObj.challenges[0]}</div>
        {randObj.challenges[1] != "N/A" && (
          <div className={randCardClasses}>{randObj.challenges[1]}</div>
        )}
        {randObj.challenges[2] != "N/A" && (
          <div className={randCardClasses}>{randObj.challenges[2]}</div>
        )}
      </div>
    )
  );
}

function RandSkills({ randObj }) {
  return (
    randObj.skills.length > 0 && (
      <div className="flex items-center justify-center">
        <div className="flex gap-3 flex-col justify-center items-center">
          <div className={randCardClasses}>{randObj.skills[0]}</div>
          <div className={randCardClasses}>{randObj.skills[1]}</div>
          <div className={randCardClasses}>{randObj.skills[2]}</div>
        </div>
      </div>
    )
  );
}

function RandSpecial({ randObj }) {
  return (
    <div className="flex justify-center">
      <div
        className={
          "grid grid-cols-2 px-2 bg-gray-900 max-w-[60%] outline-white rounded-lg outline-2"
        }
      >
        <div>S: {randObj.special[0]}</div>
        <div>I: {randObj.special[4]}</div>
        <div>P: {randObj.special[1]}</div>
        <div>A: {randObj.special[5]}</div>
        <div>E: {randObj.special[2]}</div>
        <div>L: {randObj.special[6]}</div>
        <div>C: {randObj.special[3]}</div>
      </div>
    </div>
  );
}

function RandKarma({ randObj }) {
  const karmaTypes = ["Very Evil", "Evil", "Neutral", "Good", "Very Good"];
  const colors = [
    "bg-red-800",
    "bg-red-600",
    "bg-amber-200",
    "bg-green-800",
    "bg-green-600",
  ];
  const karmaNum = karmaTypes.indexOf(randObj.karma);
  const textColors = karmaNum == 2 ? "text-black" : "text-white";

  return (
    <div className="flex items-center justify-center">
      <div
        className={karmaCardClasses + " " + colors[karmaNum] + " " + textColors}
      >
        Karma: {randObj.karma}
      </div>
    </div>
  );
}
