import FO4 from "./FO4.tsx";
import FO3 from "./FO3.tsx";
import FNV from "./FNV.tsx";
import { useState } from "react";
const states = ["three", "vegas", "four"];
const bgColorStates = {
  three: "bg-three-300",
  vegas: "bg-vegas-300",
  four: "bg-four-300",
};

// @ts-ignore
export default function Game({ gameState }) {
  (async function getData() {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/Aethdae/fallout-randomizer/refs/heads/main/data.json",
      );
      const data = await res.text();
      localStorage.setItem("falloutRandomizerData", data);
      return data;
    } catch (err) {
      console.warn(`Error getting JsonData: ${err}`);
    }
  })();

  function ClassForm() {
    return (
      <section>
        <form
          className="grid mt-6 grid-cols-1 gap-4 w-[80vw] md:grid-cols-2"
          action=""
        >
          <CheckLabel buttonType="karmaCheck" buttonName="Karma" />
          <CheckLabel buttonType="challengeCheck" buttonName="Challenge" />
          <CheckLabel buttonType="specialCheck" buttonName="SPECIAL" />
          <CheckLabel buttonType="skillsCheck" buttonName="Skills" />
        </form>
        <div className="flex justify-center mt-3">
          <ClassButton />
        </div>
      </section>
    );
  }

  function ClassButton() {
    return (
      <>
        <div
          //@ts-ignore
          className={`border-2 ${bgColorStates[gameState[0]]} rounded-xl w-full p-2 md:w-40`}
        >
          Roll!
        </div>
      </>
    );
  }

  // @ts-ignore
  function CheckLabel({ buttonType, buttonName }) {
    const [checked, setCheck] = useState(false);
    const color = checked ? "bg-green-300" : "bg-gray-300";
    const bgColor = checked ? "hover:bg-green-200" : "hover:bg-gray-200";
    const labelClasses = `p-2 outline-3 ${color} accent-red-900 rounded-lg ${bgColor} cursor-pointer`;

    return (
      <>
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
      </>
    );
  }

  switch (gameState[0]) {
    case states[0]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO3 />
          <div className="flex justify-center">
            <ClassForm />
          </div>
        </main>
      );
    case states[1]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FNV />
          <div className="flex justify-center">
            <ClassForm />
          </div>
        </main>
      );
    case states[2]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO4 />
          <div className="flex justify-center">
            <ClassForm />
          </div>
        </main>
      );
  }
  return (
    <div className="h-[80vh] mt-3 l:h-[60vh]">
      <FO3 isActive={true} />
    </div>
  );
}
