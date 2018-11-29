/**
 * function to load an image
 * {Integer} x position.
 * {Integer} y position.
 * {Integer} width of img.
 * {Integer} height of img.
 * {String} name of canvas to be drawn on.
 */
class  AssetManager{

    constructor (x, y, width, height, canvas)
    {
        AssetManager.image = new Image(width, height);
        AssetManager.imgdead = new Image(10,10);
        AssetManager.x = x;
        AssetManager.y = y;
        AssetManager.width = width;
        AssetManager.height = height;
        AssetManager.canvas = canvas;

        AssetManager.spriteSheet = false;
        AssetManager.frameIndex = 0;
        AssetManager.tickCount = 0;
        AssetManager.ticksPerFrame = 0;
        AssetManager.numberPerFrame = 1;
        AssetManager.loop = true;

    }

    /**
     * Draw function for the Image.
     */
    draw() {
        var canvas = document.getElementById(AssetManager.canvas);
        var context = canvas.getContext('2d');
         if(!AssetManager.spriteSheet){
            context.drawImage(AssetManager.image, 0, AssetManager.width,
              AssetManager.height, AssetManager.x, AssetManager.y,
               AssetManager.width, AssetManager.height);
         }
         else{
            context.drawImage(
                AssetManager.image,
                AssetManager.frameIndex * AssetManager.width / AssetManager.numberPerFrame,
                0,
                AssetManager.width / AssetManager.numberPerFrame,
                AssetManager.height,
                AssetManager.x,
                AssetManager.y,
                AssetManager.width / AssetManager.numberPerFrame ,
                AssetManager.height);
         }
    }

    /**
     * Load The Image.
     * Must be called before draw.
     */
    load(path) {
        AssetManager.image.src = path;
    }

    setPos(x, y) {
        AssetManager.x = x;
        AssetManager.y = y;
    }

    setWidth(width) {
        AssetManager.width = width;
    }

    setHeight(height) {
        AssetManager.height = height;
    }

    update() {
      AssetManager.tickCount += 1;

        if(AssetManager.tickCount > AssetManager.ticksPerFrame)
        {
            AssetManager.tickCount = 0;

            if( AssetManager.frameIndex < AssetManager.numberPerFrame -1)
            {
                AssetManager.frameIndex += 1 ;
            }
            else if ( AssetManager.loop)
            {
                AssetManager.frameIndex = 0;
            }
        }

}

    /**
     * set Sprite sheet function for animations.
     */
    setSpriteSheet(spriteSheet, ticksperframe, numberperframe) {
        AssetManager.spriteSheet = spriteSheet;
        AssetManager.frameIndex = 0;
        AssetManager.tickCount = 0;
        AssetManager.ticksPerFrame = ticksperframe;
        AssetManager.numberPerFrame = numberperframe;

    }

}
