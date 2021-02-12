class Dustbin2
{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,20,120,options);
        this.width = 20;
        this.height = 120;
        World.add(world,this.body);
      }
    
    display()
    {
      var pos = this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
}