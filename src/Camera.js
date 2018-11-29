function Camera()
{
	this.maxScreenX = window.innerWidth * 3;
	this.maxScreenY = window.innerHeight * 3;
	this.x = 0; /// = on game playerX = player.getX() then from game camera.update(playerX, playerY)
	this.y = 0; /// = playerY = player.getY()

	this.update = function(playerX, playerY)
	{
        var ctx = document.createElement("canvas").getContext("2d");        
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;   

		ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix
    	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    	///Clamp the camera position and centre on the player                                            
    	var camX = clamp(-playerX + ctx.canvas.width/2, 0, this.maxScreenX - ctx.canvas.width);
    	var camY = clamp(-playerY + ctx.canvas.height/2, 0, this.maxScreenY - ctx.canvas.height);
        console.log(playerY);
    	ctx.translate(camX, camY);   
	}

	function clamp(value, min, max)
	{
    	if(value < min)
    		{
    			return min;
    		}
    	else if(value > max)
    		{
    			return max;
    		}
    		return value;
	}
}