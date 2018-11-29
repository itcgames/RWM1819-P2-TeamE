/**
 *
 *
 */

 //
 // C00204076
 // Brandon Seah-Dempsey
 // Started at 14:41 3 November 2018
 // Finished at
 // Time taken:
 // Known bugs: None

 /*
  *
  */
 class Projectile
 {
   /*
    *
    */
   constructor(canvas, context)
   {
     this.x = 100; // Set to 0 for applying velocity to X
                   // Set to 300 for applying velocity to Y
                   // Set to 100 for applying gravity

     this.y = 300; // Set to 300 for applying velocity to X
                   // Set to 0 for applying velocity to Y
                   // Set to 300 for applying gravity

     this.radius = 15;
     this.speed = 0.0;
     this.angle = 0.0;
     this.gravity = 0.5;

     //
     this.velX = 0;
     this.velY = 0;

     //
     this.fricVelX = 0;
     this.fricVelY = 0;
     this.friction = 0.01;

     //
     this.dragVelX = 0;
     this.dragVelY = 0;
     this.resistance = 0;

     this.applyToVelocity  = false; // Applies velocity if true, but is set to false
     this.applyGravity = false; // Applies gravity when true, but set to false
     this.applyFric = false;

     this.canvas = canvas;
     this.context = context;
   }

   /*
    *
    */
   update(e)
   {
     var that = this;

     /*
      *
      */
     if(this.applyToVelocity === true)
     {
       // Calculated velocity and applys to X
       /*this.expired = (new Date() - this.startTime) / 1000;
       this.x = this.expired * this.distance / this.totalTime;*/

       this.applyVelocity(that, this.speed, this.angle, this.velX, this.velY, this.x, this.y);

       console.log(this.x);
       console.log(this.y);
     }

     /*
      *
      */
     else if(this.applyGravity === true)
     {
       this.applyTheGravity(that, this.velY, this.y, this.gravity);
       console.log(this.y);
     }

     /*
      *
      */
     else if(this.applyFric === true)
     {
       this.applyFriction(that, this.speed, this.angle, this.fricVelX, this.fricVelY, this.friction, this.x, this.y);

       console.log(this.x);
       console.log(this.y);
     }

   }

   /*
    *
    */
   draw()
   {
     this.circle(this.context, this.x, this.y, this.radius, "black");
   }


   /*
    *
    */
   circle(context, x, y, r, colour)
   {
     x = Math.round(x);
     y = Math.round(y);

     var temp = context.strokeStyle;

     this.context.beginPath();
     this.context.arc(x, y, r, 0, 2 * Math.PI);
     this.context.strokeStyle = colour;
     this.context.lineWidth = 4;
     this.context.stroke();
     this.context.strokeStyle = temp;
   }

   /*
    *
    */
   applyVelocity(that, speed, angle, velX, velY, x, y)
   {
     that.speed = Math.sqrt((that.velX * that.velX) + (that.velY * that.velY));
     that.angle = Math.atan2(that.velY, that.velX);

     that.velX = Math.cos(that.angle) * that.speed;
     that.velY = Math.sin(that.angle) * that.speed;

     that.x += that.velX;
     that.y += that.velY;
   }

   /*
    *
    */
   applyTheGravity(that, velY, y, gravity)
   {
     that.velY += that.gravity;
     that.y += that.velY;
   }

   /*
    *
    */
   applyFriction(that, speed, angle, fricVelX, fricVelY, friction, x, y)
   {
     that.speed = Math.sqrt((that.fricVelX * that.fricVelX) + (that.fricVelY * that.fricVelY));
     that.angle = Math.atan2(that.fricVelY, that.fricVelX);

     if(that.speed > that.friction)
     {
       that.speed -= that.friction;
     }
     else
     {
        that.speed = 0;
     }

     that.fricVelX = Math.cos(that.angle) * that.speed;
     that.fricVelY = Math.sin(that.angle) * that.speed;

     that.x += that.fricVelX;
     that.y += that.fricVelY;
   }

   /*
    *
    */
   applyVelocityValues()
   {
     this.x = 400;
     this.y = 500;
     this.radius = 15;

     this.gravity = 0.5;

     if(isNaN(document.getElementById("x-vel-input").value))
     {
       this.velX = 0;
     }
     else
     {
       this.velX = document.getElementById("x-vel-input").value;
     }

     if(isNaN(document.getElementById("y-vel-input").value))
     {
       this.velY = 0;
     }
     else
     {
       this.velY = document.getElementById("y-vel-input").value;
     }

     this.applyToVelocity = true;
     this.applyGravity = false;
     this.applyFric = false;
   }

   /*
    *
    */
   applyGravityValues()
   {
     this.x = 300;
     this.y = 600;
     this.radius = 15;

     this.gravity = 0.5;
     this.velY = (Math.random() * -15) - 5;

     this.applyToVelocity = false;
     this.applyGravity = true;
     this.applyFric = false;
   }

   /*
    *
    */
   applyFrictionValues()
   {
     this.x = 400;
     this.y = 500;
     this.radius = 15;

     if(isNaN(document.getElementById("x-velocity-input").value))
     {
       this.fricVelX = 0;
     }
     else
     {
       this.fricVelX = document.getElementById("x-velocity-input").value;
     }

     if(isNaN(document.getElementById("y-velocity-input").value))
     {
       this.fricVelY = 0;
     }
     else
     {
       this.fricVelY = document.getElementById("y-velocity-input").value;
     }


     this.applyToVelocity = false;
     this.applyGravity = false;
     this.applyFric = true;
   }

   applyDragCoefficentValues()
   {
     this.x = 400;
     this.y = 500;
     this.radius = 15;

     if(isNaN(document.getElementById("x-velocity-input").value))
     {
       this.fricVelX = 0;
     }
     else
     {
       this.fricVelX = document.getElementById("x-velocity-input").value;
     }

     if(isNaN(document.getElementById("y-velocity-input").value))
     {
       this.fricVelY = 0;
     }
     else
     {
       this.fricVelY = document.getElementById("y-velocity-input").value;
     }


     this.applyToVelocity = false;
     this.applyGravity = false;
     this.applyFric = true;
   }
 }
