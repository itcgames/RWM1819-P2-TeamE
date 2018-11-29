class Coin
{
  constructor(x,y,canvas)
  {
    this.x = x;
    this.y = y;
    this.canvas = canvas;

    this.spriteSheet = false;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 0;
    this.numberPerFrame = 1;
    this.loop = true;
  }

  update()
  {
    this.tickCount += 1;

      if(this.tickCount > this.ticksPerFrame)
      {
          this.tickCount = 0;

          if( this.frameIndex < this.numberPerFrame -1)
          {
              this.frameIndex += 1 ;
          }
          else if ( this.loop)
          {
              this.frameIndex = 0;
          }
      }
  }

  setImage(image)
  {
    this.image = image;
  }

  setSpriteSheet(spriteSheet, ticksperframe, numberperframe)
   {
        this.spriteSheet = spriteSheet;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = ticksperframe;
        this.numberPerFrame = numberperframe;
      }

  render()
  {
    var canvas = document.getElementById(this.canvas);
    var context = canvas.getContext('2d');
     if(!this.spriteSheet){
        context.drawImage(this.image, 0, this.width,
          this.height, this.x, this.y,
           this.width, this.height);
     }
     else{
        context.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberPerFrame,
            0,
            this.width / this.numberPerFrame,
            this.height,
            this.x,
            this.y,
            this.width / this.numberPerFrame ,
            this.height);
     }
  }
}
