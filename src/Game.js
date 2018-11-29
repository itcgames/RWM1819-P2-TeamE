var snw = [];
var cam;


class Game
{
  constructor(title)
  {

    this.title = title
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    var b2World = Box2D.Dynamics.b2World
    this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

     this.world = new b2World(
           new b2Vec2(0, 10)    //gravity
        ,  true                 //allow sleep
     );
     //this.AssetManager = new AssetManager(window.innerWidth / 2, window.innerHeight / 2, 2000, 500, "mycanvas");
    this.AssetManager = new AssetManager(100, 100 / 2, 1000, 100, "mycanvas");

    // Load your image from path.
    this.AssetManager.load("resources/img/coin.png");
    // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
    this.AssetManager.setSpriteSheet(true, 3, 10);

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

     // Particle System constructor that takes; x, y, min speed, max speed, width, height, colour, size,
     // lifespan, maxSpawn, alpha, projectile
     this.particleSystem = new ParticleSystem(400, 500, -2, 2, 5, 5, "red", 5, 255, 1, 20);


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
    var that = this;

    if (this.gestureManager.getOnePointDetection())
    {
      this.startingPosition = this.gestureManager.getTouchPosition()
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30
      console.log(this.startingPosition)
      this.line = new Line(this.startingPosition[0], this.startingPosition[1],10, this.world)

      this.gestureManager.resetDetection()


    }

    gameNs.game.AssetManager.update();
    //window.requestAnimationFrame(gameNs.game.update);

    gameNs.world.Step(
          1 / 60  //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
    gameNs.world.DrawDebugData();
    gameNs.world.ClearForces();

    //this.render();
	for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
				}

    // Adds particles when screen is touched
    document.addEventListener("touchend", function(){
      that.particleSystem.addParticle();
      console.log("Particle added!");
    });

    // Draws and updates an array of particles and later pops them when their lfiespan is less then 0
    that.particleSystem.run();
  }

  render()
  {
    //setup debug draw
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    document.body.style.background = "#ffffff";
    this.AssetManager.draw();



    //window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
