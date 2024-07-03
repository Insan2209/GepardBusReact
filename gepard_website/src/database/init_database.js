const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db');

db.serialize(() => {
    db.run(`INSERT INTO schedule_codes (code, description, days_of_week, except_dates, periods)
        VALUES ('EmqQ', 'Kombinacja kodów E, m, q i Q',
                '["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]',
                '["2024-01-01", "2024-01-06", "2024-04-21", "2024-04-22", "2024-05-01", "2024-05-02", "2024-05-03", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-24", "2024-12-25", "2024-12-26", "2024-12-31"]',
                '{"summer_holidays": {"Saturday": ["2024-07-01", "2024-08-31"]}}')`);
});

db.close();