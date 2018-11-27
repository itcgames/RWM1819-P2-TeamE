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
     this.line = new Line(10,10,this.world)
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
    //draws to screen


    gameNs.world.Step(
          1 / 60   //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
    gameNs.world.DrawDebugData();
    gameNs.world.ClearForces();

    this.render()
  }

  render()
  {
    //setup debug draw
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    var debugDraw = new gameNs.b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
    debugDraw.SetDrawScale(30.0);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(gameNs.b2DebugDraw.e_shapeBit | gameNs.b2DebugDraw.e_jointBit);
    gameNs.world.SetDebugDraw(debugDraw);

    window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
