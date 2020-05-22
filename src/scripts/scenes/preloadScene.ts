export default class PreloadScene extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  open: Phaser.GameObjects.Image;
  playButton: Phaser.GameObjects.Image;
  music: Phaser.Sound.BaseSound;

  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("Title", "assets/hatDisplay.png");
    this.load.image("neutral_background", "assets/backgrounds/neutral_faces.png");
    this.load.image("happy_background", "assets/backgrounds/happy_faces.png");
    this.load.image("upset_background", "assets/backgrounds/upset_faces.png");
    this.load.image("empty", "assets/empty_lot.jpg");

    this.load.image("next_round", "assets/screens/continueScreen.png");
    this.load.image("retry", "assets/screens/roundEnd.png");
    this.load.image("opening", "assets/screens/openerScreen.png");
    this.load.image("Bubble", "assets/objects/Bubble_Sort.png");
    this.load.image("Selection", "assets/objects/Selection_Sort.png");
    this.load.image("Clipboard", "assets/objects/clipboard.png");
    this.load.image("continueButton", "assets/objects/continue_button.png");
    this.load.image("ExitButton", "assets/objects/exit_button.png");
    this.load.image("EndTophat", "assets/hats/congrats.png");
    this.load.image("Congrats", "assets/objects/congratulationsText.png");

    this.load.image("redhat", "assets/hats/tophat_red.png");
    this.load.image("orangehat", "assets/hats/tophat_orange2.png");
    this.load.image("yellowhat", "assets/hats/tophat_yellow.png");
    this.load.image("yellowgreenhat", "assets/hats/tophat_yellowgreen.png");
    this.load.image("greenhat", "assets/hats/tophat_green_.png");
    this.load.image("bluehat", "assets/hats/tophat_blue.png");
    this.load.image("purplehat", "assets/hats/tophat_purple.png");
    this.load.image("pinkhat", "assets/hats/tophat_pink.png");
    this.load.image("whitehat", "assets/hats/tophat_white.png");

    this.load.audio("TitleMusic", "assets/sounds/titleMusic.mp3");
    this.load.audio("LevelMusic", "assets/sounds/levelMusic.mp3");
    this.load.audio("GameEndMusic", "assets/sounds/gameEndMusic.mp3");
    this.load.audio("Grab", "assets/sounds/floop.mp3");

  }

  create() {
    this.background = this.add.image(0,0, "Title");
    this.background.setOrigin(0, 0);
    this.background.displayWidth = this.scale.width-100;
    this.background.displayHeight = this.scale.height-100;
    this.background.x += 50;
    this.background.y += 50;
    this.add.text(800, 500, "Start Game!", {fontSize: '30px', fill: '0#ffffff'}).setInteractive().on('pointerdown', () => this.opener());
 
    this.music = this.sound.add("TitleMusic");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    }
    this.music.play(musicConfig);

  }

  opener(){
    this.background.setTexture("empty");
    this.background.displayWidth = this.scale.width;
    this.background.displayHeight = this.scale.height;
    this.background.x -= 50;
    this.background.y -= 50;
    this.open = this.add.image(0, 0,"opening");
    this.open.x = 900;
    this.open.y = 450;
    this.playButton = this.add.image(0, 0, "continueButton");
    this.playButton.setOrigin(0, 0);
    this.playButton.displayHeight = 50;
    this.playButton.displayWidth = 50;
    this.playButton.x = 870;
    this.playButton.y = 700;
    this.playButton.setInteractive().on('pointerdown', () => this.ender());
  }

  ender() {
    this.music.stop();
    this.scene.start('MainScene');
  }

}
