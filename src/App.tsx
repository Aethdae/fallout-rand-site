import Header from "./Header.tsx";
import Game from "./Game.tsx";
import { useEffect, useState } from "react";
import Footer from "./Footer.tsx";
//@ts-ignore
const states = ["three", "vegas", "four"];

//todo useEffect instead of this:
// (async function getData() {
//   try {
//     const res = await fetch(
//       "https://raw.githubusercontent.com/Aethdae/fallout-randomizer/refs/heads/main/data.json",
//     );
//     const data = await res.text();
//     console.log("Getting data");
//     localStorage.setItem("falloutRandomizerData", data);
//   } catch (err) {
//     console.warn(`Error getting JsonData: ${err}`);
//   }
// })();

export default function App() {
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/Aethdae/fallout-randomizer/refs/heads/main/data.json",
        );
        const data = await res.text();
        console.log("Getting data");
        localStorage.setItem("falloutRandomizerData", data);
      } catch (err) {
        console.warn(`Error getting JsonData: ${err}`);
      }
    }
    getData();
  }, []);
  const [gameState, setGame] = useState<"three" | "vegas" | "four">("three");
  return (
    <div className="bg-gray-800 mw-[120rem] mx-0 my-auto text-center">
      <Header gameState={[gameState, setGame]} />
      <Game gameState={[gameState, setGame]} />
      <Footer gameState={[gameState, setGame]} />
    </div>
  );
}
