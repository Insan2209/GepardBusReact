import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const stopsData = {
    'pajeczno-czestochowa': [
        'Pajęczno Plac Targowy', 'Pajęczno ul. Wieluńska', 'Dylów Rządowy', 'Trębaczew (Kościół)', 'Posmykowizna', 
        'Działoszyn ul. Piłsudskiego (osiedle)', 'Działoszyn Plac Wolności', 'Raciszyn', 'Smolarze', 'Dębie', 'Popów (Kościół)', 
        'Zawady', 'Izbiska Duże', 'Miedźno', 'Kołaczkowice', 'Łobodno', 'Kamyk', 'Biała', 'Częstochowa- Real', 
        'Częstochowa- Promenada Niemena', 'Częstochowa- Hala Polonia', 'Częstochowa II Aleja NMP', 'Częstochowa ul. Orzechowskiego'
    ],
    'pajeczno-czestochowa2': [
        'Pajęczno Plac Targowy', 'Pajęczno ul. Częstochowska', 'Smolarze', 'Dębie', 'Popów (Kościół)', 
        'Zawady', 'Izbiska Duże', 'Miedźno', 'Kołaczkowice', 'Łobodno', 'Kamyk', 'Biała', 'Makowiska', 
        'Nowe Gajęcice', 'Patrzyków', 'Wąsosz Górny Rynek', 'Wąsosz Dolny Sołtys', 'Marianów', 
        'Annolesie', 'Więcki Szkoła', 'Dąbrowa', 'Częstochowa- Real', 'Częstochowa- Promenada Niemena', 
        'Częstochowa- Hala Polonia', 'Częstochowa II Aleja NMP', 'Częstochowa ul. Orzechowskiego'
    ],
    'popow-klobuck': [
        'Rębielice Królewskie sk', 'Kłobuck Rynek im.Jana Pawła II', 'Kłobuck ul.11 Listopada/Sagan', 
        'Kłobuck ul.Zamkowa ,,Zagórze\'\'', 'Mokra III', 'Wilkowiecko VII ul.Mikołaja z Wilkowiecka', 
        'Wilkowiecko VI ul.Mikołaja z Wilkowiecka', 'Wilkowiecko XI ul.3 Maja', 'Wilkowiecko X ul.3 Maja', 
        'Popów Rondo 2', 'Rębielice Królewskie 3', 'Rębielice Królewskie 2', 'Rębielice Królewskie 1 ZOZ', 
        'Rębielice Królewskie', 'Kamieńszczyzna', 'Zawady 3', 'Zawady 2', 'Zawady 1'
    ],
    'popow-wiecki': [
        'Nowa Wieś k.Brzózek', 'Popów Rondo 1', 'Popów Rondo 2', 'Popów 1', 'Popów', 'Dąbrówka', 
        'Brzózki Skrzyżowanie', 'Brzózki 1', 'Brzózki Pomnik', 'Brzózki Szkoła', 'Więcki', 
        'Nowa Wieś Świetlica', 'Nowa Wieś Pętla', 'Kule', 'Kule 1', 'Kule OSSW', 'Wąsosz Górny 4', 
        'Wąsosz Górny', 'Wąsosz Górny Rynek'
    ],
};

function StopList() {
    const location = useLocation();
    const { routeName, routeDescription } = location.state || {};
    const { routeId } = useParams();
    const stops = stopsData[routeId] || [];

    return (
        <div className="flex flex-wrap justify-center my-12">
            <div className="w-full xl:w-1/2 block text-center justify-center">
                <p className="text-4xl md:text-6xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins mb-16 xl:mb-20">
                    Wybierz przystanek:
                </p>
                <div className="space-y-3">
                    {stops.map((stop, index) => (
                        <div key={index} className="text-md md:text-xl text-zinc-700 dark:text-zinc-300 font-poppins text-left transition ease-in-out px-3 w-fit duration-300 hover:text-princeton_orange">
                            <Link 
                                to={`/RouteList/${routeId}/StopList/${index + 1}`} 
                                state={{ stopName: stop, routeName, routeDescription }}
                            >
                                <span className="text-cocoa_brown">{index + 1}.</span> {stop}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StopList;