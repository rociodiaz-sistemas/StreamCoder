import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import Cloud from './clouds-night/3.png';
import TopCloud from './clouds-night/4.png';

class ParallaxScene extends Phaser.Scene {
  private clouds!: Phaser.GameObjects.TileSprite;
  private topClouds!: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'ParallaxScene' });
  }

  preload(): void {
    this.load.image('cloud', Cloud);
    this.load.image('topCloud', TopCloud);
  }

  create(): void {
    const cloudHeight = this.textures.get('cloud').getSourceImage().height;
    const topCloudHeight = this.textures
      .get('topCloud')
      .getSourceImage().height;

    // Create the bottom cloud TileSprite
    this.clouds = this.add
      .tileSprite(
        0,
        this.cameras.main.height - cloudHeight, // Position at the bottom of the container
        this.cameras.main.width,
        cloudHeight,
        'cloud',
      )
      .setOrigin(0, 0);

    // Create the top cloud TileSprite
    this.topClouds = this.add
      .tileSprite(
        0,
        0, // Position at the top of the container
        this.cameras.main.width,
        topCloudHeight,
        'topCloud',
      )
      .setOrigin(0, 0);

    // Adjust the height to ensure no vertical tiling
    this.clouds.displayHeight = cloudHeight;
    this.topClouds.displayHeight = topCloudHeight;

    // Optionally, set the width if needed
    this.clouds.displayWidth = this.cameras.main.width;
    this.topClouds.displayWidth = this.cameras.main.width;

    // Set initial opacity
    this.clouds.setAlpha(0.6); // Default lower opacity for bottom cloud
    this.topClouds.setAlpha(0.3); // Default lower opacity for top cloud

    // Create animations for opacity changes
    this.tweens.add({
      targets: this.clouds,
      alpha: { from: 0.3, to: 0.8 },
      duration: 10000,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: this.topClouds,
      alpha: { from: 0.5, to: 1 },
      duration: 10000,
      yoyo: true,
      repeat: -1,
    });
  }

  update(): void {
    // Horizontal parallax scrolling
    this.clouds.tilePositionX += 0.1;
    this.topClouds.tilePositionX += 0.08; // Adjust speed for topClouds if needed
  }
}

const ParallaxClouds: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: gameContainerRef.current.clientWidth,
      height: gameContainerRef.current.clientHeight,
      scene: ParallaxScene,
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
  }, []);

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
