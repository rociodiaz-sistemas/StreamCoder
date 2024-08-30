import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import ParallaxScene, { CloudConfig } from './ParallaxScene';
import { CLOUDS_INDEX } from '../../../utils/zindexes';

export interface ParallaxCloudsProps {
  cloudsConfig: CloudConfig[];
}

const ParallaxClouds: React.FC<ParallaxCloudsProps> = ({ cloudsConfig }) => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      antialias: true,
      antialiasGL: true,
      resizeInterval: 0,
      pixelArt: false,
      type: Phaser.AUTO,
      width: window.innerWidth, // Use window dimensions for initial size
      height: window.innerHeight,
      scene: new ParallaxScene({ clouds: cloudsConfig }),
      parent: gameContainerRef.current,
      transparent: true,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scale: {
        //mode: Phaser.Scale.MAX_ZOOM,
        mode: Phaser.Scale.ENVELOP,
        // mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_VERTICALLY,
      },
    };

    gameRef.current = new Phaser.Game(config);

    const handleResize = () => {
      if (gameRef.current) {
        gameRef.current.scale.resize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
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
