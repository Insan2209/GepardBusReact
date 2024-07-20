import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-timezone';

function Schedule() {
    const location = useLocation();
    const { stopName } = location.state || {};
    const { routeId, stopId } = useParams();
    const [value, onChange] = useState(new Date());
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        if (routeId && stopId) {
            fetchSchedule(value, routeId, stopId);
        }
    }, [value, routeId, stopId]);

    const fetchSchedule = (date, routeId, stopId) => {
        switch(routeId) {
            case 'pajeczno-czestochowa':
                routeId = 1;
              break;
            case 'pajeczno-czestochowa2':
                routeId = 2;
              break;
              case 'popow-klobuck':
                routeId = 3;
              break;
            case 'popow-wiecki':
                routeId = 4;
              break;
          }
        const formattedDate = moment(date).format('YYYY-MM-DD');
        fetch(`http://localhost:3001/schedule/${formattedDate}?stop_id=${stopId}&route_id=${routeId}`)
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
                    <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                </div>
                <div className="mt-4">
                    {schedule.map((entry, index) => (
                        <div key={index} className="mb-2">
                             {entry.departure_time}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
