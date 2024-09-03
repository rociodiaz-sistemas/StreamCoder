import express from 'express';
import emailRoutes from './routes/emailRoutes.js';
import { WebSocketServer } from 'ws'; // Update this line

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/emails', emailRoutes);

// Start WebSocket server
const wss = new WebSocketServer({ port: 8080 }); // Update this line

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Handle incoming messages and save to the database
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
