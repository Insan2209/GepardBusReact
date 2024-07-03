const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db');

db.serialize(() => {
    // Powiązanie przystanków z trasą numer 1
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 1, 1)`);  // Pajęczno Plac Targowy
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 2, 2)`);  // Pajęczno ul. Wieluńska
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 3, 3)`);  // Dylów Rządowy
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 4, 4)`);  // Trębaczew (Kościół)
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 5, 5)`);  // Posmykowizna
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 6, 6)`);  // Działoszyn ul. Piłsudskiego (osiedle)
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 7, 7)`);  // Działoszyn Plac Wolności
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 8, 8)`);  // Raciszyn
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 9, 9)`);  // Smolarze
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 10, 10)`); // Dębie
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 11, 11)`); // Popów (Kościół)
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 12, 12)`); // Zawady
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 13, 13)`); // Izbiska Duże
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 14, 14)`); // Miedźno
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 15, 15)`); // Kołaczkowice
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 16, 16)`); // Łobodno
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 17, 17)`); // Kamyk
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 18, 18)`); // Biała
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 19, 19)`); // Częstochowa- Real
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 20, 20)`); // Częstochowa- Promenada Niemena
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 21, 21)`); // Częstochowa- Hala Polonia
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 22, 22)`); // Częstochowa II Aleja NMP
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 23, 23)`); // Częstochowa ul. Orzechowskiego

    // Powiązanie przystanków z trasą numer 2
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 1, 1)`);  // Pajęczno Plac Targowy
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 24, 2)`); // Pajęczno ul. Częstochowska
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 9, 3)`);  // Smolarze
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 10, 4)`); // Dębie
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 11, 5)`); // Popów (Kościół)
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 12, 6)`); // Zawady
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 13, 7)`); // Izbiska Duże
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 14, 8)`); // Miedźno
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 15, 9)`); // Kołaczkowice
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 16, 10)`); // Łobodno
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 17, 11)`); // Kamyk
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 18, 12)`); // Biała
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 26, 13)`); // Makowiska
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 27, 14)`); // Nowe Gajęcice
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 28, 15)`); // Patrzyków
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 29, 16)`); // Wąsosz Górny Rynek
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 30, 17)`); // Wąsosz Dolny Sołtys
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 31, 18)`); // Marianów
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 32, 19)`); // Annolesie
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 33, 20)`); // Więcki Szkoła
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 34, 21)`); // Dąbrowa
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 19, 22)`); // Częstochowa- Real
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 20, 23)`); // Częstochowa- Promenada Niemena
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 21, 24)`); // Częstochowa- Hala Polonia
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 22, 25)`); // Częstochowa II Aleja NMP
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 23, 26)`); // Częstochowa ul. Orzechowskiego

    // Powiązanie przystanków z trasą numer 3
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 35, 1)`); // Rębielice Królewskie sk
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 36, 2)`); // Kłobuck Rynek im.Jana Pawła II
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 37, 3)`); // Kłobuck ul.11 Listopada/Sagan
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 38, 4)`); // Kłobuck ul.Zamkowa ,,Zagórze''
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 39, 5)`); // Mokra III
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 40, 6)`); // Wilkowiecko VII ul.Mikołaja z Wilkowiecka
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 41, 7)`); // Wilkowiecko VI ul.Mikołaja z Wilkowiecka
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 42, 8)`); // Wilkowiecko XI ul.3 Maja
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 43, 9)`); // Wilkowiecko X ul.3 Maja
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 44, 10)`); // Popów Rondo 2
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 45, 11)`); // Rębielice Królewskie 3
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 46, 12)`); // Rębielice Królewskie 2
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 47, 13)`); // Rębielice Królewskie 1 ZOZ
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 48, 14)`); // Rębielice Królewskie
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 49, 15)`); // Kamieńszczyzna
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 50, 16)`); // Zawady 3
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 51, 17)`); // Zawady 2
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (3, 52, 18)`); // Zawady 1

    // Powiązanie przystanków z trasą numer 4
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 53, 1)`);  // Nowa Wieś k.Brzózek
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 54, 2)`);  // Popów Rondo 1
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 44, 3)`);  // Popów Rondo 2
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 55, 4)`);  // Popów 1
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 56, 5)`);  // Popów
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 57, 6)`);  // Dąbrówka
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 58, 7)`);  // Brzózki Skrzyżowanie
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 59, 8)`);  // Brzózki 1
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 60, 9)`);  // Brzózki Pomnik
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 61, 10)`); // Brzózki Szkoła
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 33, 11)`); // Więcki
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 62, 12)`); // Nowa Wieś Świetlica
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 63, 13)`); // Nowa Wieś Pętla
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 64, 14)`); // Kule
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 65, 15)`); // Kule 1
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 66, 16)`); // Kule OSSW
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 67, 17)`); // Wąsosz Górny 4
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 68, 18)`); // Wąsosz Górny
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (4, 29, 19)`); // Wąsosz Górny Rynek
});

db.close();