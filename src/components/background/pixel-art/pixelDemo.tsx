import React from 'react';

interface CrossPixelProps {
  size: number; // Size of each pixel
  borderThickness: number; // Thickness of the cross lines
}

const CrossPixel: React.FC<CrossPixelProps> = ({ size, borderThickness }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'transparent', // Transparent background
        position: 'relative',
        borderTop: `${borderThickness}px solid black`,
        borderBottom: `${borderThickness}px solid black`,
        borderLeft: `${borderThickness}px solid black`,
        borderRight: `${borderThickness}px solid black`,
      }}
    />
  );
};

interface CrossPixelGridProps {
  pixelSize: number; // Size of each pixel
  gridWidth: number; // Number of pixels wide
  gridHeight: number; // Number of pixels high
  borderThickness: number; // Thickness of the cross lines
}

const CrossPixelGrid: React.FC<CrossPixelGridProps> = ({
  pixelSize,
  gridWidth,
  gridHeight,
  borderThickness,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridWidth}, ${pixelSize}px)`,
        gridTemplateRows: `repeat(${gridHeight}, ${pixelSize}px)`,
        gap: '0', // No gap between pixels
        backgroundColor: 'transparent', // Transparent background of the grid
      }}
    >
      {Array.from({ length: gridWidth * gridHeight }).map((_, index) => (
        <CrossPixel
          key={index}
          size={pixelSize}
          borderThickness={borderThickness}
        />
      ))}
    </div>
  );
};

export default CrossPixelGrid;
