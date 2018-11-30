/**
 * @author Keith Wilson
 * C00205321
 * player class that creates the player
 */
class Player {

    /**
     * constructor that declares all of the players variables 
     * and the gesture manager that detects a touch from the player
     */
    constructor() {
        this.rect = { x: window.innerWidth / 2, y: window.innerHeight - 100, width: 50, height: 50}

        //this.playerSprite = new Image();
        //this.playerSprite.src = "resources/img/player.png";
        
        this.gestureManager = new GestureManager();
        this.gestureManager.init();
    }

    /**
     * updates the player
     */
    update() {
        this.move();
        this.boundaryCheck();
    }

    /**
     * draws the player
     */
    render(ctx) {
        //var canvas = document.createElement("mycanvas");
        //var ctx = mycanvas.getContext("2d");
        //ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

        //ctx.drawImage(this.playerSprite, 300, 50, 300, 100);     

        ctx.fillStyle = "blue";
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }

    /**
     * detects a touch and moves the player depending on what side of the screen is touched
     */
    move() {
        if (this.gestureManager.getOnePointDetection()) {

            var pos = this.gestureManager.getTouchPosition();

            if (pos[0] > window.innerWidth / 2) {
                this.rect.x += 5;
            }

            if (pos[0] < window.innerWidth / 2) {
                this.rect.x -= 5;
            }
        }
    }

    /**
     * stops the player from moving off the screen
     */
    boundaryCheck() {
        if (this.rect.x + (this.rect.width * 2) > window.innerWidth) {
            this.rect.x = window.innerWidth - (this.rect.width * 2);
        }

        if (this.rect.x < 0) {
            this.rect.x = 0;
        }
    }
}