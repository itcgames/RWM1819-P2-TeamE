class Game
{
  constructor()
  {
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    var b2World = Box2D.Dynamics.b2World
    this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

     this.world = new b2World(
           new b2Vec2(0, 10)    //gravity
        ,  true                 //allow sleep
     );
     gameNs.world = this.world
     gameNs.b2DebugDraw = this.b2DebugDraw
     this.shape = new Shape(10,10,this.world)
     //this.line = new Line(10, 10,10, this.world)
     this.gestureManager = new GestureManager()
     this.startingPosition = []

     this.AssetManager = new AssetManager(100, 100 / 2, 1000, 100, "mycanvas")
     // Load your image from path.
     this.AssetManager.load("img/coin.png");

     // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
     this.AssetManager.setSpriteSheet(true, 3, 10);
  }
    /**
  * initWorld
  * @desc Initialises game world
  */
  initWorld()
  {
    console.log("Initialising game world");
    this.gestureManager.init()
    this.update = this.update.bind(this);
    //gameNs.game.jsonLoader = new JsonLoader();
    //gameNs.game.jsonLoader.loadJSON("assets");
  }

  /**
 * update
 * @desc calls draw and itself recursively also updates animations
 */
  update()
  {
    if (this.gestureManager.getOnePointDetection())
    {
      this.startingPosition = this.gestureManager.getTouchPosition()
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30
      console.log(this.startingPosition)
      this.line = new Line(this.startingPosition[0], this.startingPosition[1],10, this.world)

      this.gestureManager.resetDetection()
    }

    gameNs.world.Step(
          1 / 6000  //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
    gameNs.world.DrawDebugData();
    gameNs.world.ClearForces();

    gameNs.game.AssetManager.update();
    window.requestAnimationFrame(gameNs.game.update);

    this.render();
  }

  render()
  {
    //setup debug draw
    //var canvas = document.getElementById("mycanvas");
    //var ctx = canvas.getContext("2d");

    var debugDraw = new gameNs.b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
    debugDraw.SetDrawScale(30.0);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(gameNs.b2DebugDraw.e_shapeBit | gameNs.b2DebugDraw.e_jointBit);
    gameNs.world.SetDebugDraw(debugDraw);

    // Draw Image / Animation.
    this.AssetManager.draw();

    window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
