const buttonClasses = [
  "border-2 rounded-xl bg-gray-400 p-2 hover:outline-2 hover:bg-gray-600 hover:text-white active:outline-6",
  "active:bg-white active:text-black transition-all duration-100 ease-in mb-4",
];

// @ts-ignore
function Footer({ gameState }) {
  return (
    <>
      {/* todo */}
      <footer className="py-10 flex flex-col justify-center md:py-20 lg:py-40">
        <nav className="flex justify-center h-full">
          <div className="flex text-sm lg:text-3xl gap-2 mx-2 md:gap-6 md:mx-6 h-full items-bottom">
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
        <p>
          Box art images &copy;{" "}
          <a className="text-three-500" href="https://bethesda.net">
            Bethesda Softworks
          </a>{" "}
          &{" "}
          <a className="text-vegas-500" href="https://www.obsidian.net/">
            Obsidian Entertainment
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
