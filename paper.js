class Paper
{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Matter.Bodies.circle(x,y,25,options);
        this.radius = 25;
        World.add(world,this.body);
      }
    
    display()
    {
      var pos = this.body.position;
      fill("pink");
      ellipse(pos.x, pos.y, this.radius);
    }
}