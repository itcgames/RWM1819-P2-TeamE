function Camera()
{
	this.maxScreenX = app.ctx.canvas.width * 5;
	this.maxScreenY = app.ctx.canvas.height * 5;
	this.x = 0;
	this.y = 0;
	this.cameraX = 0


	this.update = function(playerX, playerY)
	{
		this.x = playerX;
		this.y = playerY;

		app.ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix
    	///app.ctx.clearRect(0, 0, app.ctx.canvas.width, app.ctx.canvas.height);  ///if this is uncommented you cant see the box2d stuff)

    	///Clamp the camera position and centre on the player
        ///current value, min value, max value
    	this.cameraX = clamp(this.x - 200, 0, this.maxScreenX);
    	var camY = clamp(this.y, 0, this.maxScreenY);
    	app.ctx.translate(-this.cameraX, 0);
	}

	this.getCameraX = function()
	{
		return this.cameraX;
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
