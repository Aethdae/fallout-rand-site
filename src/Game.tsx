import FO4 from "./FO4.tsx";
import FO3 from "./FO3.tsx";
import FNV from "./FNV.tsx";
const states = ["falloutThree", "falloutNewVegas", "falloutFour"];

export default function Game({ gameState }) {
  {
    switch (gameState[0]) {
      case states[0]:
        return (
          <div className="h-[60vh]">
            <FO3 />
          </div>
        );
      case states[1]:
        return (
          <div className="h-[60vh]">
            <FNV />
          </div>
        );
      case states[2]:
        return (
          <div className="h-[60vh]">
            <FO4 />
          </div>
        );
    }
  }
  return (
    <div className="height-[60vh]">
      <FO3 isActive={true} />
      <FO4 />
      <FNV />
    </div>
  );
}
