const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const moment = require('moment-timezone');
const app = express();
const cors = require('cors');
const PORT = 3001;

const db = new sqlite3.Database('./mydatabase.db');
moment.tz.setDefault('Europe/Warsaw');

app.use(express.json());
app.use(cors());

// Sprawdza, czy dzień jest świętem lub specjalnym dniem
const isSpecialDay = (date, exceptDates) => {
    const formattedDate = date.toISOString().split('T')[0];
    return exceptDates.includes(formattedDate);
};

const isInPeriod = (date, periods) => {
    const formattedDate = date.toISOString().split('T')[0];
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'Saturday' });

    try {
        const periodsObject = JSON.parse(periods);
        const summerHolidays = periodsObject.summer_holidays || {};

        // Sprawdź, czy obecny dzień tygodnia jest jednym z dni, które należy uwzględnić
        if (summerHolidays[dayOfWeek]) {
            const holidayPeriod = summerHolidays[dayOfWeek];
            const startDate = new Date(holidayPeriod.start);
            const endDate = new Date(holidayPeriod.end);
            const currentDate = new Date(formattedDate);

            // Sprawdź, czy data znajduje się w zakresie wakacji
            return currentDate >= startDate && currentDate <= endDate;
        }

        return false;
    } catch (error) {
        console.error('Error in isInPeriod:', error);
        return false;
    }
};


// Pobiera harmonogram dla danej daty
app.get('/schedule/:date', (req, res) => {
    const date = new Date(req.params.date);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const stopId = req.query.stop_id;
    const routeId = req.query.route_id;

    if (!stopId || !routeId) {
        res.status(400).json({ error: 'Both stop_id and route_id are required' });
        return;
    }

    const periods = '{"summer_holidays": {"Saturday": {"start": "2024-07-01", "end": "2024-08-31"}}}';
    const testDate = new Date('2024-07-27'); // Przykładowa data, sobota w wakacje
    console.log(isInPeriod(testDate, periods)); // Powinno zwrócić true

    const testDateNotInPeriod = new Date('2024-09-01'); // Przykładowa data, poza zakresem wakacji
    console.log(isInPeriod(testDateNotInPeriod, periods)); // Powinno zwrócić false

    db.all(`SELECT r.name as route, s.name as stop, sc.departure_time, sc.schedule_code, scode.except_dates, scode.periods 
            FROM schedules sc
            JOIN routes r ON sc.route_id = r.id
            JOIN stops s ON sc.stop_id = s.id
            JOIN schedule_codes scode ON sc.schedule_code = scode.code
            WHERE ? IN (SELECT value FROM json_each(scode.days_of_week))
            AND sc.stop_id = ?
            AND sc.route_id = ?`,
            [dayOfWeek, stopId, routeId], 
            (err, rows) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }

                const validSchedules = rows.filter(row => {
                    const exceptDates = JSON.parse(row.except_dates);
                    const periods = JSON.parse(row.periods);
                    return !isSpecialDay(date, exceptDates) && !isInPeriod(date, periods);
                });

                res.json(validSchedules);
            });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
