function Camera()
{
	this.maxScreenX = app.ctx.canvas.width * 5;
	this.maxScreenY = app.ctx.canvas.height * 5;
	this.x = 0; 
	this.y = 0;

	this.update = function(playerX, playerY)
	{
		this.x = playerX;
		this.y = playerY;
        
		app.ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix
    	///app.ctx.clearRect(0, 0, app.ctx.canvas.width, app.ctx.canvas.height);  ///if this is uncommented you cant see the box2d stuff)

    	///Clamp the camera position and centre on the player 
        ///current value, min value, max value                                           
    	var camX = clamp(this.x, 0, this.maxScreenX);
    	app.ctx.translate(-camX + 400, 0, app.ctx.canvas.height/2);   
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