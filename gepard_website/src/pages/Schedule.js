import React from 'react';
import { useParams } from 'react-router-dom';

const timetableData = {
    'pajeczno-czestochowa': {
        0: ['8:00', '12:00', '16:00'],
        1: ['9:00', '13:00', '17:00'],
        2: ['10:00', '14:00', '18:00'],
       
    },
    'popow-klobuck': {
        0: ['6:00', '10:00', '14:00'],
        1: ['7:00', '11:00', '15:00'],
        2: ['8:00', '12:00', '16:00'],
        
    },
    'popow-wiecki': {
        0: ['5:00', '9:00', '13:00'],
        1: ['6:00', '10:00', '14:00'],
        2: ['7:00', '11:00', '15:00'],
        
    },
};

function Schedule() {
    const { routeId, stopIndex } = useParams();
    const times = timetableData[routeId]?.[stopIndex] || [];

    return (
        <div className="flex flex-wrap justify-center my-12">
            <div className="w-full xl:w-1/2 block space-y-10 text-center justify-center">
                <p className="text-4xl md:text-6xl font-bold text-zinc-700 font-poppins mb-16">
                    Godziny odjazdów:
                </p>
                {times.map((time, index) => (
                    <div key={index} className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins">
                        {time}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Schedule;