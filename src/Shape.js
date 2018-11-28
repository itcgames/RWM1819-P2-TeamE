class Shape
{
  constructor(x,y,world)
  {
  	var b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    var	b2BodyDef = Box2D.Dynamics.b2BodyDef
    ,	b2Body = Box2D.Dynamics.b2Body
    ,	b2Fixture = Box2D.Dynamics.b2Fixture
    ,	b2MassData = Box2D.Collision.Shapes.b2MassData
    ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 10;
    bodyDef.position.y = 25;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(25, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    //create some objects
    bodyDef.type = b2Body.b2_dynamicBody;
    for(var i = 0; i < 10; ++i) {
       if(Math.random() > 0.5) {
          fixDef.shape = new b2PolygonShape;
          fixDef.shape.SetAsBox(
                Math.random() + 0.1 //half width
             ,  Math.random() + 0.1 //half height
          );
       } else {
          fixDef.shape = new b2CircleShape(
             Math.random() + 0.1 //radius
          );
       }
       bodyDef.position.x = Math.random() * 10;
       bodyDef.position.y = Math.random() * 10;
       world.CreateBody(bodyDef).CreateFixture(fixDef);
     }
  }

  update()
  {

  }

  draw()
  {

  }
}
