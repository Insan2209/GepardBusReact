import React from "react";
import { motion } from "framer-motion"

function AboutUs () {
    return (
    <>
        <div className="flex flex-wrap items-center justify-between my-12 xl:my-auto xl:py-20">
            <motion.div className="hidden w-full xl:w-1/2 md:flex items-center justify-center" animate={{ opacity: 1 }} initial = {{ opacity: 0 }} transition={{ duration: 2, delay: 0.6 }}>
                <div>
                    <img src="/png/bus.png" className="h-full block dark:hidden" alt="bus" />
                    <img src="/png/bus3.png" className="h-full hidden dark:block" alt="bus" />
                </div>
            </motion.div>
            <motion.div className="w-full xl:w-1/2" animate={{ opacity: 1 }} initial = {{ opacity: 0 }} transition={{ duration: 2 }}>
                <div className="items-center justify-between mx-4 xl:mr-24">
                <p className="text-4xl xl:text-4xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins">
                    Dlaczego warto wybrać <span className="text-cocoa_brown">geparda?</span>
                </p>
                <p className="text-lg xl:text-2xl text-zinc-700 dark:text-zinc-400 font-poppins mt-2 md:mt-4">
                    To proste! Z nami masz gwarancję bezpiecznego i udanego przejazdu.
                    Wybierając firmę Gepard oszczędzasz czas i pieniądze. Brzmi jak dobry
                    plan?
                </p>
                </div>
                <div className="items-center justify-between mx-4 xl:mr-24 mt-8">
                <p className="text-4xl xl:text-4xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins">
                    Chcesz dowiedzieć się więcej{" "}
                    <span className="text-cocoa_brown">o nas?</span>
                </p>
                <p className="text-md xl:text-2xl text-zinc-700 dark:text-zinc-400 font-poppins mt-2 md:mt-4">
                    Nasza firma działa na terenie województwa śląskiego i łódzkiego.
                    Zajmujemy się głównie przewozem pasażerskim na regularnych liniach
                    komunikacyjnych, jak również przewozami okolicznościowymi. Posiadamy
                    wieloletnie doświadczenie w oferowanych przez nas usługach. Posiadamy
                    wszelkie wymagane certyfikaty, licencje i zezwolenia do wykonywania
                    transportu pasażerskiego.
                </p>
                </div>
                <div className="items-center justify-between mx-4 xl:mr-24 mt-8">
                <p className="text-4xl xl:text-4xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins">
                    Masz sugestie lub chcesz nam coś{" "}
                    <span className="text-cocoa_brown">przekazać?</span>
                </p>
                <p className="text-lg xl:text-2xl text-zinc-700 dark:text-zinc-400 font-poppins mt-2 md:mt-4">
                    Zapraszamy do zakładki kontakt, w której znajdziesz formularz dzięki
                    któremu możesz podzielić się z nami swoją opinią!
                </p>
                </div>
            </motion.div>
        </div>
    </>
    );
}

export default AboutUs; 