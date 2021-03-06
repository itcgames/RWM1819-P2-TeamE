/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class MenuScene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    this.title = title;
    //this.playBtn = new AssetManager(200, 200, 500, 250, "mycanvas");
    this.playBtn = new Image();
    this.exitBtn = new Image();
    this.helpBtn = new Image();
      this.scoreBtn = new Image();
      this.tutorialBtn = new Image();

    this.playBtn.src = "resources/img/play_button.png";
    this.exitBtn.src = "resources/img/exit_button.png";
    this.helpBtn.src = "resources/img/help_button.png";
      this.scoreBtn.src = "resources/img/highscore_btn.png";
      this.tutorialBtn.src = "resources/img/tutorial_btn.png"
      
    ///this.playBtn.load("resources/img/play_button.png");
    //this.playBtn.setSpriteSheet(false, 3, 10);
      this.startingPosition = [];
      this.gestureManager = new GestureManager();
      this.gestureManager.init();
  }


  update()
  {
    if (this.gestureManager.getOnePointDetection())
    {
      this.gestureManager.getTouchPosition()

      this.startingPosition = this.gestureManager.getTouchPosition()
      //console.log( this.startingPosition)
      if (this.checkCollisionBetween(300, 50, 300, 100))
      {
        gameNs.sceneManager.goToScene(gameNs.game.title)
      }
      if (this.checkCollisionBetween(300, 350, 300, 100))
      {
        gameNs.sceneManager.goToScene(gameNs.help.title)
      }
      if (this.checkCollisionBetween(300, 500, 300, 100))
      {
        gameNs.sceneManager.goToScene(gameNs.highScore.title)
      }

        if (this.checkCollisionBetween(300, 650, 300, 100)) {
            gameNs.game.tutorialBool = true;
          gameNs.sceneManager.goToScene(gameNs.game.title)
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

    ctx.drawImage(this.playBtn,300, 50, 300, 100);
    ctx.drawImage(this.exitBtn,300, 200, 300, 100);
    ctx.drawImage(this.helpBtn,300, 350, 300, 100);
    ctx.drawImage(this.scoreBtn, 300, 500, 300, 100);
    ctx.drawImage(this.tutorialBtn, 300, 650, 300, 100);

    //ctx.fillText(this.title, 100,100);
  }


}
