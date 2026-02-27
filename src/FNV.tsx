import "./App.css";

export default function FNV({ isActive = true }) {
  if (isActive) {
    return (
      <section className="bg-vegas-500">
        <p>placeholderFNV</p>
      </section>
    );
  } else {
    return <></>;
  }
}
