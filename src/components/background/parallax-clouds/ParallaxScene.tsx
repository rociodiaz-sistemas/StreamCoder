import Phaser from 'phaser';

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
      this.load.image(cloud.image, cloud.image);
    });
  }

  create(): void {
    this.options.clouds.forEach((cloudConfig) => {
      const cloudHeight = this.textures
        .get(cloudConfig.image)
        .getSourceImage().height;

      const cloud = this.add
        .tileSprite(
          cloudConfig.position.x,
          cloudConfig.position.y,
          this.cameras.main.width,
          cloudHeight,
          cloudConfig.image,
        )
        .setOrigin(0, 0);

      cloud.displayHeight = cloudHeight;
      cloud.displayWidth = this.cameras.main.width;
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
