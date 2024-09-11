// serverClient.ts
class ServerClient {
  private url: string;
  private ws: WebSocket | null = null;

  constructor(url: string) {
    this.url = url;
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.url);

      this.ws.onopen = () => {
        console.log('WebSocket connected');
        resolve();
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error', error);
        reject(error);
      };

      this.ws.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
        // Handle incoming messages if necessary
      };
    });
  }

  send(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.error('WebSocket is not connected');
    }
  }

  close(): void {
    if (this.ws) {
      this.ws.close();
    }
  }
}

export default new ServerClient('ws://localhost:8081'); // Use your WebSocket server URL
