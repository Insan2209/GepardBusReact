import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-timezone';

function Schedule() {
    const location = useLocation();
    const { stopName, routeName, routeDescription } = location.state || {};
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
            default:
                routeId = 0;
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
        <div className="flex flex-wrap justify-center my-6 md:my-12">
            <div className="w-full xl:w-2/3 block text-center justify-center">
                <p className="text-xl md:text-4xl font-bold text-zinc-700 font-poppins mb-3">
                    Przystanek: <span className="text-cocoa_brown">{stopName}</span>
                </p>
                <p className="text-lg md:text-2xl font-semibold text-zinc-700 font-poppins mb-3 px-2">
                    Trasa: <span className="text-cocoa_brown">{routeName}</span> <br/>{routeDescription}
                </p>
                <div className="flex flex-wrap w-full items-center space-y-3 justify-center px-3 mx-auto mt-8 max-w-6xl md:w-4/5 sm:space-y-0 sm:justify-between">
                    <p className="text-md md:text-lg text-zinc-700 font-poppins w-fit">
                        Wszystkie kursy w dniu: <span>{formatDate(value)}</span>
                    </p>
                    <div className="w-fit">
                        <span className="text-md md:text-lg text-zinc-700 font-poppins">Zmień datę:</span> <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-10 text-lg text-zinc-700 font-poppins mx-3 p-3 rounded-3xl border-2 border-zinc-300 md:text-xl md:w-4/5 md:mx-auto">
                    {schedule.map((entry, index) => (
                        <div key={index} className="">
                             {entry.departure_time}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
