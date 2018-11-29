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
      gameNs.help = new Help("help")
      gameNs.highScore = new HighScore("highScore")
      gameNs.menu = new MenuScene("Menu")
      gameNs.game = new Game("game")
      gameNs.tutorial = new TutorialScene("tutorial")
      gameNs.coinDropGame = new CoinDropGame("coinDropGame")

      gameNs.sceneManager.addScene(gameNs.titleScene);
      gameNs.sceneManager.addScene(gameNs.menu);
      gameNs.sceneManager.addScene(gameNs.game);
      gameNs.sceneManager.addScene(gameNs.help);
      gameNs.sceneManager.addScene(gameNs.highScore);
      gameNs.sceneManager.addScene(gameNs.tutorial);
      gameNs.sceneManager.addScene(gameNs.coinDropGame)
      gameNs.sceneManager.goToScene(gameNs.coinDropGame.title);

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
