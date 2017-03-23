

function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.yspeed = 0;

  this.history = [];

  this.update = function() {
    this.y += random(-10, 10);
    this.x += random(-10, 10);


    var v = createVector(this.x, this.y);
    this.history.push(v);
    console.log(this.history.length);

    if(this.history.length > 50) {
      this.history.splice(0, 1);
    }
  }

  this.show = function() {

    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      noStroke();      
      var pos = this.history[i];
      fill(180, 50, 100);
      ellipse(pos.x, pos.y, i, i);
      // vertex(pos.x, pos.y);
    }
    endShape();
  }
  
}
