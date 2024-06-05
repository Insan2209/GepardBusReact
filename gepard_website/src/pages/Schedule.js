import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const timetableData = {
    'pajeczno-czestochowa': {
        kierunek: 'Częstochowa',
        przez: 'Działoszyn, Zawady, Miedźno, Biała, Więcki',
        godziny: {
            1: ['7:00', '11:00', '15:00'],
            2: ['8:00', '12:00', '16:00'],
        },
    },
    'popow-klobuck': {
        0: ['6:00', '10:00', '14:00'],
        1: ['7:00', '11:00', '15:00'],
        2: ['8:00', '12:00', '16:00'],
        // dodaj inne przystanki...
    },
    'popow-wiecki': {
        0: ['5:00', '9:00', '13:00'],
        1: ['6:00', '10:00', '14:00'],
        2: ['7:00', '11:00', '15:00'],
        // dodaj inne przystanki...
    },
};

function Schedule() {
    const { routeId, stopId } = useParams();
    const stopIndex = parseInt(stopId, 10);
    const times = timetableData[routeId]?.[stopIndex] || [];

    const location = useLocation();
    const { stopName } = location.state || {};

    return (
        <div className="flex flex-wrap justify-center my-12">
            <div className="w-full xl:w-2/3 block space-y-10 text-center justify-center">
                <p className="text-4xl md:text-5xl font-bold text-zinc-700 font-poppins mb-4">
                    Godziny odjazdów dla przystanku:
                </p>
                <p className="text-2xl md:text-3xl font-bold text-zinc-700 font-poppins mb-12">
                    {stopName}
                </p>
                {times.length > 0 ? (
                    times.map((time, index) => (
                        <div key={index} className="text-md md:text-xl text-zinc-700 font-poppins text-left">
                            <span className="text-cocoa_brown">{index + 1}.</span> {time}
                        </div>
                    ))
                ) : (
                    <p className="text-md md:text-xl text-zinc-700 font-poppins">
                        Brak danych dla wybranego przystanku.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Schedule;
