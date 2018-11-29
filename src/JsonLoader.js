class JsonLoader
{
  /**
  *   Default empty constructor.
  */
  constructor()
  {
    this.loaded = false;
  }

  loadJSON(url)
  {
    var request = new XMLHttpRequest();
    request.open("GET", "resources/" + url + ".Json", true);
    request.responseType = 'json';
    request.send();

    request.onload = function()
    {
      gameNs.game.jsonLoader.loaded = true;
      var assets = request.response;

      //  Images.
      //gameNs.game.backgroundImage = new Image();
      gameNs.game.AssetManager.load(assets.Images[0].path);
      coins[0].load(assets.Images[0].path);
      coins[1].load(assets.Images[0].path);

    }
  }

  getLoaded()
  {
    return this.loaded;
  }
}
