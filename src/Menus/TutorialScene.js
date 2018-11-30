/**
 * @author Keith Wilson
 * C00205321
 * class that handles the Coin drop game tutorial levels game elements
 */
class TutorialScene {

    /**
     * @param {title} string title of the scene 
     * constructor that creates the player and accepts the title of the scene and makes it a global variable
     */
    constructor(title) {
        this.title = title;
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
        
    }

    /**
     * Draws all of the objects in the game
     */
    render(ctx) {
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Tutorial", 500, 500);
    }
}