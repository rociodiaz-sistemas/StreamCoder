import express from 'express';
import { db } from '../db.js'; // Use named import

const router = express.Router();

// Get all emails
router.get('/', (req, res) => {
  db.all('SELECT * FROM letters', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Add a new email
router.post('/', (req, res) => {
  const { timestamp, sender, text, status, is_favorite } = req.body;
  db.run(
    'INSERT INTO letters (timestamp, sender, text, status, is_favorite) VALUES (?, ?, ?, ?, ?)',
    [timestamp, sender, text, status, is_favorite],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    },
  );
});

export default router;
