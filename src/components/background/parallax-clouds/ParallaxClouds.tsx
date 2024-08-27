import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import ParallaxScene from './ParallaxScene'; // Import the updated ParallaxScene
import { CLOUDS_INDEX } from '../../../utils/zindexes';

interface ParallaxCloudsProps {
  cloudsConfig: {
    image: string;
    position: { x: number; y: number };
    scrollSpeed: number;
    alphaRange: [number, number];
    width?: number; // Optional width
    caca?: number; // Optional height
  }[];
}

const ParallaxClouds: React.FC<ParallaxCloudsProps> = ({ cloudsConfig }) => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: gameContainerRef.current.clientWidth,
      height: gameContainerRef.current.clientHeight,
      scene: new ParallaxScene({ clouds: cloudsConfig }), // Pass the configuration here
      parent: gameContainerRef.current,
      transparent: true,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true); // Clean up the game instance on unmount
    };
  }, [cloudsConfig]);

  return (
    <div
      ref={gameContainerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: '0px',
        zIndex: CLOUDS_INDEX,
      }}
    />
  );
};

export default ParallaxClouds;
