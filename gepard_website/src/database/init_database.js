const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db');

db.serialize(() => {
    // Tworzenie tabeli 'routes'
    db.run(`CREATE TABLE IF NOT EXISTS routes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        direction TEXT
    )`);

    // Tworzenie tabeli 'stops'
    db.run(`CREATE TABLE IF NOT EXISTS stops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        location TEXT
    )`);

    // Tworzenie tabeli 'route_stops'
    db.run(`CREATE TABLE IF NOT EXISTS route_stops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        route_id INTEGER,
        stop_id INTEGER,
        "order" INTEGER,
        FOREIGN KEY(route_id) REFERENCES routes(id),
        FOREIGN KEY(stop_id) REFERENCES stops(id)
    )`);

    // Tworzenie tabeli 'schedules'
    db.run(`CREATE TABLE IF NOT EXISTS schedules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        route_id INTEGER,
        stop_id INTEGER,
        departure_time TEXT,
        schedule_code TEXT,
        FOREIGN KEY(route_id) REFERENCES routes(id),
        FOREIGN KEY(stop_id) REFERENCES stops(id)
    )`);

    // Tworzenie tabeli 'schedule_codes'
    db.run(`CREATE TABLE IF NOT EXISTS schedule_codes (
        code TEXT PRIMARY KEY,
        description TEXT,
        days_of_week TEXT,
        except_dates TEXT,
        periods TEXT
    )`);

    // Dodanie przykładowych danych
    db.run(`INSERT INTO routes (name, direction) VALUES ('Trasa A', 'Tam')`);
    db.run(`INSERT INTO routes (name, direction) VALUES ('Trasa A', 'Powrót')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Przystanek 1', 'Lokalizacja 1')`);
    db.run(`INSERT INTO stops (name, location) VALUES ('Przystanek 2', 'Lokalizacja 2')`);

    // Powiązanie przystanków z trasami
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 1, 1)`);
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (1, 2, 2)`);
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 2, 1)`);
    db.run(`INSERT INTO route_stops (route_id, stop_id, "order") VALUES (2, 1, 2)`);

    // Dodanie kodów harmonogramów
    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('D', 'Kursuje od poniedziałku do piątku oprócz świąt', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]', 
            '["2024-01-01", "2024-01-06", "2024-04-21", "2024-04-22", "2024-05-01", "2024-05-03", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25", "2024-12-26"]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('E', 'Kursuje od poniedziałku do soboty oprócz świąt', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]', 
            '["2024-01-01", "2024-01-06", "2024-04-21", "2024-04-22", "2024-05-01", "2024-05-03", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25", "2024-12-26"]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('6', 'Kursuje w soboty', 
            '["Saturday"]', 
            '[]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('7', 'Kursuje w niedziele', 
            '["Sunday"]', 
            '[]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('*', 'Nie kursuje w określone święta', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]', 
            '["2024-01-01", "2024-01-06", "2024-04-21", "2024-04-22", "2024-05-01", "2024-05-03", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25", "2024-12-26"]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('e', 'Nie kursuje w okresie ferii letnich', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]', 
            '[]', 
            '{"summer_holidays": ["2024-07-01", "2024-08-31"]}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('m', 'Nie kursuje w dniach 24.XII, 31.XII', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]', 
            '["2024-12-24", "2024-12-31"]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('q', 'Nie kursuje 2.V', 
            '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]', 
            '["2024-05-02"]', 
            '{}')`);

    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods) VALUES 
            ('Q', 'Nie kursuje w soboty w okresie ferii letnich', 
            '["Saturday"]', 
            '[]', 
            '{"summer_holidays": ["2024-07-01", "2024-08-31"]}')`);

    // Dodanie harmonogramu
    db.run(`INSERT INTO schedules (route_id, stop_id, departure_time, schedule_code) VALUES (1, 1, '08:00', 'D')`);
    db.run(`INSERT INTO schedules (route_id, stop_id, departure_time, schedule_code) VALUES (1, 2, '08:30', 'D')`);
});

db.close();
