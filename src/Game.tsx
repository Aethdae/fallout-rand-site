import FO4 from "./FO4.tsx";
import FO3 from "./FO3.tsx";
import FNV from "./FNV.tsx";
const states = ["three", "vegas", "four"];

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
          <label className="bg-gray-300 p-2 outline-3 rounded-lg hover:bg-gray-100">
            <input
              className="mr-3"
              type="checkbox"
              name="karmaCheck"
              id="karmaCheck"
            />
            Random Karma
          </label>
          <label className="bg-gray-300 p-2 outline-3 rounded-lg hover:bg-gray-100">
            <input
              className="mr-3"
              type="checkbox"
              name="challengeCheck"
              id="challengeCheck"
            />
            Random Challenge
          </label>
          <label className="bg-gray-300 p-2 outline-3 rounded-lg hover:bg-gray-100">
            <input
              className="mr-3"
              type="checkbox"
              name="specialCheck"
              id="specialCheck"
            />
            Random SPECIAL
          </label>
          <label className="bg-gray-300 p-2 outline-3 rounded-lg hover:bg-gray-100">
            <input
              className="mr-3"
              type="checkbox"
              name="skillsCheck"
              id="skillsCheck"
            />
            Random Skills
          </label>
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
          className={`border-2 bg-${gameState[0]}-300 rounded-xl w-full p-2 md:w-40`}
        >
          Roll!
        </div>
      </>
    );
  }

  switch (gameState[0]) {
    case states[0]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO3 />
        </main>
      );
    case states[1]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          {/* <FNV /> */}
          <div className="flex justify-center">
            <ClassForm />
          </div>
        </main>
      );
    case states[2]:
      return (
        <main className="h-[80vh] mt-3 l:h-[60vh]">
          <FO4 />
        </main>
      );
  }
  return (
    <div className="h-[80vh] mt-3 l:h-[60vh]">
      <FO3 isActive={true} />
    </div>
  );
}
