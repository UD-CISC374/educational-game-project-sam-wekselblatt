export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("neutral_background", "assets/backgrounds/neutral_faces.png");
    this.load.image("happy_background", "assets/backgrounds/happy_faces.png");
    this.load.image("upset_background", "assets/backgrounds/upset_faces.png");

    this.load.image("redhat", "assets/hats/tophat_red.png");
    this.load.image("orangehat", "assets/hats/tophat_orange2.png");
    this.load.image("yellowhat", "assets/hats/tophat_yellow.png");
    this.load.image("yellowgreenhat", "assets/hats/tophat_yellowgreen.png");
    this.load.image("greenhat", "assets/hats/tophat_green_.png");
    this.load.image("bluehat", "assets/hats/tophat_blue.png");
    this.load.image("purplehat", "assets/hats/tophat_purple.png");
    this.load.image("pinkhat", "assets/hats/tophat_pink.png");
    this.load.image("whitehat", "assets/hats/tophat_white.png");
  }

  create() {
    this.scene.start('MainScene');
  }
}
