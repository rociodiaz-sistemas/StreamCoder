// obsWebSocketClient.ts
import OBSWebSocket from 'obs-websocket-js';

class ObsWebSocketClient {
  private static instance: OBSWebSocket;
  private static connected = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): OBSWebSocket {
    if (!ObsWebSocketClient.instance) {
      ObsWebSocketClient.instance = new OBSWebSocket();
    }
    return ObsWebSocketClient.instance;
  }

  public static async connect(url: string, password: string): Promise<void> {
    const client = ObsWebSocketClient.getInstance();
    if (!ObsWebSocketClient.connected) {
      await client.connect(url, password);
      ObsWebSocketClient.connected = true;
      console.log('Connected to OBS WebSocket');
    }
  }

  public static async disconnect(): Promise<void> {
    const client = ObsWebSocketClient.getInstance();
    if (ObsWebSocketClient.connected) {
      await client.disconnect();
      ObsWebSocketClient.connected = false;
      console.log('Disconnected from OBS WebSocket');
    }
  }
}

export default ObsWebSocketClient;
