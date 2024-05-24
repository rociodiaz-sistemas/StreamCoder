type ResizeEvent = unknown;
type ResizeDirection = unknown;
type RefToElement = { style: { width: string; height: string } };

export const handleResize = (
  _event: ResizeEvent,
  _direction: ResizeDirection,
  refToElement: RefToElement,
  setFontSize: (fontSize: string) => void,
) => {
  const defaultWidth = 400;
  const defaultHeight = 450;
  const baseFontSize = 1; // 1em

  const currentWidth = parseInt(refToElement.style.width);
  const currentHeight = parseInt(refToElement.style.height);

  // Calculate aspect ratios
  const widthRatio = currentWidth / defaultWidth;
  const heightRatio = currentHeight / defaultHeight;

  // Take the average aspect ratio
  const aspectRatio = (widthRatio + heightRatio) / 2;

  const newFontSize = `${baseFontSize * aspectRatio}em`;
  setFontSize(newFontSize);
};
