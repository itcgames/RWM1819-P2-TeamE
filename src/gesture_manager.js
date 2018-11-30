class GestureManager
{
  constructor(){
    this.lastX = null;
    this.lastY = null;
    this.moving = false

    this.endX = null
    this.endY = null
    this.timeout = null;
    this.timeOne = null;
    this.lastTap = 0;
    this.timeout = null;
    this.doubleTouch = false;
    this.oneTouch = false;
    this.swipeDetected = false;
    this.direction = null;
    gameNs.lineList = []
    gameNs.count = 0

    //new line
    this.vertexPoints;
    this.modeDraw = true;
    this.startedDrawing = false;
    this.currentX = null
    this.currentY = null
  }
  init(){
    document.addEventListener("touchstart", this.onTouchStart.bind(this), {passive:false});
    document.addEventListener("touchend", this.onTouchEnd.bind(this), {passive:false});
    document.addEventListener("touchmove", this.onTouchMove.bind(this), {passive:false});
  }

  onTouchStart(e){
    e.preventDefault();
    this.vertexPoints = [];
    this.touches = e.touches

    var startX = this.touches[0].clientX
    var startY = this.touches[0].clientY

    this.timeOne = new Date().getTime();
    this.oneTouch = true;

    this.lastX =  startX
    this.lastY =  startY

  }

  onTouchMove(e){
    e.preventDefault();
    this.touches = e.touches

    var xUp = this.touches[0].clientX
    var yUp = this.touches[0].clientY
    if (gameNs.pencilOn === true)
    {
      this.startedDrawing = true;
      this.vertexPoints.push(this.touches[0])
      if(this.startedDrawing===true)
      {
        gameNs.line = new Line(this.vertexPoints,gameNs.world, 1.2,1.2,1,0.5,0.2);
        gameNs.lineList.push(gameNs.line)
        gameNs.count += 1;
      }
      this.vertexPoints.pop();
    }


    this.moving = true

    this.endX = this.touches[0].clientX;
	  this.endY = this.touches[0].clientY;

    var xDiff = this.lastX - xUp;
    var yDiff = this.lastY - yUp;


    this.lastX =  this.touches[0].clientX
    this.lastY =  this.touches[0].clientY
  }

  onTouchEnd(e){
    e.preventDefault();

    //if (gameNs.pencilOn === true)
    this.startedDrawing = false;
    //sets the time
    var currentTime = new Date().getTime();
    var tapLength = currentTime - this.lastTap;
    clearTimeout(this.timeout);
    if(tapLength < 200 && tapLength > 0){
        this.doubleTouch = true;
    }
    this.lastTap = currentTime;

    this.swipeDetected = false
    this.moving = false

    this.oneTouch = false
  }
  resetDetection(){
    this.oneTouch = false;
    this.doubleTouch = false;
  }

  getOnePointDetection(){
    return this.oneTouch;
  }

  getSwipe(){
    return this.swipeDetected;
  }
  getDirection(){
    return this.direction;
  }
  getStartTouchPosition()
  {
    return[this.startX, this.startY];
  }
  getMovement()
  {
    return this.moving
  }
  getCurrentPos()
  {
    return[this.currentX, this.currentY];
  }
  getTouchPosition()
  {
    return [this.lastX, this.lastY];
  }

  getLastTouchPosition()
  {
    return [this.endX, this.endY];
  }
  getDoubleTouchDetection(){
    return this.doubleTouch;
  }
}
