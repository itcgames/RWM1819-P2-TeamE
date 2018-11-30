/**
 * @author James Condon
 * C00207200
 * The game scene class which is a child of the scene class
 */
class HighScore
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


    this.playBtn.src = "resources/img/main_button.png";
    this.sortedVals = [];
    this.posX = 300;
    this.posY = 100;
    this.yOffset = 50;
    this.xOffset = 300;
    this.startingPosition = []
    this.gestureManager = new GestureManager()
    this.gestureManager.init();
  }

  update()
  {
    if (this.gestureManager.getOnePointDetection())
    {
      var table = gameNs.highscoretable.getBoard();


      for(var i in table)
      {
        this.sortedVals.push(table[i]);
      }

      this.sortedVals.sort(function(a,b){
        if(a.score > b.score) return -1;
       if(a.score < b.score) return 1;
       return 0;
     });


     console.log(this.sortedVals)

    // gameNs.highscoretable = sortedVals;

      console.log(gameNs.highscoretable);
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

    ctx.font = '32px serif'; //48
    ctx.fillText("NAME",300,25);
    ctx.fillText("SCORE",600,25);
    this.value = 0;
    if(this.sortedVals.length < 10)
    {
      this.value = this.sortedVals.length
    }
    else {
      this.value = 10
    }
    for(var i = 0 ;i<this.value; i++)
    {
      ctx.fillText(this.sortedVals[i].name,this.posX,this.posY + (this.yOffset *i));
      ctx.fillText(this.sortedVals[i].score,this.posX+this.xOffset,this.posY + (this.yOffset *i));
    }

  //  this.playBtn.draw();

    ctx.drawImage(this.playBtn,750, 500, 200, 100);


    //ctx.fillText(this.title, 100,100);
  }


}
