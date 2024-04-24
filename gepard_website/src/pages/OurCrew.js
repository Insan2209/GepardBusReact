import React from "react";

function OurCrew () {
    return (
    <>
        <p className="text-4xl md:text-6xl font-bold text-zinc-700 font-poppins mt-12 text-center">Poznaj bliżej <span className="text-princeton_orange">naszych</span> pracowników</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center mt-12 md:mt-24 min-h-[85vw] xl:min-h-[25vw]">
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee1.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Jan Nowak</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Doświadczony i niezawodny kierowca, znający okolicę jak własną kieszeń. Zawsze punktualny, dba o komfort i bezpieczeństwo pasażerów.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee2.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Maciej Kowalski</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Młody i energiczny specjalista, który zawsze chętnie pomaga pasażerom. Starannie dba o pozytywną atmosferę podczas podróży.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee1.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Piotr Kaczmarek</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Profesjonalny i sumienny pracownik z wieloletnim doświadczeniem. Piotr unika korków i zapewnia pasażerom płynną oraz terminową podróż.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee1.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Marek Broniszewski</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Opanowany i doświadczony członek ekipy, który zawsze dąży do zadowolenia klientów. Ceniony za spokój i cierpliwość za kierownicą.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee2.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Paweł Niedziela</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Niezawodny członek zespołu z wieloletnim stażem. Mistrz w omijaniu korków i optymalizacji tras, gwarantuje płynność przejazdów.</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
                <img src="/png/employee2.png" alt="employee_photo"></img>
                <p className="text-xl md:text-3xl font-semibold text-zinc-700 font-poppins pt-4 pb-1">Kamil Paszek</p>
                <p className="text-md md:text-lg text-zinc-700 font-poppins">Rzetelny i zaangażowany profesjonalista, który ceni sobie zadowolenie pasażerów. Charakteryzuje go uprzejmość i doskonała znajomość tras.</p>
            </div>
        </div>
        <p className="text-2xl md:text-4xl font-semibold text-zinc-700 font-poppins my-20 text-center">Masz jakieś <span className="text-princeton_orange">pytania</span> lub chcesz złożyć <span className="text-princeton_orange">skargę</span>? Zapraszamy do zakładki Kontakt</p>
    </>
    );
}

export default OurCrew; 