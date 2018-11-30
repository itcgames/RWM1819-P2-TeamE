var destroy =[];

class Shape
{
  constructor(x,y,world,bodyType, shapeType, width,height,density, friction, restitution)
  {
    this.world = world
    //
    // var fixDef = new b2FixtureDef;
    // fixDef.density = 1.0;
    // fixDef.friction = 0.5;
    // fixDef.restitution = 0.2;
    //
    // var bodyDef = new b2BodyDef;

    // //create ground
    // bodyDef.type = b2Body.b2_staticBody;
    // bodyDef.position.x = 10;
    // bodyDef.position.y = 25;
    // fixDef.shape = new b2PolygonShape;
    // fixDef.shape.SetAsBox(25, 0.5);
    // world.CreateBody(bodyDef).CreateFixture(fixDef);
    //
    // //create some objects
    // bodyDef.type = b2Body.b2_dynamicBody;
    // for(var i = 0; i < 10; ++i) {
    //    if(Math.random() > 0.5) {
    //       fixDef.shape = new b2PolygonShape;
    //       fixDef.shape.SetAsBox(
    //             Math.random() + 0.1 //half width
    //          ,  Math.random() + 0.1 //half height
    //       );
    //    } else {
    //       fixDef.shape = new b2CircleShape(
    //          Math.random() + 0.1 //radius
    //       );
    //    }
    //    bodyDef.position.x = Math.random() * 10;
    //    bodyDef.position.y = Math.random() * 10;
    //    world.CreateBody(bodyDef).CreateFixture(fixDef);
    //  }

    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    var	b2BodyDef = Box2D.Dynamics.b2BodyDef
    var b2Body = Box2D.Dynamics.b2Body
    var	b2Fixture = Box2D.Dynamics.b2Fixture
    var b2MassData = Box2D.Collision.Shapes.b2MassData
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
  	var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape

    this.myBodyDef = new b2BodyDef;
    this.myFixtureDef = new b2FixtureDef;
    
    this.myFixtureDef.density = density;
    this.myFixtureDef.friction = friction;
    this.myFixtureDef.restitution = restitution;



    this.box2DVec = Box2D.Common.Math.b2Vec2;

    if(bodyType === "dynamic")
    {
      this.myBodyDef.type = b2Body.b2_dynamicBody;
    }
    else if(bodyType === "static")
    {
      this.myBodyDef.type = b2Body.b2_staticBody;
    }

    if(shapeType === "circle")
    {

      this.myFixtureDef.shape  = new b2CircleShape(width);
    }
    else if(shapeType === "square")
    {
      this.myFixtureDef.shape = new b2PolygonShape;
      this.myFixtureDef.shape.SetAsBox(width, height);
    }

    this.myBodyDef.position.x = x //* 10;
    this.myBodyDef.position.y = y //* 10;

    this.body = this.world.CreateBody(this.myBodyDef);
    this.body.CreateFixture(this.myFixtureDef);
    destroy.pop(this.body);


  }

  setPosition(x, y)
  {

    this.body.SetPosition(new this.box2DVec(x,y));
    //this.world.CreateBody(this.myBodyDef).CreateFixture(this.myFixtureDef);
  }
  getPositionX()
  {
    return this.body.GetPosition().x * 30;
  }
   getPositionY()
  {
    return this.body.GetPosition().y * 30;
  }

  clearEverything()
  {
    for(var i in destroy)
    {
       gameNs.game.world.DestroyBody(destroy[i]);
    }
    destroy.length = 0;
  }

  update()
  {

  }

  draw()
  {

  }
}
