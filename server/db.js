const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to your SQLite database file
const dbPath = path.join('D:', 'db', 'letters.db');

// Create the database connection
const db = new sqlite3.Database(dbPath);

// Initialize the database schema
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS letters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT,
      sender TEXT,
      text TEXT,
      status TEXT CHECK(status IN ('unread','read')) NOT NULL DEFAULT 'unread',
      is_favorite BOOLEAN NOT NULL DEFAULT 0
    )
  `);
});

module.exports = db;
