function Footer({ gameState }) {
  return (
    <>
      <footer className="">
        <nav className="">
          <div className="flex">
            <a
              href="https://github.com/Aethdae/fallout-rand-site"
              target="_blank"
              className="border-2 rounded-b-xl"
            >
              Site Source
            </a>
            <a
              href="https://github.com/Aethdae/fallout-randomizer"
              target="_blank"
              className="border-2"
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
