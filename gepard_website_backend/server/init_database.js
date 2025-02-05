import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączono z bazą danych.');
});

// Zamknij połączenie z bazą danych
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Połączenie z bazą danych zamknięte.');
});