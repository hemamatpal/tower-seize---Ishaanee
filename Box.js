class Box
{
    constructor(x, y, width, height) 
    {
        var options = 
        {
            'restitution':1,
            'density':0.1,
            'friction':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible=255;
        this.image = loadImage("bird.png");
        World.add(world, this.body);
      }
    
    
      display(){
        
        var angle = this.body.angle;
         
        if (this.body.speed<10 && frameCount<100 )
        {
          push();
          translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
        }
        else if(frameCount>100 && this.body.speed>0.5)
        {
          World.remove(world, this.body)
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          this.visible=this.visible-5
          tint(255,this.visible);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }  
        else{
          push();
          translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }  
        console.log(this.body.speed);    
      }
    
      score()
      {
        if(this.visible<0 && this.visible>-105)
        {
          score++;
        }
      }   

}
