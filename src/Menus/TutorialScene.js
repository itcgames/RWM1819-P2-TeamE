// JavaScript source code

class TutorialScene {

    constructor(title) {
        this.title = title;
    }

    initWorld() {

    }

    update() {
        
    }

    render(ctx) {
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Tutorial", 500, 500);
    }
}