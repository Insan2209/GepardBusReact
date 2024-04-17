function App() {
  return (
    <>
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
    </>
  );
}

export default App;
