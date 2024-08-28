import Phaser from 'phaser';
import imageMap from './assets/imageMapping';

export interface CloudConfig {
  image: string;
  position: { x: number; y: number }; // Position as percentages (0-100)
  scrollSpeed: number;
  alphaRange: [number, number];
  width?: number;
  height?: number;
  scale?: number;
}

interface ParallaxOptions {
  clouds: CloudConfig[];
}

interface CloudSprite {
  sprite: Phaser.GameObjects.TileSprite;
  scrollSpeed: number;
}

class ParallaxScene extends Phaser.Scene {
  private cloudSprites: CloudSprite[] = [];

  constructor(private options: ParallaxOptions) {
    super({ key: 'ParallaxScene' });
  }

  preload(): void {
    this.options.clouds.forEach((cloud) => {
      const imagePath = imageMap[cloud.image];
      if (imagePath) {
        this.load.image(cloud.image, imagePath);
      } else {
        console.error(`Image not found: ${cloud.image}`);
      }
    });
  }

  create(): void {
    this.options.clouds.forEach((cloudConfig) => {
      const texture = this.textures.get(cloudConfig.image);

      // Convert percentage-based positions to pixel values
      const cloudX = (cloudConfig.position.x / 100) * this.cameras.main.width;
      const cloudY = (cloudConfig.position.y / 100) * this.cameras.main.height;

      const cloudWidth = cloudConfig.width ?? this.cameras.main.width;
      const cloudHeight = cloudConfig.height ?? texture.getSourceImage().height;

      const cloud = this.add
        .tileSprite(cloudX, cloudY, cloudWidth, cloudHeight, cloudConfig.image)
        .setOrigin(0, 0);

      // Apply scaling if provided
      const scale = cloudConfig.scale ?? 1;
      cloud.setDisplaySize(cloudWidth * scale, cloudHeight * scale);

      // Ensure the cloud stays within the screen bounds
      cloud.setPosition(
        Math.min(cloudX, this.cameras.main.width - cloud.displayWidth),
        Math.min(cloudY, this.cameras.main.height - cloud.displayHeight),
      );

      cloud.setAlpha(cloudConfig.alphaRange[0]);

      // Randomized tween parameters for staggered opacity animation
      const randomDelay = Phaser.Math.Between(0, 5000); // Random delay between 0 to 5 seconds
      const randomDuration = Phaser.Math.Between(8000, 15000); // Random duration between 8 to 15 seconds

      this.tweens.add({
        targets: cloud,
        alpha: {
          from: cloudConfig.alphaRange[0],
          to: cloudConfig.alphaRange[1],
        },
        duration: randomDuration,
        delay: randomDelay,
        yoyo: true,
        repeat: -1,
      });

      this.cloudSprites.push({
        sprite: cloud,
        scrollSpeed: cloudConfig.scrollSpeed,
      });
    });

    // Listen for resize events to adjust cloud positions
    this.scale.on('resize', this.handleResize, this);
  }

  update(): void {
    this.cloudSprites.forEach((cloud) => {
      cloud.sprite.tilePositionX += cloud.scrollSpeed;
    });
  }

  handleResize(gameSize: Phaser.Structs.Size): void {
    const { width, height } = gameSize;

    this.cameras.resize(width, height);

    this.cloudSprites.forEach((cloud, index) => {
      const cloudConfig = this.options.clouds[index];
      const cloudX = (cloudConfig.position.x / 100) * width;
      const cloudY = (cloudConfig.position.y / 100) * height;

      // Reposition the cloud within the bounds
      cloud.sprite.setPosition(
        Math.min(cloudX, width - cloud.sprite.displayWidth),
        Math.min(cloudY, height - cloud.sprite.displayHeight),
      );
    });
  }
}

export default ParallaxScene;
