//@ts-nocheck
import { useState } from "react";

const headerClasses =
  "bg-gray-50 border-4 border-black rounded-lg h-8 text-black p-4 flex items-center mb-2";
const randCardClasses =
  "p-1 w-[110%] outline-3 bg-gray-900 outline-white rounded-lg cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160";
const karmaCardClasses =
  "p-1 w-[110%] outline-3 mb-3 outline-black rounded-lg cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160";

export default function RandClass({ randomized }) {
  {
    return (
      (randomized.challenges.length > 0 ||
        randomized.karma != "" ||
        randomized.special.length > 0 ||
        randomized.skills.length > 0) && (
        <section className="text-white flex flex-col items-center w-[85vw] md:w-[70vw] lg:w-[60vw] bg-gray-700/40 border-4 border-gray-800 rounded-2xl h-[36vh] p-2 md:h-[30vh] lg:h-[20vh]">
          <div className={headerClasses}>
            <p>Random Class</p>
          </div>
          <div className="grid-cols-2">
            {randomized.challenges.length != 0 && (
              <RandChall randObj={randomized} />
            )}
            {randomized.karma != "" && <RandKarma randObj={randomized} />}
            {randomized.special.length != 0 && (
              <RandSpecial randObj={randomized} />
            )}
            {randomized.skills.length != 0 && (
              <RandSkills randObj={randomized} />
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
      <div className="flex gap-3 flex-col mb-3">
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
  return <>{randObj.skills}</>;
}

function RandSpecial({ randObj }) {
  return <>{randObj.special}</>;
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
  console.log(karmaNum);
  const textColors = karmaNum == 2 ? "text-black" : "text-white";

  return (
    <div
      className={karmaCardClasses + " " + colors[karmaNum] + " " + textColors}
    >
      <span className="">Karma</span>: {randObj.karma}
    </div>
  );
}
