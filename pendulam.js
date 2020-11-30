class Pendulam{
    constructor (x,y,color){
var options={
    restitution:1,
    slop:1,
    frictionAir:0.0,
    inertia:Infinity
}

this.body=Bodies.circle(x,y,color,options)
this.x= x;
this.y=y
this.color=color
World.add(world,this.body)
    }
    display(){
       
        var angle=this.body.angle
        var pos=this.body.position
        ellipseMode(CENTER)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke();
        fill(this.color)
        ellipse(0,0,60,60)
        pop()
    }
}