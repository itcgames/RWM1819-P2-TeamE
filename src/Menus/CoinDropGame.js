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
        this.maxBomb = 3;
        this.bombArray = [];

        this.player = new Player();

        this.coin = new Coin();

        for (var i = 0; i < this.maxBomb; i++)
        {
            var bomb = new Bomb();
            this.bombArray.push(bomb);
        }
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
        this.coin.update()
        for (var i = 0; i < this.bombArray.length; i++) {
            this.bombArray[i].update();
        }
    }

    /**
     * Draws all of the objects in the game
     */
    render() {
       
        var canvas = document.createElement("mycanvas");
        var ctx = mycanvas.getContext("2d");
        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

        this.player.render(ctx);
        this.coin.render(ctx);
        for (var i = 0; i < this.bombArray.length; i++)
        {
            this.bombArray[i].render(ctx);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}