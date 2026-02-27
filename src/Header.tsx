import "./Header.css";
const states = ["three", "vegas", "four"];
const buttonClass = [
  "text-black",
  "font-bold",
  "gameNavItem",
  "w-[10rem]",
  "rounded-xl",
  "shadow-sm",
  "border-black",
  "hover:border-2",
  "hover:border-gray-50",
  "hover:bg-black",
  "hover:text-white",
  "hover:w-[calc(width*.50)]",
  "transition-all",
  "duration-100",
  "ease-in-out",
  "outline-1",
];
const bgColorStates = {
  three: "bg-three-300",
  vegas: "bg-vegas-300",
  four: "bg-four-300",
};

// @ts-ignore
export default function Header({ gameState }) {
  console.log(gameState);
  return (
    <>
      <header className="bg-gray-800 flex flex-col items-center">
        <h1 className="font-(family-name:--font-fixed-sys) text-3xl bg-amber-100 w-full">
          Fallout Randomizer
        </h1>
        <nav
          //@ts-ignore
          className={`flex gap-6 my-2 p-3 border-2 w-full min-w-20 max-w-300 ${bgColorStates[gameState[0]]} rounded-2xl justify-around`}
        >
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
  // @ts-ignore
  function addClass(id) {
    document.getElementById(id)?.classList.add("activeGame");
    //localStorage.setItem(k,p);
  }
}
