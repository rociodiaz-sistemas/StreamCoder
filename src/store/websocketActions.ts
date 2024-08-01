export const RESIZE_SOURCE = 'RESIZE_SOURCE';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';

export interface ResizeSourceAction {
  type: typeof RESIZE_SOURCE;
  payload: {
    sourceName: string;
    width: number;
    height: number;
  };
}

export const resizeSource = (
  sourceName: string,
  width: number,
  height: number,
): ResizeSourceAction => ({
  type: RESIZE_SOURCE,
  payload: { sourceName, width, height },
});

export interface ConnectWebSocketAction {
  type: typeof CONNECT_WEBSOCKET;
}
