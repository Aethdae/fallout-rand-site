import { useState } from "react";
import "./Header.css";
const states = ["falloutThree", "falloutNewVegas", "falloutFour"];
const buttonClass = [
  "text-black",
  "font-bold",
  "gameNavItem",
  "w-[10rem]",
  "rounded-xl",
  "shadow-sm",
];

export default function Header({ gameState }) {
  let bgColor = "";
  switch (gameState[0]) {
  }
  return (
    <>
      <header className="font-size">
        <h1 className="font-(family-name:--font-fixed-sys) text-3xl mb-2 bg-amber-100">
          Fallout Randomizer
        </h1>
        <nav className="flex gap-6 justify-around">
          <button
            className={buttonClass.join(" ") + " bg-three-500 activeGame"}
            id="falloutThree"
            onClick={() => {
              gameState[1](states[0]);
              removeClasses();
              addClass("falloutThree");
              //sendStateToParent(states[0]);
            }}
          >
            FO:3
          </button>
          <button
            className={buttonClass.join(" ") + " bg-vegas-500"}
            id="falloutNV"
            onClick={() => {
              gameState[1](states[1]);
              removeClasses();
              addClass("falloutNV");
              //sendStateToParent(states[1]);
            }}
          >
            FO:NV
          </button>
          <button
            className={buttonClass.join(" ") + " bg-four-500"}
            id="falloutFour"
            onClick={() => {
              gameState[1](states[2]);
              removeClasses();
              addClass("falloutFour");
              //sendStateToParent(states[2]);
            }}
          >
            FO:4
          </button>
        </nav>
      </header>
    </>
  );
  function removeClasses() {
    const elements = document.querySelectorAll(".gameNavItem");
    elements.forEach((element) => {
      element.classList.remove("activeGame");
    });
  }
  function addClass(id) {
    document.getElementById(id)?.classList.add("activeGame");
  }
}
