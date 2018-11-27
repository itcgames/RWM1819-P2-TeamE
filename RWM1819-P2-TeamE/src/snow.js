///Author: David Price
///Known Bugs: None
function snow()
{
	///position, speed, size and direction are all random for each snow object
	this.x = Math.random() * window.innerWidth;
	this.y = (Math.random() * 80) - 500;
	this.height = (Math.random() * 5) + 5;
	this.fallSpeed = (Math.random() * 3) + 1;
	this.size = (Math.random() * 4) + 3;
	this.direction = (Math.random() * 3) + 1;

	///Update Function
	this.update = function()
	{
		
		///check for direction and update positions and speed 
		if(this.direction > 2 && this.direction < 3)
		{
			this.y += this.fallSpeed;
		}
		if (this.direction > 3)
		{
			this.y += this.fallSpeed;
			this.x += 1;
			//boundary checks on the x-axis to wrap around 
			if(this.x > gameNamespace.canvas.width)
			{
				this.x = -10;
			}
		}
		if (this.direction < 2)
		{
			this.y += this.fallSpeed;
			this.x -= 1;
			///boundary checks
			if(this.x < 0)
			{
				this.x = gameNamespace.canvas.width;
			}
		}
		///if the snow is within the bottom section of the screen
		if (this.y > gameNamespace.canvas.height - 200 && this.y < gameNamespace.canvas.height)
		{
			///check the size of the snow
			if(this.size > 0.1)
			{
				///and shrink it. Melting snow
				this.size = this.size - 0.1;
			}
		}
		///when the y position leaves the screen reset to random values
		if(this.y + this.height > gameNamespace.canvas.height)
		{
			this.y = (Math.random() * 80) - 80;
			this.size = (Math.random() * 4) + 3;
			this.fallSpeed = (Math.random() * 3) + 1;
		}
	}
	///Draw Function
	this.draw = function()
	{
		///draw a circle and fill it 
		var circle = new Path2D();
    	circle.moveTo(this.x, this.y);
    	circle.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    	gameNamespace.ctx.fillStyle="#EDEDED";
    	gameNamespace.ctx.fill(circle);
	}
};