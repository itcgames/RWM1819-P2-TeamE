var snw = [];
var cam;


class Game
{
  constructor(title)
  {

    this.coins = [];
    this.coins[0] = new AssetManager(100, 200 / 2, 300, 30, "mycanvas");
    this.coins[1] = new AssetManager(600, 500 / 2, 300, 30, "mycanvas");
    this.coins[2] = new AssetManager(150, 300 / 2, 300, 30, "mycanvas");
    this.coins[3] = new AssetManager(600, 500 / 2, 300, 30, "mycanvas");
    this.coins[4] = new AssetManager(250, 200 / 2, 300, 30, "mycanvas");
    this.coins[5] = new AssetManager(800, 700 / 2, 300, 30, "mycanvas");
    this.coins[6] = new AssetManager(200, 800 / 2, 300, 30, "mycanvas");
    this.coins[7] = new AssetManager(300, 500 / 2, 300, 30, "mycanvas");
    this.coins[8] = new AssetManager(750, 200 / 2, 300, 30, "mycanvas");
    this.coins[9] = new AssetManager(650, 100 / 2, 300, 30, "mycanvas");
    this.coins[10] = new AssetManager(225, 600 / 2, 300, 30, "mycanvas");
    this.coins[11] = new AssetManager(675, 250 / 2, 300, 30, "mycanvas");
    this.coins[12] = new AssetManager(50, 350 / 2, 300, 30, "mycanvas");
    this.coins[13] = new AssetManager(850, 50 / 2, 300, 30, "mycanvas");
    this.coins[14] = new AssetManager(150, 400 / 2, 300, 30, "mycanvas");
    this.coins[15] = new AssetManager(625, 400 / 2, 300, 30, "mycanvas");

    this.jsonLoader = new JsonLoader();
    this.jsonLoader.loadJSON("Data");

    this.sizePencil = 50
    this.sizeEraser = 50
    this.pencilPos = 0
    this.eraserPos = 0
    this.playPos = 0
    this.stopPos = 0
    //this.camera = new Camera()

    this.startGame = false

    this.tutorialBool = false;

    this.title = title
    this.gravity = 10
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    var b2World = Box2D.Dynamics.b2World
    this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    this.playImage = new Image()
    this.playImage.src = "resources/img/playBtn.png";
    this.stopImage = new Image()

    this.stopImage.src = "resources/img/stopBtn.png";
    this.mainBtn = new Image();
    this.mainBtn.src = "resources/img/main_button.png";

    this.stopImage.src = "resources/img/stopBtn.png";
    this.pencilImage = new Image()
    this.pencilImage.src = "resources/img/Pencil.png";
    this.eraserImage = new Image()
    this.eraserImage.src = "resources/img/eraser.png";

    this.world = new b2World(
          new b2Vec2(0, this.gravity)    //gravity
       ,  false                 //allow sleep
    );
    this.bodyPosition = []
    this.playerPosition = []
    gameNs.eraserOn = false
    gameNs.pencilOn = false


    gameNs.score = 0;

    this.normalSpeed =new Image();
    this.speedUp = new Image();
    this.slowSpeed = new Image();

    this.normalSpeed.src = "resources/img/normal_speed.png";
    this.speedUp.src = "resources/img/speed_up.png";
    this.slowSpeed.src = "resources/img/slow_speed.png";

    this.normalSize = 50;
    this.speedUpSize = 40;
    this.slowSize = 40;


     gameNs.world = this.world
     gameNs.b2DebugDraw = this.b2DebugDraw

    this.shape = new Shape(1,2.2,this.world, "dynamic", "circle", 1,1,0.5,0.5,0.2);


    this.coins.forEach(coin => {
      coin.setSpriteSheet(true, 3, 10);
    })

     this.gestureManager = new GestureManager()
     this.startingPosition = []
     this.realPosition = []
     this.gestureManager.init()

     var debugDraw = new this.b2DebugDraw();
     debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
     debugDraw.SetDrawScale(30.0);
     debugDraw.SetFillAlpha(0.3);
     debugDraw.SetLineThickness(1);
     debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
     this.world.SetDebugDraw(debugDraw);


     this.addScoreboardOnce = false
	    for(var i = 0; i < 400; i++)
    		{
    			snw[i] = new snow();
      }
      this.tip = new tip();
      var that = this;
       var clearButton = document.getElementById("clearBodies");
          clearButton.addEventListener("touchend", function()
          {
            that.shape.clearEverything();
          });
      var clearLastButton = document.getElementById("clearLast");
      clearLastButton.addEventListener("touchend", function()
          {
            that.shape.clearLastDrawn();
          });
        gameNs.cam = new Camera();
  }
    /**
  * initWorld
  * @desc Initialises game world
  */
  initWorld()
  {
    console.log("Initialising game world");
  }

  checkCollisionBetween(x,y,width,height)
  {

   var collides = false;
   if ((this.realPosition[0] < x + width) &&
     (this.realPosition[0] > x) &&
     (this.realPosition[1] < y + height) &&
     (this.realPosition[1] > y)){
       collides = true;
     }
   return collides;
 }

 checkCollisionBetweenCircles(x1,y1,radius1,x2,y2,radius2)
 {
   var collides = false;
   var dx = this.realPosition[0] - x1;
   var dy = this.realPosition[1] - y1;
   var radii = radius1 + 20;
   if ( ( dx * dx )  + ( dy * dy ) < radii * radii )
   {
      collides = true
   }
    return collides;
 }

 updatePositions(){

   this.playPos = gameNs.cam.getCameraX();
   this.playPos = this.playPos + 50
   this.stopPos = gameNs.cam.getCameraX();
   this.stopPos = this.playPos + 200
   this.pencilPos = gameNs.cam.getCameraX();
   this.pencilPos = this.playPos + 300
   this.eraserPos = gameNs.cam.getCameraX();
   this.eraserPos = this.playPos + 450

 }



  /**
 * update
 * @desc calls draw and itself recursively also updates animations
 */
  update()
  {
    if ( gameNs.game.jsonLoader.getLoaded() === true )
    {
      //coins[0].setImage(Object.create(this.AssetManager.image));
      //coins[1].setImage(Object.create(this.AssetManager.image));

      // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
      //this.AssetManager.setSpriteSheet(true, 3, 10);
      this.updatePositions()

      //this.camera.update(this.shape.getPosition())
      //console.log(this.realPosition)
      var playX = this.shape.getPositionX();
      var playY = this.shape.getPositionY();

    if (this.gestureManager.getOnePointDetection())
    {
      this.startingPosition = this.gestureManager.getTouchPosition()
      this.realPosition = this.gestureManager.getTouchPosition()
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30

      }
    if (this.checkCollisionBetween(750, 500, 200, 100) && this.tutorialBool === true) {
          gameNs.sceneManager.goToScene(gameNs.menu.title);
          this.tutorialBool = false;
    }

      //this.speedIconSelect();

      //gameNs.game.AssetManager.update();
    this.coins.forEach(coin => {
      coin.update();
    })

        if (this.checkCollisionBetween(this.eraserPos, 10, 50, 100))
      {
        //console.log("eraser on")
        this.sizeEraser = 60
        gameNs.eraserOn = true;
        gameNs.pencilOn = false;
        this.addScoreboardOnce = true
      }
      if (this.checkCollisionBetween(this.pencilPos, 10, 100, 100))
      {
        //console.log("pencil on")
        this.sizePencil = 60
        gameNs.pencilOn = true;
        gameNs.eraserOn = false;
        this.addScoreboardOnce = true
      }

      if (gameNs.eraserOn === true)
      {
        this.erase()
      }
      //console.log(gameNs.eraserOn)


    if (this.checkCollisionBetween(this.playPos, 450, 100, 100))
    {
      this.startGame = true
      this.addScoreboardOnce = true
    }
    if (this.checkCollisionBetween(this.stopPos, 450, 100, 100))
    {
      if(this.addScoreboardOnce === false)
      {
        this.addScoreboardOnce = true;
        gameNs.highscoretable.addToBoard(gameNs.score);
        gameNs.score = 0;
        console.log(gameNs.highscoretable)
      }

      this.shape.setPosition(1.5,2.2)
      this.startGame = false
      }


    if (this.startGame === true)
    {
      this.world.Step(
            1 / 60  //frame-rate
         ,  10       //velocity iterations
         ,  10       //position iterations
      );

    }

    this.world.DrawDebugData();
    this.world.ClearForces();

        for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
      }


      this.tip.update();
      //this.render()
      var playX = this.shape.getPositionX();
      var playY = this.shape.getPositionY();

      gameNs.cam.update(playX, playY);
      this.coinCollision();
  }

}

  erase()
  {

    for (var i = 0; i < gameNs.lineList.length; i++)
    {
      this.bodyPosition = gameNs.lineList[i].getPosition()
      //this.bodyPosition = gameNs.line.getPosition()
      this.bodyPosition[0] = this.bodyPosition[0] * 30
      this.bodyPosition[1] = this.bodyPosition[1] * 30
    //  console.log(this.bodyPosition[0] + ", " + this.bodyPosition[1])
    //  console.log(this.realPosition[0] + ", " + this.realPosition[1])
      if (this.checkCollisionBetweenCircles(this.bodyPosition[0],this.bodyPosition[1], gameNs.lineList[i].getRadius()))
      {
        gameNs.lineList[i].Delete()
      }
    }

  }

  coinCollision()
  {
    this.coins.forEach(coin => {
       if (this.checkCollisionBetween(coin.getPosX(), coin.getPosY(), this.shape.getPositionX(), this.shape.getPositionY() ))
       {
         coin.setAlive(false);
         coin.setPos(10000,10000);
         console.log("collision");
         gameNs.score += 10;
       }
       else {

         coin.setAlive(true);
       }
    })
  }


  render()
  {
    //setup debug draw
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    //ctx.drawImage(this.playImage,this.playPos[0], this.playPos[1], 100, 100);

    ctx.drawImage(this.playImage,this.playPos, 450, 100, 100);

      ctx.drawImage(this.stopImage, this.stopPos, 450, 100, 100);

      if (this.tutorialBool === true) {
          var line1 = "HOW TO PLAY";
          var line2 = "1: Click and drag the mouse to draw a line to catch the ball.";
          var line3 = "2: Click the play button to let the ball drop and move";
          var line4 = "3: click the stop button to reset the ball back to its starting position";
          var line5 = "4: click the Clear Everything button to clear all of the lines";
          var line6 = "5: try to guide the ball into the gold coin";

                    ctx.fillStyle = "yellow";
                    ctx.fillRect(50, 710, 500, 200);

                    ctx.font = "15px Comic Sans MS";
                    ctx.fillStyle = "black";

                    ctx.fillText(line1, 300, 730);
                    ctx.fillText(line2, 300, 750);
                    ctx.fillText(line3, 300, 770);
                    ctx.fillText(line4, 300, 790);
                    ctx.fillText(line5, 300, 810);
                    ctx.fillText(line6, 300, 830);



        }
      //ctx.drawImage(this.mainBtn, 750, 500, 200, 100);



    ctx.drawImage(this.normalSpeed,600, 10, this.normalSize, this.normalSize);
    ctx.drawImage(this.speedUp,700, 10, this.speedUpSize, this.speedUpSize);
    ctx.drawImage(this.slowSpeed,800, 10, this.slowSize, this.slowSize);

    ctx.drawImage(this.pencilImage,this.pencilPos, 10, this.sizePencil, this.sizePencil);
    ctx.drawImage(this.eraserImage,this.eraserPos, 10, this.sizeEraser, this.sizeEraser);

    document.body.style.background = "#ffffff";

      //this.AssetManager.draw();


    this.coins.forEach(coin => {
      if (coin.alive === true)
      {
        coin.draw();
      }

    })

    this.tip.draw(ctx);



      document.body.style.background = "#ffffff";

      this.tip.draw(ctx);
  }
  }
