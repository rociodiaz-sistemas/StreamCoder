import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Absolute path to your SQLite database file
const dbPath = 'D:\\db\\letters.db'; // Use double backslashes or single forward slashes

// Ensure the directory exists
const dirPath = dirname(dbPath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Create a new database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Database opened successfully.');
  }
});

// Create the 'letters' table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS letters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT,
      sender TEXT,
      text TEXT,
      status TEXT CHECK( status IN ('unread', 'read') ) NOT NULL DEFAULT 'unread',
      is_favorite BOOLEAN NOT NULL DEFAULT 0
    )
  `);

  console.log('Database initialized.');
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Database connection closed.');
  }
});
