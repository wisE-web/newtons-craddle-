class Ball {
    constructor(x, y,radius) {
      var options = {
        
          'restitution':1,
          'friction':0.3,
          'density':1,
          isStatic:false
          
      }
      this.body = Bodies.circle(x, y,radius, options);
     
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");   
      fill(255);
     ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  