export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const WEBSOCKET_CONNECTED = 'WEBSOCKET_CONNECTED';
export const RECEIVE_WEBSOCKET_DATA = 'RECEIVE_WEBSOCKET_DATA';
export const WEBSOCKET_ERROR = 'WEBSOCKET_ERROR';
export const DISCONNECT_WEBSOCKET = 'DISCONNECT_WEBSOCKET';

export const connectWebSocket = () => ({
    type: CONNECT_WEBSOCKET,
});

export const websocketConnected = () => ({
    type: WEBSOCKET_CONNECTED,
});

export const receiveWebSocketData = (data: any) => ({
    type: RECEIVE_WEBSOCKET_DATA,
    payload: data,
});

export const websocketError = (error: any) => ({
    type: WEBSOCKET_ERROR,
    payload: error,
});

export const disconnectWebSocket = () => ({
    type: DISCONNECT_WEBSOCKET,
});
