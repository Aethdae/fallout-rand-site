import "./App.css";

export default function FO4({ isActive = true }) {
  if (isActive) {
    return (
      <>
        <p>placeholderFO4</p>
      </>
    );
  } else {
    return <></>;
  }
}
