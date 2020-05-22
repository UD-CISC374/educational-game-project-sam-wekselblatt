import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  background: Phaser.GameObjects.Image;
  roundEnd: Phaser.GameObjects.Image;
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
  storeY: Number;
  storeX2: Number;
  storeY2: Number;
  storeName: String;
  dragObj: any;
  stopDrag: boolean;
  overlap: boolean;
  storeObj1;
  storeObj2;
  bubbleSort: boolean;
  bubbleWorks: boolean;
  round;
  limit;
  moveCount;
  roundText;
  limitText;
  moveCountText;
  Bsorter: Phaser.GameObjects.Image;
  Ssorter: Phaser.GameObjects.Image;
  Clipboard: Phaser.GameObjects.Image;
  retry: Phaser.GameObjects.Image;
  //retryText: Phaser.GameObjects.Text;
  nextText: Phaser.GameObjects.Text;
  exitText: Phaser.GameObjects.Text;
  Continue: Phaser.GameObjects.Image;
  Exit: any;


  constructor() {
    super({ key: 'MainScene' });
  }

  create() {


    this.limit = 15;
    this.round = 1;
    this.moveCount = 0;

    this.bubbleSort = false;
    this.bubbleWorks = false;
    this.overlap = false;
    this.stopDrag = true;
    this.posit = [110, 310, 510, 710, 910, 1110, 1310, 1510, 1710];
    this.hats = this.add.group();
    this.hatOrder = [];
    this.randomOrder = [];

    this.exampleObject = new ExampleObject(this, 0, 0);


    this.background = this.add.image(0, 0, "neutral_background");
    this.background.setOrigin(0, 0);
    this.background.displayWidth = this.scale.width;
    this.background.displayHeight = this.scale.height;



    this.Bsorter = this.add.image(0, 0, "Bubble");
    this.Bsorter.setOrigin(0, 0);
    this.Bsorter.displayWidth = 300;
    this.Bsorter.displayHeight = 300;
    this.Bsorter.x = 100;
    this.Bsorter.y = 50;
    this.Bsorter.setVisible(false);

    this.Ssorter = this.add.image(0, 0, "Selection");
    this.Ssorter.setOrigin(0, 0);
    this.Ssorter.displayWidth = 300;
    this.Ssorter.displayHeight = 300;
    this.Ssorter.x = 100;
    this.Ssorter.y = 50;

    this.Clipboard = this.add.image(0, 0, "Clipboard");
    this.Clipboard.setOrigin(0, 0);
    this.Clipboard.displayWidth = 300;
    this.Clipboard.displayHeight = 400;
    this.Clipboard.x = 1400;

    

    this.redhat = this.physics.add.sprite(110, 620, "redhat");
    this.orangehat = this.physics.add.sprite(310, 620, "orangehat");
    this.yellowhat = this.physics.add.sprite(510, 620, "yellowhat");
    this.yellowgreenhat = this.physics.add.sprite(710, 620, "yellowgreenhat");
    this.greenhat = this.physics.add.sprite(910, 620, "greenhat");
    this.bluehat = this.physics.add.sprite(1110, 620, "bluehat");
    this.purplehat = this.physics.add.sprite(1310, 620, "purplehat");
    this.pinkhat = this.physics.add.sprite(1510, 620, "pinkhat");
    this.whitehat = this.physics.add.sprite(1710, 620, "whitehat");

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
    
    this.redhat.setGravityY(-400);
    this.orangehat.setGravityY(-400);
    this.yellowhat.setGravityY(-400);
    this.yellowgreenhat.setGravityY(-400);
    this.greenhat.setGravityY(-400);
    this.bluehat.setGravityY(-400);
    this.purplehat.setGravityY(-400);
    this.pinkhat.setGravityY(-400);
    this.whitehat.setGravityY(-400);

    this.redhat.setScale(0.35);
    this.orangehat.setScale(0.35);
    this.yellowhat.setScale(0.35);
    this.yellowgreenhat.setScale(0.35);
    this.greenhat.setScale(0.35);
    this.bluehat.setScale(0.35);
    this.purplehat.setScale(0.35);
    this.pinkhat.setScale(0.35);
    this.whitehat.setScale(0.35);

    this.redhat.flipX = true;
    this.orangehat.flipX = true;
    this.yellowhat.flipX = true;
    this.yellowgreenhat.flipX = true;
    this.greenhat.flipX = true;
    this.bluehat.flipX = true;
    this.purplehat.flipX = true;
    this.pinkhat.flipX = true;
    this.whitehat.flipX = true;
   
    this.redhat.setInteractive();
    this.orangehat.setInteractive();
    this.yellowhat.setInteractive();
    this.yellowgreenhat.setInteractive();
    this.greenhat.setInteractive();
    this.bluehat.setInteractive();
    this.purplehat.setInteractive();
    this.pinkhat.setInteractive();
    this.whitehat.setInteractive();





    this.roundEnd = this.add.image(0, 0, "next_round");
    this.roundEnd.setOrigin(0, 0);
    this.roundEnd.displayWidth = 1100;
    this.roundEnd.displayHeight = 700;
    this.roundEnd.x = 300;
    this.roundEnd.y = 100;
    this.roundEnd.setVisible(false);

    this.retry = this.add.image(0, 0, "retry");
    this.retry.setOrigin(0, 0);
    this.retry.displayWidth = 1100;
    this.retry.displayHeight = 700;
    this.retry.x = 300;
    this.retry.y = 100;
    this.retry.setVisible(false);

    this.Continue = this.add.image(0, 0, "continueButton");
    this.Continue.setOrigin(0, 0);
    this.Continue.displayWidth = 50;
    this.Continue.displayHeight = 50;
    this.Continue.x = 750;
    this.Continue.y = 720;
    this.Continue.setInteractive().on('pointerdown', () => this.nextGame());
    this.Continue.setVisible(false);

    this.Exit = this.add.image(0, 0, "ExitButton");
    this.Exit.setOrigin(0, 0);
    this.Exit.displayWidth = 50;
    this.Exit.displayHeight = 50;
    this.Exit.x = 1000;
    this.Exit.y = 720;
    this.Exit.setInteractive().on('pointerdown', () => this.scene.start('PreloadScene'));
    this.Exit.setVisible(false);

    this.roundText = this.add.text(1450, 100, "Round 1", {fontSize: '40px', fill: '0#ffffff'});
    this.limitText = this.add.text(1450, 200, "Limit: 15", {fontSize: '20px', fill: '0#ffffff'});
    this.moveCountText = this.add.text(1450, 250, "Moves: 0", {fontSize: '20px', fill: '0#ffffff'});


    this.input.on('gameobjectdown', this.startdrag, this);
    this.reOrder();
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

  startdrag(pointer, gameObject) {
    this.storeX = gameObject.x;
    this.storeY = gameObject.y;
    this.storeName = gameObject.name;
    this.storeObj1 = gameObject;
    this.stopDrag = false;
    this.input.off('pointerdown', this.startdrag, this);
    this.dragObj = gameObject;
    this.input.on('pointermove', this.dodrag, this);
    this.input.on('pointerup', this.stopdrag, this);
  }

  dodrag(pointer){
    this.dragObj.x = pointer.x;
    this.dragObj.y = pointer.y;
  }

  stopdrag(gameObject){
    this.stopDrag = true;
    this.input.on('pointerdown', this.startdrag, this);
    this.input.off('pointermove', this.dodrag, this);
    this.input.off('pointerup', this.stopdrag, this);
    this.checkOverlap(this.hats, this.hats);
    if(!this.overlap){
      this.storeObj1.x = this.storeX;
      this.storeObj1.y = this.storeY;
    }
    this.overlap = false;
    this.moveCount += 1;
    this.gameOver();
  }

  

  /*updater() {
    this.background.setTexture("upset_background");
  }*/

  
  checkOverlap(arr1, arr2) {
    var obj1;
    var obj2;
    for(let i=0; i<9; i++){
      for(let j=0; j<9; j++){
        obj1 = arr1.getChildren()[i];
        obj2 = arr2.getChildren()[j];
        if(this.physics.overlap(obj1, obj2) && obj2.name !== this.storeName){
          this.storeObj2 = obj2;
          this.overlap = true;
        }
      }
    }
    if(this.bubbleSort && this.overlap){
      this.bubbls(this.storeObj1, this.storeObj2);
    }
    else if(!this.bubbleSort && this.overlap){
      this.changePosit(this.storeObj1, this.storeObj2);
    }
  }

  changePosit(obj1, obj2){
    for(let i=0; i<9; i++){
      if(this.hatOrder[i] === obj1.name){
        this.hatOrder[i] = obj2.name;
      }
      else if(this.hatOrder[i] === obj2.name){
        this.hatOrder[i] = obj1.name;
      }
    }
    obj1.x= obj2.x;
    obj1.y = obj2.y;
    obj2.x = this.storeX;
    obj2.y = this.storeY;
    this.victoryCheck();
  }

  bubbls(obj1, obj2){
    for(let i=0; i<9; i++){
      if(this.hatOrder[i] == obj1.name && (this.hatOrder[i+1] == obj2.name || this.hatOrder[i-1] == obj2.name)){
        this.bubbleWorks = true;
      }
    }
    if(this.bubbleWorks){
      this.bubbleWorks = false;
      this.changePosit(obj1, obj2);
    }
    else {
      obj1.x = this.storeX;
      obj1.y = this.storeY;
    }
  }

  

  createWinWindow(){
    this.background.setTexture("happy_background");
    this.roundEnd.setVisible(true);

    this.Ssorter.setVisible(false);
    this.Bsorter.setVisible(false);
    this.Clipboard.setVisible(false);
    this.roundText.setVisible(false);
    this.limitText.setVisible(false);
    this.moveCountText.setVisible(false);
    this.Continue.setVisible(true);
    this.Continue.x = 820;
    this.Continue.y = 670;
    this.round++;
    
  }

  createLoseWindow() {
    this.background.setTexture("upset_background");
    this.retry.setVisible(true);

    this.Ssorter.setVisible(false);
    this.Bsorter.setVisible(false);
    this.Clipboard.setVisible(false);
    this.roundText.setVisible(false);
    this.limitText.setVisible(false);
    this.moveCountText.setVisible(false);
    this.Continue.setVisible(true);
    this.Exit.setVisible(true);
    
   
  }


  createEndWindow(){
    console.log("Game Has Ended")
  }


  nextGame(){
    this.background.setTexture("neutral_background");
    this.moveCount = 0;
    this.reOrder();
    this.roundText.text = String("Round " + this.round);

    if(this.round %2 == 0){
      this.Bsorter.setVisible(true);
      this.bubbleSort = true;
      this.limit = 36 - this.round;
    }
    else{
      this.Ssorter.setVisible(true);
      this.bubbleSort = false;
      this.limit = 16 - this.round;
    }
    this.roundEnd.setVisible(false);
    this.retry.setVisible(false);
    //this.retryText.setVisible(false);
    this.Continue.setVisible(false);
    this.Exit.setVisible(false);
    this.Clipboard.setVisible(true);
    this.roundText.setVisible(true);
    this.limitText.setVisible(true);
    this.moveCountText.setVisible(true);
    this.limitText.text = String("Limit: " + this.limit);
  }

  victoryCheck() {
    let fail = false;
    for(let i=0; i<9; i++){
      if(this.hats.getChildren()[i].name !== this.hatOrder[i]){
        fail = true;
      }
    }
    if(!fail && this.round !== 8) {
      this.createWinWindow();
    }
    else if(!fail && this.round == 8){
      this.createEndWindow();
    }
  }

  gameOver(){
    if(this.moveCount >= this.limit){
      this.createLoseWindow();
    }
  }

  update() {
    this.moveCountText.text = String("Moves: " + this.moveCount);
  }  
}
