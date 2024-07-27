import React from "react";
import { Link } from 'react-router-dom';

const routes = [
    { id: 'pajeczno-czestochowa', name: 'Pajęczno - Częstochowa', description: 'Przez: Działoszyn, Zawady, Miedźno, Biała, Więcki' },
    { id: 'pajeczno-czestochowa2', name: 'Pajęczno - Częstochowa', description: 'Przez: Wąsosz Górny, Smolarze, Kamyk' },
    { id: 'popow-klobuck', name: 'Popów - Kłobuck', description: 'Przez: Rębielice Królewskie, Wilkowiecko, Zawady' },
    { id: 'popow-wiecki', name: 'Popów - Więcki', description: 'Przez: Brzózki, Nowa Wieś, Kule, Wąsosz Górny' },
];

function RouteList () {
    return (
    <>
        <div className="flex flex-wrap justify-center my-12 md:my-24 min-h-[85vw] xl:min-h-[25vw]">
            <div className="w-full xl:w-1/2 block space-y-10 text-center justify-center">
                <p className="text-4xl md:text-6xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins mb-16 xl:mb-24">
                    Wybierz trasę:
                </p>
                <div className="space-y-12">
                {routes.map(route => (
                    <div key={route.id} className="text-2xl md:text-4xl font-bold text-zinc-700 dark:text-zinc-300 font-poppins">
                        <Link to={`/RouteList/${route.id}`} className="transition ease-in-out duration-300 hover:text-tawny" state={{ routeName: route.name, routeDescription: route.description }}>
                            {route.name} <br />
                        </Link>
                        <span className="text-sm md:text-xl font-semibold text-cocoa_brown">
                            {route.description}
                        </span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </>
    );
}

export default RouteList; 