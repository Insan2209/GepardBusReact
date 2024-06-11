import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function Schedule() {
    const location = useLocation();
    const { stopName } = location.state || {};

    const [value, onChange] = useState(new Date());

    const formatDate = (date) => {
        return date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="flex flex-wrap justify-center my-12">
            <div className="w-full xl:w-2/3 block text-center justify-center">
                <p className="text-2xl md:text-4xl font-bold text-zinc-700 font-poppins mb-3">
                    Przystanek: <span className="text-cocoa_brown">{stopName}</span>
                </p>
                <p className="text-xl md:text-2xl font-semibold text-zinc-700 font-poppins mb-6">
                    Kierunek: <span className="text-cocoa_brown">Częstochowa</span> przez Działoszyn, Zawady, Miedźno, Biała, Więcki
                </p>
                <div className="flex flex-wrap justify-between w-3/4 m-auto">
                    <p>
                        Wszystkie kursy w dniu: <span>{formatDate(value)}</span>
                    </p>
                    <p>
                        Zmień datę: <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Schedule;