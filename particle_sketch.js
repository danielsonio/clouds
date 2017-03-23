var particles = [];

function setup() {
  var canvas = createCanvas(1000, 800);


  timePush();

}

function timePush() {
  setInterval(particlePush, 500);
}


function particlePush() {
  particles.push(new Particle(random(width), random(height)));
  if(particles.length > 20) {
    particles.splice(0, 1);
  }
}


function draw() {
  background(52);

 

for(var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}