/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class Help
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    this.title = title
    //this.playBtn = new AssetManager(200, 200, 500, 250, "mycanvas");
    this.playBtn = new Image()

    this.dragcross = new Image();
    this.eraser = new Image();
    this.line = new Image();
    this.mouse = new Image();
    this.pencil = new Image();

    this.playBtn.src = "resources/img/main_button.png";

    this.dragcross.src = "resources/img/drag_cross.png";
    this.eraser.src = "resources/img/eraser.png";
    this.line.src = "resources/img/line.png";
    this.mouse.src = "resources/img/mouse.png";
    this.pencil.src = "resources/img/pencil.png";

    this.startingPosition = []
    this.gestureManager = new GestureManager()
    this.gestureManager.init()
  }


  update()
  {
    if (this.gestureManager.getOnePointDetection())
    {
      this.gestureManager.getTouchPosition()

      this.startingPosition = this.gestureManager.getTouchPosition()
      //console.log( this.startingPosition)
      if (this.checkCollisionBetween(750, 500, 200, 100))
      {
        gameNs.sceneManager.goToScene(gameNs.menu.title)
      }
      //gameNs.sceneManager.goToScene(gameNs.game.title)
      //gameNs.sceneManager.render()
      this.gestureManager.resetDetection()
    }
  }

  checkCollisionBetween(x,y,width,height)
  {
   var collides = false;
   if ((this.startingPosition[0] < x + width) &&
     (this.startingPosition[0] > x) &&
     (this.startingPosition[1] < y + height) &&
     (this.startingPosition[1] > y)){
       collides = true;
     }
   return collides;
 }


/**
  * creates a canvas and context
  * changes the color of the background to green
  * changes the font and the font size
  */
  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#66F9FF";

    ctx.font = '100px serif'; //48
  //  this.playBtn.draw();

    ctx.drawImage(this.playBtn,750, 500, 200, 100);

    ctx.drawImage(this.pencil, 90, 100, 70, 70);
    ctx.drawImage(this.eraser, 90, 250, 70, 70);
    ctx.drawImage(this.line, 90, 400, 70, 70);
    ctx.drawImage(this.mouse, 620, 100, 70, 70);
    ctx.drawImage(this.dragcross, 620, 250, 70, 70);


    //ctx.fillText(this.title, 100,100);
  }


}
