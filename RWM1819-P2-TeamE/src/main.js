var gameNamespace = {};
/**
* Main
* @desc just defines a new game and initialises
*/
function main()
{
  const g = new Game();

  gameNamespace.game = g;
  gameNamespace.game.initWorld();
}
