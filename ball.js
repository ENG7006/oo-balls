var Bubble = function(x, y) {
  this.x = x;
  this.y = y;

  //this.speed = {x: 1, y: 1}; // because our speed is represented by an object, we *must* put it in the constructor
};

Bubble.prototype = {

  radius: 7,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -2);
    //if(this.y - this.radius <= 0)  this.y = this.radius + random(0, 2);
  },

  display: function() {
    noStroke();
    fill(102, 217, 255, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  },

  //bounce: function() {
    //this.bounceX();
    //this.bounceY();
  //},

  //bounceX: function() {
    //if (this.x + this.radius > width) {
      //this.speed.x *= -1;
  //  }
    //if (this.x - this.radius < 0) {
      //this.speed.x *= -1;
//    }
  //},

  //bounceY: function() {
  //  if (this.y + this.radius > height) {
    //  this.speed.y *= -1;
    //}
    //if (this.y - this.radius < 0) {
      //this.speed.y *= -1;
    //}
  //}
};
