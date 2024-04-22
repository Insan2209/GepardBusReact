import React from "react";

function AboutUs () {
    return (
    <>
        <div className="flex flex-wrap items-center justify-between">
            <div className="hidden w-full xl:w-1/2 md:flex items-center justify-center mt-36">
                <img src="/png/bus.png" className="h-max" alt="niewiemco"/>
            </div>
            <div className="w-full xl:w-1/2">
                <div className="items-center justify-between mx-4 xl:mr-24 xl:mt-36">
                <p className="text-lg xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Dlaczego warto wybrać <span className="text-cocoa_brown">geparda?</span>
                </p>
                <p className="text-md xl:text-2xl text-zinc-700 font-poppins mt-2 md:mt-4">
                    To proste! Z nami masz gwarancję bezpiecznego i udanego przejazdu.
                    Wybierając firmę Gepard oszczędzasz czas i pieniądze. Brzmi jak dobry
                    plan?
                </p>
                </div>
                <div className="items-center justify-between mx-4 xl:mr-24 mt-8">
                <p className="text-lg xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Chcesz dowiedzieć się więcej{" "}
                    <span className="text-cocoa_brown">o nas?</span>
                </p>
                <p className="text-md xl:text-2xl text-zinc-700 font-poppins mt-2 md:mt-4">
                    Nasza firma działa na terenie województwa śląskiego i łódzkiego.
                    Zajmujemy się głównie przewozem pasażerskim na regularnych liniach
                    komunikacyjnych, jak również przewozami okolicznościowymi. Posiadamy
                    wieloletnie doświadczenie w oferowanych przez nas usługach. Posiadamy
                    wszelkie wymagane certyfikaty, licencje i zezwolenia do wykonywania
                    transportu pasażerskiego.
                </p>
                </div>
                <div className="items-center justify-between mx-4 xl:mr-24 mt-8">
                <p className="text-lg xl:text-4xl font-bold text-zinc-700 font-poppins">
                    Masz sugestie lub chcesz nam coś{" "}
                    <span className="text-cocoa_brown">przekazać?</span>
                </p>
                <p className="text-md xl:text-2xl text-zinc-700 font-poppins mt-2 md:mt-4">
                    Zapraszamy do zakładki kontakt, w której znajdziesz formularz dzięki
                    któremu możesz podzielić się z nami swoją opinią!
                </p>
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutUs; 