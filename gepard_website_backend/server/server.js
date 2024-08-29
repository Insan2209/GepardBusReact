import express from 'express';
import sqlite3 from 'sqlite3';
import moment from 'moment-timezone';
import cors from 'cors';
const app = express();
const PORT = 3001;

const db = new sqlite3.Database('./mydatabase.db');
moment.tz.setDefault('Europe/Warsaw');

app.use(express.json());
app.use(cors());

const isSpecialDay = (date, exceptDates) => {
    const formattedDate = date.toISOString().split('T')[0];
    return exceptDates.includes(formattedDate);
};

const isInPeriod = (date, periods) => {
    const formattedDate = date.toISOString().split('T')[0];
    try {
        let periodsObject;
        
        if (typeof periods === 'string') {
            periodsObject = JSON.parse(periods);
        } else if (typeof periods === 'object') {
            periodsObject = periods;
        } else {
            console.error('Periods is not a string or object:', periods);
            throw new Error('Periods format is invalid');
        }

        const summerHolidays = periodsObject.summer_holidays || [];
        if (!Array.isArray(summerHolidays)) {
            console.error('Summer Holidays is not an array:', summerHolidays);
            throw new Error('Summer Holidays should be an array');
        }
        
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

app.get('/', (req, res) => {
    res.send('Hello from backend');
  });

app.get('/schedule/:date', (req, res) => {
    const date = new Date(req.params.date);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const stopId = req.query.stop_id;
    const routeId = req.query.route_id;

    if (!stopId || !routeId) {
        res.status(400).json({ error: 'Both stop_id and route_id are required' });
        return;
    }

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
