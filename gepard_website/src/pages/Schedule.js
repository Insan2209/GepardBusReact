import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-timezone';

function Schedule() {
    const location = useLocation();
    const { stopName } = location.state || {};
    const [value, onChange] = useState(new Date());
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        fetchSchedule(value);
    }, [value]);

    const fetchSchedule = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        fetch(`http://localhost:3001/schedule/${formattedDate}`)
            .then(response => response.json())
            .then(data => {
                setSchedule(data);
            })
            .catch(error => console.error('Problem przy pobieraniu rozkładu:', error));
    };

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
                    Wszystkie kursy w dniu: <span>{formatDate(value)}</span>
                </p>
                <div className="flex flex-wrap justify-between w-3/4 m-auto">
                    <p>
                        <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                    </p>
                </div>
                <div className="mt-4">
                    {schedule.map((entry, index) => (
                        <div key={index} className="mb-2">
                            <p>Trasa: {entry.route}</p>
                            <p>Przystanek: {entry.stop}</p>
                            <p>Godzina odjazdu: {entry.departure_time}</p>
                            <p>Kod harmonogramu: {entry.schedule_code}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
