import OBSWebSocket, {
  OBSRequestTypes,
  OBSResponseTypes,
} from 'obs-websocket-js';

class ObsWebSocketClient {
  private static instance: OBSWebSocket;
  private static connected = false;

  private constructor() {}

  // Singleton pattern to get the instance of OBSWebSocket
  public static getInstance(): OBSWebSocket {
    if (!ObsWebSocketClient.instance) {
      ObsWebSocketClient.instance = new OBSWebSocket();
    }
    return ObsWebSocketClient.instance;
  }

  // Connect to OBS WebSocket
  public static async connect(url: string, password: string): Promise<void> {
    const client = ObsWebSocketClient.getInstance();
    if (!ObsWebSocketClient.connected) {
      try {
        await client.connect(url, password);
        ObsWebSocketClient.connected = true;
        console.log('Connected to OBS WebSocket');
      } catch (error) {
        console.error('Failed to connect to OBS WebSocket', error);
        throw error; // Re-throw the error for the caller to handle
      }
    }
  }

  // Disconnect from OBS WebSocket
  public static async disconnect(): Promise<void> {
    const client = ObsWebSocketClient.getInstance();
    if (ObsWebSocketClient.connected) {
      try {
        await client.disconnect();
        ObsWebSocketClient.connected = false;
        console.log('Disconnected from OBS WebSocket');
      } catch (error) {
        console.error('Failed to disconnect from OBS WebSocket', error);
        throw error; // Re-throw the error for the caller to handle
      }
    }
  }

  // Check if connected to OBS WebSocket
  public static isConnected(): boolean {
    return ObsWebSocketClient.connected;
  }

  // Make a call to OBS WebSocket
  public static async call<RequestType extends keyof OBSRequestTypes>(
    requestType: RequestType,
    requestData?: OBSRequestTypes[RequestType],
  ): Promise<OBSResponseTypes[RequestType]> {
    const client = ObsWebSocketClient.getInstance();
    if (!ObsWebSocketClient.connected) {
      throw new Error('Not connected to OBS WebSocket');
    }
    try {
      return await client.call(requestType, requestData);
    } catch (error) {
      console.error('Failed to make OBS WebSocket call', error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
}

export default ObsWebSocketClient;
