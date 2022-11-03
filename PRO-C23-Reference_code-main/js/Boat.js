class Boat {
    constructor(x, y, width, height, y2) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.y2 = y2;
      this.boat_image = loadImage("assets/boat.png");
    
    
    this.body = Bodies.rectangle(x,y,width,height,);
    World.add(world, this.body);
    }
    
    display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.boat_image, 0, y2, this.width, this.height);
      pop();
    }
  }