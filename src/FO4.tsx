import "./App.css";

export default function FO4({ isActive = true }) {
  if (isActive) {
    return (
      <section className="bg-four-500">
        <p>placeholderFO4</p>
      </section>
    );
  } else {
    return <></>;
  }
}
