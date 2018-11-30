// JavaScript source code
class Bomb {

    constructor() {

        this.rect = { x: this.getRandomInt(0, window.innerWidth - 100), y: 0, width: 50, height: 50 }

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
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    move() {
        this.rect.y += 3;
    }

    boundaryCheck() {
        if (this.rect.y + this.rect.width > window.innerHeight) {
            this.rect.x = this.getRandomInt(0, window.innerWidth - 100);
            this.rect.y = 0;
        }
    }

    reset() {
        this.rect = { x: this.getRandomInt(0, window.innerWidth - 100), y: 0, width: 50, height: 50 }
    }
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    getRandomInt(min, max) {

        return Math.random() * (max - min) + min;

    }
}