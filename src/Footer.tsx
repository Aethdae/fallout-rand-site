const buttonClasses = [
  "border-2 rounded-xl bg-gray-400 p-2 hover:outline-2 hover:bg-gray-600 hover:text-white active:outline-6",
  "active:bg-white active:text-black transition-all duration-100 ease-in mb-4",
];

function Footer({ gameState }) {
  return (
    <>
      {/* todo */}
      <footer className="pb-[40vh] flex justify-center">
        <nav className="flex justify-center h-full">
          <div className="flex gap-2 md:gap-6 h-full items-bottom">
            <a
              href="https://github.com/Aethdae/fallout-rand-site"
              target="_blank"
              className={buttonClasses.join(" ")}
            >
              Site Source
            </a>
            <a
              href="https://github.com/Aethdae/fallout-randomizer"
              target="_blank"
              className={buttonClasses.join(" ")}
            >
              FO3/NV Program Version
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
