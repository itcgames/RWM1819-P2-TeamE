// JavaScript source code
class Bomb {

    constructor() {
        this.x = this.getRandomInt(0, window.innerWidth - 100);
        this.y = 0;
        this.width = 50;
        this.height = 50;

        //this.bombSprite = new Image();
        //this.bombSprite.src = "resources/img/bomb.png";
    }

    update() {
        this.move();
        this.boundaryCheck();
    }

    render(ctx) {
        //var canvas = document.createElement("mycanvas");
        //var ctx = mycanvas.getContext("2d");

        //ctx.drawImage(this.bombSprite, this.x, this.y, this.height, this.width);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.y += 3;
    }

    boundaryCheck() {
        if (this.y + this.width > window.innerHeight) {
            this.x = this.getRandomInt(0, window.innerWidth - 100);
            this.y = 0;
        }
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    getRandomInt(min, max) {

        return Math.random() * (max - min) + min;

    }
}