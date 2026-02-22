const gameNavItems = document.getElementsByClassName("gameNavItem");
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [game, setGame] = useState("falloutThree");
  return (
    <>
      <header className="header">
        <h1>Fallout Randomizer</h1>
        <nav className="gameNavBar">
          <button
            className="gameNavItem activeGame"
            id="falloutThree"
            onClick={() => {
              setActiveGame("falloutThree");
            }}
          >
            FO:3
          </button>
          <button
            className="gameNavItem"
            id="falloutNV"
            onClick={() => {
              setActiveGame("falloutNV");
            }}
          >
            FO:NV
          </button>
          <button
            className="gameNavItem"
            id="falloutFour"
            onClick={() => {
              setActiveGame("falloutFour");
            }}
          >
            FO:4
          </button>
        </nav>
      </header>
    </>
  );

  function setActiveGame(id: string) {
    for (let x = 0; x < gameNavItems.length; x++) {
      gameNavItems[x].className = "gameNavItem";
    }
    const element = document.getElementById(id);
    element.className += " activeGame";
    setGame(id);
    console.log(game);
  }
}
