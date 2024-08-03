import React from "react";
import { motion } from "framer-motion"

function MainPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between my-12 xl:my-auto py-5">
        <motion.div className="w-full xl:w-1/2" animate={{ opacity: 1, x: 0 }} initial = {{ opacity: 0, x: -50 }} transition={{ duration: 2 }}>
          <div className="items-center justify-between mx-4 xl:ml-24">
            <p className="text-3xl xl:text-6xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins">
              Gepard: Szybko, Pewnie, Wygodnie -{" "}
              <span className="text-cocoa_brown">Zawsze!</span>
            </p>
            <p className="text-lg xl:text-2xl text-zinc-700 dark:text-zinc-400 font-poppins mt-8">
              Zapraszamy do skorzystania z naszych usług transportowych, gdzie
              szybkość, pewność i wygoda to nasze kluczowe wartości. Niezależnie
              od celu podróży, Gepard zapewnia niezawodne połączenia, które
              dostarczą Cię dokładnie tam, gdzie chcesz być.
            </p>
            <div className="xl:flex flex-wrap items-center justify-between mt-12 font-poppins space-y-4 xl:space-y-0">
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                8+ <br />
                <span className="text-zinc-700 dark:text-zinc-300 text-xl xl:text-2xl font-normal">
                  Pojazdów
                </span>
              </p>
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                19+ <br />
                <span className="text-zinc-700 dark:text-zinc-300 text-xl xl:text-2xl font-normal">
                  Lat Doświadczenia
                </span>
              </p>
              <p className="text-3xl xl:text-4xl font-semibold text-princeton_orange">
                90000+ <br />
                <span className="text-zinc-700 dark:text-zinc-300 text-xl xl:text-2xl font-normal">
                  Wykonanych Przejazdów
                </span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className=" hidden xl:flex w-full xl:w-1/2 items-center justify-center" animate={{ opacity: 1 }} initial = {{ opacity: 0 }} transition={{ duration: 2, delay: 0.6 }}>
          <div>
            <img src="/png/bus.png" className="h-full block dark:hidden" alt="bus" />
            <img src="/png/bus3.png" className="h-full hidden dark:block" alt="bus" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MainPage;
