import Phaser from 'phaser';
import imageMap from './assets/imageMapping'; // Import the image map

interface CloudConfig {
  image: string;
  position: { x: number; y: number };
  scrollSpeed: number;
  alphaRange: [number, number];
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
        console.log(`Loading image: ${cloud.image} from ${imagePath}`);
      } else {
        console.error(`Image not found: ${cloud.image}`);
      }
    });
  }

  create(): void {
    this.options.clouds.forEach((cloudConfig) => {
      const texture = this.textures.get(cloudConfig.image);
      const cloudHeight = cloudConfig.height ?? texture.getSourceImage().height;
      const cloudWidth = cloudConfig.width ?? this.cameras.main.width;

      const cloud = this.add
        .tileSprite(
          cloudConfig.position.x,
          cloudConfig.position.y,
          cloudWidth,
          cloudHeight,
          cloudConfig.image,
        )
        .setOrigin(0, 0);

      cloud.displayWidth = cloudWidth;
      cloud.displayHeight = cloudHeight; // Ensure height is set
      cloud.setAlpha(cloudConfig.alphaRange[0]);

      this.tweens.add({
        targets: cloud,
        alpha: {
          from: cloudConfig.alphaRange[0],
          to: cloudConfig.alphaRange[1],
        },
        duration: 10000,
        yoyo: true,
        repeat: -1,
      });

      this.cloudSprites.push({
        sprite: cloud,
        scrollSpeed: cloudConfig.scrollSpeed,
      });
    });
  }

  update(): void {
    this.cloudSprites.forEach((cloud) => {
      cloud.sprite.tilePositionX += cloud.scrollSpeed;
    });
  }
}

export default ParallaxScene;
