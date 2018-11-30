/**
 * function to load an image
 * {Integer} x position.
 * {Integer} y position.
 * {Integer} width of img.
 * {Integer} height of img.
 * {String} name of canvas to be drawn on.
 */
 class  AssetManager{

     constructor (x,y,width, height, canvas)
     {
         this.image = new Image(width, height);
         this.width = width;
         this.height = height;
         this.x = x;
         this.y = y;
         this.canvas = canvas;

         this.spriteSheet = false;
         this.frameIndex = 0;
         this.tickCount = 0;
         this.ticksPerFrame = 0;
         this.numberPerFrame = 1;
         this.loop = true;
         this.alive = true;

     }

     /**
      * Draw function for the Image.
      */
     draw() {
          if(!this.spriteSheet){
             	/*app.ctx.drawImage(this.image, 0, this.width,
               this.height, this.x, this.y,
                this.width, this.height);*/
               /* var canvas = document.getElementById(AssetManager.canvas);
                var context = canvas.getContext('2d');
                 if(!AssetManager.spriteSheet){
                    context.drawImage(AssetManager.image, AssetManager.x, AssetManager.y, AssetManager.width, AssetManager.height);*/
          }
          else{
             	app.ctx.drawImage(
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

     /**
      * Load The Image.
      * Must be called before draw.
      */
     load(path) {
         this.image.src = path;
     }

     setPos(x, y) {
         this.x = x;
         this.y = y;
     }

     getPosX()
     {
       return this.x;
     }

     getPosY()
     {
       return this.y;
     }

     setWidth(width) {
         this.width = width;
     }

     setHeight(height) {
         this.height = height;
     }

     getAlive()
     {
       return this.alive;
     }
     setAlive(alive)
     {
       this.alive = alive;
     }

     update() {
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

     /**
      * set Sprite sheet function for animations.
      */
     setSpriteSheet(spriteSheet, ticksperframe, numberperframe) {
         this.spriteSheet = spriteSheet;
         this.frameIndex = 0;
         this.tickCount = 0;
         this.ticksPerFrame = ticksperframe;
         this.numberPerFrame = numberperframe;

     }

 }
