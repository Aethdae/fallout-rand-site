//@ts-nocheck
import FO4 from "./FO4.tsx";
import FO3 from "./FO3.tsx";
import FNV from "./FNV.tsx";
import "./ClassRandomizer.ts";
import { useState } from "react";
import { getKarma } from "./ClassRandomizer.ts";
import { getChallenges } from "./ClassRandomizer.ts";
import { getSpecial } from "./ClassRandomizer.ts";
import { getSkills } from "./ClassRandomizer.ts";
const states = ["three", "vegas", "four"];
const bgColorStates = {
  three: "bg-three-300",
  vegas: "bg-vegas-300",
  four: "bg-four-300",
};

const checkBoxClasses = [
  "p-2",
  "outline-3",
  "bg-gray-200",
  "rounded-lg",
  "w-[90%]",
  "${color}",
  "accent-black",
  "rounded-lg",
  "bg-green-300",
  "hover:bg-green-200",
  "cursor-pointer",
  "md:w-80",
  "md:p-4",
  "max-w-80",
  "md:max-w-120",
  "lg:w-120",
  "lg:max-w-160",
];

export default function Game({ gameState }) {
  const [classRolled, setRolled] = useState(false);
  const [randomized, setRandomized] = useState();

  const children = [<ClassForm key={0} />, <RandClass key={1} />];

  switch (gameState[0]) {
    case states[0]:
      return (
        <main className="h-[70vh] mt-3 l:h-[60vh]">
          <FO3 children={children} />
        </main>
      );
    case states[1]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FNV children={children} />
        </main>
      );
    case states[2]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO4 children={children} />
        </main>
      );
  }
  return (
    <div className="h-[80vh] mt-3 l:h-[60vh]">
      <FO3 children={<ClassForm />} />
    </div>
  );

  function RandClass() {
    if (classRolled) {
      return (
        <>
          <section className="text-white">
            <div>
              <p>RandomClass:</p>
            </div>
            <div>{randomized.karma}</div>
            <div>{randomized.challenges}</div>
            <div>{randomized.special}</div>
            <div>{randomized.skills}</div>
          </section>
        </>
      );
    } else {
      return <></>;
    }
  }

  //@ts-ignore
  function rollClass(event) {
    const targ = event.target;
    const randClass = {
      karma: "",
      challenges: ["", "", ""],
      special: [0, 0, 0, 0, 0, 0, 0],
      skills: ["", "", ""],
    };

    //@ts-ignore
    const data = JSON.parse(localStorage.getItem("falloutRandomizerData"));

    if (targ.karmaCheck.checked) {
      randClass.karma = getKarma(data.karmaTypes);
    }
    if (targ.challengeCheck.checked) {
      randClass.challenges = getChallenges(
        data.challenges,
        targ.challengeNumberSelect.value,
      );
    }
    if (targ.specialCheck.checked) {
      randClass.special = getSpecial();
    }
    if (targ.skillsCheck.checked) {
      switch (gameState[0]) {
        case states[0]:
          randClass.skills = getSkills(data.falloutThreeSkills);
          break;
        case states[1]:
          randClass.skills = getSkills(data.falloutNewVegasSkills);
          break;
      }
    }
    setRandomized(randClass);
    setRolled(true);
  }

  function ClassForm() {
    const [isDropdownShown, setDropdown] = useState(false);

    return (
      <section className="bg-gray-700/40 border-4 rounded-2xl h-[36vh] px-3 md:h-[30vh] lg:h-[20vh]">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            rollClass(event);
          }}
          className=""
          id="rollForm"
        >
          <div className="grid mt-6 grid-cols-1 gap-4 w-[60vw] md:grid-cols-1 md:w-[60vw] lg:w-[40vw]">
            <CheckLabel buttonType="karmaCheck" buttonName="Karma" />
            <CheckLabel buttonType="specialCheck" buttonName="SPECIAL" />
            <CheckLabel buttonType="skillsCheck" buttonName="Skills" />
            <CheckChallengeLabel
              buttonType="challengeCheck"
              buttonName="Challenge"
              stateHandler={[isDropdownShown, setDropdown]}
            />
            {isDropdownShown && <ChallengeDropDown />}
          </div>
          <div className="flex justify-center mt-3">
            <ClassButton />
          </div>
        </form>
      </section>
    );
  }

  function ClassButton() {
    return (
      <>
        <button
          className={`border-2 ${bgColorStates[gameState[0]]} rounded-xl w-full max-w-80 my-4 p-2 md:my-6 md:w-50 md:p-4 cursor-pointer`}
        >
          Roll!
        </button>
      </>
    );
  }

  function ChallengeDropDown() {
    return (
      <>
        <div className="flex justify-center w-full">
          <label className={checkBoxClasses.join(" ")}>
            <select
              className="mr-1.5 bg-gray-950 text-white p-.5 rounded-sm"
              name="challengeNumberSelect"
              id="challengeNumberSelect"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {"Challenge(s)"}
          </label>
        </div>
      </>
    );
  }

  // @ts-ignore
  function CheckLabel({ buttonType, buttonName }) {
    const [checked, setCheck] = useState(false);
    const color = checked ? "bg-green-300" : "bg-gray-300";
    const bgColor = checked ? "hover:bg-green-200" : "hover:bg-gray-200";
    const labelClasses = `p-2 w-[90%] outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer max-w-80 md:w-80 md:p-4 md:max-w-120 lg:w-120 lg:max-w-160`;

    return (
      <>
        <div className="flex justify-center">
          <label className={labelClasses}>
            <input
              className="mr-3"
              type="checkbox"
              name={buttonType}
              id={buttonType}
              onClick={() => {
                setCheck(!checked);
              }}
            />
            {"Random " + buttonName}
          </label>
        </div>
      </>
    );
  }

  // @ts-ignore
  function CheckChallengeLabel({ buttonType, buttonName, stateHandler }) {
    const [checked, setCheck] = useState(false);
    const color = checked ? "bg-green-300" : "bg-gray-300";
    const bgColor = checked ? "hover:bg-green-200" : "hover:bg-gray-200";
    const labelClasses = stateHandler[0]
      ? `p-2 w-[90%] outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer md:w-80 md:p-4 max-w-80 md:max-w-120 lg:w-120 lg:max-w-160`
      : `p-2 w-[90%] mb-14 outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer md:w-80 md:p-4 max-w-80 md:max-w-120 lg:w-120 lg:max-w-160`;

    return (
      <>
        <div className="flex justify-center">
          <label className={labelClasses}>
            <input
              className="mr-3 text-small"
              type="checkbox"
              name={buttonType}
              id={buttonType}
              onClick={() => {
                setCheck(!checked);
                stateHandler[1](!stateHandler[0]);
              }}
            />
            {"Random " + buttonName}
          </label>
        </div>
      </>
    );
  }
}
