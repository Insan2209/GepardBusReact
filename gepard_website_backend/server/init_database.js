import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączono z bazą danych.');
});

// Definicje godzin odjazdów i odpowiadających im kodów dla drugiej trasy
const newDepartures = [
  { time: '06:24', code: 'D' },
  { time: '11:34', code: 'D' },
];

// Przystanki dla drugiej trasy
const stops = [
  { id: 52, name: 'Nowa Wieś k.Brzózek' },
  { id: 53, name: 'Popów Rondo 1' },
  { id: 54, name: 'Popów 1' },
  { id: 43, name: 'Popów Rondo 2' },
  { id: 55, name: 'Dąbrówka' },
  { id: 56, name: 'Brzózki Skrzyżowanie' },
  { id: 57, name: 'Brzózki 1' },
  { id: 58, name: 'Brzózki Pomnik' },
  { id: 59, name: 'Brzózki Szkoła' },
  { id: 60, name: 'Więcki' },
  { id: 61, name: 'Nowa Wieś Świetlica' },
  { id: 62, name: 'Nowa Wieś Pętla' },
  { id: 63, name: 'Kule' },
  { id: 64, name: 'Kule 1' },
  { id: 65, name: 'Kule OSSW' },
  { id: 66, name: 'Wąsosz Górny 4' },
  { id: 67, name: 'Wąsosz Górny' },
  { id: 68, name: 'Wąsosz Górny Rynek' },
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
  newDepartures.forEach((departure) => {
    let times = calculateDepartureTimes(departure.time);
    times.forEach((time) => {
      let sql = `INSERT INTO schedules (route_id, stop_id, departure_time, schedule_code) VALUES (4, ?, ?, ?)`;
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