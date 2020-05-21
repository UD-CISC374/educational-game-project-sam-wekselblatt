import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  background: Phaser.GameObjects.Image;
  redhat: Phaser.Physics.Arcade.Sprite;
  orangehat:Phaser.Physics.Arcade.Sprite;
  yellowhat: Phaser.Physics.Arcade.Sprite;
  yellowgreenhat: Phaser.Physics.Arcade.Sprite;
  greenhat: Phaser.Physics.Arcade.Sprite;
  bluehat: Phaser.Physics.Arcade.Sprite;
  purplehat: Phaser.Physics.Arcade.Sprite;
  pinkhat: Phaser.Physics.Arcade.Sprite;
  whitehat: Phaser.Physics.Arcade.Sprite;
  hats;
  hatOrder;
  randomOrder;
  posit;
  storeX: Number;
  storeY: Number  ;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.posit = [110, 310, 510, 710, 910, 1110, 1310, 1510, 1710];
    this.hats = this.add.group();
    this.hatOrder = [];
    this.randomOrder = [];

    this.exampleObject = new ExampleObject(this, 0, 0);

    this.background = this.add.image(0, 0, "neutral_background");
    this.background.setOrigin(0, 0);
    this.background.displayWidth = this.scale.width;
    this.background.displayHeight = this.scale.height;

    this.redhat = this.physics.add.sprite(110, 610, "redhat");
    this.orangehat = this.physics.add.sprite(310, 610, "orangehat");
    this.yellowhat = this.physics.add.sprite(510, 610, "yellowhat");
    this.yellowgreenhat = this.physics.add.sprite(710, 610, "yellowgreenhat");
    this.greenhat = this.physics.add.sprite(910, 610, "greenhat");
    this.bluehat = this.physics.add.sprite(1110, 610, "bluehat");
    this.purplehat = this.physics.add.sprite(1310, 610, "purplehat");
    this.pinkhat = this.physics.add.sprite(1510, 610, "pinkhat");
    this.whitehat = this.physics.add.sprite(1710, 610, "whitehat");

    this.redhat.name = "red";
    this.orangehat.name = "orange";
    this.yellowhat.name = "yellow";
    this.yellowgreenhat.name = "yellowgreen";
    this.greenhat.name = "green";
    this.bluehat.name = "blue";
    this.purplehat.name = "purple";
    this.pinkhat.name = "pink";
    this.whitehat.name = "white";
    
    this.hats.add(this.redhat);
    this.hats.add(this.orangehat);
    this.hats.add(this.yellowhat);
    this.hats.add(this.yellowgreenhat);
    this.hats.add(this.greenhat);
    this.hats.add(this.bluehat);
    this.hats.add(this.purplehat);
    this.hats.add(this.pinkhat);
    this.hats.add(this.whitehat);

    this.hatOrder.push("red");
    this.hatOrder.push("orange");
    this.hatOrder.push("yellow");
    this.hatOrder.push("yellowgreen");
    this.hatOrder.push("green");
    this.hatOrder.push("blue");
    this.hatOrder.push("purple");
    this.hatOrder.push("pink");
    this.hatOrder.push("white");
    
/*
    this.hatOrder.add(this.redhat);
    this.hatOrder.add(this.orangehat);
    this.hatOrder.add(this.yellowhat);
    this.hatOrder.add(this.yellowgreenhat);
    this.hatOrder.add(this.greenhat);
    this.hatOrder.add(this.bluehat);
    this.hatOrder.add(this.purplehat);
    this.hatOrder.add(this.pinkhat);
    this.hatOrder.add(this.whitehat);
*/
    this.redhat.setGravityY(-400);
    this.orangehat.setGravityY(-400);
    this.yellowhat.setGravityY(-400);
    this.yellowgreenhat.setGravityY(-400);
    this.greenhat.setGravityY(-400);
    this.bluehat.setGravityY(-400);
    this.purplehat.setGravityY(-400);
    this.pinkhat.setGravityY(-400);
    this.whitehat.setGravityY(-400);

    this.redhat.setScale(0.4);
    this.orangehat.setScale(0.4);
    this.yellowhat.setScale(0.4);
    this.yellowgreenhat.setScale(0.4);
    this.greenhat.setScale(0.4);
    this.bluehat.setScale(0.4);
    this.purplehat.setScale(0.4);
    this.pinkhat.setScale(0.4);
    this.whitehat.setScale(0.4);

    this.redhat.flipX = true;
    this.orangehat.flipX = true;
    this.yellowhat.flipX = true;
    this.yellowgreenhat.flipX = true;
    this.greenhat.flipX = true;
    this.bluehat.flipX = true;
    this.purplehat.flipX = true;
    this.pinkhat.flipX = true;
    this.whitehat.flipX = true;
   
    this.reOrder();
  }

  victoryCheck() {
    let fail = false;
    for(let i=0; i<9; i++){
      if(this.hats.getChildren()[i].name !== this.hatOrder[i]){
        fail = true;
      }
    }
    if(!fail) {
      console.log("victory");
    }
  }

  reOrder(){
    Phaser.Utils.Array.Shuffle(this.hatOrder);
    for(let i=0; i<9; i++){
      for(let j=0; j<9; j++){
        if(this.hats.getChildren()[i].name == this.hatOrder[j]){
          this.hats.getChildren()[i].x = this.posit[j];
        }
      }
    }

  }

  update() {
  }
}
