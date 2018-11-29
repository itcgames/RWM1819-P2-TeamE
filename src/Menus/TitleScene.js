/**
 * @author James Condon
 * @author Conor O'Toole
 * C00207200
 * The title scene class which is a child of the scene class
 */

class TitleScene
{
/**
  * @param {title} string title of the MenuScene.
  * This construcor uses the keyword super to inherit from the Scene class
  */
  constructor(title)
  {
    this.title = title
    this.gestureManager = new GestureManager()
  }

  initWorld()
  {
    console.log("Initialising game world");
    this.gestureManager.init()
    this.update = this.update.bind(this);
  }

  update()
  {
    if (this.gestureManager.getOnePointDetection())
    {
      gameNs.sceneManager.goToScene(gameNs.menu.title)
      //gameNs.sceneManager.render()
      this.gestureManager.resetDetection()
    }


    //this.render()
  }

  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#ffffff";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '100px serif'; //48

    ctx.fillText(this.title, 100,100);
  }

}
