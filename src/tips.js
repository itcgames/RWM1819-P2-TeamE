// @author Keith Wilson 
//

function tip()
{
    this.x = window.innerWidth - (window.innerWidth / 4);
    this.y = window.innerHeight - (window.innerHeight / 8);
    this.message = randomTips()
    this.count = 0;
}

tip.prototype.update = function ()
{
    console.log(this.count);
    if (this.count === 360) {
        this.message = randomTips();
        this.count = 0;
    }
    else {
        this.count += 1;
    }
}

tip.prototype.draw = function (ctx)
{
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.message, this.x, this.y);
}

function randomTips()
{
    var tips = [
        "TIP: Take your time drawing the lines.",
        "TIP: Collect as many coins as you can!.",
        "TIP: You can erase lines that are in your way.",
        "TIP: Draw lines to try make the ball roll into the coins",
        "TIP: If you need help check the help menu or tutorial."
    ];

    var randomTip = Math.floor(Math.random() * tips.length);

    return tips[randomTip];
}


