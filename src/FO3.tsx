import "./App.css";

export default function FO3({ isActive = true }) {
  if (isActive) {
    return (
      <section className="bg-three-500">
        <p>placeholderfo3</p>
      </section>
    );
  } else {
    return <></>;
  }
}
