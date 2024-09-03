const express = require('express');
const db = require('./db');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/emails', emailRoutes);

// Start WebSocket server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Handle incoming messages and save to database
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
