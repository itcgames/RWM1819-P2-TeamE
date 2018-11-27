class Game
{
  constructor()
  {

  }
    /**
  * initWorld
  * @desc Initialises game world
  */
  initWorld()
  {
    console.log("Initialising game world");
    gameNamespace.ctx;
    gameNamespace.game.initCanvas();
  }
    /**
  * initCanvas
  * @desc Initialises game canvas
  */
  initCanvas()
  {
    gameNamespace.canvas = document.createElement("canvas");
    gameNamespace.canvas.id = "canvas";
    gameNamespace.canvas.width = window.innerWidth;
    gameNamespace.canvas.height = window.innerHeight;
    document.body.appendChild(gameNamespace.canvas);
    gameNamespace.ctx = gameNamespace.canvas.getContext("2d");
  }
  /**
 * update
 * @desc calls draw and itself recursively also updates animations
 */
  update()
  {
    //draws to screen
    gameNamespace.game.draw();
    //recursively calls update of game : this method
    window.requestAnimationFrame(gameNamespace.game.update);
  }
  draw()
  {

  }
}
