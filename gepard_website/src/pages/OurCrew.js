import React from "react";
import CrewMember from "../components/CrewMember.js";

function OurCrew () {

    const members = [
        ["Jan Nowak","Doświadczony i niezawodny kierowca, znający okolicę jak własną kieszeń. Zawsze punktualny, dba o komfort i bezpieczeństwo pasażerów."],
        ["Maciej Kowalski","Młody i energiczny specjalista, który zawsze chętnie pomaga pasażerom. Starannie dba o pozytywną atmosferę podczas podróży."],
        ["Piotr Kaczmarek","Profesjonalny i sumienny pracownik z wieloletnim doświadczeniem. Piotr unika korków i zapewnia pasażerom płynną oraz terminową podróż."],
        ["Marek Broniszewski","Opanowany i doświadczony członek ekipy, który zawsze dąży do zadowolenia klientów. Ceniony za spokój i cierpliwość za kierownicą."],
        ["Paweł Niedziela","Niezawodny członek zespołu z wieloletnim stażem. Mistrz w omijaniu korków i optymalizacji tras, gwarantuje płynność przejazdów."],
        ["Kamil Paszek","Rzetelny i zaangażowany profesjonalista, który ceni sobie zadowolenie pasażerów. Charakteryzuje go uprzejmość i doskonała znajomość tras."]
    ]

    return (
    <>
        <p className="text-3xl md:text-6xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins mt-12 text-center mx-3">Poznaj bliżej <span className="text-princeton_orange">naszych</span> pracowników</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center mt-12 md:mt-24 min-h-[85vw] xl:min-h-[25vw]">
            <CrewMember first_last_name={members[0][0]} description={members[0][1]}/>
            <CrewMember first_last_name={members[1][0]} description={members[1][1]}/>
            <CrewMember first_last_name={members[2][0]} description={members[2][1]}/>
            <CrewMember first_last_name={members[3][0]} description={members[3][1]}/>
            <CrewMember first_last_name={members[4][0]} description={members[4][1]}/>
            <CrewMember first_last_name={members[5][0]} description={members[5][1]}/>
        </div>
        <p className="text-2xl md:text-4xl font-semibold text-zinc-700 dark:text-zinc-300 font-poppins my-20 text-center mx-3">Masz jakieś <span className="text-princeton_orange">pytania</span> lub chcesz złożyć <span className="text-princeton_orange">skargę</span>? Zapraszamy do zakładki Kontakt</p>
    </>
    );
}

export default OurCrew; 