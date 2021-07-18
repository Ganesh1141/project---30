class Block {
    constructor(x, y, width, height) {
      var options = {
        
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this. visibility = 255;
    }
    display(){
     if (this.body.speed<1){
      var angle = this.body.angle
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");

      fill("red");
      rect(0,0,this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body)
      push();
      this.visibility = this.visibility - 5
      tint(255, this.visibility)
      rect(999,999,this.width, this.height)
      pop();
    } 
  }
};
  