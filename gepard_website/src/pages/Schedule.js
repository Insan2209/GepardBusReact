import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const timetableData = {
    'pajeczno-czestochowa': {
        kierunek: 'Częstochowa',
        przez: 'Działoszyn, Zawady, Miedźno, Biała, Więcki',
        godziny: {
            1: ['5:00 MQ', '6:10 MQ', '6:50 MQS', '8:05 MQ' ,'9:10 MQS' , '10:40 MQ' ,'11:50 T' , '13:25 LMQ' ,'14:15 MQS' , '14:50 MQ' ,'15:50 MQ' , '17:25 MQ' ,'20:30 MQ'],
            2: ['8:00', '12:00', '16:00'],
        },
    },
    'popow-klobuck': {
        kierunek: 'Częstochowa',
        przez: 'Działoszyn, Zawady, Miedźno, Biała, Więcki',
        godziny: {
            1: ['7:00', '11:00', '15:00'],
            2: ['8:00', '12:00', '16:00'],
        },
    },
    'popow-wiecki': {
        kierunek: 'Częstochowa',
        przez: 'Działoszyn, Zawady, Miedźno, Biała, Więcki',
        godziny: {
            1: ['7:00', '11:00', '15:00'],
            2: ['8:00', '12:00', '16:00'],
        },
    },
};

function Schedule() {
    const location = useLocation();
    const { stopName } = location.state || {};

    const { routeId, stopId } = useParams();
    const stopIndex = parseInt(stopId, 10);
    const routeData = timetableData[routeId];

    if (!routeData) {
        return <div>Brak danych dla wybranej trasy.</div>;
    }
    const { kierunek, przez, godziny } = routeData;
    const times = godziny[stopIndex] || [];

    return (
        <div className="flex flex-wrap justify-center my-12">
            <div className="w-full xl:w-2/3 block text-center justify-center">
                <p className="text-4xl md:text-5xl font-bold text-zinc-700 font-poppins mb-5">
                    Godziny odjazdów dla przystanku:
                </p>
                <p className="text-2xl md:text-3xl font-bold text-zinc-700 font-poppins mb-10">
                    <span className="text-cocoa_brown">{stopName}</span>
                </p>
                <p className="text-xl md:text-2xl font-semibold text-zinc-700 font-poppins mb-5 text-left">
                    Kierunek: <span className="text-cocoa_brown">{kierunek}</span>, przez {przez}
                </p>
                <div className="flex flex-wrap space-x-5">
                    <p className="text-md md:text-xl font-semibold text-zinc-700 font-poppins ml-5">Od poniedziałku do piątku (oprócz świąt):</p>
                    {times.length > 0 ? (
                        times.map((time, index) => (
                            <div key={index} className="text-md md:text-xl text-zinc-700 font-poppins">
                                {time}
                            </div>
                        ))
                    ) : (
                        <p className="text-md md:text-xl text-zinc-700 font-poppins">
                            Brak danych dla wybranego przystanku.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Schedule;