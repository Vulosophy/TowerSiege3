class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.2,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255; 
    this.image = loadImage('Crate.png')
    
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed < 3){
      var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    
    fill("white");
    stroke("yellow")
    strokeWeight(2)
    imageMode(CENTER)
    image(this.image, 0,0,this.width,this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
    push();
    tint(255, this.visibility)
    this.visibility = this.visibility - 15;
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    
    pop();
  }

}
}
score(){
  if(this.visibility <0 && this.visibility >-105){
    score++;
  }
} 