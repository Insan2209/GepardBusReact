import React from "react";

function News () {
    return (
    <>
        <div className="flex flex-wrap justify-center mt-12 min-h-[85vw] xl:min-h-[25vw]">
            <div className="w-full xl:w-1/3 flex flex-wrap justify-center bg-red-300">
                <p className="text-lg md:text-2xl font-semibold text-zinc-700 font-poppins">Bilety miesięczne na miesiąc kwiecień 2024</p>
                <p className="text-md md:text-xl text-zinc-700 ml-5">Sprzedaż biletów miesięcznych odbędzie się w Częstochowie w budynku dworca PKP, lokal 2.06 w dniach:</p>
                <ul className="list-disc">
                    <li>27.03.2024 (środa) w godzinach 7:20 - 17:00</li>
                    <li>28.03.2024 (czwartek) w godzinach 7:20 - 16:00</li>
                    <li>02.04.2024 (wtorek) w godzinach 7:20 - 15:00</li>
                    <li>03.04.2024 (środa) w godzinach 7:20 - 15:00</li>
                </ul>
            </div>
            <div className="w-full xl:w-2/3 flex text-center justify-center bg-blue-300">

            </div>
        </div>
    </>
    );
}

export default News; 