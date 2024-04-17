function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>Gepard Bus</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href=".//index.css" />
      <link rel="icon" type="image/x-icon" href="../png/favicon.png" />
      <nav className="bg-slate-100">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2 xl:justify-center 2xl:justify-between">
          <a href="index.html">
            <img
              src={require(".//png/gepard_logo.png")}
              className="h-24"
              alt="Gepard Bus Logo"
            />
          </a>
          <button
            id="toggleBtn"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-20"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full xl:block xl:w-auto pt-3"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col xl:flex-row p-4 space-y-4 xl:space-x-8 xl:space-y-0">
              <li className="flex items-center">
                <a
                  href="about_us.html"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/ofirmie_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="Ikona firma"
                  />
                  O firmie
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/rozklad_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Rozkład jazdy
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/zaloga_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Nasza załoga
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/bilety_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Rezerwacja biletów
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/aktualnosci_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Aktualności
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/kontakt_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Kontakt
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center py-2 px-2 xl:px-3 w-full xl:w-auto text-gray-900 rounded hover:bg-gray-300 xl:hover:bg-transparent xl:border-0 xl:hover:text-princeton_orange"
                >
                  <img
                    src={require(".//png/regulamin_pomaranczowe.png")}
                    className="w-6 h-6 mr-2"
                    alt="?????"
                  />
                  Regulamin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap items-center justify-between mt-12 min-h-[25vw]">
        <div className="w-full xl:w-1/2">
          <div className="items-center justify-between mx-4 xl:ml-24 xl:mt-36">
            <p className="text-3xl xl:text-6xl font-bold text-zinc-700 font-poppins">
              Gepard: Szybko, Pewnie, Wygodnie -{" "}
              <span className="text-cocoa_brown">Zawsze!</span>
            </p>
            <p className="text-justify text-lg xl:text-2xl text-zinc-700 font-poppins mt-8">
              Zapraszamy do skorzystania z naszych usług transportowych, gdzie
              szybkość, pewność i wygoda to nasze kluczowe wartości. Niezależnie
              od celu podróży, Gepard zapewnia niezawodne połączenia, które
              dostarczą Cię dokładnie tam, gdzie chcesz być.
            </p>
            <div className="xl:flex flex-wrap items-center justify-between mt-12 font-poppins space-y-4 xl:space-y-0">
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                8+ <br />
                <span className="text-zinc-700 text-xl xl:text-2xl font-normal">
                  Pojazdów
                </span>
              </p>
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                19+ <br />
                <span className="text-zinc-700 text-xl xl:text-2xl font-normal">
                  Lat Doświadczenia
                </span>
              </p>
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                90000+ <br />
                <span className="text-zinc-700 text-xl xl:text-2xl font-normal">
                  Wykonanych Przejazdów
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center mt-36">
          <img src={require(".//png/gepard_logo.png")} className="h-96 w-96" alt="??" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row mt-36 items-center justify-between w-full bg-xanthous">
        <div className="flex justify-center items-center w-full">
          <img src={require(".//png/gepard_logo.png")} alt="Gepard bus logo" />
        </div>
        <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-end md:pr-10">
          <p className="text-xl font-semibold text-zinc-700 font-poppins">
            Wpadnij na naszego Facebooka
          </p>
          <a href="#">
            <img
              src={require(".//png/facebook_pomaranczowe.png")}
              className="w-10 h-10 ml-2"
              alt="??"
            />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full md:w-1/2 md:justify-start md:pl-10">
          <p className="text-xl font-semibold text-zinc-700 font-poppins">
            Odwiedź nas na Instagramie
          </p>
          <a href="#">
            <img
              src={require(".//png/instagram_pomaranczowe.png")}
              className="w-10 h-10 ml-2"
              alt="??"
            />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full mt-12 md:mt-2">
          <p className="text-sm text-zinc-700 font-poppins">
            Icons by{" "}
            <a href="icons8.com" target="_blank">
              Icons8
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
