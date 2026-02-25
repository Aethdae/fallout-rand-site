import "./App.css";

export default function FO3({ isActive = true }) {
  if (isActive) {
    return (
      <>
        <p>placeholderfo3</p>
      </>
    );
  } else {
    return <></>;
  }
}
