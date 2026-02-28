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
    } catch (err) {
      console.warn(`Error getting JsonData: ${err}`);
    }
  })();

  //@ts-ignore
  function rollClass(event) {
    const targ = event.target;
    if (targ.karmaCheck.checked) {
      console.log("Karma!");
    }
    if (targ.challengeCheck.checked) {
      console.log("Challenges!");
    }
    if (targ.specialCheck.checked) {
      console.log("SPECIAL!");
    }
    if (targ.skillsCheck.checked) {
      console.log("Skills!");
    }
    console.log(targ.challengeNumberSelect.value);
  }

  function ClassForm() {
    const [isDropdownShown, setDropdown] = useState(false);
    document.getElementById("rollForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    return (
      <section className="bg-gray-700/40 border-4 rounded-2xl px-3">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            rollClass(event);
          }}
          className=""
          id="rollForm"
        >
          <div className="grid mt-6 grid-cols-1 gap-4 w-[80vw] md:grid-cols-2 md:w-[60vw] lg:w-[40vw]">
            <CheckLabel buttonType="karmaCheck" buttonName="Karma" />
            <CheckChallengeLabel
              buttonType="challengeCheck"
              buttonName="Challenge"
              stateHandler={[isDropdownShown, setDropdown]}
            />
            {isDropdownShown ? (
              <div className="flex justify-center">
                <label className="p-2 outline-3 bg-gray-200 rounded-lg">
                  <select
                    className="mr-1.5 bg-gray-950 text-white p-.5 rounded-sm"
                    name="challengeNumberSelect"
                    id="challengeNumberSelect"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {"Challenges"}
                </label>
              </div>
            ) : (
              <></>
            )}
            <CheckLabel buttonType="specialCheck" buttonName="SPECIAL" />
            <CheckLabel buttonType="skillsCheck" buttonName="Skills" />
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
          //@ts-ignore
          className={`border-2 ${bgColorStates[gameState[0]]} rounded-xl w-full p-2 md:w-40 cursor-pointer`}
        >
          Roll!
        </button>
      </>
    );
  }

  // @ts-ignore
  function CheckLabel({ buttonType, buttonName }) {
    const [checked, setCheck] = useState(false);
    const color = checked ? "bg-green-300" : "bg-gray-300";
    const bgColor = checked ? "hover:bg-green-200" : "hover:bg-gray-200";
    const labelClasses = `p-2 outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer`;

    // if (isChecked) {
    //   return (
    //     <>
    //       <div className="flex justify-center">
    //         <label className={labelClasses}>
    //           <input
    //             className="mr-3"
    //             type="checkbox"
    //             name={buttonType}
    //             id={buttonType}
    //             checked={isChecked}
    //             onClick={() => {
    //               setCheck(!checked);
    //               isChecked = true;
    //             }}
    //           />
    //           {"Random " + buttonName}
    //         </label>
    //       </div>
    //     </>
    //   );
    // }
    // else

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
    const labelClasses = `p-2 outline-3 ${color} accent-black rounded-lg ${bgColor} cursor-pointer`;

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
                stateHandler[1](!stateHandler[0]);
              }}
            />
            {"Random " + buttonName}
          </label>
        </div>
      </>
    );
  }

  switch (gameState[0]) {
    case states[0]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO3 children={<ClassForm />} />
        </main>
      );
    case states[1]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FNV children={<ClassForm />} />
        </main>
      );
    case states[2]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO4 children={<ClassForm />} />
        </main>
      );
  }
  return (
    <div className="h-[80vh] mt-3 l:h-[60vh]">
      <FO3 children={<ClassForm />} />
    </div>
  );
}
