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

// Mark an email as read
router.patch('/:id/read', (req, res) => {
  const { id } = req.params;
  db.run(
    'UPDATE letters SET status = ? WHERE id = ?',
    ['read', id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Email marked as read' });
    },
  );
});

// Toggle email favorite status
router.patch('/:id/favorite', (req, res) => {
  const { id } = req.params;
  db.get('SELECT is_favorite FROM letters WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const newStatus = row.is_favorite ? 0 : 1; // Toggle between 0 and 1
    db.run(
      'UPDATE letters SET is_favorite = ? WHERE id = ?',
      [newStatus, id],
      function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Email favorite status updated' });
      },
    );
  });
});

// Get filtered emails
router.get('/filter', (req, res) => {
  const { status, favorite } = req.query;
  let query = 'SELECT * FROM letters WHERE 1=1';
  const params = [];

  if (status) {
    query += ' AND status = ?';
    params.push(status);
  }

  if (favorite) {
    query += ' AND is_favorite = ?';
    params.push(favorite === 'true' ? 1 : 0);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

export default router;
