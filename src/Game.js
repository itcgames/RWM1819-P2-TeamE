var snw = [];
var cam;

var coins = [];


class Game
{
  constructor(title)
  {
    //this.AssetManager = new AssetManager(window.innerWidth / 2, window.innerHeight / 2, 2000, 500, "mycanvas");
    //this.AssetManager = new AssetManager(300, 30);
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
    this.startGame = false

    this.title = title
    this.gravity = 10
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    var b2World = Box2D.Dynamics.b2World
    this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    this.playImage = new Image()
    this.playImage.src = "resources/img/playBtn.png";
    this.stopImage = new Image()
    this.stopImage.src = "resources/img/stopBtn.png";
    this.world = new b2World(
          new b2Vec2(0, this.gravity)    //gravity
       ,  false                 //allow sleep
    );


    // this.AssetManager = new AssetManager(200, 200, 500, 250, "mycanvas");
     gameNs.world = this.world
     gameNs.b2DebugDraw = this.b2DebugDraw
    // constructor(x,y,world,bodyType, shapeType, width,height,density,friction,restitution)
    //between 0 and 3.2 for whatever reason for x and y
    this.shape = new Shape(11,2.2,this.world, "dynamic", "circle", 1,1,0.5,0.5,0.2);
  //  this.shape = new Shape(15,2.2,this.world, "dynamic", "square", 1,1,0.5,0.5,0.2);

     this.world = new b2World(
           new b2Vec2(0, 10)    //gravity
        ,  true                 //allow sleep
     );


    // Load your image from path.
    //this.AssetManager.load("resources/img/coin.png");
    //coins[0].setImage(Object.create(this.AssetManager.image));
    //coins[1].setImage(Object.create(this.AssetManager.image));

    // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
    //this.AssetManager.setSpriteSheet(true, 3, 10);
    this.coins.forEach(coin => {
      coin.setSpriteSheet(true, 3, 10);
    })

     //gameNs.world = this.world
    // gameNs.b2DebugDraw = this.b2DebugDraw
     this.shape = new Shape(10,10,this.world)
     //this.line = new Line(10, 10,10, this.world)
     this.gestureManager = new GestureManager()
     this.startingPosition = []
     this.realPosition = []
     this.gestureManager.init()

     var debugDraw = new this.b2DebugDraw();
     debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
     debugDraw.SetDrawScale(30.0);
     debugDraw.SetFillAlpha(0.3);
     debugDraw.SetLineThickness(1.0);
     debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
     this.world.SetDebugDraw(debugDraw);

     this.audioManager = new AudioManager();
     this.audioManager.init();
     this.audioManager.loadSoundFile("BACKGROUNDMUSIC", "resources/audio/backgroundMusic.mp3");
     this.audioManager.playAudio("BACKGROUNDMUSIC",true,0.5);

     this.audioManager.loadSoundFile("BUTTONCLICK","resources/audio/buttonClick.mp3");



	    for(var i = 0; i < 400; i++)
    		{
    			snw[i] = new snow();
      }
      this.tip = new tip();


  }
    /**
  * initWorld
  * @desc Initialises game world
  */
  initWorld()
  {
    console.log("Initialising game world");

    //this.startGame = false
    //this.update = this.update.bind(this);
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


    if (this.gestureManager.getOnePointDetection())
    {
      this.startingPosition = this.gestureManager.getTouchPosition()
      this.realPosition = this.gestureManager.getTouchPosition()
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30


      //this.gestureManager.resetDetection()

      }

    //gameNs.game.AssetManager.update();
    this.coins.forEach(coin => {
      coin.update();
    })

    if (this.checkCollisionBetween(50, 450, 100, 100))
    {
      this.startGame = true
    }
    if (this.checkCollisionBetween(200, 450, 100, 100))
    {
      this.shape.setPosition(1.5,2.2)
      this.startGame = false
    }
    //window.requestAnimationFrame(gameNs.game.update);
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
  }
    //this.render();
	for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
      }

      this.tip.update();
  }

  render()
  {
    //setup debug draw
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(this.playImage,50, 450, 100, 100);
    ctx.drawImage(this.stopImage,200, 450, 100, 100);
    document.body.style.background = "#ffffff";
    //this.AssetManager.draw();
    this.coins.forEach(coin => {
      coin.draw();
    })
    //debugger
    this.tip.draw(ctx);



    //window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
