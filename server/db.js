import sqlite3 from 'sqlite3';
import path from 'path';

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

// Export db as a named export
export { db };
