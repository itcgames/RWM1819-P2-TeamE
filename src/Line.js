class Line
{
  constructor(x, y, distance, world)
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

    bodyDef.type = b2Body.b2_staticBody;

    fixDef.shape = new  b2CircleShape(.2);
  //  fixDef.shape.SetAsBox(.3, .1);
    bodyDef.position.x = x;
    bodyDef.position.y = y;
    world.CreateBody(bodyDef).CreateFixture(fixDef);
  }

  update()
  {

  }

  render()
  {

  }
}
