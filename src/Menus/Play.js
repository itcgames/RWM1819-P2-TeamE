class Play
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
      gameNs.sceneManager = new SceneManager();
      gameNs.titleScene = new TitleScene("Title")
      gameNs.menu = new MenuScene("Menu")
      gameNs.game = new Game("game")



      gameNs.sceneManager.addScene(gameNs.titleScene);
      gameNs.sceneManager.addScene(gameNs.menu);
      gameNs.sceneManager.addScene(gameNs.game);
      gameNs.sceneManager.goToScene(gameNs.game.title);
      this.update = this.update.bind(this);
  }

  /**
 * update
 * @desc calls draw and itself recursively also updates animations
 */
  update()
  {
    window.requestAnimationFrame(gameNs.play.update);
    gameNs.sceneManager.update()
    gameNs.sceneManager.render()
  }

  render()
  {
    window.requestAnimationFrame(gameNs.play.render);
    gameNs.sceneManager.render()
  }
}
