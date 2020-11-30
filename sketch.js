const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
 
var engine,world

function setup (){
  createCanvas(1200,400)
  engine=Engine.create()
   world=engine.world


   bob1=new Pendulam(600,150,10)
	bob2=new Pendulam(660,150,70)
   bob3=new Pendulam(720,150,70)
	bob4=new Pendulam(780,150,70)
	bob5=new Pendulam(840,150,70)
rope1=new Sling(bob1.body,{x:400,y:100})
rope2=new Sling(bob2.body,{x:460,y:100})
rope3=new Sling(bob3.body,{x:520,y:100})
rope4=new Sling(bob4.body,{x:340,y:100})
rope5=new Sling(bob5.body,{x:280,y:100})


   Engine.update(engine)
}
function draw(){
background(225)
Engine.update(engine)


bob1.display();
rope1.display()
bob2.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display();
rope4.display()
bob5.display()
rope5.display();

}
function mouseDragged(){
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})

}
