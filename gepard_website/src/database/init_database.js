const sqlite3 = require('sqlite3').verbose();

// Połącz się z bazą danych
let db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączono z bazą danych.');
});

// Definicje godzin odjazdów i odpowiadających im kodów
const departures = [
  { time: '05:50', code: 'Dmq' },
  { time: '06:21', code: 'Dmq' },
  { time: '06:58', code: 'Demq' },
  { time: '07:48', code: 'EmqQ' },
  { time: '08:51', code: 'E7*' },
  { time: '09:33', code: 'Dmq' },
  { time: '11:10', code: 'Demq' },
  { time: '12:17', code: 'Dmq' },
  { time: '13:40', code: 'Dmq' },
  { time: '14:10', code: 'E7*' },
  { time: '15:10', code: 'Dmq' },
  { time: '15:40', code: '67*' },
  { time: '17:20', code: 'Dmq' },
  { time: '18:10', code: 'Demq' },
  { time: '19:16', code: 'E7*' },
  { time: '20:23', code: 'Dmq' }
];

// Przystanki i czasy przejazdów
const stops = [
  { id: 1, name: 'Pajęczno Plac Targowy' },
  { id: 2, name: 'Pajęczno ul. Wieluńska' },
  { id: 3, name: 'Dylów Rządowy' },
  { id: 4, name: 'Trębaczew (Kościół)' },
  { id: 5, name: 'Posmykowizna' },
  { id: 6, name: 'Działoszyn ul. Piłsudskiego (osiedle)' },
  { id: 7, name: 'Działoszyn Plac Wolności' },
  { id: 8, name: 'Raciszyn' },
  { id: 9, name: 'Smolarze' },
  { id: 10, name: 'Dębie' },
  { id: 11, name: 'Popów (Kościół)' },
  { id: 12, name: 'Zawady' },
  { id: 13, name: 'Izbiska Duże' },
  { id: 14, name: 'Miedźno' },
  { id: 15, name: 'Kołaczkowice' },
  { id: 16, name: 'Łobodno' },
  { id: 17, name: 'Kamyk' },
  { id: 18, name: 'Biała' },
  { id: 19, name: 'Częstochowa- Real' },
  { id: 20, name: 'Częstochowa- Promenada Niemena' },
  { id: 21, name: 'Częstochowa- Hala Polonia' },
  { id: 22, name: 'Częstochowa II Aleja NMP' },
  { id: 23, name: 'Częstochowa ul. Orzechowskiego' }
];

// Funkcja obliczająca godziny odjazdów dla wszystkich przystanków
const calculateDepartureTimes = (initialTime) => {
  let [hours, minutes] = initialTime.split(':').map(Number);
  return stops.map((stop, index) => {
    let departureTime = new Date(0, 0, 0, hours, minutes + index * 3);
    let formattedTime = departureTime.toTimeString().slice(0, 5);
    return { stop_id: stop.id, departure_time: formattedTime };
  });
};

// Wstawianie danych do tabeli schedules
db.serialize(() => {
  departures.forEach((departure) => {
    let times = calculateDepartureTimes(departure.time);
    times.forEach((time) => {
      let sql = `INSERT INTO schedules (route_id, stop_id, departure_time, schedule_code) VALUES (1, ?, ?, ?)`;
      db.run(sql, [time.stop_id, time.departure_time, departure.code], (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Dodano: Przystanek ${time.stop_id}, Czas ${time.departure_time}, Kod ${departure.code}`);
      });
    });
  });
});

// Zamknij połączenie z bazą danych
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączenie z bazą danych zamknięte.');
});