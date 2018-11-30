/**
 * @author James Condon
 * C00207200
 * The scene class parent of the other scenes
 */

class SceneManager
{
/**
 * sets the current scene to null
 * initialises a dictionary
 * initialises a list
 * initialises the index to -1
 * initialises the number of scenes to -1
 */
  constructor()
  {
    this.currentScene = null;
    this.dictionary = {};
    this.titles = [];
    this.index = -1;
    this.numOfScenes = -1
    this.scenetitle = null
    //this.audioManager = new AudioManager();
    //this.audioManager.init();
    this.dontPlayFirst = true;
  }

/**
 * @param {scene} object the scene being added
 * pushes the scene title to the list
 * increments the number of scenes
 * adds the scene to the dictionary
 */
  addScene(scene)
  {
    this.titles.push(scene.title);
    this.numOfScenes++;
    this.dictionary[this.numOfScenes] =scene;
    this.scenetitle = scene.title;
  }
  /**
   * @param {title} string the scene title
   * goes to being passed into the function
   * in this case Initialises the first scene to the title scene
   * sets the current scene to the scene in the dictionary
   */
  goToScene(title)
  {
    if(this.dontPlayFirst === false)
    {
      /*this.audioManager.loadSoundFile("BUTTONCLICK","resources/audio/buttonClick.mp3");
      this.audioManager.playAudio("BUTTONCLICK",false,0.5);*/
    }
    this.dontPlayFirst =false;
    for (var i = 0; i < this.titles.length; i++)
    {
      if (this.titles[i] == title)
      {
        this.index = i;
      }
    }
    this.scenetitle = this.titles[this.index]
    this.currentScene = this.dictionary[this.index];

  }
  /**
   * goes to the next scene
   * increments the index only if the index is more than 0
   * otherwise the index is set back to 0
   * sets the current scene to the scene in the dictionary
   */
  goToNextScene()
  {
    this.index++;
    if (this.index > this.numOfScenes)
    {
      this.index = 0;
    }
    this.currentScene = this.dictionary[this.index];
    //console.log(  this.currentScene )
  }


  changeScene(title)
  {
    this.currentScene = this.titles[title]
  }
  update()
  {
    this.currentScene.update()
    //console.log(this.currentScene)
  }

  /**
   *  logs the current scene
   * draws the current scene
   */
  render()
  {
  //  var curScene = this.dictionary[this.index];
    this.currentScene.render();

  }

  getScene()
  {
     return this.scenetitle
  }









}
