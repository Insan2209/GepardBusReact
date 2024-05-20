import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from '@mui/material';

function News () {

    const [expandedButtonId, setExpandedButtonId] = useState(null);

    const toggleExpansion = (buttonId) => {
        if (expandedButtonId === buttonId) {
            setExpandedButtonId(null);
        } else {
            setExpandedButtonId(buttonId);
        }
    };

    const isSmall = useMediaQuery("(max-width:1279px)");

    const variants = isSmall ?
    {
        Animate: 
        {
            height: "auto",
            opacity: 100,
        },
        InitialAndExit:
        {
            height: 0,
            opacity: 0,
        }
    }
    :
    {
        Animate: 
        {
            height: "auto",
            opacity: 100,
            x: 80,
        },
        InitialAndExit:
        {
            height: 0,
            opacity: 0,
            x: 0,
        }
    };

    return (
        <div className="flex flex-wrap justify-between w-full my-12 xl:my-auto">
            <div className="grid grid-flow-row grid-cols-1 xl:grid-rows-7 xl:grid-cols-3 gap-5 3xl:gap-16 justify-start my-auto px-8 w-full xl:relative overflow-x-hidden">
                    <div className="xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 w-full h-min">
                        <div className="flex flex-row items-center w-full justify-between">
                            <p className="text-2xl xl:text-4xl font-bold text-zinc-700 font-poppins text-left w-full">Bilety miesięczne</p>
                            <div className="min-w-fit">
                            <button className="hidden xl:flex" onClick={() => toggleExpansion(1)}>
                                <img
                                    src="/png/right_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 1 ? '-scale-x-100' : 'scale-x-100'}`}
                                />
                            </button>
                            
                            <button className="flex xl:hidden" onClick={() => toggleExpansion(1)}>
                                <img
                                    src="/png/down_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 1 ? '-scale-y-100' : 'scale-y-100'}`}
                                />
                            </button>
                            </div>
                        </div>
                        <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                    </div>

                    <AnimatePresence>
                        {expandedButtonId === 1 && (
                            <motion.div
                                key="content"
                                className="xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-8 w-full px-0"
                                variants={variants}
                                initial={variants.InitialAndExit}
                                animate={variants.Animate}
                                exit={variants.InitialAndExit}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="xl:mr-20 mt-6 xl:mt-0">
                                    <p className="text-2xl 2xl:text-4xl font-semibold text-zinc-700 font-poppins text-left">Bilety miesięczne na miesiąc <span className="text-cocoa_brown">maj 2024</span></p>
                                    <p className="text-lg 2xl:text-2xl font-semibold text-zinc-700 font-poppins text-left mt-8 mb-2">Zakup biletów odbędzie się na dworcu PKP w lokalu 2.06 w dniach:</p>
                                    <ul className="text-md 2xl:text-xl list-disc list-inside text-zinc-700">
                                        <li>29.04.2024 <span className="text-cocoa_brown">(poniedziałek)</span> w godzinach 7:20 - 17:00</li>
                                        <li>30.04.2024 <span className="text-cocoa_brown">(wtorek)</span> w godzinach 7:20 - 17:00</li>
                                        <li>06.05.2024 <span className="text-cocoa_brown">(poniedziałek)</span> w godzinach 7:20 - 16:00</li>
                                    </ul>
                                    <p className="text-lg 2xl:text-2xl font-semibold text-zinc-700 font-poppins text-left mt-8 mb-2">oraz w Liceum im. Henryka Sienkiewicza w Pajęcznie na portierni w dniach:</p>
                                    <ul className="text-md 2xl:text-xl list-disc list-inside text-zinc-700">
                                        <li>26.04.2024 <span className="text-cocoa_brown">(piątek)</span> w godzinach 10:00 - 13:30</li>
                                        <li>14.05.2024 <span className="text-cocoa_brown">(wtorek)</span> w godzinach 10:30 - 13:00</li>
                                    </ul>
                                    <p className="text-md 2xl:text-lg text-zinc-700 font-poppins text-left mt-8 mb-2">Informujemy iż sprzedaż biletów miesięcznych na maj 2024 na trasie Więcki-Popów-Kłobuck odbędzie sie tylko w dniach 29.04.2024 - 06.05.2024. Chcąc zakupić bilet miesięczny w innym terminie należy udać się do punktu sprzedaży na Dworcu PKP lok.2.06 w Częstochowie lub na portiernię w Liceum w Pajęcznie.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                
                    <div className="xl:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-5 w-full h-min">
                        <div className="flex flex-row items-center w-full justify-between">
                            <p className="text-2xl xl:text-4xl font-bold text-zinc-700 font-poppins text-left w-full">Nowości</p>
                            <div className="min-w-fit">
                            <button className="hidden xl:flex" onClick={() => toggleExpansion(2)}>
                                <img
                                    src="/png/right_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 2 ? '-scale-x-100' : 'scale-x-100'}`}
                                />
                            </button>
                            
                            <button className="flex xl:hidden" onClick={() => toggleExpansion(2)}>
                                <img
                                    src="/png/down_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 2 ? '-scale-y-100' : 'scale-y-100'}`}
                                />
                            </button>
                            </div>
                        </div>
                        <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                    </div>
                    <AnimatePresence>
                        {expandedButtonId === 2 && (
                            <motion.div
                                key="content"
                                className="xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-8 w-full px-0 xl:right-0 xl:top-12"
                                variants={variants}
                                initial={variants.InitialAndExit}
                                animate={variants.Animate}
                                exit={variants.InitialAndExit}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="xl:mr-36 mt-6 xl:mt-0">
                                    <p className="text-2xl 2xl:text-4xl font-semibold text-zinc-700 font-poppins text-left">Przejazdy podczas majówki 2024</p>
                                    <p className="text-md 2xl:text-2xl text-zinc-700 font-poppins text-left mt-6">Przypominamy, iż <span className="text-cocoa_brown font-semibold">1 i 3 maja</span> nie kursujemy a <span className="text-cocoa_brown font-semibold">2 maja</span> przejazdy odbywać się będą zgodnie z rozkładem niedzielnym.</p>
                                    <p className="text-2xl 2xl:text-4xl font-semibold text-zinc-700 font-poppins text-left mt-10">Bilety wieloprzejazdowe</p>
                                    <p className="text-md 2xl:text-2xl text-zinc-700 font-poppins text-left mt-6">Przypominamy iż bilet wieloprzejazdowy sprzedawany jest na <span className="text-cocoa_brown font-semibold">minimum 20</span> przejazdów. Możliwość zakupu takiego biletu odbywa się zgodnie z harmonogramem sprzedaży biletów miesięcznych lub w dowolnym momencie u kierowcy.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="xl:col-start-1 xl:col-end-2 xl:row-start-6 xl:row-end-7 w-full h-min">
                        <div className="flex flex-row items-center w-full justify-between">
                            <p className="text-2xl xl:text-4xl font-bold text-zinc-700 font-poppins text-left w-4/5">Zorganizowane grupy, wycieczki</p>
                            <div className="min-w-fit">
                            <button className="hidden xl:flex" onClick={() => toggleExpansion(3)}>
                                <img
                                    src="/png/right_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 3 ? '-scale-x-100' : 'scale-x-100'}`}
                                />
                            </button>
                            
                            <button className="flex xl:hidden" onClick={() => toggleExpansion(3)}>
                                <img
                                    src="/png/down_arrow.svg"
                                    alt="arrow"
                                    className={`h-10 w-10 transition-transform duration-500 transform ${expandedButtonId === 3 ? '-scale-y-100' : 'scale-y-100'}`}
                                />
                            </button>
                            </div>
                        </div>
                        <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                    </div>
                    <AnimatePresence>
                        {expandedButtonId === 3 && (
                            <motion.div
                                key="content"
                                className="xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-8 w-full px-0 xl:right-0 xl:top-12"
                                variants={variants}
                                initial={variants.InitialAndExit}
                                animate={variants.Animate}
                                exit={variants.InitialAndExit}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="xl:mr-36 mt-6 xl:mt-0">
                                    <p className="text-2xl 2xl:text-4xl font-semibold text-zinc-700 font-poppins text-left xl:leading-tight">Planujesz <span className="text-cocoa_brown">wycieczkę?</span> Szukasz transportu <span className="text-cocoa_brown">gości weselnych?</span> A może organizujesz <span className="text-cocoa_brown">wyjazd integracyjny?</span></p>
                                    <p className="text-lg 2xl:text-2xl text-zinc-700 font-poppins text-left mt-6">Jeśli tak to dobrze trafiłeś! Oferujemy wynajem busów i autokarów na różne okazje. Zainteresowany? Zadzwoń pod numer <span className="text-cocoa_brown font-semibold">502 593 761</span>. Na pewno pomożemy dobrać odpowiedni pojazd w rozsądnej cenie.</p>
                                    <p className="text-2xl 2xl:text-4xl font-semibold text-zinc-700 font-poppins text-left xl:leading-tight mt-10">Ogłoszenie - grupy zorganizowane</p>
                                    <p className="text-md 2xl:text-xl text-zinc-700 font-poppins text-left mt-6">Mając na uwadze możliwe problemy z zabraniem zorganizowanych grup osób, prosimy aby na co najmniej <span className="text-cocoa_brown font-semibold">2 dni przed podróżą</span> opiekun lub osoba organizująca taką wycieczkę na trasach naszych linii komunikacyjnych skontaktowała się z nami pod numerem telefonu <span className="text-cocoa_brown font-semibold">502 593 761</span> w godzinach <span className="text-cocoa_brown font-semibold">9:00 - 18:00</span> i poinformowała o takim zamiarze. Ułatwi to zorganizowanie takiego przejazdu poprzez podstawienie na taki kurs większego autobusu lub dodatkowego pojazdu. <span className="font-semibold">W przypadku nie zgłoszenia takiej sytuacji może dojść do nie zabrania takiej grupy lub części tych osób.</span></p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
            </div>
        </div>
    );
}

export default News; 