import React, { useState } from "react";


function News () {

    const [expandedButtonId, setExpandedButtonId] = useState(null);

    // Funkcja do przełączania przycisku
    const toggleExpansion = (buttonId) => {
        if (expandedButtonId === buttonId) {
            // Jeśli kliknięto już rozwinięty przycisk, zamknij go
            setExpandedButtonId(null);
        } else {
            // W przeciwnym razie otwórz nowy przycisk i zamknij wcześniejszy
            setExpandedButtonId(buttonId);
        }
    };

    return (
    <>
        <div className="flex flex-wrap justify-between w-full my-12 md:my-auto">
            <div className="flex flex-wrap flex-col space-y-6 md:space-y-28 justify-start my-auto px-8 w-full md:w-1/3 py-10">
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Bilety miesięczne</p>
                        <button className="hidden md:flex" onClick={() => toggleExpansion(1)}>
                            <img
                                src="/png/right_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-1000 transform ${expandedButtonId === 1 ? '-scale-x-100' : 'scale-x-100'}`}
                            />
                        </button>
                        <button className="flex md:hidden" onClick={() => toggleExpansion(1)}>
                            <img
                                src="/png/down_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-500 transform ${expandedButtonId === 1 ? '-scale-y-100' : 'scale-y-100'}`}
                            />
                        </button>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Nowości</p>
                        <button className="hidden md:flex" onClick={() => toggleExpansion(2)}>
                            <img
                                src="/png/right_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-1000 transform ${expandedButtonId === 2 ? '-scale-x-100' : 'scale-x-100'}`}
                            />
                        </button>
                        <button className="flex md:hidden" onClick={() => toggleExpansion(2)}>
                            <img
                                src="/png/down_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-500 transform ${expandedButtonId === 2 ? '-scale-y-100' : 'scale-y-100'}`}
                            />
                        </button>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
                <div>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins text-left">Zorganizowane grupy, wycieczki</p>
                        <button className="hidden md:flex" onClick={() => toggleExpansion(3)}>
                            <img
                                src="/png/right_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-1000 transform ${expandedButtonId === 3 ? '-scale-x-100' : 'scale-x-100'}`}
                            />
                        </button>
                        <button className="flex md:hidden" onClick={() => toggleExpansion(3)}>
                            <img
                                src="/png/down_arrow.svg"
                                alt="arrow"
                                className={`ml-4 h-10 transition-transform duration-500 transform ${expandedButtonId === 3 ? '-scale-y-100' : 'scale-y-100'}`}
                            />
                        </button>
                    </div>
                    <hr class="h-px w-full my-2 bg-selective_yellow border-0 block"></hr>
                </div>
            </div>
            <div className="flex flex-wrap w-full md:w-2/3 px-8 md:px-0 md:pr-36 py-10">
                <div
                    className={`transition-all duration-1000 transform static ${
                        expandedButtonId === 1 ? 'opacity-100 translate-x-28' : 'opacity-0 translate-x-0'
                    }`}
                >
                    <p className="text-2xl md:text-4xl font-semibold text-zinc-700 font-poppins text-left">Bilety miesięczne na miesiąc <span className="text-cocoa_brown">maj 2024</span></p>
                    <p className="text-lg md:text-2xl font-semibold text-zinc-700 font-poppins text-left mt-8 mb-2">Zakup biletów odbędzie się na dworcu PKP w lokalu 2.06 w dniach:</p>
                    <ul className="text-md md:text-xl list-disc list-inside text-zinc-700">
                        <li>29.04.2024 <span className="text-cocoa_brown">(poniedziałek)</span> w godzinach 7:20 - 17:00</li>
                        <li>30.04.2024 <span className="text-cocoa_brown">(wtorek)</span> w godzinach 7:20 - 17:00</li>
                        <li>06.05.2024 <span className="text-cocoa_brown">(poniedziałek)</span> w godzinach 7:20 - 16:00</li>
                    </ul>
                    <p className="text-lg md:text-2xl font-semibold text-zinc-700 font-poppins text-left mt-8 mb-2">oraz w Liceum im. Henryka Sienkiewicza w Pajęcznie na portierni w dniach:</p>
                    <ul className="text-md md:text-xl list-disc list-inside text-zinc-700">
                        <li>26.04.2024 <span className="text-cocoa_brown">(piątek)</span> w godzinach 10:00 - 13:30</li>
                        <li>14.05.2024 <span className="text-cocoa_brown">(wtorek)</span> w godzinach 10:30 - 13:00</li>
                    </ul>
                    <p className="text-md md:text-lg text-zinc-700 font-poppins text-left mt-8 mb-2">Informujemy iż sprzedaż biletów miesięcznych na maj 2024 na trasie Więcki-Popów-Kłobuck odbędzie sie tylko w dniach 29.04.2024 - 06.05.2024. Chcąc zakupić bilet miesięczny w innym terminie należy przyjechać do punktu sprzedaży na Dworcu PKP lok.2.06 w Częstochowie lub na portiernię w Liceum w Pajęcznie.</p>
                </div>
                <div
                    className={`transition-all duration-1000 transform absolute ${
                        expandedButtonId === 2 ? 'opacity-100 translate-x-28' : 'opacity-0 translate-x-0'
                    }`}
                >
                    <p className="text-2xl md:text-4xl font-semibold text-zinc-700 font-poppins text-left">Tekst2</p>
                    
                </div>
                <div
                    className={`transition-all duration-1000 transform absolute ${
                        expandedButtonId === 3 ? 'opacity-100 translate-x-28' : 'opacity-0 translate-x-0'
                    }`}
                >
                    <p className="text-2xl md:text-4xl font-semibold text-zinc-700 font-poppins text-left">Tekst33</p>
                    
                </div>
            </div>
        </div>
    </>
    );
}

export default News; 