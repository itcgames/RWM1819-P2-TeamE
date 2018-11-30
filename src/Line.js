class Line
{
  constructor(vertexArr, world, width,height, density, friction, restitution)
  {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    var	b2BodyDef = Box2D.Dynamics.b2BodyDef
    var	b2Body = Box2D.Dynamics.b2Body
    var	b2Fixture = Box2D.Dynamics.b2Fixture
    var	b2MassData = Box2D.Collision.Shapes.b2MassData
    var	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    var	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
  //  var b2Vec2 = Box2D.Common.Math.b2Vec2;

    var fixDef = new b2FixtureDef;
    fixDef.density = density;
    fixDef.friction = friction;
    fixDef.restitution = restitution;

    var bodyDef = new b2BodyDef;

    bodyDef.type = b2Body.b2_staticBody;

    //touches
    var points = [];

    for (var i = 0; i < vertexArr.length; i++) {
        var vec = new Box2D.Common.Math.b2Vec2();
        vec.Set(vertexArr[i].clientX/30, vertexArr[i].clientY/30);
        points[i] = vec;
    }

    fixDef.shape = new b2PolygonShape;
    //fixDef.shape.SetAsArray(points,points.length);

    for(var i =0; i< points.length; i++)
    {
        var bodyDef = new b2BodyDef;
        bodyDef.type = b2Body.b2_staticBody;
        var fixDef = new b2FixtureDef;
        fixDef.density = density;
        fixDef.friction = friction;
        fixDef.restitution = restitution;
        //fixDef.shape = new b2PolygonShape;
        fixDef.shape = new b2CircleShape(width);
      //  fixDef.shape.SetAsBox(0.2,0.2);
        bodyDef.position.x = points[i].x;
        bodyDef.position.y = points[i].y;
       var body = world.CreateBody(bodyDef)
       body.CreateFixture(fixDef);
       destroy.push(body);

    }
  //  world.CreateBody(bodyDef).CreateFixture(fixDef);
  }

  update()
  {

  }

  render()
  {

  }
}
