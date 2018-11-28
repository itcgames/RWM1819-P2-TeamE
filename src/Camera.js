function Camera()
{
	this.maxScreenX = gameNamespace.canvas.width;
	this.maxScreenY = gameNamespace.canvas.height;
	this.x = 0; /// = on game playerX = player.getX() then from game camera.update(playerX, playerY)
	this.y = 0; /// = playerY = player.getY()

	this.update = function(playerX, playerY)
	{
		this.x = playerX;
		this.y = playerY;

		app.ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix
    	app.ctx.clearRect(0, 0, gameNamespace.canvas.width, gameNamespace.canvas.height);

    	///Clamp the camera position and centre on the player                                            
    	var camX = clamp(-this.x + gameNamespace.canvas.width/2, 0, this.maxScreenX - gameNamespace.canvas.width);
    	var camY = clamp(-this.y + gameNamespace.canvas.height/2, 0, this.maxScreenY - gameNamespace.canvas.height);

    	app.ctx.translate(camX, camY);   
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