var snw = [];
var cam;


class Game
{
  constructor(title)
  {
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

    if (this.gestureManager.getOnePointDetection())
    {
      this.startingPosition = this.gestureManager.getTouchPosition()
      this.realPosition = this.gestureManager.getTouchPosition()
      this.startingPosition[0] = this.startingPosition[0] / 30
      this.startingPosition[1] = this.startingPosition[1] / 30


      //this.gestureManager.resetDetection()


      }



    if (this.checkCollisionBetween(50, 450, 100, 100))
    {
      this.startGame = true
    }
    if (this.checkCollisionBetween(200, 450, 100, 100))
    {
      this.shape.setPosition(1.5,2.2)
      this.startGame = false
    }
    //this.AssetManager.update();
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
      this.tip.draw(ctx);


    //window.setInterval(this.update, 1000 / 60);
  //  ctx.clearRect(0,0,canvas.width,canvas.height);

  }
}
