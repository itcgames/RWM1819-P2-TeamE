/**
 * @author Keith Wilson
 * C00205321
 * class that handles the Coin drop games elements
 */
class CoinDropGame{

    /**
     * @param {title} string title of the scene 
     * constructor that creates the player and accepts the title of the scene and makes it a global variable
     */
    constructor(title) {
        this.title = title;
        this.player = new Player();
    }

    /**
     * function to set up/ reset the world
     */
    initWorld() {

    }

    /**
     * updates all of the objects in the game
     */
    update() {
        this.player.update();
    }

    /**
     * Draws all of the objects in the game
     */
    render(ctx) {
        this.player.render();
    }
}