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

    this.title = title
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    var b2World = Box2D.Dynamics.b2World
    this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

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
     this.gestureManager.init()

     var debugDraw = new this.b2DebugDraw();
     debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
     debugDraw.SetDrawScale(30.0);
     debugDraw.SetFillAlpha(0.3);
     debugDraw.SetLineThickness(1.0);
     debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
     this.world.SetDebugDraw(debugDraw);

     this.audioManager = new AudioManager();
	    for(var i = 0; i < 400; i++)
    		{
    			snw[i] = new snow();
    		}


  }
    /**
  * initWorld
  * @desc Initialises game world
  */
  initWorld()
  {
    console.log("Initialising game world");
    this.update = this.update.bind(this);
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
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30
      console.log(this.startingPosition)
      this.line = new Line(this.startingPosition[0], this.startingPosition[1],10, this.world)

      this.gestureManager.resetDetection()

    }

    //gameNs.game.AssetManager.update();
    this.coins.forEach(coin => {
      coin.update();
    })
    //window.requestAnimationFrame(gameNs.game.update);

    this.world.Step(
          1 / 60  //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
    this.world.DrawDebugData();
    this.world.ClearForces();
  }
    //this.render();
	for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
				}
  }

  render()
  {
    //setup debug draw
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    document.body.style.background = "#ffffff";
    //this.AssetManager.draw();
    this.coins.forEach(coin => {
      coin.draw();
    })
    //debugger



    //window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
