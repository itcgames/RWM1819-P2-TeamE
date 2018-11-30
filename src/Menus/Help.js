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
    this.pencil = new Image();
    this.play = new Image();
    this.stop = new Image();

    this.playBtn.src = "resources/img/main_button.png";

    this.dragcross.src = "resources/img/drag_cross.png";
    this.eraser.src = "resources/img/eraser.png";
    this.line.src = "resources/img/line.png";
    this.pencil.src = "resources/img/pencil.png";
    this.play.src = "resources/img/playBtn.png";
    this.stop.src = "resources/img/stopBtn.png";

    this.pencilPressed = false;
    this.eraserPressed = false;
    this.linePressed = false;
    this.dragPressed = false;
    this.playPressed = false;
    this.stopPressed = false;

    this.pencilSize = 70;
    this.eraserSize = 70;
    this.lineSize = 70
    this.dragSize = 70;
    this.playSize = 80;
    this.stopSize = 80;

    this.text= "";


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

      // Main button is pressed
      if (this.checkCollisionBetween(750, 500, 200, 100))
      {
        gameNs.sceneManager.goToScene(gameNs.menu.title)
      }

      this.iconClicked();

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

  /*
   * Function used for checking which is pressed or not
   */
  iconClicked()
  {
    // If pencil icon is pressed...
    if (this.checkCollisionBetween(100, 80, this.pencilSize, this.pencilSize))
    {
      //...while this.pencilPressed is true
      if(this.pencilPressed === true)
      {
        // this.text is set to blank
        this.text = "";
        // Bools including this.pencilPressed are set to false
        this.dragPressed = false;
        this.eraserPressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.pencilSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.pencilPressed is false
      else if(this.pencilPressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Pencil icon will allow the player to draw lines in the game's levels";
        // this.pencilPressed is set to true
        this.pencilPressed = true;

        this.dragPressed = false;
        this.eraserPressed = false;
        this.linePressed = false;
        this.playPressed = false;
        this.stopPressed = false;

        // this.pencilSize is set to 100
        this.pencilSize = 100;
        // Other sizes are set back to normal
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }
    }

    // If eraser icon is pressed
    else if (this.checkCollisionBetween(315, 80, this.eraserSize, this.eraserSize))
    {
      //...while this.pencilPressed is true
      if(this.eraserPressed === true)
      {
        // this.text is set to blank
        this.text = "";
        // Bools including this.eraserPressed are set to false
        this.dragPressed = false;
        this.eraserPressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.eraserSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.pencilPressed is false
      else if(this.eraserPressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Eraser icon will allow the player to eraser/remove any line they don't want or need";
        // this.eraserPressed is set to true
        this.eraserPressed = true;

        this.dragPressed = false;
        this.pencilPressed = false;
        this.linePressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.eraserSize is set to 100
        this.eraserSize = 120;
        // Other sizes are set back to normal
        this.pencilSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }
    }

    // If line icon is pressed
    else if (this.checkCollisionBetween(525, 80, this.lineSize, this.lineSize))
    {
      //...while this.linePressed is true
      if(this.linePressed === true)
      {
        // this.text is set to blank
        this.text = "";
        // Bools including this.pencilPressed are set to false
        this.dragPressed = false;
        this.erasePressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.lineSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.linePressed is false
      else if(this.linePressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Line icon will allow the player to create a straight line";
        // this.linePressed is set to true
        this.linePressed = true;

        this.dragPressed = false;
        this.erasePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.lineSize is set to 100
        this.lineSize = 120;
        // Other sizes are set back to normal
        this.eraserSize = 70;
        this.pencilSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;

      }
    }

    // If drag cross icon is pressed
    else if (this.checkCollisionBetween(700, 80, this.dragSize, this.dragSize))
    {
      //...while this.dragPressed is true
      if(this.dragPressed === true)
      {
        // this.text is set to blank
        this.text = "";
        // Bools including this.dragPressed are set to false
        this.dragPressed = false;
        this.erasePressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.dragSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.dragPressed is false
      else if(this.dragPressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Drag icon will allow the player to move the game's camera around the game's level";
        // this.dragPressed is set to true
        this.dragPressed = true;

        this.linePressed = false;
        this.erasePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.dragSize is set to 100
        this.dragSize = 120;
        // Other sizes are set back to normal
        this.eraserSize = 70;
        this.lineSize = 70
        this.pencilSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }
    }

    // If play icon is pressed
    else if (this.checkCollisionBetween(250, 210, this.playSize, this.playSize))
    {
      //...while this.playPressed is true
      if(this.playPressed === true)
      {
        // this.text is set to blank
        this.text = "";
        // Bools including this.playPressed are set to false
        this.dragPressed = false;
        this.erasePressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.playSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.playPressed is false
      else if(this.playPressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Play icon will start the level whenever the player is finished drawing";
        // this.playPressed is set to true
        this.playPressed = true;

        this.linePressed = false;
        this.erasePressed = false;
        this.pencilPressed = false;
        this.dragPressed = false;
        this.stopPressed = false;
        // this.playSize is set to 110
        this.playSize = 130;
        // Other sizes are set back to normal
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.pencilSize = 70;
        this.stopSize = 80;
      }
    }

    // If stop icon is pressed
    else if (this.checkCollisionBetween(550, 210, this.stopSize, this.stopSize))
    {
      //...while this.stopPressed is true
      if(this.stopPressed === true)
      {

        // this.text is set to blank
        this.text = "";
        // Bools including this.stopPressed are set to false
        this.dragPressed = false;
        this.erasePressed = false;
        this.linePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.stopPressed = false;
        // this.stopSize and other sizes are set back to normal
        this.pencilSize = 70;
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.stopSize = 80;
      }

      //...or if this.stopPressed is false
      else if(this.stopPressed === false)
      {
        // this.text is set to text describing function of icon
        this.text = "The Stop icon will stop the level and reset the player back to it's starting point";
        // this.stopPressed is set to true
        this.stopPressed = true;

        this.linePressed = false;
        this.erasePressed = false;
        this.pencilPressed = false;
        this.playPressed = false;
        this.dragPressed = false;
        // this.stopSize is set to 110
        this.stopSize = 130;
        // Other sizes are set back to normal
        this.eraserSize = 70;
        this.lineSize = 70
        this.dragSize = 70;
        this.playSize = 80;
        this.pencilSize = 70;
      }
    }
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

    ctx.drawImage(this.pencil, 100, 80, this.pencilSize, this.pencilSize);
    ctx.drawImage(this.eraser, 315, 80, this.eraserSize, this.eraserSize);
    ctx.drawImage(this.line, 525, 80, this.lineSize, this.lineSize);
    ctx.drawImage(this.dragcross, 700, 80, this.dragSize, this.dragSize);
    ctx.drawImage(this.play, 250, 210, this.playSize, this.playSize);
    ctx.drawImage(this.stop, 550, 210, this.stopSize, this.stopSize);

    ctx.font = "30px Arial";
    ctx.fillText(this.text, 10, 400);

    //ctx.fillText(this.title, 100,100);
  }


}
