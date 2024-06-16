const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db');

db.serialize(() => {
    // Dodawanie przystanków do tabeli 'stops'
    db.run(`INSERT INTO stops (name, location) VALUES ('Pajęczno Plac Targowy', 'Pajęczno')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Pajęczno ul. Wieluńska', 'Pajęczno')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Dylów Rządowy', 'Dylów Rządowy')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Trębaczew (Kościół)', 'Trębaczew')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Posmykowizna', 'Posmykowizna')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Działoszyn ul. Piłsudskiego (osiedle)', 'Działoszyn')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Działoszyn Plac Wolności', 'Działoszyn')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Raciszyn', 'Raciszyn')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Smolarze', 'Smolarze')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Dębie', 'Dębie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Popów (Kościół)', 'Popów')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Zawady', 'Zawady')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Izbiska Duże', 'Izbiska Duże')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Miedźno', 'Miedźno')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kołaczkowice', 'Kołaczkowice')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Łobodno', 'Łobodno')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kamyk', 'Kamyk')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Biała', 'Biała')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Częstochowa- Real', 'Częstochowa')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Częstochowa- Promenada Niemena', 'Częstochowa')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Częstochowa- Hala Polonia', 'Częstochowa')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Częstochowa II Aleja NMP', 'Częstochowa')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Częstochowa ul. Orzechowskiego', 'Częstochowa')`);

    // Przystanki dla trasy nr 2
    db.run(`INSERT INTO stops (name, location) VALUES ('Pajęczno ul. Częstochowska', 'Pajęczno')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Makowiska', 'Makowiska')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Nowe Gajęcice', 'Nowe Gajęcice')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Patrzyków', 'Patrzyków')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wąsosz Górny Rynek', 'Wąsosz Górny')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wąsosz Dolny Sołtys', 'Wąsosz Dolny')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Marianów', 'Marianów')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Annolesie', 'Annolesie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Więcki Szkoła', 'Więcki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Dąbrowa', 'Dąbrowa')`);

    // Przystanki dla trasy nr 3
    db.run(`INSERT INTO stops (name, location) VALUES ('Rębielice Królewskie sk', 'Rębielice Królewskie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kłobuck Rynek im.Jana Pawła II', 'Kłobuck')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kłobuck ul.11 Listopada/Sagan', 'Kłobuck')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kłobuck ul.Zamkowa ,,Zagórze\'\'', 'Kłobuck')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Mokra III', 'Mokra III')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wilkowiecko VII ul.Mikołaja z Wilkowiecka', 'Wilkowiecko')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wilkowiecko VI ul.Mikołaja z Wilkowiecka', 'Wilkowiecko')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wilkowiecko XI ul.3 Maja', 'Wilkowiecko')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wilkowiecko X ul.3 Maja', 'Wilkowiecko')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Popów Rondo 2', 'Popów')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Rębielice Królewskie 3', 'Rębielice Królewskie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Rębielice Królewskie 2', 'Rębielice Królewskie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Rębielice Królewskie 1 ZOZ', 'Rębielice Królewskie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Rębielice Królewskie', 'Rębielice Królewskie')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kamieńszczyzna', 'Kamieńszczyzna')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Zawady 3', 'Zawady')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Zawady 2', 'Zawady')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Zawady 1', 'Zawady')`);

    // Przystanki dla trasy nr 4
    db.run(`INSERT INTO stops (name, location) VALUES ('Nowa Wieś k.Brzózek', 'Nowa Wieś')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Popów Rondo 1', 'Popów')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Popów 1', 'Popów')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Dąbrówka', 'Dąbrówka')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Brzózki Skrzyżowanie', 'Brzózki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Brzózki 1', 'Brzózki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Brzózki Pomnik', 'Brzózki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Brzózki Szkoła', 'Brzózki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Więcki', 'Więcki')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Nowa Wieś Świetlica', 'Nowa Wieś')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Nowa Wieś Pętla', 'Nowa Wieś')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kule', 'Kule')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kule 1', 'Kule')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Kule OSSW', 'Kule')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wąsosz Górny 4', 'Wąsosz Górny')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wąsosz Górny', 'Wąsosz Górny')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Wąsosz Górny Rynek', 'Wąsosz Górny')`);

});

db.close();