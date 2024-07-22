// actions/websocketActions.ts
export const RESIZE_SOURCE = 'RESIZE_SOURCE';

export const resizeSource = (
  sourceName: string,
  width: number,
  height: number,
) => ({
  type: RESIZE_SOURCE,
  payload: { sourceName, width, height },
});
