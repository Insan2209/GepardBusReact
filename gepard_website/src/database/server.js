const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require('cors');
const PORT = 3001;

const db = new sqlite3.Database('./mydatabase.db');

app.use(express.json());
app.use(cors());

// Sprawdza, czy dzień jest świętem lub specjalnym dniem
const isSpecialDay = (date, exceptDates) => {
    const formattedDate = date.toISOString().split('T')[0];
    return exceptDates.includes(formattedDate);
};

const isInPeriod = (date, periods) => {
    const formattedDate = date.toISOString().split('T')[0];
    try {
        if (!periods || typeof periods !== 'object') {
            throw new Error('Periods format is invalid');
        }
        const summerHolidays = periods.summer_holidays || [];
        for (let period of summerHolidays) {
            if (formattedDate >= period.start && formattedDate <= period.end) {
                return true;
            }
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
    //const formattedDate = date.toISOString().split('T')[0];

    db.all(`SELECT r.name as route, s.name as stop, sc.departure_time, sc.schedule_code, scode.except_dates, scode.periods 
            FROM schedules sc
            JOIN routes r ON sc.route_id = r.id
            JOIN stops s ON sc.stop_id = s.id
            JOIN schedule_codes scode ON sc.schedule_code = scode.code
            WHERE ? IN (SELECT value FROM json_each(scode.days_of_week))`, 
            [dayOfWeek], 
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