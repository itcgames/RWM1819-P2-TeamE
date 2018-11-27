app = {};
var snw = [];
class Game
{
  constructor()
  {
	for(var i = 0; i < 400; i++)
    		{
    			snw[i] = new snow();
    		}
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
	gameNamespace.game.update();
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
	gameNamespace.ctx.clearRect(0, 0, gameNamespace.canvas.width, gameNamespace.canvas.height);
	for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
				}
    //recursively calls update of game : this method
    window.requestAnimationFrame(gameNamespace.game.update);
  }
  draw()
  {

  }
}
