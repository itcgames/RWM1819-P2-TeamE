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
    this.timeOne = new Date().getTime()
    this.gestureManager.init()
    this.currentTime = null
    this.newTime = null
    this.image = new Image()

    this.image.src = "resources/img/title.png"

  }

  update()
  {
    this.newTime = new Date().getTime()
    this.currentTime = this.newTime - this.timeOne


    if(this.currentTime > 5000)
    {
        this.ChangeScene()
    }

  }

  ChangeScene()
  {
    gameNs.sceneManager.goToScene(gameNs.menu.title)
  }


  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#ffffff";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '100px serif'; //48

    ctx.drawImage(this.image,250, 50, 500, 500);

  //  ctx.fillText(this.title, 100,100);

  }

}
