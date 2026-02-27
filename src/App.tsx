import Header from "./Header.tsx";
import Game from "./Game.tsx";
import { useState } from "react";
import Footer from "./Footer.tsx";
const states = ["three", "vegas", "four"];

export default function App() {
  const [gameState, setGame] = useState(states[0]);
  return (
    <div className="bg-gray-800 mw-[120rem] mx-0 my-auto text-center">
      <Header gameState={[gameState, setGame]} />
      <Game gameState={[gameState, setGame]} />
      <Footer gameState={[gameState, setGame]} />
    </div>
  );
  function getCurrentState(data) {
    setGame(data);
  }
}
