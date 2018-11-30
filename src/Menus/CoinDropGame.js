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
        this.score = 0;

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

        this.handleCollision();
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

        ctx.font = "15px Comic Sans MS"
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Score: " + this.score, window.innerWidth - 100, 100)

    }

    /**
     * collective of if statments that all check for collisions between all of the game objects rects
     */
    handleCollision() {

        if (this.rectangleCollision(this.player.rect, this.coin.rect)) {

            this.score++;
            this.coin.reset();
        }

        for (var i = 0; i < this.bombArray.length; i++) {
            if (this.rectangleCollision(this.bombArray[i].rect, this.coin.rect)){
                this.bombArray[i].reset();
            }

            if (this.rectangleCollision(this.bombArray[i].rect, this.player.rect)) {
                console.log("derp");
                gameNs.sceneManager.goToScene(gameNs.menu.title);
            }
        }
    }

    /**
     * @param {rect1} dicitionary global dictionary of variables used to construct a rectangle (x, y, width, height).
     *                            that is stored in the relative object
     * @param {rect2} dicitionary global dictionary of variables used to construct a rectangle (x, y, width, height).
     *                            that is stored in the relative object
     */
    rectangleCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {

            return true;
        }
    }
}