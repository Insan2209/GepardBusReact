import React from "react";

function Schedule () {
    return (
    <>
        <div className="flex flex-wrap justify-center mt-24 min-h-[25vw]">
            <div className="w-full xl:w-1/2 block space-y-10 text-center justify-center">
                <p className="text-3xl xl:text-6xl font-bold text-zinc-700 font-poppins mb-24">
                    Wybierz trasę:
                </p>
                <p className="text-xl xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Pajęczno - Częstochowa <br />
                    <span className="text-sm xl:text-xl font-semibold text-cocoa_brown"> 
                        Przez: Działoszyn, Zawady, Miedźno, Biała, Więcki
                    </span>
                </p>
                <p className="text-xl xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Popów - Kłobuck <br />
                    <span className="text-sm xl:text-xl font-semibold text-cocoa_brown"> 
                        Przez: Rębielice Królewskie, Wilkowiecko, Zawady
                    </span>
                </p>
                <p className="text-xl xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Popów - Więcki <br />
                    <span className="text-sm xl:text-xl font-semibold text-cocoa_brown"> 
                        Przez: Brzózki, Nowa Wieś, Kule, Wąsosz Górny
                    </span>
                </p>
            </div>
        </div>
    </>
    );
}

export default Schedule; 