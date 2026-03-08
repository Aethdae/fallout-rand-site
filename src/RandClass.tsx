//@ts-nocheck
import { useState } from "react";

export default function RandClass({ randomized }) {
  const headerClasses =
    "bg-gray-50 border-4 border-black rounded-lg h-8 text-black p-4 flex items-center mb-2";
  const randCardClasses =
    "p-2 w-[90%] outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160";
  return (
    <section className="text-white flex flex-col items-center bg-gray-700/40 border-4 border-gray-800 rounded-2xl h-[36vh] p-2 md:h-[30vh] lg:h-[20vh]">
      <div className={headerClasses}>
        <p>Random Class</p>
      </div>
      {console.log("HEY", randomized)}
      {randomized.challenges.length != 0 && (
        <div className={randCardClasses + " chall"}>
          {randomized.challenges}
        </div>
      )}
      {randomized.karma != "" && (
        <div className={randCardClasses + " karma"}>{randomized.karma}</div>
      )}
      {console.log(randomized)}
      {randomized.special.length != 0 && (
        <div className={randCardClasses + " spec"}>{randomized.special}</div>
      )}
      {randomized.skills.length != 0 && (
        <>
          <div className={randCardClasses + " skills"}>{randomized.skills}</div>
        </>
      )}
    </section>
  );
}
