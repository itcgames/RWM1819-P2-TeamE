class Line
{
  constructor(x, y, world, width,height, density, friction, restitution)
  {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    var	b2BodyDef = Box2D.Dynamics.b2BodyDef
    var	b2Body = Box2D.Dynamics.b2Body
    var	b2Fixture = Box2D.Dynamics.b2Fixture
    var	b2MassData = Box2D.Collision.Shapes.b2MassData
    var	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    var	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape

    var fixDef = new b2FixtureDef;
    fixDef.density = density;
    fixDef.friction = friction;
    fixDef.restitution = restitution;

    var bodyDef = new b2BodyDef;

    bodyDef.type = b2Body.b2_staticBody;

    fixDef.shape = new b2CircleShape(width);
    //fixDef.shape = new b2PolygonShape(width,height);
    //fixDef.shape.SetAsBox(width, height);
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
