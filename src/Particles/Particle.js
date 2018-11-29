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
 class Particle
 {
   /*
    *
    */
   constructor(canvas, context, x, y, min, max, width, height, colour, size, lifespan,
     alpha, projectile)
   {
     this.canvas = canvas;
     this.context = context;

     this.x = x;
     this.y = y;
     this.velX = Math.random(min, max); // Speed X
     this.velY = Math.random(min, max); // Speed Y
     this.width = width;
     this.height = width;

     this.colour = colour;
     this.size = size;
     this.lifespan = lifespan;
     this.alpha = alpha;

     this.speed = 0;
     this.angle = 0;

     this.projectile = projectile;

     // width, height, position x and y, colour, speed x and y, intensity, size, lifespan, maxspwanpersec, alpha
   }

   /*
    *
    */
   run()
   {
     this.update();
     this.draw();
   }

   /*
    *
    */
   update()
   {
     var that = this;

     that.projectile.applyVelocity(that, this.speed, this.angle, this.velX, this.velY, this.x, this.y);
     this.lifespan -= 2;
   }

   /*
    *
    */
   draw()
   {
     if(this.lifespan > 0)
     {
       var temp = this.context.strokeStyle

       this.context.beginPath();
       this.context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       this.context.globalAlpha = this.alpha;
       /*this.context.strokeStyle = this.colour;
       this.context.lineWidth = 4;
       this.context.stroke();
       this.context.strokeStyle = temp;*/
       this.context.fillStyle = this.colour;
       this.context.fill();
       this.context.fillStyle = temp;
      }
   }

   /*
    *
    */
   isDead()
   {
     return this.lifespan < 0;
   }

   setSpeed(speedX, speedY)
   {
     this.velX = speedX;
     this.velY = Math.random(-2, 2);
   }
 }

 class ParticleSystem
 {
   constructor(canvas, context, x, y, min, max, width, height, colour, size, lifespan,
     maxSpawn, alpha, projectile)
   {
     this.canvas = canvas;
     this.context = context;

     this.originX = x;
     this.originY = y;
     this.min = min;
     this.max = max;
     this.width = width;
     this.height = height;

     this.colour = colour;
     this.size = size;
     this.lifespan = lifespan;
     this.maxSpawn = maxSpawn;
     this.alpha = alpha;

     this.particles = [];


     this.projectile = projectile;
   }

   addParticle()
   {
     for(var i = 0; i < this.maxSpawn; i++)
     {
       this.particles.push(new Particle(this.canvas, this.context, this.originX, this.originY, this.min,
         this.max, this.width, this.height, this.colour, this.size, this.lifespan, this.alpha, this.projectile));
     }
   }

   run()
   {
     for(var i = this.particles.length - 1; i >= 0; i--)
     {
       var p = this.particles[i];
       p.run();

       if(p.isDead())
       {
         this.particles.splice(i, 1);
       }// End of if

     } // End of for
   }

 }
