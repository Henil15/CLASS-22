const Engine=Matter.Engine
const World =Matter.World
 const Bodies =Matter.Bodies 
 var engine , world ,object
var ball

  function setup() { createCanvas(400,400);
     engine=Engine.create(); 
     world=engine.world 
     var property ={ isStatic: true }
      object=Bodies.rectangle(200,390,400,20,property) 
      World.add(world,object) 
      console.log(object)

      var p = {restitution:1}
      ball = Bodies.circle(200,100,20,p)
      World.add(world,ball)

     } 
     function draw() {
        background(0);
         Engine.update(engine) 
        rectMode(CENTER) 
        rect (object.position.x,object.position.y,400,40) 
        ellipseMode(CENTER)
        ellipse (ball.position.x , ball.position.y , 20,20)
         }
        