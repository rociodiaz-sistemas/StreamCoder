import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import ParallaxScene from './ParallaxScene'; // Import the updated ParallaxScene

interface ParallaxCloudsProps {
  cloudsConfig: {
    image: string;
    position: { x: number; y: number };
    scrollSpeed: number;
    alphaRange: [number, number];
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
  }, [cloudsConfig]); // Depend on cloudsConfig to recreate the game if configuration changes

  return (
    <div
      ref={gameContainerRef}
      style={{
        width: '100%',
        height: '300px',
        position: 'absolute',
        bottom: '0px', // Ensure positioning context if needed
      }}
    />
  );
};

export default ParallaxClouds;
